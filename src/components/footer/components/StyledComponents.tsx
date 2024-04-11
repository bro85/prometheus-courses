import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
  display: block;
  background: #fff;
  color: #18191f;
  font-size: 14px;
  line-height: 24px;
  padding-top: 64px;
  z-index: 100;
  position: relative;
`;

export const FooterContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 100px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  @media screen and (max-width: 1023px) {
    padding: 0 15px;
  }
`;

export const FooterAside = styled.div`
  margin-top: 0;
  padding-bottom: 40px;
  width: 100%;
`;

export const FooterAsideInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding-top: 28px;
  border-top: 1px solid #f9f9f9;
  @media screen and (min-width: 400px) {
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const FooterAsideNav = styled.div`
  display: flex;

  @media screen and (max-width: 1199px) {
    width: 100%;
    margin-bottom: 48px;
    text-align: center;
    flex: 0 1 100%;
  }
  @media screen and (max-width: 767px) {
    text-align: left;
    flex-wrap: wrap;
  }
`;

export const FooterAsideCopyright = styled.a`
  color: #18191f;
  margin-right: 40px;
  font: inherit;
  text-decoration: none;
  transition: color 0.1s linear;

  @media screen and (max-width: 1199px) {
    display: inline-block;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    order: 2;
    flex: 0 1 100%;
  }
  @media screen and (min-width: 1024px) {
    &:hover {
      color: #f58932;
    }
  }
`;

export const FooterAsideContainer = styled.div`
  display: inline-block;
`;

export const FooterAsideMenu = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const FooterAsideMenuItem = styled.a`
  color: #18191f;
  font: inherit;
  text-decoration: none;
  margin-left: 40px;
  transition: color 0.1s linear;
  &:first-child {
    margin-left: 0;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
  @media screen and (min-width: 1024px) {
    &:hover {
      color: #f58932;
    }
  }
`;

export const FooterAsideSecondary = styled.div`
  display: flex;
  @media screen and (min-width: 1200px) {
    margin-left: 60px;
  }
  @media screen and (min-width: 1400px) {
    margin-left: 90px;
  }
`;

export const FooterAsidePayment = styled.div`
  & img {
    display: inline-block;
    width: 41px;
    height: auto;
    margin-left: 16px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export const FooterAsideSocial = styled.div`
  @media screen and (min-width: 400px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 60px;
  }
  @media screen and (min-width: 1400px) {
    margin-left: 90px;
  }
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1440px;
`;

export const FooterColumnItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  flex: 0 1 16%;
  margin-left: 80px;
  border: none;
  background: none;
  box-shadow: none;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  @media screen and (max-width: 1401px) {
    width: 20%;
    flex: 0 1 20%;
    margin-left: 20px;
  }
  @media screen and (max-width: 1199px) {
    order: 2;
    width: 30%;
    flex: 0 1 30%;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 50%;
    flex: 0 1 50%;
    margin-bottom: 48px;
    &:nth-child(2) {
      order: 4;
      width: 100%;
      flex: 0 1 100%;
    }
  }
`;

export const FooterColumnTitle = styled.h3`
  color: #313131;
  font:
    normal 1.2em/1.2em 'Open Sans',
    sans-serif;
  font-size: 18px;
  line-height: 31px;
  margin-bottom: 12px;
`;

export const FooterColumnLink = styled.a`
  color: #18191f;
  font: inherit;
  text-decoration: none;
  transition: color 0.1s linear;
  @media screen and (min-width: 1024px) {
    &:hover {
      color: #f58932;
    }
  }
`;

export const FooterColumnApp = styled.a`
  display: block;
  width: 134px;
  margin-bottom: 17px;
  & img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
