/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./Pagination.css";

const Pagination = ({ pages, setCurrentPage }) => {

    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    const numberOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i);
    }

    useEffect(() =>{

        let timerId;

        const updateState = () => {

        let tempNumberOfPages = [];

        let dotsInitial = "...";
        let dotsLeft = "... ";
        let dotsRight = " ...";

        if (numberOfPages.length < 6) {
          tempNumberOfPages = numberOfPages;
        } else if (currentButton >= 1 && currentButton <= 3) {
          tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
        } else if (currentButton === 4) {
          const sliced = numberOfPages.slice(0, 5);
          tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
        } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
          const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
          const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
          tempNumberOfPages = [
            1,
            dotsLeft,
            ...sliced1,
            ...sliced2,
            dotsRight,
            numberOfPages.length,
          ];
        } else if (currentButton > numberOfPages.length - 3) {
          const sliced = numberOfPages.slice(numberOfPages.length - 4); 
          tempNumberOfPages = [1, dotsLeft, ...sliced];
        } else if (currentButton === dotsInitial) {
          setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        } else if (currentButton === dotsRight) {
          setCurrentButton(arrOfCurrButtons[3] + 2);
        } else if (currentButton === dotsLeft) {
          setCurrentButton(arrOfCurrButtons[3] - 2);
        }

        setArrOfCurrButtons(tempNumberOfPages);
        setCurrentPage(currentButton);
      }
        timerId = setTimeout(updateState, 0);

    return () => clearTimeout(timerId);

    }, [currentButton, arrOfCurrButtons] );

    return (
      <nav className="pagination-container">
        <button
          className={`${currentButton === 1 ? "disabled" : "first-last"}`}
          onClick={() =>
            setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
          }>
          An.
        </button>
        {arrOfCurrButtons.map((item, index) => (
          <button
            key={index}
            className={`${currentButton === item ? "active" : ""}`}
            onClick={() => setCurrentButton(item)}>
            {item}
          </button>
        ))}
        <button
          className={`${
            currentButton === numberOfPages.length ? "disabled" : "first-last"
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev >= numberOfPages.length ? prev : prev + 1
            )
          }>
          Sig.
        </button>
      </nav>
    );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;