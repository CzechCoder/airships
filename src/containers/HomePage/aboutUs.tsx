import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import WhaleImg from "../../assets/images/whale.jpg";

const AboutUsContainer = styled.div`
  align-items: flex-start;
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    py-4
    px-7
    md:px-0
  `};
`;

const AirshipContainer = styled.div`
  height: auto;
  img {
    width: 100%;
    border-radius: 5em;
  }
  @media (min-width: ${SCREENS.md}) {
    max-width: 45%;
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:px-6
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
    mt-8
    md:mt-0
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-700
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <AirshipContainer>
        <img src={WhaleImg} alt="Whale" />
      </AirshipContainer>
      <InfoContainer>
        <Title>Feel the best experience with our rental deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          porro distinctio eius esse officia sequi voluptatibus eveniet ducimus.
          Omnis nobis provident aliquid quidem hic repudiandae. Modi atque
          excepturi enim at? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laudantium porro distinctio eius esse officia sequi voluptatibus
          eveniet ducimus. Omnis nobis provident aliquid quidem hic repudiandae.
          Modi atque excepturi enim at?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
