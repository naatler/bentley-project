import React, {useEffect, useState, } from 'react';
import axios from 'axios';
import './App.css'; 
import { useRef } from 'react';
import GradientText from './components/GradientText';
import BlurText from './components/BlurText';
import SplitText from './components/SplitText/SplitText';
import VariableProximity from './components/VariableProximity/VariableProximity';




function App() {
  const [page, setPage] = useState("home");
  const [bentley, setData] = useState([]);
  const BASE_URL = "http://localhost:4000";
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('overview');


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
            <div className="logo">
            {bentley.length > 0 && (
            <img src={`http://localhost:4000${bentley[0].image}`} alt={bentley[0].name} />
        )}
            </div>
          <div className='about-content'>
            <div className="media">
                {bentley.length > 9 && (
                <img src={`http://localhost:4000${bentley[9].image}`} alt={bentley[9].name} />
            )}
                </div>
            <div className="sec-media">
                {bentley.length > 10 && (
                <img src={`http://localhost:4000${bentley[10].image}`} alt={bentley[10].name} />
            )}
                </div>
                <div className='text-about'>
                  <SplitText
                      text="About Bentley"
                      className="text-2xl font-semibold text-center"
                      delay={150}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    />
                </div>
          </div>
                <div
                  ref={containerRef}
                  style={{position: 'relative'}}
                  className='desc-about'
                  >
                    <VariableProximity
                      label={'Bentley Environmental Foundation aims to help solve some of the most important challenges facing humanity today. In the spirit of Bentley’s longstanding tradition of innovation, we believe in translating commitments into bold and innovative actions alongside our partners. This is why we collaborate with globally renowned NGOs and charities to catalyse environmental change through co-created and transformative environmental projects'}
                      className={'variable-proximity-demo'}
                      fromFontVariationSettings="'wght' 400, 'opsz' 9"
                      toFontVariationSettings="'wght' 1000, 'opsz' 40"
                      containerRef={containerRef}
                      radius={100}
                      falloff='linear'
                    />
                  </div>
          </>
        )}
      {page === "model" && (
        <>
            <div className="logo">
            {bentley.length > 0 && (
              <img src={`http://localhost:4000${bentley[0].image}`} alt={bentley[0].name} />
            )}
            </div>
            <div className='line'></div>
    {/* Sidebar + Konten */}
    <div className="model-section" style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
      
      {/* Sidebar Text */}
                <div className="side-ewb">
                {bentley.length > 19 && (
                <img src={`http://localhost:4000${bentley[19].image}`} alt={bentley[19].name} />
            )}
                </div>
                <div className="side-spur">
                {bentley.length > 20 && (
                <img src={`http://localhost:4000${bentley[20].image}`} alt={bentley[20].name} />
            )}
                </div>
                <div className="side-azure">
                {bentley.length > 21 && (
                <img src={`http://localhost:4000${bentley[21].image}`} alt={bentley[21].name} />
            )}
                </div>
                <div className="side-gt">
                {bentley.length > 22 && (
                <img src={`http://localhost:4000${bentley[22].image}`} alt={bentley[22].name} />
            )}
                </div>
      <div className="text-list" style={{ width: '200px' }}>
        <p onClick={() => setActiveSection('1')} style={{ cursor: 'pointer' }}>Bentayga Extended Wheelbase</p>
        <p onClick={() => setActiveSection('2')} style={{ cursor: 'pointer' }}>New Flying Spur</p>
        <p onClick={() => setActiveSection('3')} style={{ cursor: 'pointer' }}>New Continental GT Convertible</p>
        <p onClick={() => setActiveSection('4')} style={{ cursor: 'pointer' }}>New Continental GT</p>
      </div>

      {/* Konten Samping */}
      <div className="side-content-model" style={{ flex: 1 }}>
        {activeSection === '1' && (
          <div className='ewb'>
            <div className='text-ewb'>
              <h1>
                Bentayga Extended Wheelbase
              </h1>
              <p>
                With an extended wheelbase that boosts rear legroom significantly, the Bentayga EWB sets new standards in SUV comfort.
              </p>
            </div>
               <div className="front-ewb">
                {bentley.length > 11 && (
                <img src={`http://localhost:4000${bentley[11].image}`} alt={bentley[11].name} />
            )}
                </div>
                <div className="bg-ewb">
                {bentley.length > 12 && (
                <img src={`http://localhost:4000${bentley[12].image}`} alt={bentley[12].name} />
            )}
                </div>
          </div>
        )}
        {activeSection === '2' && (
          <div className='spur'>
            <div className='text-spur'>
              <h1>
                New Flying Spur
              </h1>
              <p>
              Flying Spur is a luxury sedan that offers a unique combination of exhilarating performance and exquisite craftsmanship.
              </p>
            </div>
               <div className="front-spur">
                {bentley.length > 13 && (
                <img src={`http://localhost:4000${bentley[13].image}`} alt={bentley[13].name} />
            )}
                </div>
                <div className="bg-spur">
                {bentley.length > 14 && (
                <img src={`http://localhost:4000${bentley[14].image}`} alt={bentley[14].name} />
            )}
                </div>
          </div>
        )}
        {activeSection === '3' && (
          <div className='gtc'>
            <div className='text-gtc'>
              <h1>
                Continental GT Convertible
              </h1>
              <p>
              With a phenomenally powerful Ultra-Performance Hybrid Powertrain the new generation Continental GTC can take you from zero to 60 mph in 3.2 seconds (0-100 km/h in 3.4 seconds).
              </p>
            </div>
               <div className="front-gtc">
                {bentley.length > 15 && (
                <img src={`http://localhost:4000${bentley[15].image}`} alt={bentley[15].name} />
            )}
                </div>
                <div className="bg-gtc">
                {bentley.length > 16 && (
                <img src={`http://localhost:4000${bentley[16].image}`} alt={bentley[16].name} />
            )}
                </div>
          </div>
        )}
        {activeSection === '4' && (
          <div className='gt'>
         <div className='text-gt'>
              <h1>
              New Continental GT 
              </h1>
              <p>
              With a phenomenal new Ultra-Performance Hybrid V8 powertrain, the new Bentley Continental GT combines the V8 power you know with an unprecedented boost of torque from its electric motor.
              </p>
            </div>
               <div className="front-gt">
                {bentley.length > 17 && (
                <img src={`http://localhost:4000${bentley[17].image}`} alt={bentley[17].name} />
            )}
                </div>
                <div className="bg-gt">
                {bentley.length > 18 && (
                <img src={`http://localhost:4000${bentley[18].image}`} alt={bentley[18].name} />
            )}
                </div>
          </div>
        )}
      </div>

    </div>
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
              <div className='deschis'>
                <BlurText
                    text="Bentley Motors was founded on July 10, 1919, by Walter Owen Bentley in Cricklewood, 
                    London, England. His goal was simple: to build a fast car, a good car, 
                    the best in its class."
                    delay={250}
                    animateBy="words"
                    direction="top"
                  />
              </div>
              <div className='deschis-2'>
                <BlurText
                    text="The first Bentley car, the 3 Litre, was launched in 1921 and quickly gained fame for its performance, 
                    especially in endurance racing. Bentley won the prestigious 24 Hours of Le Mans five 
                    times between 1924 and 1930."
                    delay={250}
                    animateBy="words"
                    direction="top"
                  />
              </div>
            </div> 
          </>
        )}
      </div>
    </div>
  );
}

export default App;
