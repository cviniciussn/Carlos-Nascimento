import styled from "styled-components";
import { keyframes } from "styled-components";

const entrance = keyframes` 
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

const entranceMatch = keyframes`
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HomeComponent = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  height: 750px;
  width: 30vw;
  //border: solid #FEDC00 10px;
  background-color: whitesmoke;
  box-shadow: 5px 5px 25px whitesmoke;
  overflow: hidden;
  border-radius: 10px;
  position: relative;



  .content {
    height: 600px;
    width: 100%;
    //border: solid 1px red;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: ${(props) => `${props.animate}`};
    background-color: #fdfcfb;
  }
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 200px;
      width: 200px;
    }
  }

  .img-container {
    animation-name: ${entrance};
    animation-duration: 0.5s;
    height: 100%;
    position: relative;
    z-index: 0;
    display: ${(props) => (props.isOver ? "none" : "flex")};

    h1 {
      position: absolute;
      left: 10px;
      top: 10px;
      color: #2c2c2c;
      background-color: #fedc00;
      border-radius: 5px;
    }

    h2 {
      position: absolute;
      left: 10px;
      top: 60px;
      color: whitesmoke;
      background-color: gray;
      border-radius: 5px;
    }

    .match {
      position: absolute;
      height: 100%;
      width: 100%;
      display: ${(props) => (props.matchStamp ? "block" : "none")};
      animation-name: ${entranceMatch};
      animation-duration: 2s;
    }

    .main-pic {
      display: block;
      height: 100%;
      width: 100%;
    }

    div {
      width: 100%;
      position: absolute;
      bottom: 0;
      opacity: 1;
      height: 15%;
      background-color: black;
      color: white;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.637);
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: large;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: 1366px) {
    height: 600px;
  }
`;

const FooterComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  height: 90px;
  background-color: rgba(168, 10, 63, 1);

  .user {
    border-radius: 99%;
    height: 40px;
    width: 40px;
  }

  .buttons {
    width: 100px;
    display: flex;
    justify-content: space-between;
    img {
      height: 50px;
      width: 50px;
      &:hover {
        transform: scale(1.2);
        transition: all 0.5s;
      }
    }
  }

  .matches {
    img {
      height: 50px;
      width: 50px;
      &:hover {
        transform: scale(1.2);
        transition: all 0.5s;
      }
    }
  }
`;

export { PageContainer, HomeComponent, FooterComponent };
