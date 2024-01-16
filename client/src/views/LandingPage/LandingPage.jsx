import { Link } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
    return (
        <section className="loading-container">
            <h2>POKEMON EXPLORER</h2>
            <div>
                <p className="continue-message">Haz clic para</p>
                <Link to="/home">
                    <button className="continue-button">
                        <span>Continuar</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default LandingPage;
