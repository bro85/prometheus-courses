import { FC } from 'react';
import { SocialMenuItem } from './components/StyledComponents';

export const SocialMenu: FC = () => {
  return (
    <>
      <SocialMenuItem
        target="_blank"
        href="https://www.facebook.com/prometheusmooc"
      >
        <img src="/img/social-menu/fb.svg" alt="logo" />
      </SocialMenuItem>
      <SocialMenuItem target="_blank" href="https://twitter.com/prometheusmooc">
        <img src="/img/social-menu/twitter.svg" alt="logo" />
      </SocialMenuItem>
      <SocialMenuItem
        target="_blank"
        href="https://www.instagram.com/prometheus.ua"
      >
        <img src="/img/social-menu/instagram.svg" alt="logo" />
      </SocialMenuItem>
      <SocialMenuItem
        target="_blank"
        href="https://www.youtube.com/channel/UCp_ZjjvKE_lScv09caE6z3A"
      >
        <img src="/img/social-menu/youtube.svg" alt="logo" />
      </SocialMenuItem>
    </>
  );
};
