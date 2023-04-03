
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import './App.css';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
 
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "gold",
    },
  },
});

const Cards = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  
  
  const classes = useStyles();

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios(
        `https://api.tvmaze.com/shows?page=${page}&per_page=12`
      );
      setShows(response.data);
    };
    fetchShows();
  }, [page]);

  const filteredShows = shows.filter(
    (show) =>
      show.name.toLowerCase().includes(search.toLowerCase()) 
  );

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  console.log(filteredShows.length);
  return (
    <>
      <TextField
  label="Search for your favorite show"
  variant="outlined"
  value={search}
  onChange={handleSearch}
  style={{
    width: '70%',
    padding: '20px',
    margin: '0 auto',
  }}
  className="search-bar"
  InputProps={{
    style: {
      
      fontSize: '16px',
      paddingTop: '0px',
      paddingBottom: '5px',
    },
  }}
/>
      <div className='bodyl'>
      <div className="container">
      {filteredShows
        .slice((page - 1) * 16, (page - 1) * 16 + 16)
        .map((show) => (
          <div className="card_item" key={show.id} >
            <div className="card_inner">
              <img src={show.image?.medium} alt="" />
              <div className="userName">{show.name}</div>
              <div className="userDetails">
                <div>Language: {show.language}</div>
                <div>Genres: {show.genres.join(', ')}</div>
                <div>
                  Rating: {show.rating.average ? show.rating.average : 'N/A'}
                </div>
                <div>Premiered: {show.premiered}</div>
              </div>
              <div onClick={() => navigate(`/Cardsummary/${show.id}`)}>
                <button className="seeMore">Details</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        
        </div>

        <Pagination
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  }}
>
  <Pagination.First onClick={() => handlePageChange(1)} />
  <Pagination.Prev onClick={() => handlePageChange(page - 1)} />
  <Pagination.Item onClick={() => handlePageChange(1)} active={page === 1}>
    1
  </Pagination.Item>
  {page > 3 && <Pagination.Ellipsis />}
  {page > 2 && (
    <Pagination.Item onClick={() => handlePageChange(page - 1)}>
      {page - 1}
    </Pagination.Item>
  )}
  {page !== 1 && page !== 3 && (
    <Pagination.Item onClick={() => handlePageChange(page)}>
      {page}
    </Pagination.Item>
  )}
  {page < Math.ceil(filteredShows.length / 12) - 1 && (
    <Pagination.Item onClick={() => handlePageChange(page + 1)}>
      {page + 1}
    </Pagination.Item>
  )}
  {page < Math.ceil(filteredShows.length / 12) - 2 && <Pagination.Ellipsis />}
  <Pagination.Item
    onClick={() => handlePageChange(Math.ceil(filteredShows.length / 12))}
    active={page === Math.ceil(filteredShows.length / 12)}
  >
    {Math.ceil(filteredShows.length / 12)}
  </Pagination.Item>
  <Pagination.Next onClick={() => handlePageChange(page + 1)} />
  <Pagination.Last
    onClick={() => handlePageChange(Math.ceil(filteredShows.length / 12))}
  />
</Pagination>

        
        </>
    
  );
};

export default Cards;
