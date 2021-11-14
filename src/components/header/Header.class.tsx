import React from 'react'
import styles from './Header.module.css'
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store from '../../redux/store'
import { LanguageState } from '../../redux/languageReducer'
import { runInThisContext } from 'vm'

const menuItem = [
  '旅游首页', '周末游', '跟团游',
  '自由行', '私家团', '邮轮', '酒店+景点',
  '当地玩乐', '主题游', '定制游', '游学',
  '签证', '企业游', '高端游', '爱玩户外', '保险'
]

interface State extends LanguageState {}

class HeaderComponent extends React.Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props)
    const storeState = store.getState()
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList
    }

    store.subscribe(() => {
      const storeState = store.getState()

      this.setState({
        language: storeState.language,
        languageList: storeState.languageList
      })
    })
  }

  menuClickHandler = (e: any) => {
    console.log(e)
    if (e.key === 'new') {
      // 添加语言
      const action = {
        type: 'add_language',
        payload: { code: 'new_lang', name: '新语言' }
      }
      store.dispatch(action)
    }
    else {
      // this.setState({ language: e.key })
      const action = {
        type: 'change_language',
        payload: e.key
      }
      store.dispatch(action)
    }
  }

  render() {
    const { history } = this.props
    return (
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text style={{ marginRight: 15 }}>让旅游更幸福</Typography.Text>
            <Dropdown
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.state.languageList.map(l =>
                    <Menu.Item key={l.code}>{l.name}</Menu.Item>
                  )}
                  <Menu.Item key={'new'}>添加语言</Menu.Item>
                </Menu>
              }>
              <Button>
                语言选择：{this.state.language === 'zh' ? '中文' : 'English'} <GlobalOutlined />
              </Button>

            </Dropdown>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/register')}>注册</Button>
              <Button onClick={() => history.push('signIn')}>登陆</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
        <span onClick={() => history.push('/')}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles['title']}>
            Listen to Baibai 旅游网
          </Typography.Title>
          </span>
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

}

export const Header = withRouter(HeaderComponent)
