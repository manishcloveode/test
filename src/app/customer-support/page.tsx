import WabaisInterface from "@/components/common/visit";
import CustomerSection from "@/components/wabais/customer-support-section";
import { Sofia_Sans } from "next/font/google";

// Define the Sofia Sans font
const sofiaSans = Sofia_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-sofia-sans",
});

export default function Customer() {
    return (
        <div className={`${sofiaSans.variable} font-sofia-sans`}>
            <CustomerSection />
            <WabaisInterface />
        </div>
    );
}
