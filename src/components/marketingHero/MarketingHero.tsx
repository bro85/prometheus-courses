import { FC } from 'react';
import { StyledComponents } from './components/StyledComponents';
import { LeftWrap } from './components/StyledComponents';
import { MainWrap } from './components/StyledComponents';
import { RightWrap } from './components/StyledComponents';
import { MarketingTxt } from './components/StyledComponents';
import { MarketingTitle } from './components/StyledComponents';
import { MarketingDescription } from './components/StyledComponents';
import { MarketingBtn } from './components/StyledComponents';
import { MarketingBtnLink } from './components/StyledComponents';
import { MarketingBtnImg } from './components/StyledComponents';
import { MarketingImg } from './components/StyledComponents';
import { MarketingImgPic } from './components/StyledComponents';
import { CompanyLogo } from './components/StyledComponents';
import { Vector1 } from './components/StyledComponents';
import { Vector2 } from './components/StyledComponents';

export const MarketingHero: FC = () => {
  return (
    <StyledComponents>
      <LeftWrap></LeftWrap>
      <MainWrap>
        <MarketingTxt>
          <MarketingTitle>Ваша ідеальна робота чекає на вас!</MarketingTitle>
          <MarketingDescription>
            Знайдіть вакансії за вашою спеціальністю та почніть свій шлях до
            успіху вже сьогодні
          </MarketingDescription>
          <MarketingBtn>
            <MarketingBtnLink href="#" target="_blank">
              Дивитись вакансії
              <MarketingBtnImg src="/img/Icon-Link-10_banner_robota_ua.png"></MarketingBtnImg>
            </MarketingBtnLink>
          </MarketingBtn>
        </MarketingTxt>
        <MarketingImg>
          <MarketingImgPic src="/img/Group_1683_general_banner_robota_ua.svg" />
        </MarketingImg>
        <CompanyLogo src="/img/Logo_banner_robota_ua.svg" />
        <Vector1 src="/img/Ellipse_38_general_banner_robota_ua.svg" />
        <Vector2 src="/img/Ellipse_39_general_banner_robota_ua.svg" />
      </MainWrap>
      <RightWrap></RightWrap>
    </StyledComponents>
  );
};
