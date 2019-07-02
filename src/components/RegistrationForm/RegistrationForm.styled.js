import styled from 'styled-components';

const RegistrationForm = {};

RegistrationForm.Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  padding: 10px;
`;

RegistrationForm.RegistrationHeader = styled.p`
  text-align: center;
`;

RegistrationForm.InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`;

RegistrationForm.Input = styled.input`
  width: 100%;
  height: 24px;
  margin-top: 5px;
  border: none;
  border-bottom: 1px solid black;
  box-shadow: none;
  outline: none;
`;

RegistrationForm.SubmitButton = styled.button`
  width: 100%;
  height: 24px;
  margin-top: 5px;
  background-color: rgba(210, 255, 82, 1);
  border: none;
`;

export default RegistrationForm;
