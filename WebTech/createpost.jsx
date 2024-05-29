import axios from 'axios';
import React, { useState } from 'react';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const { title, content } = post;

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      };
      const res = await axios.post('/api/posts', post, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <textarea
          name="content"
          value={content}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
