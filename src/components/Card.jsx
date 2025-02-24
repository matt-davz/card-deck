import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGetSuitImg } from '../hooks/useGetSuitImg';

// TODO:
//

const Wrapper = styled.div`
    max-width: 240px;  
    max-height: 336px;
    aspect-ratio: 1.5/1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;

    width: 100%;
    height: 100%;

    background-color: white;
    border: 1px solid cream;
    border-radius: 8px;
    
   
    cursor:pointer;

    h1{
    font-size: 2.5rem;
    color: ${props => (props.color === 'red' ? 'red' : 'black')};
    padding: 0;
    margin: 0;
    height: fit-content;

    }

    .cardheader{
    display: flex;
    justify-content: flext-start;
    }

    .cardheader h1{
    margin-left: 10px;
    }

    .cardfooter{
    display:flex;
    justify-content: flex-end;
    }

    .cardfooter h1{
    margin-right: 10px;
    }

    .sections{
    height: fit-content;
    }

    main{
    height: 60%
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    }

    .main-suite{
        width: 80%;
        height: 100%;
    }

`;


function Card({ suit, rank }) {

    const {suitImage,color} = useGetSuitImg(suit)

  return (
    <Wrapper color={color}>
      <div className="cardheader sections">
        <h1>{rank}</h1>
      </div>
      <main>
        <img className="main-suite" src={suitImage} alt="" />
      </main>
      <div className="cardfooter sections">
        <h1>{rank}</h1>
      </div>
    </Wrapper>
  );
}

export default Card;
