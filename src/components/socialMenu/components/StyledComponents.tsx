import styled from 'styled-components';

export const SocialMenuItem = styled.a`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 26px;
  height: 26px;
  font-size: 0;
  &:first-child {
    margin-left: 0;
  }
  & img {
    display: block;
    width: inherit;
    height: inherit;
  }
`;
