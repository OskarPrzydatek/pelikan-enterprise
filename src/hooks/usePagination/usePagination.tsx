import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Slugs } from '~/constants';

export const usePagination = (
  dataLenght: number,
  page: string | undefined,
  slug?: Slugs
) => {
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(dataLenght / itemsPerPage);

  const [currentPage, setCurrentPage] = React.useState<number>(
    page !== undefined ? Number(page) : 1
  );

  const [paginationStart, setPaginationStart] = React.useState<number>(0);
  const [paginationEnd, setPaginationEnd] =
    React.useState<number>(itemsPerPage);

  const onClickNextPage = () => {
    const isNoPage = dataLenght === 0;
    const isLastPage = currentPage === numberOfPages;

    if (isLastPage || isNoPage) return;

    setPaginationStart((prev) => prev + itemsPerPage);
    setPaginationEnd((prev) => prev + itemsPerPage);
    setCurrentPage((prev) => prev + 1);

    if (slug) {
      navigate(`/${slug}/${currentPage + 1}`);
    }
  };

  const onClickPrevPage = () => {
    const isFirstPage = currentPage === 1;
    const isSecondPage = currentPage === 2;

    if (isFirstPage) return;

    setPaginationStart((prev) => prev - itemsPerPage);
    setPaginationEnd((prev) => prev - itemsPerPage);
    setCurrentPage((prev) => prev - 1);

    if (slug && isSecondPage) {
      navigate(`/${slug}`);
      return;
    }

    if (slug) {
      navigate(`/${slug}/${currentPage - 1}`);
    }
  };

  return {
    currentPage,
    numberOfPages,
    paginationStart,
    paginationEnd,
    onClickNextPage,
    onClickPrevPage,
  };
};
