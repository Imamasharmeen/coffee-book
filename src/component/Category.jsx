import React from 'react'
import { Link } from 'react-router-dom'


export default function Category({category}) {
  
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
          category.map(categoryItem=>(<Link key={categoryItem.id} to={`/category/${categoryItem.category}`} role="tab" className="tab">{categoryItem.category}</Link>))
        }
      </div>
    </div>
  )
}
