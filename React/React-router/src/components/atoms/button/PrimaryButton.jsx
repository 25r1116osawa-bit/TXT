import BaseButton from "./BaseButton"; // {} は不要
import styled from "styled-components";

export const PrimaryButton = ({ children, ...rest }) => {
  return <SButton {...rest}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #4f46e5;

  &:hover {
    background-color: #4338ca;
  }
`;
