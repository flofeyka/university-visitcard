import "./app.css";
import Footer from "./components/Landing/Footer/Footer";
import Header from "./components/Landing/Header/Header";
import Main from "./components/Landing/Main/Main";
import About from "./components/Navigation/about/About";
import Contacts from "./components/Navigation/contacts/Contacts";
import News from "./components/Navigation/news/News.jsx";

const App = () => {
  return (
    <div className="bg-[aliceblue] App">
      <Header />
      <div>
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
