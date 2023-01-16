import styled from "styled-components";

export const TextArea = styled.textarea`
  height: 150px;
  max-height: 150px;

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 5px;
  }
`