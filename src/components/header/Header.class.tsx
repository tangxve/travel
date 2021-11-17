import React from 'react'
import styles from './Header.module.css'
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store from '../../redux/store'
import { LanguageState } from '../../redux/languageReducer'
import { withTranslation, WithTranslation } from 'react-i18next'
import zh from '../../i18n/zh.json'

const menuItem = Object.keys(zh?.header?.nav)
                       .map(k => `header.nav.${k}`)

interface State extends LanguageState {}

class HeaderComponent extends React.Component<RouteComponentProps & WithTranslation, State> {
  constructor(props: RouteComponentProps & WithTranslation) {
    super(props)
    const storeState = store.getState()
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    }
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    const storeState = store.getState()
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    })
  }

  menuClickHandler = (e: any) => {
    console.log(e)
    if (e.key === 'new') {
      // 处理新语言添加action
      const action = {
        type: 'add_language',
        payload: { code: 'new_lang', name: '新语言' }
      }
      store.dispatch(action)
    }
    else {
      const action = {
        type: 'change_language',
        payload: e.key,
      }
      store.dispatch(action)
    }
  }

  render() {
    const { history, t } = this.props
    return (
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text style={{ marginRight: 15 }}>{t('header.slogan')}</Typography.Text>
            <Dropdown
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.state.languageList.map(l =>
                    <Menu.Item key={l.code}>{l.name}</Menu.Item>
                  )}
                  <Menu.Item key={'new'}>{t('header.add_new_language')}</Menu.Item>
                </Menu>
              }>
              <Button>
                语言选择：{this.state.language === 'zh' ? '中文' : 'English'} <GlobalOutlined />
              </Button>

            </Dropdown>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/register')}>{t('header.register')}</Button>
              <Button onClick={() => history.push('signIn')}>{t('header.signin')}</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
        <span onClick={() => history.push('/')}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles['title']}>
            {t('header.title')}
          </Typography.Title>
          </span>
          <Input.Search
            placeholder="请输入旅游目的地"
            className={styles['search-input']} />
        </Layout.Header>
        <div className={styles.inner}>
          <Menu mode={'horizontal'} className={styles['main-menu']}>
            {menuItem.map((name, i) =>
              <Menu.Item key={i}>{t(name)}</Menu.Item>
            )}
          </Menu>
        </div>
      </div>
    )
  }

}

export const Header = withTranslation()(withRouter(HeaderComponent))
