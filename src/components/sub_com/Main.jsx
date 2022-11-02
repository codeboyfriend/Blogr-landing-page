import editor from "../../assets/images/illustration-editor-desktop.svg";

const Main = () => {
  return (
    <div className='main'>
      <div className="title">
        <h2>Designed for the future</h2>
      </div>

      <div className="box">
        <div className="left_box">
            <div className="top">
                <h3>Introducing an extensive editor</h3>
                <p>Blogr features are exceedingly intuitive which let you focus on one thing: create content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, video and Markdown. Extensibility with plugins and theme provide easy ways to add functionality or change the look of a blog.</p>
            </div>

            <div className="bottom">
                <h3>Robust content management</h3>
                <p>Flexible content management enables users to easily move through posts. Increase the userbility of a blog by adding customized categories, section, format or flow. With this functionality, you're in full control.</p>
            </div>
        </div>
        <div className="right_box">
            <div className="main_box">
                <img src={editor} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main;