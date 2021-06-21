import React from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    //USO DE CUSTOMs HOOKS
    const { data: images, loading } = useFetchGifs ( category );

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading </p>}
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }     
            </div>
        </>

    )
}
