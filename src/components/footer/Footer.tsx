import { FC } from 'react';
import {
  FooterWrap,
  FooterContainer,
  FooterAside,
  FooterAsideInner,
  FooterAsideNav,
  FooterAsideCopyright,
  FooterAsideContainer,
  FooterAsideMenu,
  FooterAsideMenuItem,
  FooterAsidePayment,
  FooterAsideSocial,
  FooterAsideSecondary,
  FooterColumns,
  FooterColumnItem,
  FooterColumnTitle,
  FooterColumnLink,
  FooterColumnApp,
} from './components/StyledComponents';
import { SocialMenu } from '../socialMenu/SocialMenu';

export const Footer: FC = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterColumns>
          <FooterColumnItem>
            <FooterColumnTitle>Prometheus</FooterColumnTitle>
            <FooterColumnLink href="https://prometheus.org.ua/about-us/">
              Про нас
            </FooterColumnLink>
          </FooterColumnItem>
          <FooterColumnItem>
            <FooterColumnTitle>Prometheus+</FooterColumnTitle>
            <FooterColumnLink href="https://prometheus.org.ua/corporate-learning/">
              Корпоративне навчання
            </FooterColumnLink>
            <FooterColumnLink href="https://prometheus.org.ua/partnership/">
              Співпраця
            </FooterColumnLink>
          </FooterColumnItem>
          <FooterColumnItem>
            <FooterColumnTitle>Мобільні застосунки+</FooterColumnTitle>
            <FooterColumnApp
              href="https://play.google.com/store/apps/details?id=org.prometheus.android"
              target="_blank"
            >
              <img src="/img/app/google-play.svg" alt="Google Play" />
            </FooterColumnApp>
            <FooterColumnApp
              href="https://itunes.apple.com/us/app/prometheus-online-courses/id1213523151"
              target="_blank"
            >
              <img src="/img/app/app-store.svg" alt="App Store" />
            </FooterColumnApp>
          </FooterColumnItem>
        </FooterColumns>
      </FooterContainer>
      <FooterAside>
        <FooterContainer>
          <FooterAsideInner>
            <FooterAsideNav>
              <FooterAsideCopyright href="https://prometheus.org.ua/">
                © 2024 Prometheus
              </FooterAsideCopyright>
              <FooterAsideContainer>
                <FooterAsideMenu>
                  <FooterAsideMenuItem href="https://prometheus.org.ua/privacy-policy/">
                    Політика конфіденційності
                  </FooterAsideMenuItem>
                  <FooterAsideMenuItem href="https://prometheus.org.ua/offert/">
                    Договір публічної оферти
                  </FooterAsideMenuItem>
                  <FooterAsideMenuItem href="https://prometheus.org.ua/faq/">
                    Допомога
                  </FooterAsideMenuItem>
                </FooterAsideMenu>
              </FooterAsideContainer>
            </FooterAsideNav>
            <FooterAsideSecondary>
              <FooterAsidePayment>
                <img src="/img/visa-logo.svg" alt="Visa" />
                <img src="/img/mastercard-logo.svg" alt="Mastercard" />
              </FooterAsidePayment>
              <FooterAsideSocial>
                <SocialMenu></SocialMenu>
              </FooterAsideSocial>
            </FooterAsideSecondary>
          </FooterAsideInner>
        </FooterContainer>
      </FooterAside>
    </FooterWrap>
  );
};
