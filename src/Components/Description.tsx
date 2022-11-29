import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import bgimg from './img/home_header.png';

const Description = () => {
  return (
    <div>
      <BoxContainer>
        <Box>
          <Span1>탄생한지</Span1>
          <Span2>6년</Span2>
        </Box>
        <Box>
          <Span1>누적 멤버 수</Span1>
          <Span2>800명+</Span2>
        </Box>
        <Box>
          <Span1>론칭 성공률</Span1>
          <Span2>100%</Span2>
        </Box>
        <Box>
          <Span1>론칭 서비스</Span1>
          <Span2>34+</Span2>
        </Box>
      </BoxContainer>
    </div>
  );
};

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  background-color: #1b1a1e;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  justify-content: center;
  text-align: center;
  margin: 10px;
`;

const Span1 = styled.div`
  color: #afaeb6;
  font-size: 1.5rem;
`;

const Span2 = styled.div`
  color: white;
  font-size: 3.125rem;
  font-weight: bold;
`;

export default Description;
