import { useState } from 'react';
import { AddCategory, GIFGrid } from './components';

export const GIFExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        //categories.push(newCategory);
        //setCategories( [...categories, 'Valorant'] );
        //setCategories(cat => [...cat, newCategory]);
        setCategories([newCategory, ...categories]);
    }

    console.log(categories);
    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={( value ) => onAddCategory(value)} />
            {
                categories.map(( category ) => (
                    <GIFGrid key={ category }
                        category={ category } />
                )
                )
            }
        </>
    )
}
