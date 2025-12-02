import TEXT from "@/lang/es.json";
import { getAllStaticUrls } from "@/hooks/useStaticUrls";
import { RiFacebookCircleFill, RiInstagramFill, RiWhatsappFill, RiPhoneFill } from "@remixicon/react";
import MainSwiper from "./MainSwiper";
import Button from "./ui/Button";
import AdSensePropagationWrapper from "@/providers/AdSensePropagationWrapper";

export default async function Main() {

  const URL = await getAllStaticUrls();

  // Social links array
  const socialLinks = [
    { icon: <RiInstagramFill />, url: URL.instagram, label: "Instagram" },
    { icon: <RiFacebookCircleFill />, url: URL.facebook, label: "Facebook" },
    { icon: <RiWhatsappFill />, url: URL.whatsapp, label: "Whatsapp" }
  ];

  return (
    <section className="home relative bg-container h-screen min-h-[480px]" id="home">

      {/* Floating contact badge */}
      <div className="absolute top-20 right-4 z-30 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 animate-pulse lg:top-24 lg:right-8">
        <RiPhoneFill className="w-4 h-4 text-green-600" />
        <a href="tel:+919526484707" className="text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors">
          +91 9526484707
        </a>
      </div>

      <div className="home-content absolute top-0 left-0 h-full w-full pl-10 flex justify-end items-end z-20 lg:pl-80 lg:pr-8 pointer-events-none">
        <div className="home-data container px-6 grid gap-y-4">
          <div className="text-end">
            <span className="inline-block text-sm md:text-base text-green-300 font-medium tracking-widest uppercase mb-2 animate-fade-in">🍃 Welcome to Nature's Paradise</span>
          </div>
          <h1 className="home-title text-[36px] text-background text-end lg:text-[3.5rem] font-bold leading-tight">
            <span className="font-dancing text-[42px] lg:text-[4.5rem] text-amber-400 drop-shadow-lg">{TEXT.homeTitle1}</span>
            <br /> 
            <span className="font-montserrat">{TEXT.homeTitle2}</span> 
            <span className="text-green-400 font-montserrat">{TEXT.homeTitle3}</span>
          </h1>
          <p className="home-description mb-8 text-background/90 text-end text-sm md:text-base lg:text-lg max-w-xl ml-auto leading-relaxed">{TEXT.homeDescription1}</p>
          <p className="text-end text-amber-300 text-xs md:text-sm font-medium tracking-wide mb-8">📍 Kuttampuzha • Thattekkad • Kerala</p>
          <div className="flex justify-end mb-24 md:mb-14 gap-4">
            <a
              href="tel:+919526484707"
              className="home-button z-20 pointer-events-auto"
              aria-label="Call Us">
              <Button
                text="Call Now"
                endIcon={<RiPhoneFill />}
                className="bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              />
            </a>
            <AdSensePropagationWrapper dataAdSlot="1603817205">
              <a
                href={`${URL.whatsapp}`}
                target="_blank"
                className="home-button z-20"
                aria-label="Whatsapp">
                <Button
                  text={TEXT.homeButtonTitle1}
                  endIcon={<RiWhatsappFill />}
                  className="bg-primary-2 rounded-md pointer-events-auto"
                />
              </a>
            </AdSensePropagationWrapper>
          </div>
        </div>
      </div>

      <MainSwiper />
      
      {/* LANG MENU */}
      {/* <LangSelect /> */}

      {/* social component */}
      <div className="home-social grid justify-items-center gap-y-24 absolute top-1/2 -translate-y-1/2 z-20">
        <span className="home-social-text relative rotate-90 font-medium text-background text-sm after:content-[''] after:w-12 after:h-[1px] after:bg-neutral-100 after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-16">
          {TEXT.socialLinkTitle1}
        </span>
        <div className="home-social-links grid gap-y-3">
          {socialLinks.map((el, index) => (
            <AdSensePropagationWrapper key={index} dataAdSlot="7100349173">
              <a
                href={`${el.url}`}
                target="_blank"
                className="home-social-link w-6 h-6 text-background transition-transform duration-500 hover:scale-110 cursor-pointer"
                aria-label={el.label}>
                {el.icon}
              </a>
            </AdSensePropagationWrapper>
          ))}
        </div>
      </div>

    </section>
  )
}