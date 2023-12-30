import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs 
} from 'firebase/firestore';

import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';


const FirstForeman = () => {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  // Fetch comments on component mount
  useEffect(() => {
    fetchComments();
  }, []);

  // Fetch comments function
  const fetchComments = async () => {
    try {
      const db = getFirestore();
      const commentsRef = collection(db, 'foremanComments'); // Use a different collection name
      const querySnapshot = await getDocs(commentsRef);
  
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
  
      setComments(commentsData);
    } catch (error) {
      console.error('Error fetching comments: ', error);
    }
  };

  // Handle form submission to add a new comment
  const handleSubmitComment = async (event) => {
    event.preventDefault();
  
    // Create a new comment object
    const newComment = {
      userName: userName,
      commentText: comment,
      // Add timestamp if needed
    };
  
    try {
      const db = getFirestore(); // Use getFirestore from Firebase
      const commentsRef = collection(db, 'foremanComments'); // Use a different collection name
  
      // Add the new comment to Firestore
      const docRef = await addDoc(commentsRef, newComment);
  
      // Update local comments state with the new comment
      setComments([...comments, { id: docRef.id, ...newComment }]);
  
      // Clear the input fields after adding the comment
      setUserName('');
      setComment('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  // Handle change in the user name input
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  // Handle change in the comment textarea
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const name = 'Carl Saguinsin'; // Replace this with the actual user ID

  return (
    <>
      {/* Other components or content */}
      <Profile name={name} />
      {/* Display existing comments */}
      <section className="flex flex-col items-center">
      <div className="max-w-2xl w-full px-4">
  {comments.map((commentData) => (
    <Card key={commentData.id} variant="outlined" sx={{ mb: '10px' }}>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        {commentData.userName}
      </Typography>
      <Typography>
        {commentData.commentText}
      </Typography>
    </Card>
  ))}
</div>


      
        {/* New form for adding comments */}
        <div className="max-w-2xl w-full px-4 mt-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Add a comment
            </h2>
          </div>
               <div className="relative z-0 mb-5">
                  <input 
                  value={userName}
                  onChange={handleNameChange}
                  type="email" 
                  name="floating_email" 
                  id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
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
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            ></textarea>
          </div>
          <button
    type="submit"
    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600"
  >
    Post comment
  </button>

          </form>
        </div> 
      </section>
    </>
  );
};

export default FirstForeman;
