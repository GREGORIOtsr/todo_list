import React from 'react'

function List({func}) {
  return (
    <article>
        <ul>
            {func}
        </ul>
    </article>
  )
}

export default List