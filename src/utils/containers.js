import styled from 'styled-components';

const Container = styled.div`
  padding: ${({padding}) => padding ? padding : '0'};
  margin: ${({margin}) => margin ? margin : '0'};
  width: ${({width}) => width ? width : 'auto'};
  height: ${({height}) => height ? height : 'auto'};
  text-align: ${({textAlign}) => textAlign ? textAlign : 'left'};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : 'auto'};
  min-width: ${({minWidth}) => minWidth ? minWidth : 'auto'};
  max-height: ${({maxHeight}) => maxHeight ? maxHeight : 'auto'};
  min-height: ${({minHeight}) => minHeight ? minHeight : 'auto'};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'transparent'};
  color: ${({theme, color}) => color ? color : theme.colors.dark};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '0'};
  box-shadow: ${({shadow}) => shadow ? shadow : 'none'};
  border: ${({border}) => border ? border : 'none'};
  cursor: ${({cursor}) => cursor ? cursor : 'auto'};
  display: ${({display}) => display ? display : 'block'};
  opacity: ${({opacity}) => opacity ? opacity : '1'};
  outline: ${({outline}) => outline ? outline : 'none'};
  text-decoration: ${({textDecoration}) => textDecoration ? textDecoration : 'none'};
  transform: translate(${({translateX}) => translateX ? translateX : 0}, ${({translateY}) => translateY ? translateY : 0});
`;

const FlexRow = styled(Container)`
  display: ${({display}) => display ? display : 'flex'};
  justify-content: ${({alignmentX}) => alignmentX ? alignmentX : 'center'};
  align-items: ${({alignmentY}) => alignmentY ? alignmentY : 'center'};
  gap: ${({gap}) => gap ? gap : '0'};
`;

const FlexColumn = styled(FlexRow)`
  flex-direction: column;
  justify-content: ${({alignmentY}) => alignmentY ? alignmentY : 'center'};
  align-items: ${({alignmentX}) => alignmentX ? alignmentX : 'center'};
  gap: ${({gap}) => gap ? gap : '0'};
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns ? gridTemplateColumns : 'auto'};
  grid-template-rows: ${({gridTemplateRows}) => gridTemplateRows ? gridTemplateRows : 'auto'};
  grid-gap: ${({gridGap}) => gridGap ? gridGap : '0'};
`;

const Svg = styled(Container)`
  background-color: ${({backgroundColor, theme}) => backgroundColor ? backgroundColor : theme.colors.dark};
  -webkit-mask: url(${({src}) => src}) no-repeat center;
  mask: url(${({src}) => src}) no-repeat center;
  width: ${({width}) => width ? width : '16px'};
  height: ${({height}) => height ? height : '16px'};
`;

export {Container, FlexRow, FlexColumn, Grid, Svg};