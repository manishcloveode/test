import MicroHeading from "../common/micro-heading";

export default function Header() {
  return (
    <div className="relative md:py-24 py-16">
      <div className="relative flex items-center justify-center px-4  container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 h-full flex flex-col justify-center items-center">
          <MicroHeading text="ABOUT US" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight font-vesper">
            Simplifying Customer Engagement with WhatsApp
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto font-sofia text-lg">
            At WABAIS, we help businesses connect effortlessly with their
            customers using advanced Chatbots, seamless API solutions, and smart
            integrations.
          </p>
        </div>
      </div>
    </div>
  );
}
