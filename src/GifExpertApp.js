
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
    
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);
    return (
        <>
            <h2>GifExpertApp </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

           
            <ol>
                {
                    categories.map(category => (
                        //return <li key={category} >{category} </li>
                        <GifGrid
                            category={ category }
                            key={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
