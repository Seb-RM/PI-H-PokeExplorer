/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from "react";

import PropTypes from "prop-types";

import "./Pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {

  // const [currentButton, setCurrentButton] = useState(1);
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
        } else if (currentPage >= 1 && currentPage <= 3) {
          tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
        } else if (currentPage === 4) {
          const sliced = numberOfPages.slice(0, 5);
          tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
        } else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {
          const sliced1 = numberOfPages.slice(currentPage - 2, currentPage);
          const sliced2 = numberOfPages.slice(currentPage, currentPage + 1);
          tempNumberOfPages = [
            1,
            dotsLeft,
            ...sliced1,
            ...sliced2,
            dotsRight,
            numberOfPages.length,
          ];
        } else if (currentPage > numberOfPages.length - 3) {
          const sliced = numberOfPages.slice(numberOfPages.length - 4); 
          tempNumberOfPages = [1, dotsLeft, ...sliced];
        } else if (currentPage === dotsInitial) {
          setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        } else if (currentPage === dotsRight) {
          setCurrentPage(arrOfCurrButtons[3] + 2);
        } else if (currentPage === dotsLeft) {
          setCurrentPage(arrOfCurrButtons[3] - 2);
        }

        setArrOfCurrButtons(tempNumberOfPages);
        // setCurrentPage(currentButton);
      }
        timerId = setTimeout(updateState, 0);

    return () => clearTimeout(timerId);

    }, [currentPage, arrOfCurrButtons] );

    console.log(currentPage);
  // useEffect(() => {
  //   setCurrentButton(currentPage);
  //   console.log(currentPage)
  // }, [currentPage]);

    return (
      <nav className="pagination-container">
        <button
          className={`${currentPage === 1 ? "disabled" : "first-last"}`}
          onClick={() =>
            setCurrentPage((prev) => (prev <= 1 ? prev : prev - 1))
          }>
          An.
        </button>
        {arrOfCurrButtons.map((item, index) => (
          <button
            key={index}
            className={`${currentPage === item ? "active" : ""}`}
            onClick={() => setCurrentPage(item)}>
            {item}
          </button>
        ))}
        <button
          className={`${
            currentPage === pages ? "disabled" : "first-last"
          }`}
          onClick={() =>
            setCurrentPage((prev) =>
              prev >= pages ? prev : prev + 1
            )
          }>
          Sig.
        </button>
      </nav>
    );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;