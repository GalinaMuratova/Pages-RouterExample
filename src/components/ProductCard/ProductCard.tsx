import React from 'react';
import Image from "next/image";
import styles from './ProductCard.module.css';
import {
    handleDeleteProduct,
    handleUpdateAllProduct,
    handleUpdateProduct
} from "@/components/screens/Products/ProductsFunctions";
interface Props {
    id: string
    title: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<Props> = ({title, price,image, id}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={image} alt={title} width={250} height={250}/>
            </div>
            <div className={styles.details}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.price}>Price: {price}</p>
                <button className={styles.btn} onClick={() => handleDeleteProduct(id)}>Delete</button>
                <button className={styles.btn}  onClick={() => handleUpdateAllProduct(id)}>Edit</button>
                <button className={styles.btn}  onClick={() => handleUpdateProduct(id)}>Change</button>
            </div>
        </div>
    );
};

export default ProductCard;