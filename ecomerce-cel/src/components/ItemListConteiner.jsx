import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { products } from '../data/products';
import { ItemList } from './ItemList';
export const ItemListConteiner = (props) => {
    const [items, setItems] = useState([]);

    const {id} = useParams();

    useEffect(() =>{
       const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
    });
    mypromise.then((response) => 
    {
    if(!id){
       setItems(response); 
    }else{
        const filterByCategory = response.filter((item) => item.categoria === id);
        setItems(filterByCategory);
    }
    
    
    });
    }, [id]);

    
    return(
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <ItemList items={items}/>
            </Container>
    )
}