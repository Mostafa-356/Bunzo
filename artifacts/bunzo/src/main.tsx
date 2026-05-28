import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppPage from "./App.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { GlobalProvider } from "./GlobalContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient.ts";
import { Toaster } from "./components/ui/toaster.tsx";

const Burgers = lazy(() => import("./pages/Burgers.tsx"));
const BurgerDetails = lazy(() => import("./pages/BurgerDetails.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const BlogList = lazy(() => import("./pages/BlogList.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`.replace(/\/\//g, "/");
    navigator.serviceWorker.register(swUrl).catch(() => {});
  });
}

const isEndpointsWorking = true;
const userRole = "user";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <span className="loader" />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider isEndpointsWorking={isEndpointsWorking} role={userRole}>
        <Router basename={basePath}>
          <Header />
          <main className="flex-1">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<AppPage />} />
                <Route path="/burgers" element={<Burgers />} />
                <Route path="/burgers/:slug" element={<BurgerDetails />} />
                <Route path="/menu" element={<Navigate to="/burgers" replace />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
        <Toaster />
      </GlobalProvider>
    </QueryClientProvider>
  </StrictMode>
);
