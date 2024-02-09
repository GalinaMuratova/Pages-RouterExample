import React from 'react';
import Products from "@/components/screens/Products/Products";

const ProductsPage = ({products}) => {
    return <Products products={products} />
};
export const getServerSideProps = async () => {
    try {
        const res = await fetch('https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes.json');
        const json = await res.json();
        const dataArray = Object.entries(json).map(([key, value]) => ({id: key, ...value}));

        return {
            props: {
                products: dataArray,
            },
        };
    } catch (error) {
        console.error('Error', error);
        return {
            props: {
                products: [],
            },
        };
    }
};

export default ProductsPage;