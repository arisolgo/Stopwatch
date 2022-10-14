import styled from "styled-components";
const StyledStopWatchTitle = styled.h1`
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: center;
  font-family: "Bebas Neue", arial;
  font-size: xxx-large;
  text-shadow: 4px 4px 18px #ff7043;
`;
const StopWatchTitle = ({ children, color }) => {
  return <StyledStopWatchTitle color={color}>{children}</StyledStopWatchTitle>;
};

export default StopWatchTitle;
