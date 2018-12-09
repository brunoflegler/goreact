import styled from 'styled-components';

export const IconMarker = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: 3px solid #9b65e6;
`;

export const FormAdd = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 14px;
  }

  input {
    flex: 1;
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
    color: #444;
    border-radius: 3px;
    margin-top: 8px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      margin-top: 8px;
      margin-left: 5px;
      padding: 5px;
      flex: 1;

      &:first-child {
        margin-left: 0px;
      }
    }

    button.btn-cancel {
      border: 0;
      border-radius: 3px;
      background: #cdcdcd;
      color: #fff;
      font-weight: bold;
    }

    button.btn-save {
      border: 0;
      border-radius: 3px;
      background: #238e23;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const StyledModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
