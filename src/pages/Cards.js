import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import './App.css';

const Cards = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios(
        `https://api.tvmaze.com/shows?page=${page}&per_page=12`
      );
      setShows(response.data);
    };
    fetchShows();
  }, [page]);
  console.log(shows);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className='bodyl'>
      <div className="container">
        {shows.map((show) => (
          <div className="card_item" key={show.id}>
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
              {/* <Link to={`/Cardsummary/${show.id}`}>
              </Link> */}
              <div onClick={() => navigate(`/Cardsummary/${show.id}`)}  >  
                <button className="seeMore">Details</button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination className="pagination">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(page - 1)} />
        <Pagination.Item onClick={() => handlePageChange(1)} active={page === 1}>
          1
        </Pagination.Item>
        <Pagination.Item onClick={() => handlePageChange(2)} active={page === 2}>
          2
        </Pagination.Item>
        <Pagination.Item onClick={() => handlePageChange(3)} active={page === 3}>
          3
        </Pagination.Item>
        <Pagination.Next onClick={() => handlePageChange(page + 1)} />
        <Pagination.Last onClick={() => handlePageChange(3)} />
      </Pagination>
    </div>
  );
};

export default Cards;





// import { makeStyles } from '@material-ui/core';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './App.css';

// const Cards = () => {
//   const [shows, setShows] = useState([]);
//   const [page, setPage] = useState(1)

//   const useStyles = makeStyles({
//     pagination: {
//       "& .MuiPaginationItem-root": {
//         color: "gold",
//       },
//     },
//   });
    
//   const classes = useStyles();

//   useEffect(() => {
//     const fetchShows = async () => {
//       const response = await axios(
//         'https://api.tvmaze.com/shows?page=1&per_page=50'
//       );
//       setShows(response.data);
//     };
//     fetchShows();
//   }, []);

//   return (
//     <div className='bodyl'>
//       <div className="container">
//         {shows ? (
//           shows
//             .slice((page - 1) * 10, (page - 1) * 10 + 10)
//             .map((show) => (
//               <div className="card_item" key={show.id}>
//                 <div className="card_inner">
//                   <img src={show.image?.medium} alt="" />
//                   <div className="userName">{show.name}</div>
//                   <div className="userDetails">
//                     <div>Language: {show.language}</div>
//                     <div>Genres: {show.genres.join(', ')}</div>
//                     <div>
//                       Rating: {show.rating.average ? show.rating.average : 'N/A'}
//                     </div>
//                     <div>Premiered: {show.premiered}</div>
//                   </div>
//                   <Link to={`/Card/${show.id}`}>
//                     <button className="seeMore">Details</button>
//                   </Link>
//                 </div>
//               </div>
//             ))
//         ) : (
//           <p>Loading TV shows...</p>
//         )}
//       </div>
//       <Pagination
//         count={(shows?.length / 10).toFixed(0)}
//         style={{
//           padding: 20,
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           //alignItems:"center",
//         }}
//         classes={{ ul: classes.pagination }}
//         onChange={(_, value) => {
//           setPage(value);
//           window.scroll(0, 450);
//         }}
//       />
//     </div>
//   );
// };

// export default Cards;