import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pxToRem } from "../utils";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(16)};
  padding-top: ${props => props.title ? pxToRem(56) : pxToRem(16)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.cardShadow};
  margin: ${pxToRem(16)} auto;
  position: relative;
  box-sizing: border-box;
`;

export const CardTitleBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.black};
  padding: ${pxToRem(4)} ${pxToRem(26)};
  left: 0;
  top: ${pxToRem(16)};
  max-width: 100%;
  h1, h2, h3, h4, h5, h6, p ,span {
    font-size: ${pxToRem(16)};
    line-height: 1;
    font-weight: bold;
  }
`;

export const H3 = styled.h3`
  font-size: ${pxToRem(23)};
  font-weight: ${props => props.weight ? "bold" : "400"};
  margin: ${pxToRem(2)};
  text-align: start;
`;

export const Label = styled.label`
  display: inline-block;
  text-align: left;
  margin: auto 0;
  font-size: ${pxToRem(13)};
  padding: ${pxToRem(8)};
  width: 100%;
  font-weight: 300;
  text-transform: lowercase;
  font-weight: ${props => props.weight ? "bold" : "normal"};
  &::first-letter {
  	text-transform: uppercase;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: ${props => props.center ? "center" : "flex-start"};
  overflow-x: ${props => props.scroll ? "auto" : "hidden"};
  width: 100%;
`;

export const GridContainerForm  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-wrap: nowrap;
  overflow-x: ${props => props.scroll ? "auto" : "hidden"};
  width: auto;

`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  flex-wrap: wrap;
  justify-content: ${props => props.center ? "center" : "flex-start"};
  width: ${props => props.column ? "auto" : "100%"};
`;

export const SpanTextInfo = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGrey} !important;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.white};
  cursor: text;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 auto;
  width: var(--content-width);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  border-radius: 22px;
  box-sizing: border-box;
  font-size: 16px;
  height: var(--searchbox-height);
  opacity: 1;
  position: relative;
  transition: none;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  margin-top: ${pxToRem(5)};
  outline: none;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.right ? "flex-end" : "space-between"};
  justify-content: ${props => props.center ? "center" : "space-between"};
  width: ${props => props.right ? "auto" : "100%"};
  padding: ${pxToRem(8)};
`;

export const Col2 = styled(Col)`
  width: 100%;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const Col4 = styled(Col)`
  width: 100%;
  @media (min-width: 600px) {
    width: 25%;
  }
`;

export const LinkConvert = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  overflow: hidden;

  &:hover {
    i {
      color: ${props => props.theme.sideBarBackgroundHover};
    }
  }
`;

export const ButtonSubmit = styled.button`
  border-bottom: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: 0;
`;

export const Button = styled.button`
  display: inline-block;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.primaryColor};
  border: solid ${pxToRem(1)} transparent;
  font-size: ${pxToRem(14)};
  padding: ${pxToRem(6)} ${pxToRem(24)};
  margin: ${pxToRem(16)} ${pxToRem(16)} ${pxToRem(8)};
  text-decoration: none;
  text-transform: lowercase;
  transition: all .2s ease;
  cursor: pointer;
  &::first-letter {
  	text-transform: uppercase;
  }
  &:hover {
    border: solid ${pxToRem(1)} ${props => props.theme.white};
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primaryColor};
  }
`;

export const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
  margin: auto 0;
  cursor: pointer;
  color: ${props => props.color ? (props.color === 'green' ? `${props.theme.colors.green}` : `${props.theme.colors.red}` ) : `${props => props.theme.primaryColor}` };
  vertical-align: ${props => props.vertical ? 'middle' : '' };
  &:hover {
    color: ${props => props.theme.sideBarBackgroundHover};
  }
`;

export const Form = styled.form`
  padding: ${pxToRem(0)};
  width: 100%;
`;

export default Card;
