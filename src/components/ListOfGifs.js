import React, {useEffect, useState} from 'react';
import Gif from "./gif";
import getGifs from '../services/getGifs';

export default function ListOfGifs ({params}) {
    const  [gifs , setGifs]= useState([])
    const {keyword}=params

    useEffect(function (){
        getGifs({keyword}).then(gifs => setGifs(gifs))
        }, [keyword])
    

    return  <div>
        {
    gifs.map(({id,key, title, url}) =>
<Gif
    id={id}
    key={key}
    title={title}
    url={url}
    />
        )

}
    </div>
}
