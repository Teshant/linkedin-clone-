import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">

        <div className="navbar-left">
          <div className="logo">in</div>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>

        <div className="navbar-right">
          <div className="nav-item">Home</div>
          <div className="nav-item">My Network</div>
          <div className="nav-item">Jobs</div>
          <div className="nav-item">Messaging</div>
          <div className="nav-item">Notifications</div>
          <div className="nav-item">Me</div>
        </div>

      </div>
    </div>
  );
}
