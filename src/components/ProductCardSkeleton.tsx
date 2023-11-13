'use client'

import styled, { keyframes } from 'styled-components'

export const loadingAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

const SkeletonStyle = styled.div`
  width: 217.5px;
  height: 285px;
  padding-top: 14px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.lightGray};
  box-shadow: 0px 20px 8px 0px rgba(0, 0, 0, 0.14);
  animation: ${loadingAnimation} 1.5s infinite;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px 0;
`

const SimulateImage = styled.div`
  height: 138px;
  width: 111px;

  background: rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.borderRadius.md};
`

const SimulateInfo = styled.div`
  width: 180px;
  height: 72px;
  padding: 0 14px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.borderRadius.md};
`

const SimulateButton = styled.div`
  height: 37px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 8px;
`

const ProductCardSkeleton = () => (
  <SkeletonStyle>
    <SimulateImage />
    <SimulateInfo />
    <SimulateButton />
  </SkeletonStyle>
)

export default ProductCardSkeleton
