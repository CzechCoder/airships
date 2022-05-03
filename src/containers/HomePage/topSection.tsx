import styled from "styled-components";
import tw from "twin.macro";

import AirshipHeroImg from "../../assets/images/airship_hero.png";
import CloudImg from "../../assets/images/cloud.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
w-full
max-w-screen-2xl
flex
justify-between
pl-3
pr-3
lg:pl-12
lg:pr-12
text-black
`};
`;

const LeftContainer = styled.div`
  ${tw`
w-1/2
flex
flex-col
`}
`;

const RightContainer = styled.div`
  ${tw`
w-1/2
flex
flex-col
relative
mt-20
`}
`;

const Slogan = styled.h1`
  ${tw`
font-bold
text-2xl
xl:text-6xl
sm:text-3xl
md:text-5xl
md:font-extrabold
mb-4
sm:leading-snug
lg:leading-normal
xl:leading-normal
`}
`;

const Description = styled.p`
  ${tw`
text-xs
lg:text-sm
xl:text-lg
sm:max-h-full
// max-h-12
`}
`;

const BlobContainer = styled.div`
  width: 15em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -5em;
  z-index: 0;

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 17em;
    max-height: 10em;
    right: -9em;
    top: -16em;
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 45em;
    height: 10em;
    right: -5em;
    top: -12em;
  }

  // @media (min-width: ${SCREENS.xl}) {
  //   width: 30em;
  //   max-height: 30em;
  //   right: -13em;
  //   top: -9em;
  // }
`;

const HeroAirship = styled.div`
width: auto;
height: 10em;
right: -6em;
top: -6em;
position: absolute;

img {
 width: auto;
 height: 100%
 max-width: fit-content;
}

@media (min-width: ${SCREENS.sm}) {
height: 16em;
right: -6em;
top: -6em;
  }

@media (min-width: ${SCREENS.lg}) {
height: 21em;
right: -8em;
top: -5em;
  }

@media (min-width: ${SCREENS.xl}) {
height: 30em;
right: -13em;
top: -14em;
  }

`;

const ButtonsContainer = styled.div`
  ${tw`
flex
flex-wrap
mt-4
`}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent the best airships with us.</Slogan>
        <Description>
          Have you ever dreamt of being among the birds in the sky, anytime at
          your leisure? With us you can keep your head in the clouds long as you
          want to. Take trips, make parties, admire the world from above! Great
          service at affordable prices.
          <br />
          Come asap so you can still get one!
        </Description>
        <ButtonsContainer>
          <Button text="Rent an airship!" />
          <Button theme="outlined" text="Take the tour!" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={CloudImg} alt="cloud" />
        </BlobContainer>
        <HeroAirship>
          <img src={AirshipHeroImg} alt="airship" />
        </HeroAirship>
      </RightContainer>
    </TopSectionContainer>
  );
}
