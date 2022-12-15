import styled from 'styled-components';
import Main from './Components/Main';
import Description from './Components/Description';
import Team from './Components/Team';
import Schedule from './Components/Schedule';
import Header from './Components/Header';
import Recruit from './Components/Recruit';
import Footer from './Components/Footer';
import Sponser from './Components/Sponser';
import More from './Components/More';
import Channel from './Components/Channel';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Description />
      <Team />
      <Schedule />
      <More />
      <Sponser />
      <Recruit />
      <Channel />
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
`;

export default App;
