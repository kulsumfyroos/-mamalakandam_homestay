import TEXT from "@/lang/es.json";
import { RiLeafLine, RiWaterFlashLine, RiPlaneLine, RiRoadMapLine, RiTreeLine, RiMapPinLine } from "@remixicon/react";

export default async function Location() {

  return (
    <section className="location section" id="location">

      <div className="location-container section-container grid gap-6 gap-y-12 grid-cols-1 justify-center md:items-center lg:grid-cols-2 xl:grid-cols-c xl:gap-x-28 xl:py-4">
        <div className="location-data overflow-hidden text-center md:text-start">
          <h2 className="section-title md:text-start">
            <span className="font-dancing text-amber-600 text-3xl lg:text-4xl">{TEXT.locationTitle1}</span><br />
            {TEXT.locationTitle2}
          </h2>
          <p className="location-description mb-8 text-muted-foreground xl:mb-12 leading-relaxed">
            {TEXT.locationDescription1}
          </p>
          <div className="section-data text-start rounded-r-md grid grid-cols-1 md:grid-cols-max2 gap-y-2 gap-x-4">
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiLeafLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup1[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup1[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiMapPinLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup2[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup2[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiWaterFlashLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup3[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup3[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiTreeLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup4[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup4[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiPlaneLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup5[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup5[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiRoadMapLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup6[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup6[1]}</span></div>
          </div>
        </div>
        <div className="location-image shadow-md rounded-lg overflow-hidden w-full h-full lg:-order-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31445.17025742099!2d76.65!3d10.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e4e2a5e5a5a5%3A0x1234567890abcdef!2sThattekkad%20Bird%20Sanctuary!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full min-h-[300px] object-cover" loading="lazy" title="Mamalakandam, Kuttampuzha, Thattekkad"></iframe>
        </div>
      </div>

    </section>
  ) 
}