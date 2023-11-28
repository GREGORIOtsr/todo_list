import React from 'react'

function Item({message, deadline, priority, func}) {
  return (
    <li className="item">
        <img src="./src/assets/arrow.png" alt="Arrow icon"/>
        <div>
            <p>{message}</p>
            <p>Deadline: {deadline}</p>
            <p>{priority} priority</p>
        </div>
        <button onClick={func}><img src="./src//assets/delete.png" alt="Delete button icon"/></button>
    </li>
  )
}

export default Item