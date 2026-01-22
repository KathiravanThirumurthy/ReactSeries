import React from 'react'
import './section.css'
import Aside from './Aside'
import ProductList from './ProductList'
const Section = () => {
  return (
    <div>
        <section class="listing-section">
          <Aside />
          <ProductList />
</section>

    </div>
  )
}

export default Section