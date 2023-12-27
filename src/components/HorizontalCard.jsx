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


const HorizontalCard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // data from Firestore
  const [peopleData, setPeopleData] = useState([]);
  const peopleCollectionRef = collection(db, "peopleData");

  useEffect(() => {
      const getPeopleData = async () => {
        try {
          const data = await getDocs( peopleCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }));
          setPeopleData(filteredData);
        } catch (error) {
          console.log(error);
        }
    }

    getPeopleData();
  }, [])
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

  const handleTabClick = (job) => {
    setFilteredJob(job);
  };

  if (loggingOut) {
    return <Loading />;
  }

  const filteredCards = peopleData
    .filter((person) => filteredJob === 'All' || person.job === filteredJob)
    .map((person) => (
      <div key={person.id} className="flex justify-center items-center h-full">
        {/* Card JSX for each person */}
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={NoPic}
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
            
            {/* <Link to='/profile'>
              <a href="#" className="inline-block">
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
            </Link> */}
          </CardBody>
        </Card>
      </div>
    ));

    


  return (
    <>
      {/* Burger icon for smaller screens */}
      <div className="block sm:hidden">
        <button onClick={handleToggleSidebar} className="text-gray-900 hover:text-gray-700 focus:outline-none">
          {/* Burger icon */}
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <aside
  className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
    showSidebar ? 'translate-x-0' : '-translate-x-full'
  } sm:translate-x-0`}
  aria-label="Sidebar"
  style={{ maxHeight: '100vh' }}
>
  <div className="h-full overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-gray-800">
    <div className="block sm:hidden">
      {/* Close button */}
      <button onClick={handleCloseSidebar} className="text-gray-900 hover:text-gray-700 focus:outline-none">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <img src={Logo} />
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
        </a>
      
      <li>
        <button onClick={() => handleTabClick('Foreman')}>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <img src={foremen} 
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 18"
          />
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          <span className="flex-1 ms-3 whitespace-nowrap">Foremen</span>
        </a>
        </button>
      </li>
      <li>
        <button onClick={() => handleTabClick('Construction Worker')}>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <img src={construction} 
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 18"
          />
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          <span className="flex-1 ms-3 whitespace-nowrap">Construction Worker</span>
        </a>
        </button>
      </li>
      <li>
      <button onClick={handleLogout}>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
            />
           
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
        </a>
        </button>
      </li>
    </ul>
    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-black dark:border-gray-700">

      <Link to="/about-us">
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
          </svg>
          <span className="ms-3">About</span>
        </a>
      </Link>
      <Link to="/donate">
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
            <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
          </svg>
          <span className="ms-3">Donate</span>
        </a>
      </Link>
      <Link to="/contact-us">
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 21"
          >
            <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
          </svg>
          <span className="ms-3">Contact Us</span>
        </a>
      </Link>
    </ul>
  </div>
  </div>
</aside>


      {/* Display cards based on filtered job */}
      {filteredCards}
    </>
  );
};

export default HorizontalCard;
