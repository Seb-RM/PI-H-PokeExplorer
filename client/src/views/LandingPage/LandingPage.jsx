import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <section>
            <p>Haz clic para</p>
            <Link to="/home">
                <button>
                    <span>Continuar</span>
                </button>
            </Link>
        </section>
    );
};

export default LandingPage;
