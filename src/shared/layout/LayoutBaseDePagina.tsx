import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/container/Container'
import { Header } from './utils/Header'

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`

export function LayoutBaseDePagina({ children }: ILayoutBaseDePaginaProps) {
  return (
    <Box>
      <Header />
      <Container display="flex" height="100%" width="100%" padding={2}>
        {children}
      </Container>
    </Box>
  )
}
