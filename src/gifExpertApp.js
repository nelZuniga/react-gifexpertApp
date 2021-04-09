import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories =['one punch', 'samurai X', 'Dragon ball'];
    const [categories, setCategories]= useState(['one punch']);


    

    return (
        <>
        <h2>gifExpertApp</h2>

        <AddCategory setCategories={setCategories}/>
        <hr/>

        



        <ol>
            {
            categories.map(category =>
                <GifGrid key={category} category={category} />
                )
        }
        </ol>

        </>
    )
}
