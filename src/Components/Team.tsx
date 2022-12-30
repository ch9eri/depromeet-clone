import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Team1 from './Team/Team1';
import Team2 from './Team/Team2';
import Team3 from './Team/Team3';
import Team4 from './Team/Team4';
import Team5 from './Team/Team5';
import '../css/animation.css';

const Team = () => {
  const [content, setContent] = useState('1');
  const handleClickButton = (e: any) => {
    const { id } = e.target;
    setContent(id);
  };
  const selectComponent: any = {
    1: <Team1 />,
    2: <Team2 />,
    3: <Team3 />,
    4: <Team4 />,
    5: <Team5 />,
  };

  useEffect(() => {
    const btnId = ['1', '2', '3', '4', '5'];
    const nonBtnId = btnId.filter((item) => item !== content);
    document.getElementById(content)!.style.color = 'white';
    document.getElementById(content)!.style.backgroundColor = '#1b5bff';
    nonBtnId.map((item) => {
      document.getElementById(item)!.style.color = '#82818d';
      document.getElementById(item)!.style.backgroundColor = '#1b1a1e';
      return null;
    });
  }, [content]);

  return (
    <Container>
      <h1>디프만의 팀은 어떻게 구성되어 있을까요?</h1>
      <div>
        <TeamBtn id="1" onClick={handleClickButton}>
          UIUX Design
        </TeamBtn>
        <TeamBtn id="2" onClick={handleClickButton}>
          Web
        </TeamBtn>
        <TeamBtn id="3" onClick={handleClickButton}>
          IOS
        </TeamBtn>
        <TeamBtn id="4" onClick={handleClickButton}>
          Android
        </TeamBtn>
        <TeamBtn id="5" onClick={handleClickButton}>
          Backend
        </TeamBtn>
      </div>
      <TeamContainer>
        <div className="animation">
          {content && <div>{selectComponent[content]}</div>}
        </div>
      </TeamContainer>
    </Container>
  );
};

const TeamBtn = styled.button`
  font-size: 1.5rem;
  padding: 14px 28px;
  border-radius: 12px;
  border-style: none;
  margin: 10px;
  &:active {
    background-color: #1b5bff;
    color: white;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TeamContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
`;

export default Team;
