import React from 'react';
import styled from 'styled-components';
import img1 from '../img/more_img1.png';
import img2 from '../img/more_img2.png';
import img3 from '../img/more_img3.png';

const More = () => {
  return (
    <div>
      <h1>
        디프만에 대해서
        <br />더 자세히 알고 싶다면?
      </h1>
      <BoxContainer>
        <Box>
          <img src={img1} alt="활동 내역" />
          <MoreContainer>
            <MoreTitle>활동 내역</MoreTitle>
            <MoreText>결과만큼 과정도 중요한<br />디프만의 활동 내역</MoreText>
          </MoreContainer>
        </Box>
        <Box>
          <img src={img2} alt="멤버 인터뷰" />
          <MoreContainer>
            <MoreTitle>멤버 인터뷰</MoreTitle>
            <MoreText>디프만 11기 멤버가<br />말해주는 디프만</MoreText>
          </MoreContainer>
        </Box>
        <Box>
          <img src={img3} alt="프로젝트" />
          <MoreContainer>
            <MoreTitle>활동 내역</MoreTitle>
            <MoreText>디프만에서 론칭된<br />개성있는 프로젝트</MoreText>
          </MoreContainer>
        </Box>
      </BoxContainer>
    </div>
  );
};

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Box = styled.div`
  background-color: #1b1a1e;
  border-radius: 12px;
  height: 530px;
  margin: 20px;
`;

const MoreContainer = styled.div`
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
`;

const MoreTitle = styled.p`
    font-size: 23px;
    font-weight: bold;
    color: #afaeb6;
`;

const MoreText = styled.p`
    font-weight: bold;
    font-size: 30px;
`;

export default More;
