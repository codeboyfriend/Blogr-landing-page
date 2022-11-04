import BlogrContext from "../../Context/GlobalContext";
import { useContext } from "react";

const MobileNav = () => {
    const { open, setOpen} = useContext(BlogrContext);
    
  return (
    <div>
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

export default MobileNav
