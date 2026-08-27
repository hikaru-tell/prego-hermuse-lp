import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Relate from "@/components/Relate";
import Work from "@/components/Work";
import World from "@/components/World";
import WhereWeStand from "@/components/WhereWeStand";
import WhyHerMuse from "@/components/WhyHerMuse";
import Curriculum from "@/components/Curriculum";
import LearningMaterials from "@/components/LearningMaterials";
import HowWeLearn from "@/components/HowWeLearn";
import BeforeAfter from "@/components/BeforeAfter";
import LearnerStories from "@/components/LearnerStories";
import Intermission from "@/components/Intermission";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">
        本文へ移動
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Relate />
        <Work />
        <World />
        <WhereWeStand />
        <WhyHerMuse />
        <Curriculum />
        <LearningMaterials />
        <HowWeLearn />
        <BeforeAfter />
        <LearnerStories />
        <Intermission />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
