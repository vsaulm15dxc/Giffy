import React  from 'react'

export default function Gif ({title, id,url}) {
return(
    <a href='#'className='gif'>
          <h4>{title}</h4>
          <small>{id}</small>
        <img alt={title} src={url}/>
        </a>
)
}