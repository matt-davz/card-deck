import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  max-width: 500px;
  mid-width: 300px;

  max-height: 500px;
  min-height: 300px;

  width: 100%;
  height: 100%;

  background-color: white;
  border-radius: 8px;
`;

function Modal({ children }) {
  return (
    <ModalBackground>
      <ModalContent>{children}</ModalContent>
    </ModalBackground>
  );
}

export default Modal;
