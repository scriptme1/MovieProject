import React from 'react';
import {
  Section,
  Background,
  VideoBg,
  Bg,
  TextDiv,
  H1,
  P,
  Button,
} from './Banner.styles';

import videoFile from '../../video/bg-vid1.mp4';

const Banner = () => {
  return (
    <>
      <Section>
        <Background>
          <VideoBg autoPlay muted loop>
            <source src={videoFile} type="video/mp4" />
            <source src={videoFile} type="video/ogg" />
          </VideoBg>
        </Background>
        <Bg></Bg>
        <TextDiv>
          <H1>BROWSE AND GET TO KNOW THE LATEST MOVIES</H1>
          <P>Sign up with us and create your own movies collections </P>
          <a href="hotdeals.html">
            <Button>Explore Movies</Button>
          </a>
        </TextDiv>
      </Section>
    </>
  );
};

export default Banner;
