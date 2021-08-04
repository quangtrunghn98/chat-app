import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } = React.useContext(AppContext);

  const handleAddroom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <div>
      <Collapse ghost defaultActiveKey="1">
        <PanelStyled header="Danh sách các phòng" key="1">
          {rooms.map((room) => (
            <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>{room.name} </LinkStyled>
          ))}
          <Button
            type="text"
            icon={<PlusSquareOutlined />}
            className="add-room"
            onClick={handleAddroom}
          >
            Thêm phòng
          </Button>
        </PanelStyled>
      </Collapse>
    </div>
  );
}

export default RoomList;
