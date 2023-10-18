import React from 'react';
import { ProductListItem } from './ProductListItem';

export const Products = () => {
    return (
        <div className='products'>
            <div>
                <div className='flex justify-between align-center' style={{padding: '20px'}}>
                    <h2>Product Sell</h2>
                    <div className='inputs-container'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <hr/>
            </div>
            <div>
                <ProductListItem heading={'Abstract 3D'} imgSrc={'https://fastly.picsum.photos/id/310/90/50.jpg?hmac=YZ5GaRzQqN_Mxbem0YiWZEqebAn6DZ4QMB3Kx8y8OSs'} />
                <ProductListItem heading={'Sarphens illustration'} imgSrc={'https://fastly.picsum.photos/id/416/90/50.jpg?hmac=ZT4r6zZNfAGVQJ6DCmCyIx9GWoLwcEemm12QquXUrlk'} />
            </div>
        </div>
    )
}