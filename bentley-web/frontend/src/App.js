import React, {useEffect, useState, } from 'react';
import axios from 'axios';
import './App.css'; 
import { useRef } from 'react';
import GradientText from './components/GradientText';
import BlurText from './components/BlurText';



function App() {
  const [page, setPage] = useState("home");
  const [bentley, setData] = useState([]);
  const BASE_URL = "http://localhost:4000";
  const containerRef = useRef(null);


  useEffect(() => {
    axios.get('http://localhost:4000/api/data')
      .then(Response => setData(Response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className="navbar">
        <button onClick={() => setPage("about")}>ABOUT</button>
        <button onClick={() => setPage("home")}>HOME</button>
        <button onClick={() => setPage("history")}>HISTORY</button>
        <button onClick={() => setPage("model")}>MODEL</button>
      </div>
      <div className="page">
        {page === "home" && (
          <>
            <div className="logo">
            {bentley.length > 0 && (
            <img src={`http://localhost:4000${bentley[0].image}`} alt={bentley[0].name} />
        )}
            </div>
            <div className='car'>
            {bentley.length > 0 && (
            <img src={`http://localhost:4000${bentley[1].image}`} alt={bentley[1].name} />
        )}
            </div>
            <div className='side-content'>
            <div className='interior'>
            {bentley.length > 0 && (
            <img src={`http://localhost:4000${bentley[2].image}`} alt={bentley[2].name} />
        )}
            </div>
            <div className='sec-interior'>
            {bentley.length > 0 && (
            <img src={`http://localhost:4000${bentley[3].image}`} alt={bentley[3].name} />
        )}
             </div>
              </div> 
              <div className='side-text'>
                
                </div>
                <div className='bottom-text'>
                <GradientText
                  colors={["#c7c7c7", "#000000", "#c7c7c7", "#000000", "#c7c7c7"]}
                  animationSpeed={6}
                  showBorder={false}
                  className="custom-class"
                >
                  NEW CONTINENTAL GT
                </GradientText>
                </div>

              <div className='right-text'>
                <GradientText
                    colors={["#c7c7c7", "#000000", "#c7c7c7", "#000000", "#c7c7c7"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                  >
                    WHY BENTLEY
                  </GradientText>
                  <div className='bg-text'></div>
              </div>
              <div className='desc'>
              <BlurText
                  text="Choose Bentley for timeless luxury,
                        unmatched craftsmanship, and 
                        a driving experience like no other."
                  delay={250}
                  animateBy="words"
                  direction="top"
                />
              </div>
          </>

        )}
        {page === "about" && (
          <>
            <div className="page-title">About Page</div>
            <div className="page-text">Halaman ini menjelaskan tentang situs ini.</div>
          </>
        )}
        {page === "model" && (
          <>
            <div className="page-title">Model Page</div>
            <div className="page-text">Berisi informasi tentang model yang digunakan.</div>
          </>
        )}
        {page === "history" && (
          <>
            <div className="logo-history">
            {bentley.length > 0 && (
            <img src={`http://localhost:4000${bentley[0].image}`} alt={bentley[0].name} />
        )}
            </div>

            <div className='home-content'>
              <div className="cont-1">
              {bentley.length > 4 && (
              <img src={`http://localhost:4000${bentley[4].image}`} alt={bentley[4].name} />
          )}
              </div>
              <div className="cont-2">
              {bentley.length > 5 && (
              <img src={`http://localhost:4000${bentley[5].image}`} alt={bentley[5].name} />
          )}
              </div>
              <div className="cont-3">
              {bentley.length > 6 && (
              <img src={`http://localhost:4000${bentley[6].image}`} alt={bentley[6].name} />
          )}
              </div>
              <div className="cont-4">
              {bentley.length > 7 && (
              <img src={`http://localhost:4000${bentley[7].image}`} alt={bentley[7].name} />
          )}
              </div>
              <div className="cont-5">
              {bentley.length > 8 && (
              <img src={`http://localhost:4000${bentley[8].image}`} alt={bentley[8].name} />
          )}
              </div>
            </div>


          </>
        )}
      </div>
    </div>
  );
}

export default App;
