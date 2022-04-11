import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { Title } from "@/components/Title/Title.component";
import { MainLayout } from "@/layouts/MainLayout";
import { ServicesLink } from "@/sections/home/Services";
import { Grid, chakra, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <chakra.section p={8} maxW="1280px" mx="auto">

          <chakra.div
            p={4}
          >
            <Title textAlign="center" as="h3" fontSize="5xl">
              Our Services
            </Title>
            <Text mb={4} textAlign="center">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Text>
          </chakra.div>

        <Grid
          templateColumns={{
            lg: '1fr 1fr 1fr'
          }}
          gap={4}
          mb={8}
        >
          <ServicesLink href="/services/design"
            src="/diseno/servicios/upscale/xdesign.png" alt="" />

          <ServicesLink href="/services/influencer"
            src="/diseno/servicios/upscale/xinfluencer.png" alt="" />

          <ServicesLink href="/services/lead"
            src="/diseno/servicios/upscale/xlead.png" alt="" />

          <ServicesLink href="/services/management"
            src="/diseno/servicios/upscale/xmanagement.png" alt="" />

          <ServicesLink href="/services/photo"
            src="/diseno/servicios/upscale/xphoto.png" alt="" />

          <ServicesLink href="/services/video"
            src="/diseno/servicios/upscale/xvideo.png" alt="" />

          <ServicesLink href="/services/web"
            src="/diseno/servicios/upscale/xweb.png" alt="" />

        </Grid>

          <CTAGroup />
    </chakra.section>
  );
};

export default function Service() {
  return (
    <MainLayout>
      <Services />
    </MainLayout>
  );
};
