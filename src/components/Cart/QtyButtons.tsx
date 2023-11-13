'use client'

import { Minus, Plus } from 'lucide-react'
import styled from 'styled-components'

const QtyButtons = () => {
  return (
    <div>
      <ButtonsWrapper>
        <StyledButton>
          <Minus size={12} style={{ padding: '2px' }} />
        </StyledButton>
        <StyledQty>1</StyledQty>
        <StyledButton>
          <Plus size={12} style={{ padding: '2px' }} />
        </StyledButton>
      </ButtonsWrapper>
    </div>
  )
}

export default QtyButtons

const ButtonsWrapper = styled.div`
  height: 19px;
  padding: 3px;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  border: 0.3px solid #bfbfbf;
  background: white;

  display: flex;
  align-items: center;
  gap: 0 4px;
`
const StyledButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  cursor: pointer;

  display: grid;
  place-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: scale(0.95);
  }
`

const StyledQty = styled.p`
  padding: 0 7px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;

  font-size: 8px;
  font-weight: 400;
`
