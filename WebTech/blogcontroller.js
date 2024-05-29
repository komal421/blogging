const BlogPost = require('../models/BlogPost');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = new BlogPost({
    user: req.user._id,
    title,
    content,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

exports.getPosts = async (req, res) => {
  const posts = await BlogPost.find({ user: req.user._id });
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  const post = await BlogPost.findById(req.params.id);

  if (post.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'You are not authorized to edit this post' });
  }

  if (post) {
    post.title = title;
    post.content = content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

exports.deletePost = async (req, res) => {
  const post = await BlogPost.findById(req.params.id);

  if (post.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'You are not authorized to delete this post' });
  }

  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

