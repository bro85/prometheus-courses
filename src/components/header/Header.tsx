import { FC, useState } from 'react';
import {
  Wrapper,
  WrapperCenter,
  Logo,
  LogoImage,
  HamburgerMenu,
  HamburgerMenuLine,
  MobileNav,
  MobileNavItem,
  HeaderNav,
  HeaderNavCourses,
  HeaderProfile,
  HeaderProfileWrap,
  HeaderProfilePic,
  HeaderProfileName,
  HeaderProfileArrow,
  HeaderNavHelp,
  ProfileMenu,
  ProfileMenuItem,
} from './components/StyledComponents';

interface HeaderProps {
  user: { name: string };
}

export const Header: FC<HeaderProps> = ({ user }) => {
  const imageUrl = '/img/logo.svg';
  const [isOpened, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!isOpened);
  };
  const [isProfileMenuOpened, setProfileClick] = useState(false);
  const handleProfileClick = () => {
    setProfileClick(!isProfileMenuOpened);
  };

  return (
    <Wrapper>
      <WrapperCenter>
        <Logo href="#">
          <LogoImage src={imageUrl} alt="Prometheus" />
        </Logo>
        <HamburgerMenu
          onClick={handleClick}
          className={isOpened ? 'active' : ''}
        >
          <HamburgerMenuLine />
          <HamburgerMenuLine />
          <HamburgerMenuLine />
          <HamburgerMenuLine />
        </HamburgerMenu>
        <HeaderNav>
          <HeaderNavHelp href="#" target="_blank">
            Помощь
          </HeaderNavHelp>
          <HeaderProfile>
            <HeaderProfileWrap href="#">
              <HeaderProfilePic src="/img/default-user.png" />
              <HeaderProfileName>{user.name}</HeaderProfileName>
            </HeaderProfileWrap>
            <HeaderProfileArrow onClick={handleProfileClick}>
              {isProfileMenuOpened && (
                <ProfileMenu>
                  <ProfileMenuItem href="#">Панель управления</ProfileMenuItem>
                  <ProfileMenuItem href="#">Профиль</ProfileMenuItem>
                  <ProfileMenuItem href="#">Учётная запись</ProfileMenuItem>
                  <ProfileMenuItem href="#">История заказов</ProfileMenuItem>
                  <ProfileMenuItem href="#">Выйти</ProfileMenuItem>
                </ProfileMenu>
              )}
            </HeaderProfileArrow>
          </HeaderProfile>
          <HeaderNavCourses href="#">Всі курси</HeaderNavCourses>
        </HeaderNav>
        {isOpened && (
          <MobileNav>
            <MobileNavItem href="#">Панель управления</MobileNavItem>
            <MobileNavItem href="#">Профиль</MobileNavItem>
            <MobileNavItem href="#">Учётная запись</MobileNavItem>
            <MobileNavItem href="#">История заказов</MobileNavItem>
            <MobileNavItem href="#">Выйти</MobileNavItem>
          </MobileNav>
        )}
      </WrapperCenter>
    </Wrapper>
  );
};
