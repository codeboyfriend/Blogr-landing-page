import "./css/style.css";
import { BlogrProvider } from "./Context/GlobalContext";
import Header from "./components/Header";
import Main from "./components/sub_com/Main";
import Section from "./components/sub_com/Section";
import Article from "./components/sub_com/Article";
import Footer from "./components/sub_com/Footer";
import MobileNav from "./components/sub_com/MobileNav";

function App() {
  return (
    <BlogrProvider>
      <div className="container">
        <Header />
        <Main />
        <Section />
        <Article />
        <Footer />
        <MobileNav />
      </div>
    </BlogrProvider>
  )
}

export default App
