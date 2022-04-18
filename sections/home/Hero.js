import { CTAGroup } from '@/components/CTAGroup/CTAGroup.component';
import { Title } from '@/components/Title/Title.component';
import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer.component';
import { Grid, chakra } from '@chakra-ui/react';

export const Hero = () => {
    return (
        <Grid
            templateColumns={{
                base: '1fr',
                xl: '1fr 1fr'
            }}
            justifyItems="center"
            alignItems={'center'}
            minH="500px"
        >
            <div>
                <Title mb={4} textAlign="start" fontSize="42px">
                    Videos, management <br />
                    Ads & Design
                </Title>
                <CTAGroup />
            </div>
            <chakra.div p={12} position="relative">
                <VideoPlayer />
                <chakra.img src="/home/influencers.png" alt="" />
            </chakra.div>
        </Grid>
    );
};
