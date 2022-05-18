import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Error from "./component/Error";
import CourseWindow from "./component/CourseWindow";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AddToCartScreen from "./component/AddToCartScreen";
import MyProfile from "./component/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<CourseWindow />} />
          <Route path="/myCart" element={<AddToCartScreen />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/not_found" element={<Error />} />
          <Route path="*" element={<Navigate to="/not_found" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
