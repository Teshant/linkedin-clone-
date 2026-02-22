import "./Post.css";

export default function Post({ post, onLike, onDelete }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-avatar">
          {post.name.charAt(0)}
        </div>
        <div className="post-user-info">
          <h4>{post.name}</h4>
          <p>{post.title} • {post.time}</p>
        </div>
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-actions">
        <div
          onClick={() => onLike(post.id)}
          style={{ color: post.liked ? "#0a66c2" : "inherit" }}
        >
          Like ({post.likes})
        </div>

        <div>Comment</div>
        <div>Repost</div>
        <div>Send</div>

        <div
          onClick={() => onDelete(post.id)}
          style={{ color: "red" }}
        >
          Delete
        </div>
      </div>
    </div>
  );
}