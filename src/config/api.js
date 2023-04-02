// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './App.css';

// const Cardsummary = () => {
//   const [shows, setShows] = useState([]);

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
//     <div className="container">
//       {shows.map((show) => (
//         <div className="card_item" key={show.id}>
//           <div className="card_inner">
//             <img src={show.image?.medium} alt="" />
//             <div className="userName">{show.name}</div>
//             <div className="userDetails">
//               <div>Language: {show.language}</div>
//               <div>Genres: {show.genres.join(', ')}</div>
//               <div>
//                 Rating: {show.rating.average ? show.rating.average : 'N/A'}
//               </div>
//               <div>Premiered: {show.premiered}</div>
//             </div>
//             <button className="seeMore">See More</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default Cardsummary;





///////////////////////////////////dcsdcdsc/////////////////////////////

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import './App.css';

// const Card = ({ name, language, type, image }) => {
//   return (
//     <div className="card_item">
//       <div className="card_inner">
//         <img src={image?.medium} alt="" />
//         <div className="userName">{name}</div>
//         <div className="detail-box">
//           <div className="gitDetail"><span>Language:</span> {language}</div>
//           <div className="gitDetail"><span>Type:</span> {type}</div>
//         </div>
//         <button className="seeMore">See More</button>
//       </div>
//     </div>
//   );
// }

// const Cardsummary = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get("https://api.tvmaze.com/search/shows?q=all");
//       setUsers(result.data);
//     };

//     fetchData();
//   }, []);

//   console.log(users);

//   return (
//     <div className="container">
//       {users.map((curElem) => {
//         return (
//           <Card
//             key={curElem.show.id}
//             name={curElem.show.name}
//             language={curElem.show.language}
//             type={curElem.show.type}
//             image={curElem.show.image}
//           />
//         )
//       })}
//     </div>
//   )
// }

// export default Cardsummary;




/////////////////ffffffffffffffffffffffffff///////////////////////////


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './App.css';

// const Cardsummary = () => {
//   const [shows, setShows] = useState([]);

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
//     <div className="container">
//       {shows.map((show) => (
//         <div className="card_item" key={show.id}>
//           <div className="card_inner">
//             <img src={show.image?.medium} alt="" />
//             <div className="userName">{show.name}</div>
//             <div className="userUrl">{show.language}</div>
//             <button className="seeMore">See More</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cardsummary;








