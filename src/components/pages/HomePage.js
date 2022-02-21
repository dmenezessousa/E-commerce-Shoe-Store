import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchProducts } from '../../FakeDataBase';

import ItemDisplay from '../ItemDisplay';
import Layout from '../layout/Layout'

function HomePage() {
    const [productData, setProductData] = useState();

  
    useEffect(() => {
      fetchProducts().then(data => setProductData(data))
    }, [])
  
    if(!productData){
      return null;
    }

    return (
        <div>
            <Layout color="red">
            <Box style={{marginTop: 100}}>
                        <img src="https://cdn.dribbble.com/userupload/1466452/file/original-f6d225824d168b8c890abdcbee3fa954.jpg?compress=1&resize=1200x900&vertical=top"/>
                </Box>
                <Box style={{marginTop: 100}}>
                    <h1>Built For Flight</h1>
                    <p>lorum batos lorum batos lorum batos lorum batos lorum batos lorum batos lorum batos lorum batos.</p>
                </Box>
                <Box p={4}>
                    {productData.map(product => (
                        <Box
                        key={product.id}
                        mb={4}
                        display="flex"
                        alignItems="center"
                        >
                        <ItemDisplay
                            product={{
                            id: product.id,
                            title: product.title,
                            brand: product.brand,
                            price: product.price,
                            description: product.description,
                            image: product.image,
                            }}
                            /> 
                        </Box>
                    ))}
                </Box>
            </Layout>     
        </div>
    )
}

export default HomePage