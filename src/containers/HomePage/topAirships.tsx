import styled from "styled-components";
import tw from "twin.macro";
import { Airship } from "../../components/airship";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import airshipService from "../../services/airshipService";
import { Dispatch } from "@reduxjs/toolkit";
import { GetAirships_airships } from "../../services/airshipService/__generated__/GetAirships";
import { setTopAirships } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createSelector } from "reselect";
import { makeSelectTopAirships } from "./selectors";
import { MoonLoader } from "react-spinners";

const TopAirshipsContainer = styled.div`
  ${tw`
max-w-screen-lg
w-full
flex
flex-col
items-center
justify-center
px-4
md:px-0
mb-10
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

const AirshipContainer = styled.div`
  ${tw`
w-full
flex
flex-wrap
justify-center
mt-7 
md:mt-10
`}
`;

const EmptyAirships = styled.div`
  ${tw`
w-full
flex
justify-center
items-center
text-sm
text-gray-500
`}
`;

const LoadingContainer = styled.div`
  ${tw`
w-full
mt-9
flex
justify-center
items-center
text-base
text-black
`}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopAirships: (airships: GetAirships_airships[]) =>
    dispatch(setTopAirships(airships)),
});

const stateSelector = createSelector(makeSelectTopAirships, (topAirships) => ({
  topAirships,
}));

export function TopAirships() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topAirships } = useSelector(stateSelector);
  const { setTopAirships } = actionDispatch(useDispatch());

  const fetchTopAirships = async () => {
    setLoading(true);
    const airships = await airshipService.getAirships().catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Airships: ", airships);
    if (airships) setTopAirships(airships);
    setLoading(false);
  };

  useEffect(() => {
    fetchTopAirships();
  }, []);

  const isEmptyTopAirships = !topAirships || topAirships.length === 0;

  const airships =
    (!isEmptyTopAirships &&
      topAirships.map((airship) => (
        <Airship {...airship} thumbnailSrc={airship.thumbnailSrc} />
      ))) ||
    [];

  const numberOfDots = isMobile
    ? airships.length
    : Math.ceil(airships.length);

  return (
    <TopAirshipsContainer>
      <Title>The most popular deals!</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyTopAirships && !isLoading && (
        <EmptyAirships>No airships to show.</EmptyAirships>
      )}
      {!isEmptyTopAirships && !isLoading && (
        <AirshipContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={airships}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </AirshipContainer>
      )}
    </TopAirshipsContainer>
  );
}
