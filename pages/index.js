import { MainLayout } from "@/layouts/MainLayout";
import { AboutUs } from "@/sections/home/AboutUs";
import { CTA } from "@/sections/home/CTA";
import { Hero } from "@/sections/home/Hero";
import { PeopleWhoTrustUs } from "@/sections/home/PeopleWhoTrustUs";
import { Services } from "@/sections/home/Services";
import { chakra } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <PeopleWhoTrustUs />
      <Services />
      <chakra.div>
        <img src="/diseno/banners/xpromo1.png" alt="" />
      </chakra.div>
      <AboutUs.AboutUs />
      <AboutUs.OurTeam />
      <chakra.div position={'relative'}>
        <img src="/diseno/banners/xpromo2.png" alt="" />
      </chakra.div>
      <CTA />
    </MainLayout>
  )
}
