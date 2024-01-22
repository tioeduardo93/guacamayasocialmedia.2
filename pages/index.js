import { MainLayout } from "@/layouts/MainLayout";
import { AboutUs } from "@/sections/home/AboutUs";
import { CTA } from "@/sections/home/CTA";
import { Hero } from "@/sections/home/Hero";
import { PeopleWhoTrustUs } from "@/sections/home/PeopleWhoTrustUs";
import { Services } from "@/sections/home/Services";
import { chakra } from "@chakra-ui/react";

export default function Home() {
  function clickLink() {
    const link = document.querySelector("#cta-link");
    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      link.dispatchEvent(event);
    } else if (link.fireEvent) {
      link.fireEvent("onclick");
    }
  }
  return (
    <MainLayout>
      <Hero />
      <PeopleWhoTrustUs />
      <Services />

      <chakra.div cursor="pointer">
        <img onClick={clickLink} src="/diseno/banners/xpromo1.png" alt="" />
      </chakra.div>
      <AboutUs.AboutUs />
      <AboutUs.OurTeam />
      <chakra.div cursor="pointer" position={"relative"}>
        <img onClick={clickLink} src="/diseno/banners/xpromo2.png" alt="" />
      </chakra.div>
      <CTA />
    </MainLayout>
  );
}
