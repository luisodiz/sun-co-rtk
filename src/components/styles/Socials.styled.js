import styled from 'styled-components'

export const SocialsStyled = styled.ul`
  list-style: none;
  display: inline-flex;
`

export const SocialsItem = styled.li`
  flex-shrink: 0;
  margin-right: 16px;
  
  &:last-child {
    margin-right: 0;
  }
  
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 5.6px;
    border-radius: 50%;
    background: #363137;
    transition: background .2s;
    
    &:hover {
      background: #ec5e2a;
    }
  }
`