import React from 'react'
import styles from './Header.module.css'
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.svg'


const menuItem = [
  '旅游首页', '周末游', '跟团游',
  '自由行', '私家团', '邮轮', '酒店+景点',
  '当地玩乐', '主题游', '定制游', '游学',
  '签证', '企业游', '高端游', '爱玩户外', '保险'
]

export const Header: React.FC = () => {
  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text style={{ marginRight: 15 }}>让旅游更幸福</Typography.Text>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={1}>中文</Menu.Item>
                <Menu.Item key={2}>English</Menu.Item>
              </Menu>
            }>
            <Button>
              语言选择 <GlobalOutlined />
            </Button>
          </Dropdown>
          <Button.Group className={styles['button-group']}>
            <Button>注册</Button>
            <Button>登陆</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} alt="" className={styles['App-logo']} />
        <Typography.Title level={3} className={styles['title']}>
          Listen to Baibai 旅游网
        </Typography.Title>
        <Input.Search
          placeholder="请输入旅游目的地"
          className={styles['search-input']} />
      </Layout.Header>
      <div className={styles.inner}>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          {menuItem.map((name, i) =>
            <Menu.Item key={i}>{name}</Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  )
}
