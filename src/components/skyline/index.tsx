import { GiZeppelin } from "react-icons/gi";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const SkylineContainer = styled.div`
  min-height: 150px;
  background: url(./skyline.png) repeat-x;
  ${tw`
w-full
relative
hidden
md:block
`}
`;

const Flight = keyframes`
  0% {
    left: 5%;
    transform: rotateY(0deg);
  }

  50% {
    left: 90%;
    transform: rotateY(0deg);
  }
  53% {
    left: 90%;
    transform: rotateY(180deg);
  }

  98% {
      left: 5%;
      transform: rotateY(180deg);
  }
  100% {
      left: 5%;
      transform: rotateY(0deg);
  }
`;

const FlightContainer = styled.div`
  animation: ${Flight} 75s linear infinite;
  top: 5px;
  left: 50%;
  ${tw`
absolute
`}
`;

export function Skyline() {
  return (
    <SkylineContainer>
      <FlightContainer>
        <GiZeppelin size={40} color={"white"} />
      </FlightContainer>
    </SkylineContainer>
  );
}
