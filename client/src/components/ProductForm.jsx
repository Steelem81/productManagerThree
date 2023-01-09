import { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data])
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit = { onSubmitHandler }>
                <label>Title</label>
                <input type="text"  name="title" onChange={(e) => setTitle(e.target.value)}/>
                <label>Price</label>
                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)}/>
                <label>Description</label>
                <input type="text" name="description" onChange = {(e) => setDescription(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;