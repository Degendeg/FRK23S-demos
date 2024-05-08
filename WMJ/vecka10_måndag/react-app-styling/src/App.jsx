import React, { useState, useEffect } from 'react'
import './App.css' // regular stylesheet
import appStyles from './App.module.css' // modular stylesheet
import styled from 'styled-components' // styled components

function App() {
  const [dogs, setDogs] = useState([])

  const getDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogs(dogs => [...dogs, data.message]));
  };

  useEffect(() => {
    for (let i = 0; i < 21; i++) {
      getDogs();
    }
    return () => {
      setDogs([]);
    }
  }, []);

  // styled objects
  const styles = {
    img: {
      width: '400px',
      height: '400px',
      borderRadius: '5px',
      objectFit: 'cover',
      margin: '10px',
      float: 'left',
    },
    wrapper: {
      // imagine styling here
    },
    container: {
      // imagine styling here
    },
    card: {
      // imagine styling here
    }
  }

  // styled components
  const DogImg = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
    float: left;
    margin: 10px;
  `

  return (
    <>
      {/* Inline styling nedanför */}
      <div style={{ width: '200px', height: '200px', borderRadius: '10px', backgroundColor: 'red' }}></div>
      {/* Se App.module.css för lite kodkommentarer kring appStyles */}
      <div className={appStyles.demoClass}>My content goes here</div>
      {dogs && dogs.map((d, idx) => (
        <div>
          <DogImg src={d} key={idx} alt="" />
        </div>
      ))}
    </>
  )
}

export default App
