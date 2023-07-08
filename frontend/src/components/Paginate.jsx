import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({
  pages,
  currentPage,
  isAdmin = false,
  pageList,
  keyword,
}) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((pageIndex) => (
          <LinkContainer
            key={pageIndex + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${pageIndex + 1}`
                  : `/page/${pageIndex + 1}`
                : `/admin/${pageList}/${pageIndex + 1}`
            }
          >
            <Pagination.Item active={pageIndex + 1 === currentPage}>
              {pageIndex + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
