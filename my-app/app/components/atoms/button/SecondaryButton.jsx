// PrimaryButton.jsx

import styled from "styled-components";
import BaseButton from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;

  return <SButton >{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #e58b46;

  &:hover {
    background-color: #4338ca;
  }
`;
