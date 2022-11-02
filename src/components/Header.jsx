import Navbar from "./sub_com/Navbar";
import HeaderText from "./HeaderText";
// import blogrContext from "../Context/GlobalContext";
// import { useContext } from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="bg"></div>
      <div className="bg_image"></div>
      <Navbar />
      <HeaderText />
    </div>
  )
}

export default Header
