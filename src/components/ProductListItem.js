import React from 'react';

export const ProductListItem = ({heading, imgSrc}) => {
    return (
        <div className='product-list-item flex justify-around align-center'>
            <img src={imgSrc} alt="" />
            <div className='flex flex-column'>
                <h3>{heading}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <p>32 in stock</p>
            <p style={{fontWeight: 'bold'}}>$45.99</p>
            <p>20</p>
        </div>
    )
}
