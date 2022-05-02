import tw from "twin.macro";
import styled from "styled-components";
import { GiZeppelin } from "react-icons/gi";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
flex
items-center
`}
`;

const LogoText = styled.div`
  ${tw`
text-xl
md:text-2xl
font-bold
text-black
m-1
`}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${`
    h-6
    md:h-9`}

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <GiZeppelin size={60} color={"white"} />
      </Image>
      <LogoText color={color || "white"}>Airships!</LogoText>
    </LogoContainer>
  );
}
