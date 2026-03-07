import CoffeeFeatures from "@/components/Bottle";
import CoffeeCraftSection from "@/components/Craft";
import CoffeeFooter from "@/components/Footer";
import FranchiseCTA from "@/components/FranchiseCta";
import CoffeeGallery from "@/components/Gallery";
import CoffeeHero from "@/components/Home";
import CoffeeShopAbout from "@/components/NewAbout";
import PopularFlavors from "@/components/Popular";
import CoffeeStorySection from "@/components/Quote";
import ChocolateSection from "@/components/Shop";
import CoffeeChapterSection from "@/components/ShopNew";
import PopularProducts from "@/components/SideMenu";
import CoffeeTestimonials from "@/components/Testimonial";
import Type from "@/components/Type";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div id="hero">
        <CoffeeHero />
      </div>
      <div id="about">
        <Type />
      </div>
      <div id="menu">
        <PopularFlavors />
      </div>{" "}
      {/* <CoffeeShopAbout /> */}
      <CoffeeFeatures />
      <div id="franchise">
        <FranchiseCTA />
      </div>
      {/* <CoffeeCraftSection /> */}
      <CoffeeTestimonials />
      {/* <CoffeeGallery /> */}
      <CoffeeFooter />
      {/* <CoffeeChapterSection /> */}
      {/* <CoffeeStorySection /> */}
      {/* <BrandShowcase /> */}
      {/* <PopularProducts /> */}
      {/* <ChocolateSection /> */}
      {/* <FoodPromotionBanner /> */}
    </div>
  );
}
