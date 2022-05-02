import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookcard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Skyline } from "../../components/skyline";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopAirships } from "./topAirships";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="16em" />
      <AboutUs />
      <Marginer direction="vertical" margin="2em" />
      <TopAirships />
      <Skyline />
      <Footer />
    </PageContainer>
  );
}
