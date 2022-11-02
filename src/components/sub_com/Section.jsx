import circle from "../../assets/images/bg-pattern-circles.svg";
import phone from "../../assets/images/illustration-phones.svg";

const Section = () => {
  return (
    <div className="section">
      <div className="bg">
        <img src={circle} alt="" />
      </div>

      <div className="box">
            <div className="left">
                <img src={phone} alt="" />
            </div>

            <div className="right">
                <h2>State of the Art Infrastructure</h2>

                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensure your site will load instantly, no matter where your readers are, keep your site competitive.</p>
            </div>
        </div>
    </div>
  )
}

export default Section
