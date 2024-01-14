import PropTypes from "prop-types";

import "./ErrorPage.css";

const ErrorPage = ({ error }) => {
    return (
        <div className="error-content-container">
            <div className="error-container">
                <h2>Error: {error}</h2>
            </div>
        </div>
    );
};

ErrorPage.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorPage;
