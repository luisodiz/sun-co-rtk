import {SectionStyled, SectionTitleStyled} from '../styles/Section.styled.js'
import {ContainerStyled} from '../styles/Container.styled.js'
import ProductList from '../ProductList/ProductList.jsx'
import products from '../../data.json'

const LatestProducts = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <SectionTitleStyled>Explore our latest drops</SectionTitleStyled>
        Some products will be here...
        <ProductList products={products}/>
      </ContainerStyled>
    </SectionStyled>
  )
}

export default LatestProducts