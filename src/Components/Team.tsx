import React, { useState } from 'react';
import styled from 'styled-components';
import Team1 from './Team/Team1';
import Team2 from './Team/Team2';
import Team3 from './Team/Team3';
import Team4 from './Team/Team4';
import Team5 from './Team/Team5';
import { Slide } from 'react-awesome-reveal';

const Team = () => {
  const [content, setContent] = useState(1);
  // const [isClicked, setIsClicked] = useState(false);
  const handleClickButton = (e: any) => {
    const { name } = e.target;
    setContent(name);
    // setIsClicked(!isClicked);
  };
  const selectComponent: any = {
    1: <Team1 />,
    2: <Team2 />,
    3: <Team3 />,
    4: <Team4 />,
    5: <Team5 />,
  };

  return (
    <Container>
      <h1>디프만의 팀은 어떻게 구성되어 있을까요?</h1>
      <div>
        <TeamBtn name="1" onClick={handleClickButton}>
          UIUX Design
        </TeamBtn>
        <TeamBtn name="2" onClick={handleClickButton}>
          Web
        </TeamBtn>
        <TeamBtn name="3" onClick={handleClickButton}>
          IOS
        </TeamBtn>
        <TeamBtn name="4" onClick={handleClickButton}>
          Android
        </TeamBtn>
        <TeamBtn name="5" onClick={handleClickButton}>
          Backend
        </TeamBtn>
      </div>
      <Slide direction="up">
        {content && <div>{selectComponent[content]}</div>}
      </Slide>
    </Container>
  );
};

const TeamBtn = styled.button`
  font-size: 1.5rem;
  padding: 14px 28px;
  border-radius: 12px;
  border-style: none;
  margin: 10px;
  background-color: #1b1a1e;
  color: #82818d;
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

export default Team;
