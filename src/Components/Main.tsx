import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import bgimg from './img/home_header.png';

const Main = () => {
  return (
    <div>
      {/* <img src={bgimg} /> */}
      <Fade>
        <h1>DEPROMEET</h1>
        <h1>디자이너와 프로그래머가 만났을 때</h1>
      </Fade>
    </div>
  );
};

export default Main;
