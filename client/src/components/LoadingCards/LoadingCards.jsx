import "./LoadingCards.css";

const LoadingCards = () => {

    return (
        <div className="loader-container">
            <div className="pokemon"></div>
            <h1 className="loading-text">
                <span style={{ "--i": 1 }}>C</span>
                <span style={{ "--i": 2 }}>a</span>
                <span style={{ "--i": 3 }}>r</span>
                <span style={{ "--i": 4 }}>g</span>
                <span style={{ "--i": 5 }}>a</span>
                <span style={{ "--i": 6 }}>n</span>
                <span style={{ "--i": 7 }}>d</span>
                <span style={{ "--i": 8 }}>o</span>
                <span style={{ "--i": 9 }}>.</span>
                <span style={{ "--i": 10 }}>.</span>
                <span style={{ "--i": 11}}>.</span>
            </h1>
        </div>
    );
};

export default LoadingCards;