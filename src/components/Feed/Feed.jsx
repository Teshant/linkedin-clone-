import { useState, useEffect } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import PostCreator from "../PostCreator/PostCreator";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          name: "Teshant Kumar",
          title: "Aspiring AI Engineer",
          time: "2h",
          content: "Building my own LinkedIn using React.",
          likes: 0,
          liked: false
        }
      ]);
    }, 1000);
  }, []);

  const handleAddPost = (content) => {
    const newPost = {
      id: Date.now(),
      name: "Teshant Kumar",
      title: "Aspiring AI Engineer",
      time: "Just now",
      content,
      likes: 0,
      liked: false
    };

    setPosts([newPost, ...posts]);
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map((p) =>
      p.id === id
        ? {
            ...p,
            liked: !p.liked,
            likes: p.liked ? p.likes - 1 : p.likes + 1
          }
        : p
    );

    setPosts(updatedPosts);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="feed">
      <PostCreator onAddPost={handleAddPost} />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}











