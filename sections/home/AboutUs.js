import { Title } from '@/components/Title/Title.component';
import { Center, chakra, Grid, Text } from '@chakra-ui/react';

const TeamItem = ({
  src,
  name,
  position,
}) => {
  return (
    <Center flexDir="column">
      <img style={{borderRadius: '999px', height: "149px", width: '149px'}} src={src} alt="" />
      <Text textTransform="capitalize" mt={2} textAlign={'center'} fontSize={'md'} fontWeight='bold'>{name}</Text>
      <Text opacity={.8} mt={1} textAlign={'center'} fontSize={'sm'}>{position}</Text>
    </Center>
 );
};

const OurTeamComponent = () => {
      return <Grid
        maxW={'1280px'}
        mx="auto"
        templateColumns={{
          base: '1fr',
          xl: '1fr 1fr'
        }}
        pb={8}
        gap={4}
      >
        <Grid
          mt={8}
          templateColumns={{
            base: '1fr 1fr',
            xl: '1fr 1fr 1fr'
          }}
          gap={4}
        >
          <TeamItem
            src="/equipo/athina.jpg"
            name="Athina Lohmann"
            position="Video Editor"
          />

          <TeamItem
            src="/equipo/dani.jpg"
            name="Dani Colina"
            position="Designer / Video Editor"
          />

          <TeamItem
            src="/equipo/daniel.jpg"
            name="Daniel Gomez"
            position="Software Developer"
          />

          <TeamItem
            src="/equipo/eli.jpg"
            name="Elizabeth Pinto"
            position="Marketing Planner"
          />
          <TeamItem
            src="/equipo/leo.jpg"
            name="Leonardo Angulo"
            position="Content Manager / Filmmaker"
          />
        </Grid>
        <Center>
          <img src="/team.jpg" alt="" />
        </Center>
      </Grid>
}

const AboutUsComponent = () => {
  return (
    <chakra.section
      px={8}
      maxW={'1280px'}
      mx={'auto'}
      pb={12}
    >
      <Grid
        alignItems={'center'}
        py={12}
        templateColumns={{
          base: '1fr',
          xl: '1.3fr 1fr 1fr'
        }}
        gap={12}
      >
        <div>
          <Title lineHeight="1" textAlign="start">
            We love what we do <br />
            and we love  <br />
            every success story <br />
             that speaks for us.
          </Title>
        </div>
        <div>
          <Text color="#EB3663" fontWeight={'bold'}>About Us</Text>
          <Text>
            Guacamaya is more than a marketing agency, it is a space for the development of competitive creativity, we have brought the brightest minds to ensure the success of your advertising campaigns.
          </Text>
        </div>
        <div>
          <Text color="#EB3663" fontWeight={'bold'}>Did you know?</Text>
          <Text>
            A Macaw (Guacamaya) is a tropical bird full of colors, creative and free to fly high, the macaw represents us.
          </Text>
        </div>
      </Grid>
    </chakra.section>
 );
};


export const AboutUs = {
  AboutUs: AboutUsComponent,
  OurTeam: OurTeamComponent,
}
