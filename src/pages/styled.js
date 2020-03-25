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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.center ? "center" : "flex-start"};
  width: 100%;
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
  min-width: 410px;
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

export default Card;
