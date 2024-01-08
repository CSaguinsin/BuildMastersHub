import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { useNavigate, Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import NoPic from '../assets/logo/no_pic.jpg';
import Logo from '../assets/logo/Light_Mode.png';
import foremen from '../assets/Icons/foreman.png';
import construction from '../assets/Icons/construction.png';
import Loading from '../components/Loading';
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Welcome from '../assets/Graphic/Welcome-cuate.png';
import Sidebar from "./Sidebar";
import Me from '../assets/logo/Me.jpg';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase'; // Ensure you import your Firebase Storage instance properly



const HorizontalCard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // data from Firestore
  const [peopleData, setPeopleData] = useState([]);
  const peopleCollectionRef = collection(db, "peopleData");

  useEffect(() => {
    const getPeopleData = async () => {
      try {
        const data = await getDocs(peopleCollectionRef);
        const filteredData = data.docs.map(async (doc) => {
          const personData = doc.data();
          const imageRef = ref(storage, personData.profilePictureRef);
  
          try {
            const imageUrl = await getDownloadURL(imageRef);
            return { ...personData, id: doc.id, profilePictureURL: imageUrl };
          } catch (error) {
            console.error("Error fetching image URL:", error);
            // If there's an error fetching the image URL, return the personData without profilePictureURL
            return { ...personData, id: doc.id };
          }
        });
  
        // Wait for all image URLs to be fetched before setting the state
        const updatedData = await Promise.all(filteredData);
        setPeopleData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
  
    getPeopleData();
  }, [peopleCollectionRef, storage]);
  // end

  
 
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Function to close sidebar
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };


  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);

    signOut(auth)
      .then(() => {
        setTimeout(() => {
          setLoggingOut(false);
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setLoggingOut(false);
        // Handle error on logout
      });
  };

  const [filteredJob, setFilteredJob] = useState('All');

  useEffect(() => {
    // Effect for handling logout
    if (loggingOut) {
      signOut(auth)
        .then(() => {
          setTimeout(() => {
            setLoggingOut(false);
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoggingOut(false);
          // Handle error on logout
        });
    }
  }, [loggingOut, navigate]);


  if (loggingOut) {
    return <Loading />;
  }

  const [showForemen, setShowForemen] = useState(false);
  const [showConstructionWorkers, setShowConstructionWorkers] = useState(false);

  const handleTabClick = (job) => {
    setFilteredJob(job);
 
    if (job === 'Foreman') {
      setShowForemen(true);
      setShowConstructionWorkers(false);
    } else if (job === 'Construction Worker') {
      setShowForemen(false);
      setShowConstructionWorkers(true);
    } else {
      setShowForemen(false);
      setShowConstructionWorkers(false);
    }
  };

  const handleLearnMore = (personId) => {
    // Handle navigation to the specific profile based on the clicked person's ID
    // Example: navigate to '/profile/${personId}'
    console.log(`Navigate to profile of person with ID ${personId}`);
  };

  const renderedCards = peopleData.map((person) => {
    const job = person.job;

    if ((job === 'Foreman' && showForemen) || (job === 'Construction Worker' && showConstructionWorkers)) {
      return (
        <div key={person.id} className="flex justify-center items-center h-full">
          <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
            <img
              src={person.profilePictureURL || NoPic} // Use the fetched URL or fallback to the default image
              alt="card-image"
              className="NoPic"
            />
            </CardHeader>
            <CardBody>
              <Typography variant="h10" color="gray" className="mb-4 uppercase">
                Name: {person.name}
              </Typography>
              <Typography variant="h10" color="gray" className="mb-4 uppercase">
                Contact: {person.contact}
              </Typography>
              <Typography variant="h10" color="gray" className="mb-4 uppercase">
                Job: {person.job}
              </Typography>
              <Typography variant="h10" color="gray" className="mb-4 uppercase">
                Address: {person.address}
              </Typography>
              {/* Other details */}
              <Link to={`/profile/${person.name.replace(/\s+/g, '-')}`}>
          <a href="#" className="inline-block" onClick={() => handleLearnMore(person.name)}>
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </Link>
            </CardBody>
          </Card>
        </div>
      );
    }

    return null;
  });

  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        handleToggleSidebar={handleToggleSidebar}
        handleCloseSidebar={handleCloseSidebar}
        handleTabClick={handleTabClick}
        handleLogout={handleLogout}
      />

      <div class="flex justify-center items-center sm:pl-10">
        <img class=" h-auto w-80" src={Welcome} alt="Welcome Image" />
      </div>

      {renderedCards}
    </>
  );
};

export default HorizontalCard;