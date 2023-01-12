import React,{useEffect, useState } from "react";
import arrayproductos from "./Json/Productos.json"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = ({Saludo}) => {
    const [items, setItems] = useState ([])

    useEffect(() => {
        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() => {
                    resolve(arrayproductos)
            }, 2000)  
        })
        promesa.then((data) => {
            setItems(data)
        })
    })

    return (
        <div className="container">
            <ItemList items={items} />
            <ItemCount stock={10} />
        </div>
    )
}
export default ItemListContainer;