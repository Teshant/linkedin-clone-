import "./SidebarRight.css";

export default function SidebarRight() {
  return (
    <div className="sidebar-right">

      <div className="news-card">

        <h3 className="news-title">LinkedIn News</h3>

        <div className="news-item">
          <h4>AI startups raise funding</h4>
          <p>2h ago • 1,200 readers</p>
        </div>

        <div className="news-item">
          <h4>Tech layoffs continue</h4>
          <p>5h ago • 850 readers</p>
        </div>

        <div className="news-item">
          <h4>Remote work trends 2026</h4>
          <p>1d ago • 2,100 readers</p>
        </div>

        <div className="news-item">
          <h4>Open-source AI models grow</h4>
          <p>3h ago • 640 readers</p>
        </div>

      </div>

    </div>
  );
}
