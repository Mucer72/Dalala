import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const searchBtn = useRef(null);
  const searchBar = useRef(null);
  const loginForm = useRef(null);
  const menu = useRef(null);
  const navbar = useRef(null);

  const handleKeyScroll = () => {
    searchBtn.current.classList.remove("fa-times");
    searchBar.current.classList.remove("active");
    menu.current.classList.remove("fa-times");
    navbar.current.classList.remove("active");
    loginForm.current.classList.remove("active");
  };

  const searchButtonClickHandle = (event) => {
    event.target.classList.toggle("fa-times");
    searchBar.current.classList.toggle("active");
  };

  const menuOnClickHandle = (event) => {
    event.target.classList.toggle("fa-times");
    navbar.current.classList.toggle("active");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleKeyScroll);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleKeyScroll);
    };
  }, []);

  return (
    <>
      <header id="header">
        <div
          id="menu-bar"
          class="fas fa-bars"
          onClick={menuOnClickHandle}
          ref={menu}
        ></div>
        <Link to="/" class="logo">
          <span>D</span>alala
        </Link>
        <nav class="navbar" ref={navbar}>
          <Link to="/">Trang chủ</Link>
          <a href="#touristAttractions">Địa điểm nổi bật</a>
          <a href="#foodAndDrink">Ẩm thực</a>
          <a href="#review">Cảm nhận</a>
        </nav>

        <div class="icons">
          <i
            class="fas fa-search"
            id="search-btn"
            onClick={searchButtonClickHandle}
            ref={searchBtn}
          ></i>
          <i
            class=""
            id="login-btn"
            onClick={() => loginForm.current.classList.toggle("active")}
          ></i>
        </div>
        <form action="" class="seacrh-bar-container" ref={searchBar}>
          <input type="search" id="search-bar" placeholder="search here..." />
          <label for="search-bar" class="fas fa-search"></label>
        </form>
      </header>
      <div class="login-form-container" ref={loginForm}>
        <i
          class=""
          id="form-close"
          onClick={() => loginForm.classList.remove("active")}
        ></i>
      </div>
    </>
  );
};

export default Header;
