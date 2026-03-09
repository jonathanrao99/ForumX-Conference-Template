import HeroNextConfo from "@/components/gaiss/HeroNextConfo";
import AboutSection from "@/components/gaiss/AboutSection";
import MeetOurSpeakers from "@/components/gaiss/MeetOurSpeakers";
import WhatToExpect from "@/components/gaiss/WhatToExpect";
import ConferenceSessionsImage from "@/components/gaiss/ConferenceSessionsImage";
import FeaturedSessions from "@/components/gaiss/FeaturedSessions";
import TicketsNextConfo from "@/components/gaiss/TicketsNextConfo";
import MeetOurPartners from "@/components/gaiss/MeetOurPartners";
import FAQNextConfo from "@/components/gaiss/FAQNextConfo";
import ReadyToJoinCTA from "@/components/gaiss/ReadyToJoinCTA";
import ImagesMarquee from "@/components/gaiss/ImagesMarquee";

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
