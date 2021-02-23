import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CategoryList = ({ categoryList, setCategoryList, divRef}) => {

    useEffect(() => {
        axios.get("http://localhost:5000/categories/")
            .then(res => {
                setCategoryList(res.data);
            })
    }, []);

    const scrollToView = (e, index) => {
        e.preventDefault();
        divRef.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <div className="ml-20x mt-10x pr-30x">
            {
                (categoryList || []).map((category, index) => {
                    return (
                        <div
                            className="category-name curP mb-10x font-medium fs-15" 
                            key={index}
                            onClick={(e) => scrollToView(e,index)}
                        >
                            {category.name}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CategoryList;