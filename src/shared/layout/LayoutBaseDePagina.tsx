import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Container } from '@/shared/components/container/Container'
import { Header } from '@/shared/layout/utils/Header'
import { CardMenu } from '../components/cardMenu/CardMenu'
import { useCartLength } from '../services/CartLength'
import { CartFooter } from './utils/cartMenu/CartFooter'
import { CartContent } from './utils/cartMenu/cartContent/CartContent'
import { getCartText } from './utils/cartMenu/getCartText'
import { MenuNav } from './utils/MenuNav'

interface LayoutBaseDePaginaProps {
  children: React.ReactNode
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

export function LayoutBaseDePagina({ children }: LayoutBaseDePaginaProps) {
  const [expandedCartMenu, setExpandedCartMenu] = useState(false)
  const cartLength = useCartLength()

  const toggleCartMenu = useCallback(() => {
    setExpandedCartMenu(!expandedCartMenu)
  }, [expandedCartMenu])

  return (
    <Box>
      <Header openCart={toggleCartMenu} />
      <MenuNav />
      <CardMenu
        label={getCartText(cartLength)}
        expanded={expandedCartMenu}
        closeCard={toggleCartMenu}
      >
        <CartContent />
        <CartFooter />
      </CardMenu>
      <Container
        display="flex"
        flexDir="column"
        height="100%"
        width="100%"
        padding={2}
        marginTop={4}
      >
        {children}
      </Container>
    </Box>
  )
}
