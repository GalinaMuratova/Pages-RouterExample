import React from 'react';
import ProductCard from "@/components/ProductCard/ProductCard";
import {Product} from "@/types";
import Layout from "@/components/layout/Layout";
import {handleAddProducts} from "@/components/screens/Products/ProductsFunctions";

interface Props {
    products: Product[]
}

const Products: React.FC<Props> = ({products}) => {
    return (
        <Layout title='Products' description='Some text'>
            <div style={{display:'flex'}}>
                <h1> Products page</h1>
                <button
                    style={{padding:'20px 30px', backgroundColor:'#ffe9e9', borderRadius:'8px', border:'none', margin:'10px 0 50px 10px'}}
                    onClick={handleAddProducts}>
                    Add new product
                </button>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
            {products.map((el) => (
                    <ProductCard key={el.id} id={el.id} title={el.title} price={el.price} image={el.image}/>
                ))}
            </div>
        </Layout>
    );
};

export default Products;