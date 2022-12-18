import React from 'react';
import styled from 'styled-components';
import img2 from '../../img/team_img2.png';

const Team2 = () => {
  return (
    <div>
      <Box>
        <img src={img2} alt="web" />
        <div>
          <TeamName>
            웹부터 앱까지 클라이언트 개발을 담당하는
            <br />
            Web Developer
          </TeamName>
          <p style={{ lineHeight: '1.5', fontSize: '20px' }}>
            서비스의 Life Cycle에 전반적으로 참여하며 웹 혹은 웹뷰
            <br />
            형태의 앱 클라이언트 개발을 담당하게 되어요.
          </p>
        </div>
      </Box>
    </div>
  );
};

const Box = styled.div`
  background-color: #1b1a1e;
  height: 330px;
  width: 80vw;
  border-radius: 12px;
  color: #82818d;
  display: flex;
  align-items: center;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 40px;
`;

const TeamName = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export default Team2;
