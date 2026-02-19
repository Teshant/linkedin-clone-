import "./Feed.css";
import Post from "../Post/Post";

export default function Feed() {


  const posts = [

   {
    id : "1",
    name : "Teshant kumar",
    title : "Aspiring AI Enginer",
    time : "2h",
    content : "Building my own linkedin using react ,focusing on stututure first before logic "

   },


   {
    id : 2 ,
    name : "Elon musk",
    title : "CEO at tesla ",
    time: "5h",
    content: "AI will change everything"

   }

  ];
  






  return (
    <div className="feed">

      {/* Post Creator */}
      <div className="post-creator">
        <div className="creator-top">
          <div className="creator-avatar">T</div>
          <input
            type="text"
            placeholder="Start a post"
            className="creator-input"
          />
        </div>

        <div className="creator-actions">
          <div className="action-item">Photo</div>
          <div className="action-item">Video</div>
          <div className="action-item">Event</div>
          <div className="action-item">Write article</div>
        </div>
      </div>

      {/* Dynamic Posts */}

      {posts.map((post) => (
        <post key = {post.id} post = {post}></post>
      ))}

    </div>
  );
}
