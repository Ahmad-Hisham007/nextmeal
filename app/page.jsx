import Image from "next/image";
import BannerSlider from "./Components/BannerSlider/BannerSlider";
import PopularCategories from "./Components/PopularCategories/PopularCategories";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <PopularCategories />
    </div>
  );
}
