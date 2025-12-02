import Main from "@/components/Main";
import Service from "@/components/Service";
import Explore from "@/components/Explore";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import dynamic from "next/dynamic";
import { unstable_noStore } from "next/cache";
import Header from "@/components/Header";
// import AdSenseBanner from "@/providers/AdSenseBanner";
import ScrollRevealLoader from "@/providers/ScrollRevealLoader";
import Footer from "@/components/Footer";

const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });

const Suscription = dynamic(() => import("@/components/Suscription"), {
  ssr: true,
  loading: () => <p className="m-auto">Loading...</p>,
});

export default function HomePage() {
  unstable_noStore();
  return (
    <>
    <Header />
    <main>
      <Main />
      <Service />
        {/* <AdSenseBanner className="w-full h-[90px]" dataAdSlot="7100349173" dataAdFormat="auto" dataFullWidthResponsive="true" /> */}
      <Location />
      <Testimonials />
      <Gallery />
        {/* <AdSenseBanner className="adsense_banner w-full h-[90px]" dataAdSlot="1603817205" dataAdFormat="auto" dataFullWidthResponsive="true" /> */}
      <Explore />
      <Suscription />
    </main>
    <Footer />
    
    <ScrollRevealLoader />
    </>
  );
}
