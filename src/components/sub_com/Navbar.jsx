import Logo from "./../../assets/images/logo.svg";
import arrow_up from "./../../assets/images/icon-arrow-light.svg";
import BlogrContext from "../../Context/GlobalContext";
import { useContext } from "react";

const Navbar = () => {
  const { open, setOpen} = useContext(BlogrContext);

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="mobile">
      <div className="links">
        <div className="extension link">
          <p>
            Product
            <span className="arrow">
              <img src={arrow_up} alt="" />
            </span>
          </p>          
        </div>

        <div className="extension link">
        <p>
            Company
            <span className="arrow">
              <img src={arrow_up} alt="" />
            </span>
          </p>            
        </div>

        <div className="extension link" onClick={() => setOpen(!open)}>
        <p>
            Connect
            <span className="arrow">
              <img src={arrow_up} alt="" />
            </span>
          </p>      
        </div>
      </div>

      <div className="buttons">
        <div className="btn">Login</div>
        <div className='btn btn_One'>Register</div>
      </div>
      </div>

      {
        open ? 
        <div className="modal">
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div> : ""
      }
    </div>
  )
}

export default Navbar
