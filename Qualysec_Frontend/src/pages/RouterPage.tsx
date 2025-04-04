import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import ServicesSection from "./Services";
import WebAppPentesting from "./WebPenetration";
import ContactForm from "./ContactForm";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about-us" element={<HomePage />} />
      <Route path="/Services" element={<WebAppPentesting />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/solutions" element={<HomePage />} />
      <Route path="/pricing" element={<HomePage />} />
      <Route path="/resource" element={<HomePage />} />


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterPage;
