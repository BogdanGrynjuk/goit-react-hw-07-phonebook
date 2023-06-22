import styled from "@emotion/styled";
import { keyframes } from '@emotion/css';

const spinnerBorder = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 16px;  
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: -0.125em;
  border: 0.2em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: 0.75s linear infinite ${spinnerBorder};
`;