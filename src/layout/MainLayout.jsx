import Navbar from "../components/Navbar/Navbar";
import SidebarLeft from "../components/SidebarLeft/SidebarLeft";
import Feed from "../components/Feed/Feed";
import SidebarRight from "../components/SidebarRight/SidebarRight";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <div className="main-container">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </div>
    </div>
  );
}
