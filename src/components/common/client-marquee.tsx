import Marquee from "@/components/ui/marquee";
import MicroHeading from "../common/micro-heading";

const clientsLogo = [
  "/clients/client-1.svg",
  "/clients/client-2.svg",
  "/clients/client-3.svg",
  "/clients/client-4.svg",
  "/clients/client-5.svg",
  "/clients/client-6.svg",
  "/clients/client-7.svg",
  "/clients/client-8.svg",
  "/clients/client-9.svg",
  "/clients/client-10.svg",
];

const ReviewCard = ({ src }: { src: string }) => {
  return <img src={src} className="px-6 h-16" />;
};

export function ClientMarquee() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-12">
        <div className="mb-6">
          <MicroHeading text="Trusted bY 300+ LEADING BUSINESS" />
        </div>
        <Marquee pauseOnHover className="[--duration:90s]">
          {clientsLogo.map((img, index) => (
            <ReviewCard src={img} key={index} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
