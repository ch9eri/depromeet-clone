import React from 'react';
import styled from 'styled-components';
import img1 from '../../img/team_img1.png';

const Team1 = () => {
  return (
    <div>
      <Box>
        <img src={img1} alt="uiux" />
        <div>
          <TeamName>서비스 디자인의 모든 것을 담당하는<br />UIUX 디자이너</TeamName>
          <p style={{ lineHeight: '1.5', fontSize: '20px' }}>
            서비스 기획부터 UX/UI, 브랜딩, 마케팅까지 -
            <br />
            서비스 런칭에 필요한 메인 업무를 담당하게 되어요.
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

export default Team1;
