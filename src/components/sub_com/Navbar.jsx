import arrow_up from "./../../assets/images/icon-arrow-light.svg";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        Blogr
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
          <p>Company</p>          
        </div>

        <div className="extension link">
          <p>Connect</p>          
        </div>
      </div>

      <div className="buttons">
        <div className="btn">Login</div>
        <div className='btn btn_One'>Register</div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
