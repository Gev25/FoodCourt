import React, {useEffect} from 'react';
import CategoryCard from "./CategoryCard";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesRequest} from "../store/actions/categories";

function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(getCategoriesRequest());
    }, []);

    return (
        <section className='product__section'>
            <div className='category__container'>
                {categories.map(({name, imagePath, slugName,id}) => (
                        <CategoryCard
                            name={name}
                            imagePath={imagePath}
                            slugName={slugName}
                            key={id}
                        />
                ))}
            </div>
        </section>
    );
}

export default Categories;
