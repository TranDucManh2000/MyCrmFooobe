import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { Badge, Space, Switch } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Phanhoi = () => {
  const { TextArea } = Input;
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalname, setModaname] = useState();
  const [modalprice, setModanprice] = useState();
  const [show, setShow] = React.useState(true);

  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    //   dispatch(PostData({ name: modalname, price: modalprice }));
    //   setModaname('');
    //   setModanprice('');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Phản Hồi
      </Button>
      <Modal
        title="Phản Hồi Báo cáo"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        Nội Dung Phản Hồi: <br />
        <br />
        <TextArea rows={4} placeholder="Tối đa 300 ký tự" maxLength={300} />
        <br />
        Đánh dấu : <br/>
        <Space>
          <Switch checked={show} onChange={() => setShow(!show)} />
          <Badge
            className="site-badge-count-109"
            count={show ? 'Đã xử lý': 'Chưa được xử lý'}
            style={{ backgroundColor: "blu"}}
          />
        </Space>
      </Modal>
    </>
  );
};

export default Phanhoi;
