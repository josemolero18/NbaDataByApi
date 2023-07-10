// import React, { useEffect, useState } from 'react';

// const YouTubeVideo = () => {
//   const [videoId, setVideoId] = useState('');
//   const [error, setError] = useState('');


//   const fetchVideo = async () => {
//     try {
//       const playlistUrl = 'https://www.youtube.com/watch?v=rCKfMubvCvg&list=PLsNO6HV2PBV3QuSR7OJr1Cqn30HVVb3I_&ab_channel=RitmoNBA-NFL';
//       const playlistId = extractPlaylistId(playlistUrl);
//       const apiKey = 'AIzaSyBCEqH7a63-1vpfbtzqSW2LK07G-f1c-j8';
//         console.log(playlistId);
//       // Reemplaza con tu propia clave de API de YouTube

//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${apiKey}`
//       );

//       if (!response.ok) {
//         throw new Error('Error al cargar el video');
//       }

//       const data = await response.json();

//       if (data.items.length === 0) {
//         throw new Error('No se encontró ningún video en la lista de reproducción');
//       }

//       const videoId = data.items[1].snippet.resourceId.videoId;
//       setVideoId(videoId);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchVideo();
//   }, []);

//   const extractPlaylistId = (url) => {
//     const urlParams = new URLSearchParams(new URL(url).search);
//     return urlParams.get('list');
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       {videoId ? (
//         <div>
//           <iframe
//             title="YouTube Video"
//             width="560"
//             height="315"
//             src={`https://www.youtube.com/embed/${videoId}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       ) : (
//         <div>Cargando...</div>
//       )}
//     </div>
//   );
// };

// export default YouTubeVideo;
