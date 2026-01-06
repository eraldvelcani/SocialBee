import { nanoid } from "nanoid";

let posts = [
  {
    id: nanoid(),
    content: "media",
    caption: "caption1",
  },
  {
    id: nanoid(),
    content: "media",
    caption: null,
  },
  {
    id: nanoid(),
    content: "text",
    caption: "text1",
  },
];


export const getPosts = async (req, res) => {
  res.status(200).json({ posts });
};


export const getPost = async (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `error: post with id ${id} not found` });
  }
  res.status(200).json({ post });
};


export const createPost = async (req, res) => {
  const { content, caption } = req.body;
  if ((content === "text" && !caption) || !content) {
    return res
      .status(400)
      .json({ msg: "error: content or caption not provided" });
  }
  const id = nanoid(8);
  const post = { id, content, caption };
  posts.push(post);
  res.status(200).json({ post });
};


export const editPost = async (req, res) => {
  const { content, caption } = req.body;
  if ((content === "text" && !caption) || !content) {
    res.status(400).json({ msg: "error: content or caption not provided" });
  }
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `error: post with id ${id} not found` });
  }
  post.content = content;
  post.caption = caption;
  res.status(200).json({ msg: "post modified", post });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `error: post with id ${id} not found` });
  }
  const newPosts = posts.filter((post) => post.id !== id);
  posts = newPosts;
  res.status(200).json({ msg: "post delted" });
};