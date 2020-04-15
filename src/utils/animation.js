import { keyframes } from 'styled-components';

export const popIn = keyframes`
  0% {transform: scale(0.01)}
  100% {transform: scale(1)}
`;

export const fadeIn = keyframes`
  from {opacity: .4}
  to {opacity: 1}
`;

export const slideInLeft = keyframes`
  0% {transform: translateX(-100%)}
  100% {transform: translateX(0)}
`;

export const slideInRight = keyframes`
  0% {transform: translateX(100%)}
  100% {transform: translateX(0)}
`;