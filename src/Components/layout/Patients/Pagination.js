import React, {Fragment} from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
margin: 10px;
  float:left;
  list-style: none;
  text-align:center;
  border-radius:3px;
  color:white;
  // padding:1px;
  // height: 10%;
  // border-top:3px solid #186EAD;
  // border-bottom:3px solid #186EAD;
  // background-color: rgba( 0, 0, 0, 0.4 );
  display:flex;
  justify-content:center;
`;

const PageLi = styled.li`
  // display:inline-block;
  font-size:17px;
  font-weight:600;
  // padding:5px;
  border-radius:5px;
  width:25px;
  height: 1px;
  &:hover{
    cursor:pointer;
    color:white;
    background-color:#263A6C;
  }
  &:focus::after{
    color:white;
    background-color:#263A6C;
  }
`;

const PageSpan = styled.span`
height:31px;
  &:hover::after,
  &:focus::after{
    border-radius:100%;
    color:white;
    background-color:#263A6C;
  }
`;

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Fragment>
            <PageUl className="pagination">
                {pageNumbers.map(number => (
                    <PageLi key={number} className="page-item">
                        <PageSpan onClick={() => paginate(number)} className="page-link">
                            {number}
                        </PageSpan>
                    </PageLi>
                ))}
            </PageUl>
        </Fragment>
    );
};

export default Pagination;
