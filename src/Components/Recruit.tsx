import React, { useState } from 'react';
import styled from 'styled-components';

const Recruit = () => {
  const [recruit, setRecruit] = useState(false);
  return (
    <div>
      <RecruitText>이제 여러분 차례예요!</RecruitText>
      <h1>디프만 12기 멤버가 되고싶다면</h1>
      {recruit ? (
        <RecruitBtnActive>지원서 작성하기</RecruitBtnActive>
      ) : (
        <RecruitBtnNotAct>모집 기간이 아닙니다.</RecruitBtnNotAct>
      )}
    </div>
  );
};

const RecruitBtnNotAct = styled.button`
  border-style: none;
  font-size: 1.5rem;
  width: 50vh;
  height: 10vh;
  margin: 10px;
  border-radius: 12px;
  font-weight: bold;
  color: #1b1a1e;
  background-color: #4c4a53;
`;

const RecruitBtnActive = styled.button`
  border-style: none;
  font-size: 1.5rem;
  width: 50vh;
  height: 10vh;
  margin: 10px;
  border-radius: 12px;
  font-weight: bold;
  color: #1b1a1e;
  background-color: white;
`;

const RecruitText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #82818e;
`;

export default Recruit;
