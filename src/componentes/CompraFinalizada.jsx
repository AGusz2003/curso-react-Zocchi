import React from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

const CompraFinalizada = () => {
    const {id} = useParams();
    Swal.fire(
        'Todo salio como se esperaba',
        'Gracias por tu Compra',
        'success'
    )
    
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">
                        <p>Tu Número de Orden es el siguiente: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-danger">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default CompraFinalizada;