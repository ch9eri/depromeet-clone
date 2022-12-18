import React from 'react';
import styled from 'styled-components';
import img1 from '../img/schedule_img1.png';
import img2 from '../img/schedule_img2.png';
import img3 from '../img/schedule_img3.png';
import img4 from '../img/schedule_img4.png';
import { Slide } from 'react-awesome-reveal';

const Schedule = () => {
  return (
    <div>
      <h1>디프만 12기는 다음과 같이 진행될 예정이에요!</h1>
      <p style={{ fontSize: '1.5rem', color: '#82818d' }}>
        디프만 12기는 매주 토요일, 총 17주간 진행됩니다.
      </p>
      <Slide direction="left">
        <BoxContainer>
          <Box>
            <TextBox>
              <Week>1~3주차</Week>
              <WeekText>
                12기를 함께할 멤버들을 만날 수 있는 OT와 멋진 <br />
                서비스를 위한 아이디에이션, MVP 설정을 진행해요.
              </WeekText>
            </TextBox>
            <img src={img1} alt="week1_3" />
          </Box>
          <Box>
            <TextBox>
              <Week>4~8주차</Week>
              <WeekText>
                연사들의 강연을 들으며 서비스 기획을 구체화하고, <br />
                UT와 중간 공유로 유의미한 피드백을 받아요.
              </WeekText>
            </TextBox>
            <img src={img2} alt="week4_8" />
          </Box>
          <Box>
            <TextBox>
              <Week>9~13주차</Week>
              <WeekText>론칭을 위해 열심히 팀 활동을 수행해요.</WeekText>
            </TextBox>
            <img src={img3} alt="week9_13" />
          </Box>
          <Box>
            <TextBox>
              <Week>14~17주차</Week>
              <WeekText>
                드디어 최종 발표! 함께 모여 열심히 만든 서비스를 <br />
                공유하고 우승팀을 선정해요.
              </WeekText>
            </TextBox>
            <img src={img4} alt="week14_17" />
          </Box>
        </BoxContainer>
      </Slide>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 200px;
  margin: 30px;
  border-radius: 12px;
`;

const TextBox = styled.div`
  background-color: #1b1a1e;
  border-radius: 12px 0px 0px 12px;
  text-align: left;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Week = styled.p`
  color: #82818d;
  font-size: 18px;
  font-weight: bold;
`;

const WeekText = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

const BoxContainer = styled.div`
  margin-right: 100px;
  margin-left: 100px;
`;

export default Schedule;
