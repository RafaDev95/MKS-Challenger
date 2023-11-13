'use client'

import styled from 'styled-components'

const Logo = () => {
  return (
    <StyledH1>
      MKS <StyledSpan>Sistema</StyledSpan>
    </StyledH1>
  )
}
export default Logo

const StyledH1 = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 600;
`

const StyledSpan = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 300;
`
