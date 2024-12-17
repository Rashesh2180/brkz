import React from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Create an array of pages to be displayed
  const pageNumbers = [];
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // If we have fewer than 5 pages total, show all pages
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // If we're in the middle of the pagination range, show 2 before and after
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
  }

  return (
    <div className="w-full flex justify-center mt-10 items-center">
      {/* Previous Button */}
      <button
        className="page-btn shrink-0"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft className="text-sm" />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={`page-btn shrink-0 ${currentPage === page ? 'active' : ''}`}
          onClick={() => {
            if (page !== '...') {
              handlePageClick(page);
            }
          }}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="page-btn shrink-0"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
