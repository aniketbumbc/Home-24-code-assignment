import React, { FC, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';
import Footer from '../Footer/Footer';
import './Pagination.css';

interface PaginationProps {
  articlesLength: number;
  articlePerPage: number;
  setPageNumber: React.Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({
  articlePerPage,
  articlesLength,
  setPageNumber,
}) => {
  const pageCount = Math.ceil(articlesLength / articlePerPage);

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
      <Footer />
    </>
  );
};

export default Pagination;
