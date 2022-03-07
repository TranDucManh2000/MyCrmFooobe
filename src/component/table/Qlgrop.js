import React from 'react'
import { Table, Tag, Space } from 'antd';
import NavMenus from '../common/NavMenus';
import Footerr from '../common/Footerr';
import Usadd from '../modal/user/Usadd'
import Phanhoi from '../modal/baocao/Phanhoi';
import { Select } from "antd";
import Gropaction from '../modal/grop/Gropaction';

const { Option } = Select;

const Qlgrop = () => {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Tên Group',
          dataIndex: 'tennhom',
          key: 'tennhom',
        },
        {
            title: 'Số Thành Viên',
            dataIndex: 'sotv',
            key: 'sotv',
          },
        {
            title: 'Số Vi Phạm',
            dataIndex: 'sovp',
            key: 'sovp',
        },
        {
          title: 'Trạng Thái',
          key: 'trangthai',
          dataIndex: 'trangthai',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'red' : 'geekblue';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Chỉnh sửa',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a><Gropaction/></a>
              {/* <a>Invite {record.name}</a> */}
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          id: '1',
          tennhom: 'John Brown',
          sotv : 9,
          sovp : 10,
          trangthai: ['Tốt', 'Khóa Group'],
        },
      ];
  return (
      <>
      <NavMenus/><br/>
      <h1 className='tailetable'>Quản Lý Group
      &nbsp;
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Bộ Lọc"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Select>
      </h1>
      <Table columns={columns} dataSource={data} className='tabletop'/>
      <Footerr/>
      </>
  )
}

export default Qlgrop