import React,{useEffect, useState } from "react";
import arrayproductos from "./Json/Productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({Saludo}) => {
    const [items, setItems] = useState ([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() => {
                    resolve(id ? arrayproductos.filter(item => item.categoria === id ) :arrayproductos)
            }, 2000)  
        })
        promesa.then((data) => {
            setItems(data)
        })
    }, [id]) ;

    return (
        <div className="container">
            <ItemList items={items} />
           
        </div>
    )
}
export default ItemListContainer;