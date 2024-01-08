import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, addDoc, orderBy } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import NoPic from '../../assets/logo/no_pic.jpg';
import { Link } from 'react-router-dom';
import imageholderf from '../../assets/Graphic/imageplaceholder.png';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../config/firebase';
import Logo from '../../assets/logo/no_pic.jpg'

const Profile = ({ user }) => {
  const { name } = useParams();
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const formattedName = name.replace(/-/g, ' ');
    const fetchUserData = async () => {
      try {
        const db = getFirestore();
        const peopleRef = collection(db, 'peopleData');
        const q = query(peopleRef, where('name', '==', formattedName));
    
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (doc) => {
            const personData = doc.data();
            try {
              const imageRef = ref(storage, personData.profilePictureRef);
              const imageUrl = await getDownloadURL(imageRef);
              const updatedPersonData = { ...personData, id: doc.id, profilePictureURL: imageUrl };
              setUserData(updatedPersonData);
              setComments(updatedPersonData.comments || []);
            } catch (error) {
              console.error('Error fetching image URL:', error);
              console.error('Fetched user data without image URL:', personData);
              setUserData({ ...personData, id: doc.id });
              setComments(personData.comments || []);
            }
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

  let unsubscribe;

  const userId = user?.uid || 'defaultUserId';

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    const db = getFirestore();

    try {
      const commentData = {
        userId: userId,
        userName: userName || (user && user.displayName) || 'Anonymous',
        commentText: comment,
        timestamp: Timestamp.now(),
      };

      await addDoc(collection(db, 'comments'), commentData);

      // Update the 'comments' field in userData
      const userDocRef = doc(db, 'peopleData', userData.id);
      await updateDoc(userDocRef, {
        comments: [...(userData.comments || []), commentData],
      });

      setUserName('');
      setComment('');

      fetchComments();
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  const fetchComments = async () => {
    if (user) {
      const db = getFirestore();
      const commentsRef = collection(db, 'comments');
      const q = query(
        commentsRef,
        where('userId', '==', user.uid),
        orderBy('timestamp', 'desc')
      );

      unsubscribe = onSnapshot(q, (snapshot) => {
        const commentsData = [];
        snapshot.forEach((doc) => {
          commentsData.push({ id: doc.id, ...doc.data() });
        });
        setComments(commentsData);
      });
    }
  };

  useEffect(() => {
    fetchComments();
    return () => {
      if (unsubscribe instanceof Function) {
        unsubscribe();
      }
    };
  }, [user]);

  const fetchProfileComments = async () => {
    if (userData && userData.id) {
      try {
        const db = getFirestore();
        const commentsRef = collection(db, 'comments');
        const q = query(
          commentsRef,
          where('userId', '==', userData.id),
          orderBy('timestamp', 'desc')
        );

        const querySnapshot = await getDocs(q);
        const commentsData = [];
        querySnapshot.forEach((doc) => {
          commentsData.push({ id: doc.id, ...doc.data() });
        });
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  };

  useEffect(() => {
    fetchProfileComments();
  }, [userData]);

  return (
    <>
      {userData && (
        <section className="container px-6 py-12 mx-auto">
          <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="px-4 sm:px-0">
                <img
                  src={userData.profilePictureURL || NoPic}
                  alt="card-image"
                  className="NoPic"
                />
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
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Contact Number</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.contact || 'Loading...'}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.about || 'Loading...'}
                    </dd>
                  </div>
                </dl>
              </div>
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
{userData && (
      <section className="flex flex-col items-center">
<div className="max-w-2xl w-full px-4">
  {comments.map((commentData, index) => (
    <article key={index} className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={Logo}
              alt="Michael Gough"
            />
            {commentData.userName}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time pubdate dateTime={commentData.timestamp.toDate()} title={commentData.timestamp.toDate()}>
              {commentData.timestamp.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
          </p>
        </div>
        <button
          id={`dropdownComment${index}Button`}
          data-dropdown-toggle={`dropdownComment${index}`}
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
      
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{commentData.commentText}</p>
      <div className="flex items-center mt-4 space-x-4">

      </div>
    </article>
  ))}
</div>
        <div className="max-w-2xl w-full px-4 mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Add a comment
            </h2>
          </div>
          <div className="relative z-0 mb-5">
            <input
              value={userName}
              onChange={handleNameChange}
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
          </div>
          <form onSubmit={(event) => handleSubmitComment(event)}>

            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <textarea
                value={comment}
                onChange={handleCommentChange}
                id="comment"
                rows="6"
                placeholder="Write a comment..."
                required
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600"
            >
              Post comment
            </button>
          </form>
        </div>
      </section>
    )}
    </>
  );
};

export default Profile;
