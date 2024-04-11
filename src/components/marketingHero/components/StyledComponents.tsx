import styled from 'styled-components';

export const StyledComponents = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftWrap = styled.div`
  display: none;
  background-color: #fff4f4;
  flex-grow: 1;
  @media screen and (min-width: 520px) {
    display: flex;
  }
`;

export const MainWrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-grow: 2;
  padding: 20px;
  background: #fff4f4;
  max-width: 800px;
  border-radius: 5px;
  position: relative;
  height: 100%;
  min-height: 164px;

  @media screen and (max-width: 599px) {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    padding: 30px 20px;
    background: #fff4f4;
    max-width: 480px;
    border-radius: 5px;
    height: 140px;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    flex-direction: column-reverse;
    max-width: 480px;
    height: 358px;
  }

  @media screen and (min-width: 800px) {
    overflow: hidden;
    padding: 20px;
    background: #fff4f4;
    max-width: 800px;
    height: 100%;
  }
`;

export const RightWrap = styled.div`
  display: none;
  background-color: #fff4f4;

  @media screen and (min-width: 520px) {
    display: flex;
    flex-grow: 1;
  }

  @media screen and (min-width: 800px) {
    background-color: #ffe9e9;
  }
`;

export const MarketingTxt = styled.div`
  z-index: 5;
  @media screen and (min-width: 800px) {
    min-height: 164px;
  }
`;

export const MarketingTitle = styled.h1`
  color: #313131;
  font-family: 'GraphikLCWeb', sans-serif;
  font-weight: 800;
  width: 554px;
  text-align: start;
  font-size: 14px;
  line-height: 1.3;
  margin: 0 0 10px;

  @media screen and (min-width: 600px) and (max-width: 799px) {
    font-size: 18px;
    width: 403px;
    max-width: 205px;
  }

  @media screen and (min-width: 800px) {
    font-size: 24px;
    width: 554px;
  }
`;

export const MarketingDescription = styled.p`
  font-size: 12px;
  font-family: 'GraphikLCWeb', sans-serif;
  color: #212527;
  max-width: 281px;
  margin: 0 0 10px;
  line-height: 1.2;

  @media screen and (min-width: 600px) and (max-width: 799px) {
    font-size: 15px;
    max-width: 431px;
    line-height: 27px;
  }

  @media screen and (min-width: 800px) {
    max-width: 440px;
    font-size: 15px;
  }
`;

export const MarketingBtn = styled.button`
  text-shadow: none;
  box-shadow: none;
  border: 2px solid #ff5252;
  font-size: 11px;
  background: none !important;
  padding: 5px 15px;
  font-family: 'GraphikLCWeb', sans-serif;
  font-weight: 800;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    border: 2px solid #ff5252;
    font-size: 14px;
    background: none !important;
    padding: 5px 15px 5px 15px;
    font-family: 'GraphikLCWeb', sans-serif;
    font-weight: 800;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const MarketingBtnLink = styled.a`
  color: #ff5252;
  text-decoration: none;
`;

export const MarketingBtnImg = styled.img`
  border: 0;
  vertical-align: middle;
  margin-left: 6px;
`;

export const MarketingImg = styled.div``;

export const MarketingImgPic = styled.img`
  position: absolute;
  bottom: 0;
  right: 82px;
  width: 274px;
  height: 177px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    width: 148px;
    height: 121px;
    right: 0;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    width: 186px;
    height: 177px;
    position: inherit;
  }
`;

export const CompanyLogo = styled.img`
  position: absolute;
  right: 17px;
  top: 15px;
  width: 30px;
  border: 0;
  vertical-align: middle;
  z-index: 2;
`;

export const Vector1 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 222px;
  border: 0;
  vertical-align: middle;

  @media screen and (max-width: 599px) {
    display: none;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    display: none;
  }
`;

export const Vector2 = styled.img`
  border: 0;
  vertical-align: middle;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 114px;
  }
  @media screen and (min-width: 600px) and (max-width: 799px) {
    display: none;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
