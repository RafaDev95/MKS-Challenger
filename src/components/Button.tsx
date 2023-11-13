'use client'

import styled, { css } from 'styled-components'

type ButtonProps = {
  variant?: 'productCard' | 'justIcon' | 'callToAction'
}

const Test = () => {}

const Button = styled.button<ButtonProps>`
  border-radius: ${(props) => props.theme.borderRadius.md};
  width: 90px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.variant === 'productCard' &&
    css`
      width: 100%;
      background: ${(props) => props.theme.colors.primary};
      color: #fff;
      padding: 4px 0;
      border-radius: 0 0 8px 8px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;

      &:hover {
        background: ${(props) => props.theme.colors.darkerPrimary};
        transform: scale(1);
      }
      &:active {
        transform: scale(0.95);
      }
    `}

  ${(props) =>
    props.variant === 'justIcon' &&
    css`
      background: black;
      color: #fff;
      border-radius: 50%;
      padding: 5px;
      width: inherit;
      height: inherit;

      &:hover {
        background: ${(props) => props.theme.colors.darkGray};
        transform: scale(1);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
      
      ${(props) =>
    props.variant === 'callToAction' &&
    css`
      background: black;
      color: #fff;
      border-radius: 0;
      width: 100%;
      height: 97px;
      &:hover {
        background: ${(props) => props.theme.colors.darkGray};
        transform: scale(1);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`

export default Button
