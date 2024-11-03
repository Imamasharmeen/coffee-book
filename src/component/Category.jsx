import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Category({category}) {
  
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
          category.map(categoryItem=>(<NavLink key={categoryItem.id} to={`/category/${categoryItem.category}`} role="tab" className={({isActive})=>`tab ${isActive?'tab-active':''}`}>{categoryItem.category}</NavLink>))
        }
      </div>
    </div>
  )
}
