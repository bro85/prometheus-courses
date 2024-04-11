import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 70px;
  background-color: #fff;
  color: white;
`;

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

export const Logo = styled.a`
  position: absolute;
  width: 208px;
  height: 40px;
  top: 15px;
  left: 50%;
  margin-left: -104px;

  @media screen and (min-width: 1024px) {
    left: 20px;
    margin-left: 0;
  }
`;

export const LogoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const HamburgerMenuLine = styled.span`
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: #244b83;
  opacity: 1;
  top: 0;
  left: 0;
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  &:nth-child(2),
  &:nth-child(3) {
    top: 10px;
  }
  &:nth-child(4) {
    top: 20px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  left: 15px;
  position: absolute;
  top: 22px;
  width: 30px;
  height: 20px;
  padding-bottom: 5px;
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &.active span:nth-child(1) {
    top: 18px;
    width: 0;
    left: 50%;
  }
  &.active span:nth-child(2) {
    transform: rotate(45deg);
  }
  &.active span:nth-child(3) {
    transform: rotate(-45deg);
  }
  &.active span:nth-child(4) {
    top: 18px;
    width: 0;
    left: 50%;
  }
`;

export const HeaderNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    top: 14px;
    right: 15px;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    right: 20px;
  }
`;

export const HeaderNavCourses = styled.a`
  display: flex;
  align-items: center;
  margin-left: 17px;
  background: #244b83;
  border-radius: 8px;
  color: #fff;
  padding: 0 16px;
  height: 46px;
  @media screen and (min-width: 768px) {
    transition: background 0.1s linear;
  }
  @media screen and (min-width: 1024px) {
    &:hover {
      background: #f58932;
    }
  }
`;

export const HeaderProfile = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    margin-left: 17px;
  }
`;

export const HeaderProfileWrap = styled.a`
  display: flex;
  align-items: center;
  height: 46px;
  background: #f58932;
  padding: 0 5px;
  border-radius: 8px 0 0 8px;
`;

export const HeaderProfilePic = styled.img`
  width: 38px;
  height: auto;
  border-radius: 50%;
  margin-right: 5px;
`;

export const HeaderProfileName = styled.span`
  color: #fff;
  font-size: 16px;
`;

export const HeaderProfileArrow = styled.span`
  position: relative;
  height: 46px;
  border-radius: 0 8px 8px 0;
  background: #f58932;
  width: 36px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -2px 0 0 -5px;
    border: 5px solid transparent;
    border-top-color: #fff;
  }
`;

export const HeaderNavHelp = styled.a`
  color: #f58932;
`;

export const MobileNav = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid #244b83;
  background: #f9f9f9;
  z-index: 100;
`;

export const MobileNavItem = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: #9e9e9e;
  text-decoration: none;
  outline: none;
  display: block;
  background-color: #fbfbfb;
  border-radius: 0;
  width: 100%;
  padding: 12px 20px;
  border-bottom: 1px solid #e7e7e7;
  text-align: left;
  cursor: pointer;
  &:after {
    content: '\\00BB';
    padding-left: 4px;
    font-size: 1rem;
    font-weight: 600;
    color: inherit;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ProfileMenu = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 39px;
    left: 50px;
    width: 195px;
    border: 1px solid #2a3b4c;
    background-color: #fbfbfb;
    z-index: 10;
    user-select: none;
  }
`;

export const ProfileMenuItem = styled.a`
  display: block;
  font-weight: 400;
  padding: 10px 15px;
  color: #2a3b4c;
  line-height: 1em;
  border-bottom: 1px solid #e7e7e7;
  &:last-child {
    border-bottom: none;
    overflow: hidden;
  }
`;
