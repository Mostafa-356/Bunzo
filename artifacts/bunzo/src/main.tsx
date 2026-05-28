import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppPage from "./App.tsx";
import Burgers from "./pages/Burgers.tsx";
import BurgerDetails from "./pages/BurgerDetails.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import BlogList from "./pages/BlogList.tsx";
import Blog from "./pages/Blog.tsx";
import { GlobalProvider } from "./GlobalContext";

const isEndpointsWorking = true;
const userRole = "user";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider isEndpointsWorking={isEndpointsWorking} role={userRole}>
      <Router basename={basePath}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/burgers" element={<Burgers />} />
            <Route path="/burgers/:id" element={<BurgerDetails />} />
            <Route path="/menu" element={<Navigate to="/burgers" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </GlobalProvider>
  </StrictMode>
);
