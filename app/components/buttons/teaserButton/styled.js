import styled from 'styled-components'


export const RuBtn = styled.button`
    position: relative;
    min-width: 120px;
    height: 42px;   
    border: none;
    border: 1px solid transparent;
    outline: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s linear;
    background-color: ${props => props.bgcolor};

    &:hover {
      cursor: pointer;
      background-color: #282828;
      border: 1px solid aqua;
    }

    &:active {
      cursor: pointer;
      background-color: #282828;
      color: aqua;
    }

    &>img {
      margin-left: 1rem;
      width: 24px;
      height: 24px;
      pointer-events: none;
    }

    &>h4 {
      font-size: 0.75rem;
      font-weight: 700;
      pointer-events: none;
    }
`;

export const Btn = styled.button`
    position: relative;
    width: 120px;
    height: 42px;    
    border-radius: 73px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    pointer-events: none;
    transition: all 0.4s linear;

    @media (max-width: 768px) {
      width: 6rem;
      height: 2rem; 
  }

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 0;
      border-radius: 73px;
      background-image:radial-gradient(circle, #3DBDA7, #3DBDA7);
      pointer-events: fill;
      
    }

    &:hover:before {
      cursor: pointer;
      background-image: radial-gradient(circle, #3DBDA7, #067D71);
    }    

 /*    &>img {
     
      margin-right: 0.5rem;
      width: 24px;
      height: 24px;
      pointer-events: none;

      @media (max-width: 768px) {
        width: 18px;
        height: 18px;
  }
    } */

    &>h4 {
      font-size: 0.75rem;
      font-weight: 700;
      pointer-events: none;

      @media (max-width: 768px) {
        margin: 0;
      padding: 0;
        font-size: 0.5rem;
  }
    }
`