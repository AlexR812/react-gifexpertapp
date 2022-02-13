import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Bleach', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Bleach'])
    
    /*const handleAdd = (value) => {
        //setCategories(categories.concat('One Piece'))
        setCategories([...categories, 'One Piece'])
        setCategories(cats => [...cats, 'One Piece'])
    }*/
    
   
    

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } categories={categories}/>
            <hr />

            <ol>
                {
                    categories.map(
                        category => (
                            <GifGrid
                                key={category}
                                category={category} 
                            />)
                    )
                }                       
             </ol>
        </>       
    );
}

export default GifExpertApp;
