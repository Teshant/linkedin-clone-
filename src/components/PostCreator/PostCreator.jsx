import { useState } from "react";
import "./PostCreator.css";

export default function PostCreator({ onAddPost }) {
  const [postText, setPostText] = useState("");

  const handleSubmit = () => {
    if (postText.trim() === "") return;
    onAddPost(postText);
    setPostText("");
  };

  return (
    <div className="post-creator">
      <div className="creator-top">
        <div className="creator-avatar">T</div>
        <input
          type="text"
          placeholder="Start a post"
          className="creator-input"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
      </div>

      <div className="creator-actions">
        <button className="post-btn" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </div>
  );
}