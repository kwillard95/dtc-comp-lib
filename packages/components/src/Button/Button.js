import React from "react";
import styled from "styled-components";

import Theme from '../Theme/Theme'
import { textStyle, containedStyle } from "./Button-style";

const TextButton = styled.a([textStyle]);
const ContainedButton = styled.button([containedStyle]);

const Button = ({
  onClick,
  variant = "contained",
  primary,
  className,
  children,
}) => {
  if (variant === "text") {
    return (
      <Theme>
      <TextButton className={className} onClick={onClick} primary={primary} variant={variant}>
        {children}
      </TextButton>
      </Theme>
    );
  }
  if (variant === "contained") {
    return (
      <Theme>
      <ContainedButton
        className={className}
        onClick={onClick}
        primary={primary}
        variant={variant}
      >
        {children}
      </ContainedButton>
      </Theme>
    );
  }
};

export default Button;
