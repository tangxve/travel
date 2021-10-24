# React 实现 旅游网

## 遇到的问题

- 在使用 `Menu` 组件嵌套时，要注意 组件的 `Key` 值的唯一

下面代码只有一级 Menu 组件的key 是唯一；二三级都会存在重复的

```tsx
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, i) =>
        <Menu.SubMenu
          key={`side-menu-${i}`} title={m.title}>
          {m.subMenu.map((sm, smindex) =>
            <Menu.SubMenu
              key={`sub-menu-${smindex}`} title={sm.title}>
              {sm.subMenu.map((sms, smsIndex) =>
                <Menu.Item key={`sub-sub-menu-${smsIndex}`} title={sms} />
              )}
            </Menu.SubMenu>
          )}
        </Menu.SubMenu>
      )}
    </Menu>
  )
}
```

解决方法：

遇到 树形结构时，如果没有唯一 id，要注意key 的使用，可以借助父级的 key

1. menu：key = mIndex
    1. subMenu：key = mIndex_smIndex
        1. subSubMenu: key = mIndex_smIndex_smsIndex

```tsx
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, mIndex) =>
        <Menu.SubMenu key={`side-menu-${mIndex}`} title={m.title} icon={<FireOutlined />}>
          {m.subMenu.map((sm, smIndex) =>
            <Menu.SubMenu key={`sub-menu-${mIndex}_${smIndex}`} title={sm.title} icon={<GifOutlined />}>
              {sm.subMenu.map((sms, smsIndex) =>
                <Menu.Item key={`sub-sub-menu-${mIndex}_${smIndex}_${smsIndex}`} title={sms} icon={<GiftFilled />} />
              )}
            </Menu.SubMenu>
          )}
        </Menu.SubMenu>
      )}
    </Menu>
  )
}

```
