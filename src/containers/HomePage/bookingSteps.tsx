import styled from "styled-components";
import tw from "twin.macro";
import { FaCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";
import { GiZeppelin } from "react-icons/gi";

const Container = styled.div`
  ${tw`
w-full
flex
flex-col
items-center
px-3
lg:py-6 
`}
`;

const Title = styled.h2`
  ${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`}
`;

const StepsContainer = styled.div`
  ${tw`
flex
justify-evenly
flex-wrap
mt-7 
lg:mt-16 
`}
`;

const StepContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
flex
flex-col
md:w-96 
items-center
transition-colors
hover:text-red-500
m-3
p-6
rounded-3xl
bg-white
`}
`;

const Step = styled.div`
  ${tw`
flex
rounded-lg
items-center
justify-center
p-6
bg-white
`}
`;

const StepTitle = styled.h4`
  ${tw`
text-black
text-lg
font-semibold
mt-4 
`}
`;

const StepDescription = styled.p`
  ${tw`
text-xs
md:text-sm
text-center
w-10/12
text-gray-600 
`}
`;

const StepIcon = styled.span`
  ${tw`
text-black
text-3xl
`}
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>Simple as 1, 2, 3!</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FaMapMarkedAlt />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Airships! point and book your airship.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FaCalendarAlt />
            </StepIcon>
          </Step>
          <StepTitle>Pick-up Date</StepTitle>
          <StepDescription>
            Pick the best date that suits you to rent the airship.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <GiZeppelin />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Airship</StepTitle>
          <StepDescription>
            Book a nice airship for you with ease with a simple click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
