import { RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { getAllStaticUrls } from "@/hooks/useStaticUrls";
import TEXT from "@/lang/es.json";
import ScrollUp from "@/components/ScrollUp";
import Avatar from "@/components/ui/Avatar"
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const URL = await getAllStaticUrls();

  // Social links data
  const socialLinks = [
    {
      href: URL.facebook,
      icon: <RiFacebookLine className="w-6 h-6 lg:w-7 lg:h-7" />,
      label: "Abrir en Facebook",
    },
    {
      href: URL.instagram,
      icon: <RiInstagramLine className="w-6 h-6 lg:w-7 lg:h-7" />,
      label: "Abrir en Instagram",
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <RiPhoneLine />,
      href: URL.whatsapp,
      text: TEXT.footerInfoPhone,
      isMail: false,
    },
    {
      icon: <RiMailLine />,
      href: `mailto:${URL.email}`,
      text: TEXT.footerInfoEmail,
      isMail: true,
    },
  ];

  // Useful links data
  const usefulLinks = [
    { href: URL.aeropuertoig, text: TEXT.footerInfoAirport },
    { href: URL.cataratasarg, text: TEXT.footerInfoParkArg },
    { href: URL.cataratasbr, text: TEXT.footerInfoParkBr },
    { href: URL.ingresobrasil, text: TEXT.footerInfoMigrationBr },
    { href: URL.lunallena, text: TEXT.footerInFullMoon },
  ];

  // Developer & legal links data
  const legalLinks = [
    { href: URL.developer, text: TEXT.footerInfoDeveloper, external: true },
    { href: "/terms", text: TEXT.footerTerms },
    { href: "/policy", text: TEXT.footerInfoPolicy },
    { href: "/faq", text: TEXT.footerInfoFaq },
  ];

  return (
    <footer className="footer pt-6 pb-8 bg-container md:pt-10 md:pb-4">
      <div className="footer-container container mx-auto md:max-w-screen-xl px-4 xl:px-20 grid gap-6 gap-y-16">
        <div className="footer-image flex flex-col justify-between items-start gap-4 md:flex-row md:items-center md:justify-start md:gap-8">
          <div className="flex items-center justify-start gap-4">
            <Avatar src="/images/logo.png" alt="Mamalakandam Homestay Logo" size="large" />
            <div className="footer-text grid gap-1 text-xl font-semibold lg:text-2xl">
              <p className="text-primary-1">{TEXT.brandName2}</p>
              <p className="footer-logo text-container-foreground">{TEXT.brandName1}</p>
            </div>
          </div>
          <div className="-order-1 flex items-center gap-2 text-container-foreground text-sm">
            <span>🍃 Happiness is Having Natural Beauty</span>
          </div>
        </div>

        <div className="footer-content grid grid-cols-1 gap-8 md:gap-y-8 md:gap-x-16 md:grid-cols-max2 lg:gap-x-20 lg:grid-cols-max3 xl:grid-cols-max4">

          <div className="footer-data">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle1}</h3>
            <div className="footer-social flex gap-x-6 xl:gap-x-8">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link text-container-foreground cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-data">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle2}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info">
                <RiMapPinLine />
                <a href={URL.maps} target="_blank" rel="noreferrer">{TEXT.footerInfoDirection}</a>
              </li>
            </ul>
          </div>

          <div className="footer-data md:col-start-2 xl:row-start-1 xl:col-start-3">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.contacto}</h3>
            <ul className="footer-list grid gap-y-3">
              {contactInfo.map(({ icon, href, text, isMail }) => (
                <li className="footer-info" key={href}>
                  {icon}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                  >
                    {" "}{text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-data lg:row-start-1 lg:col-start-3 xl:row-start-2 xl:col-start-1 xl:col-span-2">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle4}</h3>
            <ul className="footer-list grid gap-y-3">
              {usefulLinks.map(({ href, text }) => (
                <li className="footer-info" key={href}>
                  <a target="_blank" rel="noreferrer" href={href}>{text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-data md:row-start-2 xl:row-start-1 xl:col-start-4">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle5}</h3>
            <ul className="footer-list grid gap-y-3">
              {legalLinks.map(({ href, text, external }) => (
                <li className="footer-info" key={href}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-copyright-container mx-auto text-center">
        <Link href="/dashboard">
          <span className="footer-copyright text-[0.7rem] xl:text-sm text-container-foreground inline-block mt-24 p-2">
            {"© Copyright Mamalakandam Homestay & Resorts 2025. All rights reserved."}
          </span>
        </Link>
      </div>

      <ScrollUp url={URL} />
    </footer>
  );
}