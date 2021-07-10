import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-top: 60px;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lora', serif;
  color: #444;
`;

const HeaderTitleSm = styled.span`
  position: absolute;
  top: 18%;
  font-size: 20px;
`;

const HeaderTitleLg = styled.span`
  position: absolute;
  top: 20%;
  font-size: 100px;
`;

const HeaderImg = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
`;

export {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleSm,
  HeaderTitleLg,
  HeaderImg,
};
