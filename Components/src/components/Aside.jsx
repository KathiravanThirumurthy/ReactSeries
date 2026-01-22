import React from 'react'

const Aside = () => {
  return (
    <aside class="filter-panel">
    <h3>Filter Roles</h3>

    <ul>
      <li class="active">All</li>
      <li>Design</li>
      <li>Programming</li>
      <li>Art & Animation</li>
      <li>Testing</li>
    </ul>

    <button class="filter-btn">Apply Filter</button>
  </aside>

  )
}

export default Aside