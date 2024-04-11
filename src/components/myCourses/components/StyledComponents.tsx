import styled from 'styled-components';

export const Dashboard = styled.div`
  display: flex;
  min-height: calc(100vh - 242px);
  width: 100%;
  max-width: 1440px;
  margin: 20px auto 0 auto;
  padding: 0 15px 30px;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    padding: 0 20px 60px;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const DashboardSide = styled.div`
  padding: 40px 40px 20px 20px;
  min-height: 10px;
  flex-grow: 1;
  order: 2;
  max-width: 300px;
  min-width: 300px;
  @media (max-width: 991.98px) {
    padding: 0;
    max-width: 100%;
  }
`;

export const Form = styled.form`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 1.7;
  color: #000;
  display: block;
  margin-bottom: 5px;
`;

export const FieldWrap = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  font-weight: 400 !important;
  box-shadow:
    0 1px 0 0 #fff,
    inset 0 0 3px 0 rgba(0, 0, 0, 0.05);
  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
  font-style: normal !important;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 14px !important;
  line-height: 19px !important;
  padding: 11px 11px 12px !important;
  width: 100%;
  vertical-align: top;
  -webkit-font-smoothing: antialiased;
  color: #222;
  height: 44px;
`;

export const FormBtn = styled.div`
  box-sizing: border-box;
  right: 0;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  border: none;
  padding: 0 10px;
  color: #fff;
  box-shadow: none;
  line-height: 33px;
  text-shadow: none;
  text-transform: none;
  background: #244b83;
  height: 43px;
  border-radius: 0 8px 8px 0;
  transition: background 0.1s linear;
  @media screen and (min-width: 1024px) {
    &:hover {
      background: #f58932;
    }
  }
`;

export const FormBtnInner = styled.span`
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background: url('/img/search.svg') no-repeat center;
  }
`;

export const DashboardContainer = styled.div`
  flex-grow: 8;
  order: 1;
`;

export const DashboardTitle = styled.h2`
  font-size: 18px;
  line-height: 1.48;
  padding-right: 10px;
  margin-bottom: 15px;
  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
`;
