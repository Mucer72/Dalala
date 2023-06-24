import BlogItem from "./BlogItem";
import { blogs } from "./setting";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";

const TouristAttractions = () => {
  return (
    <section class="item touristAttractions" id="touristAttractions">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Địa Điểm Nổi Bật</li>
      </ul>
      <div class="sub-heading showtotop delay-04">
        <p>
          Khám phá những địa điểm với đa dạng phong cách kiến trúc <br /> cùng
          thiên nhiên hùng vĩ tại Đà Lạt{" "}
        </p>
      </div>
      <div class="box-container">
        {blogs.map((blog) => (
          <BlogItem key={blog.title} blog={blog} />
        ))}
      </div>
      <Link to={`${PATH_DASHBOARD.Intermediary}/1`} class="btnDetail showtotop delay-16">
            Xem thêm
      </Link>
    </section>
  );
};

export default TouristAttractions;
