import Icon1 from "../../assets/icons/Icon1";
import ControlsVideo from "../../components/homePage/ControlsVideo";
import FoodAndDrink from "../../components/homePage/FoodAndDrink";
import Specialities from "../../components/homePage/Speciality";
import TouristAttractions from "../../components/homePage/TouristAttractions";
import "../../css/home.css";
import ScrollToTop from "../../../src/components/LoadingScreen/ScrollToTop";

const HomeSection = () => {
  return (
    <>
      <section class="home_video" id="home_video">
        <div class="content">
          <span>
            <Icon1 />
          </span>
          <p style={{ fontStyle: "italic" }}>
            Đồng hành cùng bạn khám phá những trải nghiệm thú vị tại Đà Lạt
          </p>
          <a href="#" class="btn">
            Bắt đầu khám phá
          </a>
        </div>
        <ControlsVideo />
      </section>
      <TouristAttractions />
      <FoodAndDrink />
      <Specialities />
    </>
  );
};

export default ScrollToTop(HomeSection);
