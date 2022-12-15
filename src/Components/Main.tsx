import React from 'react';
import styled from 'styled-components';
import bgimg from '../img/home_header.png';

const Main = () => {
  return (
    <MainContainer>
      <Title>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="490"
          height="90"
          viewBox="0 0 103 20"
        >
          <path
            d="M6.04193 14.24C6.57869 14.24 7.01979 14.1842 7.36523 14.0726C7.98171 13.8654 8.48659 13.4668 8.87986 12.8769C9.19341 12.4039 9.41928 11.798 9.55745 11.0593C9.63717 10.6182 9.67703 10.209 9.67703 9.83167C9.67703 8.38082 9.38739 7.25415 8.80811 6.45167C8.23415 5.64918 7.30678 5.24794 6.02599 5.24794H3.21197V14.24H6.04193ZM1.61763 3.88478H6.3608C7.97108 3.88478 9.21999 4.45608 10.1075 5.59869C10.8994 6.6297 11.2953 7.95035 11.2953 9.56063C11.2953 10.8042 11.0614 11.9282 10.5938 12.9327C9.77003 14.7077 8.35373 15.5952 6.34486 15.5952H1.61763V3.88478ZM13.169 3.88478H21.7067V5.31968H14.7155V8.87507H21.1805V10.2303H14.7155V14.2002H21.8262V15.5952H13.169V3.88478ZM23.7318 3.88478H29.0011C30.0427 3.88478 30.8824 4.17973 31.5201 4.76964C32.1579 5.35423 32.4768 6.17797 32.4768 7.24087C32.4768 8.15495 32.1924 8.95213 31.6238 9.63238C31.0551 10.3073 30.1809 10.6448 29.0011 10.6448H25.3182V15.5952H23.7318V3.88478ZM30.8744 7.24884C30.8744 6.38789 30.5556 5.8033 29.9178 5.49506C29.5671 5.33031 29.0861 5.24794 28.475 5.24794H25.3182V9.30554H28.475C29.1871 9.30554 29.7637 9.15407 30.2048 8.85115C30.6512 8.54823 30.8744 8.01412 30.8744 7.24884ZM39.5878 9.24974C40.3319 9.24974 40.9191 9.10093 41.3496 8.80332C41.7854 8.50571 42.0033 7.96895 42.0033 7.19303C42.0033 6.35866 41.7003 5.79001 41.0945 5.48709C40.7703 5.32766 40.3372 5.24794 39.7951 5.24794H35.9209V9.24974H39.5878ZM34.3345 3.88478H39.7552C40.6481 3.88478 41.3841 4.01498 41.9634 4.27539C43.0635 4.77495 43.6135 5.69701 43.6135 7.04157C43.6135 7.74308 43.4674 8.31705 43.1751 8.76346C42.8881 9.20988 42.4842 9.5686 41.9634 9.83964C42.4205 10.0256 42.7632 10.2701 42.9918 10.573C43.2256 10.876 43.3558 11.3676 43.3824 12.0478L43.4382 13.6182C43.4541 14.0646 43.4913 14.3968 43.5498 14.6147C43.6454 14.9867 43.8155 15.2259 44.06 15.3321V15.5952H42.1149C42.0617 15.4942 42.0192 15.364 41.9873 15.2046C41.9554 15.0452 41.9289 14.7369 41.9076 14.2799L41.8119 12.3268C41.7747 11.5615 41.4904 11.0487 40.959 10.7883C40.656 10.6448 40.1804 10.573 39.532 10.573H35.9209V15.5952H34.3345V3.88478Z"
            fill="white"
          ></path>
          <path
            d="M59.0023 3.88478H61.2742L64.6383 13.7856L67.9784 3.88478H70.2264V15.5952H68.7198V8.68374C68.7198 8.44459 68.7251 8.04866 68.7357 7.49596C68.7464 6.94325 68.7517 6.35069 68.7517 5.71827L65.4115 15.5952H63.8411L60.477 5.71827V6.077C60.477 6.36398 60.4824 6.80242 60.493 7.39233C60.5089 7.97692 60.5169 8.40739 60.5169 8.68374V15.5952H59.0023V3.88478ZM72.4668 3.88478H81.0045V5.31968H74.0133V8.87507H80.4784V10.2303H74.0133V14.2002H81.1241V15.5952H72.4668V3.88478ZM83.0296 3.88478H91.5673V5.31968H84.5762V8.87507H91.0412V10.2303H84.5762V14.2002H91.6869V15.5952H83.0296V3.88478ZM101.963 3.88478V5.27983H98.0168V15.5952H96.4065V5.27983H92.4605V3.88478H101.963Z"
            fill="white"
          ></path>
          <path
            d="M56.4925 5.55883C57.0505 6.59516 57.1568 7.92112 56.8113 9.53672C56.4393 11.2852 55.6873 12.7387 54.5553 13.8972C53.2214 15.2577 51.5899 15.938 49.6607 15.938C47.8591 15.938 46.5704 15.3428 45.7944 14.1523C45.1195 13.0044 44.968 11.5536 45.3401 9.79978C45.6749 8.21607 46.3551 6.86088 47.3808 5.73421C48.6988 4.28868 50.3463 3.56591 52.3233 3.56591C54.3906 3.56591 55.7803 4.23022 56.4925 5.55883ZM55.1771 9.56063C55.4694 8.18418 55.3445 7.07612 54.8025 6.23643C54.2657 5.39674 53.3729 4.9769 52.124 4.9769C50.9123 4.9769 49.8334 5.39409 48.8875 6.22846C47.9468 7.05752 47.3038 8.2825 46.9583 9.90342C46.682 11.2001 46.7776 12.2949 47.2453 13.1878C47.713 14.0753 48.6829 14.519 50.155 14.519C51.5527 14.519 52.6687 14.0195 53.5031 13.0204C54.3428 12.0159 54.9008 10.8627 55.1771 9.56063Z"
            fill="white"
          ></path>
        </svg>
        <h1>디자이너와 프로그래머가 만났을 때</h1>
      </Title>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-image: url(${bgimg});
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export default Main;
