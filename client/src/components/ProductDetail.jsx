import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ProductDetail = props => {
    const [products, setProducts] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <p>Title: {products.title}</p>
            <p>Price: {products.price}</p>
            <p>Description: {products.description}</p>
        </div>
    )
}

export default ProductDetail;