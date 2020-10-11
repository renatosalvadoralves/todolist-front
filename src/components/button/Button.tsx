import React, {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
} from 'react';

import { StyledButton } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, IProps> = (
  { text = 'Submit', ...rest },
  ref,
) => (
  <StyledButton ref={ref} type="submit" {...rest}>
    <span>{text}</span>
  </StyledButton>
);

export default memo(forwardRef(Button));
