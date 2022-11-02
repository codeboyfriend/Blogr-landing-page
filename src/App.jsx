import "./css/style.css";
import { BlogrProvider } from "./Context/GlobalContext";
import Header from "./components/Header";
import Main from "./components/sub_com/Main";
import Section from "./components/sub_com/Section";

function App() {
  return (
    <BlogrProvider>
      <div className="container">
        <Header />
        <Main />
        <Section />
      </div>
    </BlogrProvider>
  )
}

export default App
