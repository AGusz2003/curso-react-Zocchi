import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4 ">
                <h1>{item.nombre}</h1>
                <h3>{item.categoria}</h3>
                <h4>Estado del Producto: {item.estado}</h4>
                <h1>${item.precio}</h1>
                <ItemCount stock={item.stock} />
            </div>

        </div>
    )
}

export default ItemDetail