import PropTypes from "prop-types";
import "./ErrorPage.css";

const ErrorPage = ({ error }) => {
    return (
        <div className="error-container">
        <h1>Error: {error}</h1>
        </div>
    );
};

ErrorPage.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorPage;
