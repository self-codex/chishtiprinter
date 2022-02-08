import "./topbar.scss";
import { HiMenu } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <HiMenu className="hamburger" />
        <span className="logo">Chishti Flex Point</span>
      </div>
      <div className="topbar__right">
        {/* <div className="topbar__right__status"> */}
        <img
          src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
          alt="avatar"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Topbar;
