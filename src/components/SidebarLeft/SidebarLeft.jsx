import "./SidebarLeft.css";

export default function SidebarLeft() {
  return (
    <div className="sidebar-left">

      <div className="profile-card">

        <div className="profile-banner"></div>

        <div className="profile-avatar">
          <div className="avatar-circle">T</div>
        </div>

        <div className="profile-info">
          <h3 className="profile-name">Teshant Kumar</h3>
          <p className="profile-title">Aspiring AI Engineer</p>
        </div>

        <div className="profile-stats">
          <div className="stat-row">
            <span>Connections</span>
            <span className="stat-number">500+</span>
          </div>
          <div className="stat-row">
            <span>Profile views</span>
            <span className="stat-number">120</span>
          </div>
        </div>

      </div>

    </div>
  );
}

