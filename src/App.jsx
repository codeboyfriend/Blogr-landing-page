import "./css/style.css";
import { BlogrProvider } from "./Context/GlobalContext";
import Header from "./components/Header";
import Main from "./components/sub_com/Main";

function App() {
  return (
    <BlogrProvider>
      <div className="container">
        <Header />
        <Main />
      </div>
    </BlogrProvider>
  )
}

export default App
