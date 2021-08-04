import { Button, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import styled from "styled-components";
import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgb(82, 38, 83);

  .user-name {
    color: white;
    margin-left: 5px;
  }
`;

function UserInfo() {

  const {user: { displayName, photoURL } }= React.useContext(AuthContext);
  console.log(displayName)

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="user-name">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}

export default UserInfo;
