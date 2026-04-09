import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/contactPage";
import PageNotFound from "./components/pages/pagenotfound";
import SignInPage from "./components/pages/signinpage";
import SignUpPage from "./components/pages/signuppage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
