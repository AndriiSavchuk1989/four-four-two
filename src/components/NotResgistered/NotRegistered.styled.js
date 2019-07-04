import styled, { css } from 'styled-components';

const NotRegistered = {};

NotRegistered.Wrapper = styled.div(({ showRegistrationMessage }) => {
  const displayProp = showRegistrationMessage ? 'block' : 'none';

  return css`
    display: ${displayProp};
    position: absolute;
    width: 500px;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    background-color: rgba(210, 255, 82, 1);
    text-align: center;
`;
});

NotRegistered.Message = styled.p`
  margin: 10px 0 10px 0;
`;
NotRegistered.CloseModal = styled.button`
  width: 50px;
  height: 25px;
  text-align: center;
  background-color: white;
`;

export default NotRegistered;
