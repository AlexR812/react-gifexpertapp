import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
//import { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {


    const {data, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
           
           {loading && <p className='card animate__animated animate__flash'>Loading</p> }
          
            <div className='card-grid'>
                <ol>
                    {
                        data.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />  
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default GifGrid