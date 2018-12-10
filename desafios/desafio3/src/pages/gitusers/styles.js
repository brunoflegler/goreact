import styled from 'styled-components';

export const GitUsersList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 95%;
  position: absolute;
  z-index: 1;
  background: #fff;
  margin: 20px;
`;

export const ListEmpty = styled.span`
  display: flex;
  justify-content: center;
  color: #c0c0c0;
  padding: 10px;
  margin: 10px;
  font-size: 12px;
  border-bottom: 1px solid #d3d3d3;
`;

export const GitUser = styled.li`
  display: flex;
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;

  img {
    height: 38px;
    width: 38px;
    border-radius: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  width: 180px;

  h1 {
    font-size: 14px;
    word-wrap: break-word;
  }

  span {
    margin-top: 5px;
    font-size: 12px;
    color: #c0c0c0;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 5px;
    padding: 0;
  }

  i.delete-profile {
    color: #f00;
    margin-right: 5px;

    &:hover {
      color: #cc0000;
    }
  }

  i.angle-profile {
    color: #c0c0c0;
    margin-right: 5px;
  }
`;
