import TEXT from "@/lang/es.json";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { RiArrowRightLine } from "@remixicon/react";
import Avatar from "./ui/Avatar";

export default function Explore() {
  
  return (
    <section className="explore section pt-0 mt-10 xl:mt-28 relative bg-container" id="explore">
      <div className="explore-container">
          <div className="explore-image absolute overflow-hidden">
            <Link href={`/explore`} className="shadow-md absolute top-1/2 right-1/2 translate-x-1/2 md:-translate-y-1/2 z-10">
              <Button 
                className="rounded-md move-right bg-primary-2"
                text={TEXT.atractivos}
                endIcon={<RiArrowRightLine className="w-5 h-5" />}
              />
            </Link>
            <Image src="/images/explore-img-0.jpg"
            className="explore-img w-full h-[333px] object-cover object-center md:w-screen xl:h-[600px]"
            alt="Explore nature around Mamalakandam"
            width={1080}
            height={720}
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 75vw"
            loading="lazy"
            quality={100}
            />
            <div className="explore-shadow absolute top-0 left-0 w-full h-full"></div>
          </div>
          <div className="explore-content container mx-auto md:max-w-screen-xl px-4 xl:px-20 grid gap-6 relative pt-64 text-center gap-y-10 xl:pt-[24rem] xl:grid-cols-c">
            <div className="explore-data xl:text-start">
                <h2 className="section-title font-semibold text-neutral-100 md:text-start">
                  <span className="font-dancing text-amber-400 text-4xl lg:text-5xl">{TEXT.exploreTitle1}</span><br />
                  {TEXT.exploreTitle2}
                </h2>
                <p className="explore-description text-sm text-container-foreground md:text-start leading-relaxed">{TEXT.exploreDescription1}</p>
            </div>
            <div className="explore-user inline-flex items-center justify-center gap-x-2 xl:justify-end xl:self-end xl:mb-5">
              <Avatar src="/images/explore-perfil.png" alt="Explore profile" size="small" />
              <span className="explore-name text-xs text-neutral-100">Paul James</span>
            </div>
          </div>
      </div>
    </section>
  )
}