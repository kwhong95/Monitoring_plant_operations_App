import React from 'react';
import styled from 'styled-components';
import {Typography} from "antd";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = ({ text, onClick }) => (
    <Wrapper
        alt={text}
        onClick={onClick}
    >
        <Typography
            style={{ color: 'red', fontWeight: 'bold' }}
        >{text}</Typography>
    </Wrapper>
);

export default Marker;