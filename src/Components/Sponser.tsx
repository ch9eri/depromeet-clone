import React from 'react';
import styled from 'styled-components';
import img6 from '../img/sponser_img6.png';
import { Fade } from 'react-awesome-reveal';

const Sponser = () => {
  return (
    <Container>
      <h1>
        디프만과 함께하는
        <br />
        후원사를 소개할게요
      </h1>
      <ImgContainer>
        <Fade direction="up">
          <Img src={require('../img/sponser_img1.svg').default} alt="aws" />
          <Img
            src={require('../img/sponser_img2.svg').default}
            alt="notefolio"
          />
          <Img src={require('../img/sponser_img3.svg').default} alt="surfit" />
          <Img
            src={require('../img/sponser_img4.svg').default}
            alt="inflearn"
          />
          <Img src={require('../img/sponser_img5.svg').default} alt="dcamp" />
          <Img src={img6} alt="openup" />
        </Fade>
      </ImgContainer>
    </Container>
  );
};

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;
`;

const Img = styled.img`
  width: 190px;
  height: 100px;
  margin: 50px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 300px;
`;

export default Sponser;
