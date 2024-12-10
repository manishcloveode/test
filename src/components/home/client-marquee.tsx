import Marquee from "@/components/ui/marquee";
import MicroHeading from "../common/micro-heading";

const firstRow = [1, 2, 3, 4, 5, 6, 7];

const ReviewCard = () => {
  return <h1 className="uppercase px-6 font-sofia text-lg">Company’s Logo</h1>;
};

export function ClientMarquee() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl py-12">
        <div className="mb-6">
          <MicroHeading text="Trusted bY 300+ LEADING BUSINESS" />
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
