import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Error 404</h1>
                    <h2>Esta pagina no existe.</h2>
                    <p className="my-5"><Link to={"/"} className="btn bg-secondary text-black">Volver a la Página Principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;