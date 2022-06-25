import styled from "styled-components";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const StyledButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  line-height: normal;
  margin: 1rem;
  min-height: 60px;
  min-width: 10px;
  outline: none;
  font-family: inherit;
  /* padding: 16px 24px; */
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }
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
`