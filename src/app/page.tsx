import HeroNextConfo from "@/components/nextconfo/HeroNextConfo";
import AboutSection from "@/components/nextconfo/AboutSection";
import MeetOurSpeakers from "@/components/nextconfo/MeetOurSpeakers";
import WhatToExpect from "@/components/nextconfo/WhatToExpect";
import ConferenceSessionsImage from "@/components/nextconfo/ConferenceSessionsImage";
import FeaturedSessions from "@/components/nextconfo/FeaturedSessions";
import TicketsNextConfo from "@/components/nextconfo/TicketsNextConfo";
import MeetOurPartners from "@/components/nextconfo/MeetOurPartners";
import FAQNextConfo from "@/components/nextconfo/FAQNextConfo";
import ReadyToJoinCTA from "@/components/nextconfo/ReadyToJoinCTA";
import ImagesMarquee from "@/components/nextconfo/ImagesMarquee";

export default function Home() {
  return (
    <>
      <HeroNextConfo />
      <AboutSection />
      <MeetOurSpeakers />
      <WhatToExpect />
      <ConferenceSessionsImage />
      <FeaturedSessions />
      <TicketsNextConfo />
      <MeetOurPartners />
      <FAQNextConfo />
      <ReadyToJoinCTA />
      <ImagesMarquee />
    </>
  );
}
