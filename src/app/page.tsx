import HeroNextConfo from "@/components/nexus/HeroNextConfo";
import AboutSection from "@/components/nexus/AboutSection";
import MeetOurSpeakers from "@/components/nexus/MeetOurSpeakers";
import WhatToExpect from "@/components/nexus/WhatToExpect";
import ConferenceSessionsImage from "@/components/nexus/ConferenceSessionsImage";
import FeaturedSessions from "@/components/nexus/FeaturedSessions";
import TicketsNextConfo from "@/components/nexus/TicketsNextConfo";
import MeetOurPartners from "@/components/nexus/MeetOurPartners";
import FAQNextConfo from "@/components/nexus/FAQNextConfo";
import ReadyToJoinCTA from "@/components/nexus/ReadyToJoinCTA";
import ImagesMarquee from "@/components/nexus/ImagesMarquee";

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
