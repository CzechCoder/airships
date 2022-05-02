import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FaCalendarAlt, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Marginer } from "../marginer";
import { Button } from "../button";

import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
py-1
px-2
md:py-2
md:px-9
`}
`;

const ItemContainer = styled.div`
  ${tw` flex relative`}
`;

const Icon = styled.div`
  ${tw`
 text-black
 fill-current
 text-xs
 md:text-base
 mr-1
md:mr-3
 `}
`;

const SmallIcon = styled.span`
  ${tw`
text-gray-500 fill-current text-xs md:text-base ml-1
`}
`;

const Name = styled.div`
  ${tw` text-gray-600 text-xs md:text-sm cursor-pointer select-none
`}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
bg-gray-300 
mx-2
md:mx-5
`}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0em;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `}

  @media(min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setIsStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FaCalendarAlt />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick up date</Name>
        <SmallIcon>
          {isStartCalendarOpen ? <FaCaretUp /> : <FaCaretDown />}
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FaCalendarAlt />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return date</Name>
        <SmallIcon>
          {isReturnCalendarOpen ? <FaCaretUp /> : <FaCaretDown />}
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset={true as any}
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book your flight" />
    </CardContainer>
  );
}
