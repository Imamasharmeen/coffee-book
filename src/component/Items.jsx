import React from 'react'

export default function Items({cards}) {
    const { name, image, category, origin, type, id, rating, popularity } =
    cards || {}
  return (
    <div>
      <h1>Items...{name}</h1>
    </div>
  )
}
