import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
px-5
py-3
outline-none
rounded-md
text-white
text-xs
font-thin
md:font-semibold
border-transparent
border-2
border-solid
focus:outline-none
transition-all
duration-200
ease-in-out
m-1
`}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
bg-black
hover:bg-transparent
hover:text-black
hover:border-black
`}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
border-black
text-black
bg-transparent
hover:bg-black
hover:text-white
hover:border-transparent
`}
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;
  if (theme === "outlined")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}
