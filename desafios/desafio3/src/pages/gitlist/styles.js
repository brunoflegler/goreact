import styled from 'styled-components';

export const GitList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 95%;
  position: absolute;
  z-index: 1;
  background: #fff;
  margin: 20px;
`;

export const GitItem = styled.li`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #d3d3d3;

  img {
    height: 48px;
    width: 48px;
    border-radius: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 14px;
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
