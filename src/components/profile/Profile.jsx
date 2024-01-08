import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import NoPic from '../../assets/logo/no_pic.jpg';
import { Link } from 'react-router-dom';
import imageholderf from '../../assets/Graphic/imageplaceholder.png';
const Profile = () => {
  const { name } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const formattedName = name.replace(/-/g, ' '); // Replace all hyphens with spaces
    console.log('ProfileUserId:', formattedName); // Check formatted name
  
    const fetchUserData = async () => {
      console.log('Fetching user data...');
      const db = getFirestore();
      const peopleRef = collection(db, 'peopleData');
      const q = query(peopleRef, where('name', '==', formattedName));
  
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log('Fetched user data:', data); // Log the fetched data
            setUserData(data); // Set the fetched data to state
          });
        } else {
          console.log('No data found for the provided name:', formattedName);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (name) {
      fetchUserData();
    }
  }, [name]);
  // const [comment, setComment] = useState('');
  // const [userName, setUserName] = useState('');
  // const [comments, setComments] = useState([]);
  // let unsubscribe;

  // const userId = user?.uid || 'defaultUserId';

  // const handleCommentChange = (event) => {
  //   setComment(event.target.value);
  // };

  // const handleNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const handleSubmitComment = async (event) => {
  //   event.preventDefault();

  //   const db = getFirestore();

  //   try {
  //     await addDoc(collection(db, 'comments'), {
  //       userId: userId,
  //       userName: userName || (user && user.displayName) || 'Anonymous',
  //       commentText: comment,
  //       timestamp: Timestamp.now(),
  //     });

  //     // Clear input fields after submitting comment
  //     setUserName('');
  //     setComment('');

  //     // Optionally, fetch comments again after adding a new one
  //     fetchComments();
  //   } catch (error) {
  //     console.error('Error adding comment: ', error);
  //   }
  // };

  // const fetchComments = async () => {
  //   if (user) {
  //     const db = getFirestore();
  //     const commentsRef = collection(db, 'comments');
  //     const q = query(
  //       commentsRef,
  //       where('userId', '==', user.uid),
  //       orderBy('timestamp', 'desc')
  //     );

  //     unsubscribe = onSnapshot(q, (snapshot) => {
  //       const commentsData = [];
  //       snapshot.forEach((doc) => {
  //         commentsData.push({ id: doc.id, ...doc.data() });
  //       });
  //       setComments(commentsData);
  //       console.log('Fetched comments:', commentsData); // Add this log to check fetched comments
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     if (user) {
  //       const db = getFirestore();
  //       const commentsRef = collection(db, 'comments');
  //       const q = query(
  //         commentsRef,
  //         where('userId', '==', user.uid),
  //         orderBy('timestamp', 'desc')
  //       );
  
  //       unsubscribe = onSnapshot(q, (snapshot) => {
  //         const commentsData = [];
  //         snapshot.forEach((doc) => {
  //           commentsData.push({ id: doc.id, ...doc.data() });
  //         });
  //         setComments(commentsData);
  //         console.log('Fetched comments:', commentsData); // Add this log to check fetched comments
  //       });
  //     }
  //   };
  
  //   fetchComments();
  
  //   return () => {
  //     if (unsubscribe instanceof Function) {
  //       unsubscribe();
  //     }
  //   };
  // }, [user]);
  

  


  return (
    <>
      {/* Display user data */}
      {userData && (
        <section className="container px-6 py-12 mx-auto">
          <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="px-4 sm:px-0">
                <img src={NoPic} className='nopic' alt="User Image" />
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.name || 'Loading...'}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.address || 'Loading...'}
                    </dd>
                  </div>
                  {/* Render other user details similarly */}
                  {/* ... */}
                </dl>
              </div>
              {/* Works section */}
              <h1>Works</h1>
    <div className='imageholder container px-6 py-12 mx-auto flex flex-col lg:flex-row'>
      {[1, 2, 3].map((index) => (
        <React.Fragment key={index}>
          <img
            src={imageholderf}
            className='imageholderf'
            style={{ marginRight: '10px' }} // Adjust the margin value as needed
          />
        </React.Fragment>
      ))}
    </div>
              {/* ... */}
              <Link to='/build-masters-hub'>
                <a href="#" className="inline-block">
                  <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                  </button>
                </a>
              </Link>
            </div>
            
          </div>
          
        </section>
      )}
    </>
  );
};

export default Profile;