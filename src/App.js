import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReviewCarousel from "./components/ReviewCarousel";
import Router from "./router";

function App() {
  const handleKeyScroll = (event) => {
    let items = document.querySelectorAll(".item");
    let navheader = document.getElementById("header");

    if (window.scrollY > 200) {
      navheader.classList.add("tofixed");
    } else {
      navheader.classList.remove("tofixed");
    }
    items.forEach((item) => {
      if (item.offsetTop - window.scrollY < 400) {
        item.classList.add("actives");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleKeyScroll);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleKeyScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <ReviewCarousel />
      <BrandCarousel />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
