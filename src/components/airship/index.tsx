import { GiElectric, GiSpeedometer } from "react-icons/gi";
import styled from "styled-components";
import tw from "twin.macro";
import { IAirship } from "../../typings/airship";
import { Button } from "../button";
import { BsPeopleFill } from "react-icons/bs";

interface IAirshipProps extends IAirship {}

const AirshipContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

const AirshipThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const AirshipName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    my-1
  `};
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-auto
  `};
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `};
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const AirshipDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const AirshipDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

const AirshipInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `};
`;

const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    my-2
  `};
`;

const RentButton = styled(Button)`
  ${tw`
min-w-full
mt-5
`}
`;

export function Airship(props: IAirshipProps) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    capacity,
    speed,
    gas,
  } = props;

  return (
    <AirshipContainer>
      <AirshipThumbnail>
        <img src={thumbnailSrc} alt="airship" />
      </AirshipThumbnail>
      <AirshipName>{name}</AirshipName>
      <PricesContainer>
        <DailyPrice>
          $ {dailyPrice}
          <SmallText> /day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          $ {monthlyPrice}
          <SmallText> /month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <AirshipDetailsContainer>
        <AirshipDetail>
          <SmallIcon>
            <BsPeopleFill />
          </SmallIcon>
          <AirshipInfo>{capacity}</AirshipInfo>
        </AirshipDetail>
        <AirshipDetail>
          <SmallIcon>
            <GiSpeedometer />
          </SmallIcon>
          <AirshipInfo>{speed} km/h</AirshipInfo>
        </AirshipDetail>
        <AirshipDetail>
          <SmallIcon>
            <GiElectric />
          </SmallIcon>
          <AirshipInfo>{gas}</AirshipInfo>
        </AirshipDetail>
      </AirshipDetailsContainer>
      <RentButton text="Rent now" />
    </AirshipContainer>
  );
}
