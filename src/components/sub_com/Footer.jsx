import Logo from "./../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div>
            <h2>Product</h2>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Marketplace</p>
            <p>Features</p>
            <p>Integrations</p>
        </div>

        <div>
            <h2>Company</h2>
            <p>About</p>
            <p>Team</p>
            <p>Blog</p>
            <p>Careers</p>
        </div>

        <div>
            <h2>Connect</h2>
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
        </div>
    </div>
  )
}

export default Footer
