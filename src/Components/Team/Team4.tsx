import React from 'react';
import styled from 'styled-components';
import img4 from '../../img/team_img4.png';

const Team4 = () => {
  return (
    <div>
      <Box>
        <img src={img4} alt="android" />
        <div>
          <TeamName>
            모바일 환경에서 사용자 경험을 개선하는데 필요한
            <br />
            퍼포먼스를 담당하는 Android Developer
          </TeamName>
          <p style={{ lineHeight: '1.5', fontSize: '20px' }}>
            구글의 Material Design에 대한 이해를 바탕으로 최고의 모바일
            <br />
            서비스를 만들기 위한 아이디어를 실행해 볼 수 있는 Android
            <br />
            Developer로 성장하게 되어요.
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

export default Team4;
