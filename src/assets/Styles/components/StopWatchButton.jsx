import PropTypes from "prop-types";
import styled, { css } from "styled-components";
const StyledStopWatchButton = styled.button`
  background-color: transparent;
  border: 2px solid #718792;
  border-radius: 100%;
  box-sizing: border-box;
  color: #cfd8dc;
  cursor: pointer;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  width: 75px;
  height: 75px;
  will-change: transform;
  margin-right: 8px;

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }

  ${(props) =>
    props.skin === "play" &&
    css`
      border: 2px solid #ff7043;
    `}
`;
const StopWatchButton = ({ children, action, skin }) => {
  return (
    <StyledStopWatchButton skin={skin} onClick={action}>
      {children}
    </StyledStopWatchButton>
  );
};

StopWatchButton.propTypes = {
  children: PropTypes.string,
  skin: PropTypes.oneOf(["play", "pause", "reset"]),
  action: PropTypes.func,
};

export default StopWatchButton;
