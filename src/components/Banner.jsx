import { Link } from "react-router-dom";
import bannerBelleza from "../assets/images/imagen1.png";
import bannerNutricion from "../assets/images/imagen2.png";
import bannerBienestar from "../assets/images/imagen3.png";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerBelleza})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/category/belleza"} className="text-decoration-none">
                        <span className="bg-secondary text-white text-uppercase px-3 py-2">Belleza</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerNutricion})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/nutricion"} className="text-decoration-none">
                        <span className="bg-secondary text-white text-uppercase px-3 py-2">Nutrición</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerBienestar})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <Link to={"/category/bienestar"} className="text-decoration-none">
                        <span className="bg-secondary text-white text-uppercase px-3 py-2">Bienestar</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;