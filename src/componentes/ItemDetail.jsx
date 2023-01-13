import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const {addItem} =useContext(CartContext)
    const [itemStock, setItemStock] = useState(0)

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity )
        addItem(item, quantity)
    }

    useEffect(() => {
        setItemStock(item.Stock);
    }, [item])

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4 ">
                <h1>{item.nombre}</h1>
                <h3>{item.categoria}</h3>
                <h4>Estado del Producto: {item.estado}</h4>
                <h4>${item.precio}</h4>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>

        </div>
    )
}

export default ItemDetail