import React from 'react';
import styled from 'styled-components';
import img5 from '../../img/team_img5.png';

const Team5 = () => {
  return (
    <div>
      <Box>
        <img src={img5} alt="backend" />
        <div>
          <TeamName>
            시스템의 전반적인 흐름을 관리하는
            <br />
            Backend Developer
          </TeamName>
          <p style={{ lineHeight: '1.5', fontSize: '20px' }}>
            서비스의 전반적인 흐름을 구축해요. 시스템 설계부터 배포까지,
            <br />
            서비스 및 데이터의 흐름을 관리하며 서비스의 전반적인 Life
            <br />
            Cycle을 경험하게 되어요.
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

export default Team5;
