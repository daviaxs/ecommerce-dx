import { useContext } from 'react'
import styled from 'styled-components'
import swal from 'sweetalert'

import { ButtonPrimary } from '@/shared/components/buttons/ButtonPrimary'
import { Container } from '@/shared/components/container/Container'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { ButtonClearCart } from './ButtonClearCart'
import { CartContext } from '@/shared/contexts/CartContext'

const CartFooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: ${theme.gray[800]};
  padding: 1rem 1rem 5rem;
  width: 100%;
  height: 10rem;

  position: relative;

  .button {
    position: absolute;
    bottom: 0.5rem;
  }
`

export function CartFooter() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { data, quantity, clearCart } = useContext(CartContext)

  const totalPrice = data.reduce((accumulator, current) => {
    return accumulator + current.price * (quantity[current.id] || 1)
  }, 0)

  function CompletedPurchase() {
    swal({
      title: 'Compra realizada com sucesso!',
      icon: 'success',
    })
  }

  return (
    <CartFooterStyle className="footer">
      <Container
        display="flex"
        justifyContent="space-between"
        width="100%"
        height=""
        className="a"
      >
        <THeadingPrimary fontSize={1}>Total:</THeadingPrimary>
        <Container
          display="flex"
          flexDir="column"
          align="end"
          width=""
          height=""
        >
          <THeadingPrimary fontSize={windowWidth <= 400 ? 1.5 : 2}>
            {totalPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </THeadingPrimary>
          {data.length > 0 && <ButtonClearCart onClick={clearCart} />}
        </Container>
      </Container>

      <ButtonPrimary
        variant="green"
        width="90%"
        onClick={CompletedPurchase}
        className="button"
        disabled={!(data.length > 0)}
      >
        <THeadingPrimary txtColor="white" fontSize={1.5}>
          Concluir compra
        </THeadingPrimary>
      </ButtonPrimary>
    </CartFooterStyle>
  )
}
