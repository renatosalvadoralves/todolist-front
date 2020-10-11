import React, {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
} from 'react';
import { Label, ErrorSpan, StyledInput } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label?: string;
  error?: string;
  required?: boolean;
}
const Input: ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  { name, type = 'text', required = false, label, error, ...rest },
  ref,
) => (
  <div style={{ position: 'relative' }}>
    {label && (
      <Label>
        {label}
        {required && '*'}
      </Label>
    )}

    <StyledInput ref={ref} name={name} type={type} {...rest} />
    {error && <ErrorSpan>{error}</ErrorSpan>}
  </div>
);

export default memo(forwardRef(Input));
