import styled from 'styled-components';

export const CoursesItem = styled.div`
  border: 1px solid #cccdcd;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

export const CoursesItemPic = styled.a`
  display: block;
  position: relative;
  border-radius: 8px 8px 0 0;
  padding-bottom: 56.25%;
  @media screen and (min-width: 768px) {
    width: 254px;
    padding-bottom: 0;
    min-height: 155px;
  }
  @media screen and (min-width: 1200px) {
    width: 300px;
    min-height: 170px;
  }
`;

export const CoursesItemImage = styled.img`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
  @media screen and (min-width: 768px) {
    border-radius: 8px 0 0 8px;
  }
`;

export const CoursesItemWrap = styled.div`
  padding: 16px 15px 17px;
  @media screen and (min-width: 768px) {
    width: calc(100% - 254px);
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }
`;

export const CoursesItemInner = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    width: calc(100% - 200px);
  }
`;

export const CoursesItemControls = styled.div`
  @media screen and (min-width: 1200px) {
    width: 200px;
    padding-left: 15px;
  }
`;

export const CoursesItemBtn = styled.a`
  display: block;
  border-radius: 8px;
  background: none;
  padding: 12px 16px;
  border: 1px solid #244b83;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #244b83;
  margin-bottom: 15px;
  text-align: center;
  transition:
    border 0.1s linear,
    color 0.1s linear;
  @media screen and (min-width: 1024px) {
    &:hover {
      color: #f58932;
      border-color: #f58932;
    }
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 30px;
  }
`;

export const CoursesAction = styled.div`
  text-align: center;
`;

export const CoursesActionBtn = styled.a`
  display: inline-block;
  vertical-align: top;
  position: relative;
  height: 16px;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const CoursesActionBtn2 = styled.span`
  display: inline-block;
  vertical-align: top;
  position: relative;
  height: 16px;
  margin-right: 20px;
  user-select: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

export const CoursesActionImg = styled.img`
  height: inherit;
  width: auto;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CoursesItemTitle = styled.h3`
  font:
    normal 1.2em/1.2em 'Open Sans',
    sans-serif;
  margin: 0 0 12px;
  font-size: 20px;
  line-height: 1.2;
  color: #18191f;
  @media screen and (min-width: 1200px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const CoursesItemTitleLink = styled.a`
  color: inherit;
  transition: color 0.1s linear;
  @media screen and (min-width: 1024px) {
    &:hover {
      color: #f58932;
    }
  }
`;

export const CoursesItemInfo = styled.div``;

export const CoursesItemSchool = styled.div`
  display: block;
  font-size: 16px;
  line-height: 1.3;
  color: #18191f;
  font-weight: normal;
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const CoursesItemDescription = styled.div`
  display: block;
  font-size: 16px;
  line-height: 1.3;
  color: #18191f;
  font-weight: normal;
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 40px;
  right: -6px;
  min-width: 140px;
  user-select: none;
  z-index: 200;
`;

export const DropDownWrap = styled.div`
  box-sizing: border-box;
  display: table;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  border-radius: 3px;
  margin: 5px 0 0 0;
  border: 1px solid #ccc;
  padding: 5px 10px;
  background: #fbfbfb;
  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 6px;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-bottom-color: #ccc;
    pointer-events: none;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 6px;
    border: 6px solid transparent;
    border-bottom-color: #fbfbfb;
    height: 0;
    width: 0;
    pointer-events: none;
    margin-right: 1px;
  }
`;

export const DropDownItem = styled.a`
  display: block;
  border-radius: 8px;
  background: none;
  padding: 12px 16px;
  margin-bottom: 5px;
  border: 1px solid #244b83;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #244b83;
  transition:
    border 0.1s linear,
    color 0.1s linear;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    &:hover {
      border-color: #f58932;
      color: #f58932;
    }
  }
`;

export const DropDownItemButton = styled.button`
  display: block;
  border-radius: 8px;
  background: none;
  padding: 12px 16px;
  margin-bottom: 5px;
  border: 1px solid #244b83;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #244b83;
  transition:
    border 0.1s linear,
    color 0.1s linear;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    &:hover {
      border-color: #f58932;
      color: #f58932;
    }
  }
`;

export const Popup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 15px;
  background-image: radial-gradient(
    circle at 50% 30%,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6)
  );
  z-index: 1000;
  @media screen and (min-width: 1024px) {
    padding: 30px;
  }
`;

export const PopupWrap = styled.div`
  position: relative;
  background: #fbfbfb;
  overflow: hidden;
  width: 480px;
  max-width: 100%;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  border: 8px solid #313131;
  padding: 20px;
  @media screen and (min-width: 1024px) {
    padding: 30px;
  }
`;

export const PopupHide = styled.span`
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 1;
  user-select: none;
  cursor: pointer;
  width: 26px;
  height: 26px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #e5e5e5;
    -webkit-transition: background 0.3s ease;
    transition: background 0.3s ease;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover:before,
  &:hover:after {
    background: #313131;
  }
`;

export const PopupHeader = styled.div`
  font:
    normal 1.2em/1.2em 'Open Sans',
    sans-serif;
  font-weight: bold;
  font-size: 19px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (min-width: 1024px) {
    margin-bottom: 30px;
  }
`;

export const PopupFooter = styled.div`
  border-top: 1px solid #c6c6c6;
  padding-top: 30px;
  @media screen and (min-width: 1024px) {
    padding: 30px 30px 0;
  }
`;

export const PopupBtn = styled.button`
  display: block;
  width: 100%;
  padding: 12px 16px;
  background: #244b83;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  border: none;
  text-shadow: none;
  box-shadow: none;
  transition: background 0.1s linear;
  @media screen and (min-width: 1024px) {
    &:hover {
      background: #f58932;
    }
  }
`;
