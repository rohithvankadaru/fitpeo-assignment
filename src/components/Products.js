import React from 'react';
import { ProductListItem } from './ProductListItem';

export const Products = () => {
    return (
        <div className='products'>
            <div>
                <div className='flex justify-between align-center' style={{ padding: '20px' }}>
                    <h2>Product Sell</h2>
                    <div className='inputs-container flex'>
                        <input type="text" />
                        <div className='flex align-center justify-around'>
                            Last 30 days
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                fill="grey"
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div>
                <ProductListItem heading={'Abstract 3D'} imgSrc={'https://fastly.picsum.photos/id/310/90/50.jpg?hmac=YZ5GaRzQqN_Mxbem0YiWZEqebAn6DZ4QMB3Kx8y8OSs'} />
                {/* <ProductListItem heading={'Sarphens illustration'} imgSrc={'https://fastly.picsum.photos/id/416/90/50.jpg?hmac=ZT4r6zZNfAGVQJ6DCmCyIx9GWoLwcEemm12QquXUrlk'} /> */}
            </div>
        </div>
    )
}