import React from "react";


const Item = ({item}) => {
    return (
            <div className="col-md-3">
            <div className="card text-center border border-0">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} /> 
                    <div className="card-body">
                        <p className="card-text">{item.nombre}</p>
                    </div>
            </div>
        </div>
    )
}
export default Item;