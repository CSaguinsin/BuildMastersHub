import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import NoPic from '../../assets/logo/no_pic.jpg';
import '../../Style.css';
import imageholderf from '../../assets/Graphic/imageplaceholder.png';

const Profile = () => {
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState(''); // New state for user's name
  const [comments, setComments] = useState([]);
  let unsubscribe;

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
      const docRef = await addDoc(collection(db, 'comments'), {
        userName, // Include user's name in the comment object
        commentText: comment,
        timestamp: Timestamp.now(),
      });

      console.log('Comment added with ID: ', docRef.id);

      setComment('');
      setUserName('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      const db = getFirestore();
      const commentsRef = collection(db, 'comments');
      const q = query(commentsRef, orderBy('timestamp', 'desc'));

      unsubscribe = onSnapshot(q, (snapshot) => {
        const commentsData = [];
        snapshot.forEach((doc) => {
          commentsData.push({ id: doc.id, ...doc.data() });
        });
        setComments(commentsData);
      });
    };

    fetchComments();

    return () => {
      if (unsubscribe instanceof Function) {
        unsubscribe();
      }
    };
  }, []);


  return (
    <>
    <div className='profile'>
      <div className="px-4 sm:px-0">
        <img src={NoPic} className='nopic'/>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Job</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Home Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Contact Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div> 
        </dl>
      </div>
      <h1>Works</h1>
      <div className='imageholder'>
          {[1, 2, 3].map((index) => (
        <React.Fragment key={index}>
          <img src={imageholderf} className='imageholderf'/>
          <br />
        </React.Fragment>
      ))}
      </div>
      <br />
      <br />
        <div>
          {comments.map((commentData) => (
            <div key={commentData.id}>
              <p>
                <strong>{commentData.userName}: </strong>
                <br />
                {commentData.commentText}
              </p>
            </div>
          ))}
        </div>
        <br />
        <br />
        {/* New form for adding comments */}
        <div class="max-w-2xl  px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Add a comment
            </h2>
          </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input 
                  value={userName}
                  onChange={handleNameChange}
                  type="email" 
                  name="floating_email" 
                  id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
              </div>
          <form class="mb-6" onSubmit={(event) => handleSubmitComment(event)}>
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              id="comment"
              rows="6"
              placeholder="Write a comment..."
              required
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            ></textarea>
          </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post comment
            </button>
          </form>
        </div>
      <Link to='/build-masters-hub'>
              <a href="#" className="inline-block">
              <button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
              <span class="font-medium text-[#333] group-hover:text-white">Back</span>
            </button>
              </a>
      </Link>
    </div>
    
    </>
  )
}

export default Profile