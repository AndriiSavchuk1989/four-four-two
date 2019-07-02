import styled from 'styled-components';

const PinnedBlock = {};

PinnedBlock.Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50px;
  right: 7px;
  margin-top: 4px;
  min-width: 20vw;
  padding: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

PinnedBlock.FieldWrapper = styled.div`
  flex: 0 1 50%;
`;

PinnedBlock.Field = styled.p`
  padding: 5px;
`;

PinnedBlock.TotalPrice = styled(PinnedBlock.Field)``;

PinnedBlock.TotalCount = styled(PinnedBlock.Field)``;

PinnedBlock.SubmitButton = styled.button`
  height: 30px;
  padding: 5px;
  background-color: rgba(210, 255, 82, 1);
  border: none;
`;

PinnedBlock.UserInfoWrapper = styled.div`
  display: flex;
  flex: 0 1 50%;
  flex-direction: column;
`;

PinnedBlock.NameInput = styled.input``;
PinnedBlock.SurnameInput = styled.input``;
PinnedBlock.EmailInput = styled.input``;

export default PinnedBlock;
