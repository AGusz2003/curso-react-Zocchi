import React from "react";

const Loading = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <button class="btn btn-danger" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Cargando...
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Loading;
