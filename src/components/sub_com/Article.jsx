import editor from "../../assets/images/illustration-laptop-desktop.svg";

const Article = () => {
  return (
    <div className='main'>
      <div className="box">
        <div className="right_box">
            <div className="main_box">
                <img src={editor} alt="" />
            </div>
        </div>

        <div className="left_box">
            <div className="top">
                <h3>Free, open, simple</h3>
                <p>Blogr is a free and open source application backend by a large community helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            </div>

            <div className="bottom">
                <h3>Powerful tooling</h3>
                <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated site.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Article;