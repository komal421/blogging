import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        };
        const res = await axios.get('/api/posts', config);
        setPosts(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Your Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
