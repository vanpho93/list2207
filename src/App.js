import React, { Component } from 'react';
import ListSinger from './components/ListSinger';


export default class App extends Component {
  render() {
    return <ListSinger />;
  }
}
/*

INSERT INTO public."Singer"(name, image)
	VALUES ('Jang Mi', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/d/1/d122f030d505f3a4f51cc333343e95ee_1499850029.jpg'),
    ('Hồ Ngọc Hà', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/a/7a002f1f15a5f4deed3bd6735428f35b_1477391700.jpg'),
    ('Soobin Hoàng Sơn', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg'),
    ('Trang Pháp', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/f/e/fee2f3236e883d52dff93758594be544_1442821377.jpg'),
    ('Luis Fonsi', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/2/a/2a559a9acfe104039fb25a3c10b96b8c_1336248784.jpg'),
    ('Charlie Puth', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/6/e6315a53da3054a2a4587b532d06933c_1425035895.jpg'),
    ('Alan Walker', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/c/0/c0158a5d0afdbb8b3d177162b9328a7c_1452770729.jpg'),
    ('Ed Sheeran', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/3/1/31c984904f0d91c9b13034708af69117_1486022801.png'),
    ('Shayne Ward', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/d/1/d174f6b7d4daaf8bd14ec5ae4c786e7a_1397124428.jpg'),
    ('Quang Lê', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/9/6/96c7f8568cdc943997aace39708bf7b6_1376539870.jpg'),
    ('Lệ Quyên', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/f/0/f00d94811dcaadb82201222e55b2e88e_1460116685.jpg'),
    ('Lê Hiếu', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/9/796e70da6cc6d3bee3355302d8bbbc69_1467712459.jpg'),
    ('Bằng Kiều', 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/8/4/84d49670aa357051bd72b18ce0feedd8_1446460401.jpg')

*/