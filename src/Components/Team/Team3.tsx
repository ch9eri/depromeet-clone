import React from 'react';
import styled from 'styled-components';
import img3 from '../../img/team_img3.png';

const Team3 = () => {
  return (
    <div>
      <Box>
        <img src={img3} alt="ios" />
        <div>
          <TeamName>
            iOS 유저를 위한 앱 개발을 담당하는
            <br />
            iOS Developer
          </TeamName>
          <p style={{ lineHeight: '1.5', fontSize: '20px' }}>
            앱 개발을 담당해요. 디자인 및 서버 개발 직군과의 협업을 경험할
            <br />
            수 있으며, 보다 나은 사용성을 위해
            <br />
            Use Case 및 Wireframe을 구축하게 되어요.
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

export default Team3;
