import { theme } from '@/shared/theme'
import React from 'react'
import styled from 'styled-components'

interface IButtonPrimaryProps {
  variant: 'purple' | 'green' | 'red'
  width: '100%' | '90%'
  children: React.ReactNode
  className: string
  onClick: () => void
}

const getButtonColor = (variant: string) => {
  switch (variant) {
    case 'purple':
      return theme.purple[400]
    case 'green':
      return theme.green[400]
    default:
      return theme.red[400]
  }
}

const ButtonPrimaryStyle = styled.button<IButtonPrimaryProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};

  padding: 0.875rem 1.125rem;
  border-radius: 0.5rem;
  border: none;

  transition: all 0.2s ease-out;

  background-color: ${(props) => getButtonColor(props.variant)};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'purple' ? theme.purple[500] : theme.green[500]};
    outline: 0.063rem solid
      ${(props) =>
        props.variant === 'purple' ? theme.purple[300] : theme.green[300]};
    cursor: pointer;
  }

  &:focus-visible {
    outline: 0.2rem solid
      ${(props) =>
        props.variant === 'purple' ? theme.purple[300] : theme.green[800]};
  }
`

export function ButtonPrimary({
  children,
  variant,
  width,
  onClick,
  className,
}: IButtonPrimaryProps) {
  return (
    <ButtonPrimaryStyle
      className={className}
      variant={variant}
      width={width}
      onClick={onClick}
    >
      {children}
    </ButtonPrimaryStyle>
  )
}
