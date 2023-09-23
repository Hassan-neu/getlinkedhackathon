import Criteria from "@/components/pages/home/criteria";
import Faq from "@/components/pages/home/faq";
import Hero from "@/components/pages/home/hero";
import Introduction from "@/components/pages/home/introduction";
import Rewards from "@/components/pages/home/rewards";
import Timeline from "@/components/pages/home/timeline";
import Partners from "@/components/pages/home/partners";
import Policy from "@/components/pages/home/policy";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <Introduction />
            <Criteria />
            <Faq />
            <Timeline />
            <Rewards />
            <Partners />
            <Policy />
        </main>
    );
}
