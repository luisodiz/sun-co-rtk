import styled from 'styled-components'
import ButtonLarge from '../Button/ButtonLarge'
import {dmSans, inter, getFontSize} from '../styles/mixins'
import Plus from '../../assets/img/plus.svg?react'
import Minus from '../../assets/img/minus.svg?react'
import {useState} from 'react'

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0;
  width: 18px;
  height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;

  svg {
    flex-shrink: 0;
    width: 100%;
    height: 100%;

    path {
      fill: ${props => props.theme.secondaryColor};
    }
  }

  @media ${props => props.theme.desktop} {
    &:hover {
      svg {
        path {
          fill: ${props => props.theme.buttonHoverBg};
        }
      }
    }
  }
`

// const StyledMinus = styled(Minus)`
//   width: 18px;
//   height: 18px;
//   cursor: pointer;
//
//   path {
//     fill: ${props => props.theme.secondaryColor};
//   }
//
//   &:hover {
//     path {
//       fill: ${props => props.theme.buttonHoverBg};
//     }
//   }
//
//   @media ${props => props.theme.desktop} {
//     width: 24px;
//     height: 24px;
//   }
// `
//
// const StyledPlus = styled(Plus)`
//   width: 18px;
//   height: 18px;
//   cursor: pointer;
//
//   path {
//     fill: ${props => props.theme.secondaryColor};
//   }
//
//   &:hover {
//     path {
//       fill: ${props => props.theme.buttonHoverBg};
//     }
//   }
//
//   @media ${props => props.theme.desktop} {
//     width: 24px;
//     height: 24px;
//   }
// `

const StyledAddToCart = styled.div`
  box-shadow: 0 3.33px 50px rgba(0, 0, 0, .08);
  border-radius: 15px;
  background: #fff;

  .info {
    padding: 24px 27px 18px;
    border-bottom: 1px solid #e9ebee;
  }

  h1 {
    ${dmSans.getBold()};
    ${getFontSize({size: 18, lineHeight: 24})};
    margin-bottom: 6px;
  }

  .subtitle {
    display: block;
    ${getFontSize({size: 15, lineHeight: 18})};
    margin-bottom: 13px;
    color: ${props => props.theme.mainColor};
  }

  .price {
    ${dmSans.getMedium()};
    ${getFontSize({size: 18, lineHeight: 18})};
    color: ${props => props.theme.secondaryColor};
  }

  .quantity {
    padding: 18px 27px 25px;

    &__title {
      display: block;
      ${dmSans.getBold()};
      ${getFontSize({size: 13, lineHeight: 15})};
      margin-bottom: 12px;
    }

    &__action {
      display: inline-flex;
      align-items: center;
      padding: 9px 12px;
      border-radius: 7px;
      border: 1px solid #e9ebee;
    }

    &__increase,
    &__decrease {
    }

    &__value {
      ${inter.getBold()};
      ${getFontSize({size: 13, lineHeight: 18})};
      text-align: center;
      min-width: 18px;
      width: 18px;
      height: 18px;
      border: none;
      margin: 0 12px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .quantity__submit {
      margin-top: 28px;
    }
  }

  @media ${props => props.theme.media.desktop} {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 20px;

    .info {
      padding: 36px 36px 32px;
    }

    h1 {
      ${getFontSize({size: 24, lineHeight: 32})};
      margin-bottom: 8px;
    }

    .subtitle {
      ${getFontSize({size: 20, lineHeight: 24})};
      margin-bottom: 18px;
    }

    .price {
      ${getFontSize({size: 24, lineHeight: 24})};
    }

    .quantity {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 32px 36px 36px;

      &__title {
        ${getFontSize({size: 18, lineHeight: 20})};
        margin-bottom: 16px;
      }

      &__form {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      &__action {
        align-self: flex-start;
        padding: 12px 16px;
      }

      &__increase,
      &__decrease {
      }

      &__value {
        ${getFontSize({size: 18, lineHeight: 24})};
        width: 24px;
        height: 24px;
        margin: 0 16px;
        user-select: none;
      }

      .quantity__submit {
        margin-top: auto;
      }
    }
  }
`

const AddToCart = (props) => {
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledAddToCart {...props}>
      <div className="info">
        <h1>adidas</h1>
        <span className="subtitle">DAILY 3.0 SHOES</span>
        <span className="price">$98.99</span>
      </div>
      <div className="quantity">
        <span className="quantity__title">Quantity</span>
        <form className="quantity__form" onSubmit={handleSubmit}>
          <div className="quantity__action">
            <StyledButton onClick={() => setQuantity(quantity - 1)}>
              <Minus/>
            </StyledButton>
            <span className="quantity__value">{quantity}</span>
            <StyledButton onClick={() => setQuantity(quantity + 1)}>
              <Plus/>
            </StyledButton>
          </div>
          <ButtonLarge className="quantity__submit" type="submit">Add to
            Cart</ButtonLarge>
        </form>
      </div>
    </StyledAddToCart>
  )
}

export default AddToCart