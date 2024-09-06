import Layout from "@/components/layout/Layout";
import FeaturedCategories4 from "@/components/sections/FeaturedCategories4";
import FinestSelection from "@/components/sections/FinestSelection";
import FlatBrand2 from "@/components/sections/FlatBrand2";
import FlatExperts3 from "@/components/sections/FlatExperts3";
import FlatHomes2 from "@/components/sections/FlatHomes2";
import FlatTestimonial7 from "@/components/sections/FlatTestimonial7";
import LuxuryHome6 from "@/components/sections/LuxuryHome6";
import RecentProperties3 from "@/components/sections/RecentProperties3";
import Slider8 from "@/components/sections/Slider8";
import TabSearch2 from "@/components/sections/TabSearch2";

export default function Home8() {
  return (
    <>
      <Layout headerStyle={8} footerStyle={4} mainContentCls="default px-60">
        <Slider8 />
        <FeaturedCategories4 />
        <FlatHomes2 />
        <LuxuryHome6 />
        <FlatBrand2 />
        <RecentProperties3 />
        <FlatTestimonial7 />
        <FlatExperts3 />
        <FinestSelection />
        <TabSearch2 />
      </Layout>
    </>
  );
}
