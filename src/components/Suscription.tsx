import TEXT from "@/lang/es.json";
import SuscriptionForm from "@/components/SuscriptionForm";
import Image from "next/image";

export default function Suscription() {
  
  return (
    <section className="join section bg-container" id="suscription">
      <div className="join-container container mx-auto md:max-w-screen-xl px-4 xl:px-20 grid gap-6 justify-center gap-y-12 pb-10 md:grid-cols-a md:items-center xl:pt-4 xl:gap-x-32 xl:grid-cols-b xl:pb-20">
        <div className="join-data text-center max-w-[340px]">
          <h2 className="section-title text-background mb-6 md:text-start md:mb-4 lg:mb-6 xl:text-[2.5rem]">
            <span className="font-dancing text-amber-400">{TEXT.joinTitle1}</span> <br /> 
            {TEXT.joinTitle2}
          </h2>
          <p className="join-description mb-8 text-container-foreground md:text-start md:mb-6 lg:mb-12">{TEXT.joinText1}</p>
          <SuscriptionForm />
        </div>

        <div className="join-image -order-1 w-full h-auto grid justify-items-center overflow-hidden">
            <div className="aspect-square w-[300px] xl:w-full relative">
              <Image
                className="join-img transition-transform duration-500 w-full h-full object-cover"
                alt="Nature view at Mamalakandam Homestay"
                src="/images/join-image.jpg" 
                width={380}
                height={380}
                sizes="(max-with: 425px) 75vw, (max-width: 768px) 50vw, (max-width: 1200px) 45vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,hsla(0,0%,10%,0)_50%,hsl(0,0%,10%)_92%)] pointer-events-none"></div>
            </div>
          {/* <div className="shading"></div> */}
        </div>
      </div>
    </section>
  );
}
