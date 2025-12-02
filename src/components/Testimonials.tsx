import { getAllUserReviews } from "@/hooks/useUserReviews";
import TestimonialsSwiper from "./TestimonilasSwiper";
import Review from "@/interfaces/user_review.interface";
import TEXT from "@/lang/es.json";
import Avatar from "@/components/ui/Avatar";
import { Rating } from "@mui/material";
// import AdSenseBanner from "@/providers/AdSenseBanner";

export default async function Testimonials() {

  const REVIEWS: Review[] = await getAllUserReviews();

  return (
    <section className="testimonials section pb-20 relative" id="testimonials">
      
      <div className="w-full bg-container pb-28 border-b-2 border-secondary">
        <div className="container section-container grid grid-cols-1 md:grid-cols-2">
          
          <div className="testimonials-data box p-6">
            {/*Tooltip */}
            <span className="flex items-center justify-start text-xl gap-2 font-montserrat">
              <Rating className="!text-secondary" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
              <span className="text-neutral-100"> 4.4 Rating</span>
            </span>
            {/*Title */}
            <h3 className="section-title text-neutral-100 font-montserrat text-start">
              <span className="font-dancing text-amber-400">{TEXT.testimonilasTitle1}</span><br/>
              {TEXT.testimonilasTitle2}
            </h3>
            <p className="text-base text-container-foreground text-start mb-5">{TEXT.testimonilasDescription1}</p>
            <div className="box text-start space-y-2">
              <span className="inline-flex gap-4">
                <Avatar className='w-6 h-6' src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="google logo" />
                <Avatar className='w-6 h-6' src="https://www.gstatic.com/travel-hotels/branding/icon_100532569.png" alt="google logo" />
              </span>
            </div>
          </div>
          
          {/* <div className="box hidden md:flex p-6 items-center justify-center">
            <AdSenseBanner className="w-80 aspect-[6/5]" dataAdSlot="3404545119" dataAdFormat="auto" dataFullWidthResponsive="true" />
          </div> */}
          
        </div>
      </div>

      <div className="container max-w-full px-2 md:px-0 absolute top-1/2 translate-y-12 lg:translate-y-20 left-0">
        <TestimonialsSwiper reviews={REVIEWS} />
      </div>
    </section>
  );
}
