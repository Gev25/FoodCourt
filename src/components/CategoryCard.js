import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function CategoryCard({name, imagePath, slugName}) {

    return (
        <Link to={`/shop/${slugName}`}>
                <div className="single__product">
                    <div className="category__img">
                        <img src={`http://localhost:4000/${imagePath}`} alt="" className='prod__img'/>
                    </div>
                    <div className="product__content">
                        <h6>{name}</h6>
                    </div>
                </div>
        </Link>
    )
}
CategoryCard.propTypes = {
    name:PropTypes.string.isRequired,
    imagePath:PropTypes.string.isRequired,
    slugName:PropTypes.string.isRequired,
}
export default CategoryCard;
