import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ApplicationHeading from "./component/ApplicationHeading";
import CourseWindow from "./component/CourseWindow";

function App() {
  return (
    <div className="App">
      <Header />
      <ApplicationHeading />
      <CourseWindow />
      <Footer />
    </div>
  );
}

export default App;
