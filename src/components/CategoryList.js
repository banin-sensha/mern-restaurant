import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classNames from 'classnames';

const CategoryList = ({ categoryList, setCategoryList, divRef}) => {
    const [textSelected, setTextSelected] = useState({0: true});

    useEffect(() => {
        axios.get("http://localhost:5000/categories/")
            .then(res => {
                setCategoryList(res.data);
            })
    }, []);

    const scrollToView = (e, index) => {
        e.preventDefault();
        setTextSelected({[index]: true}); 
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
                            className={classNames("category-name curP mb-10x font-medium fs-15", {
                                'text-selected': textSelected[index] 
                            })}
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