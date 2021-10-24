import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GiftFilled, GifOutlined, FireOutlined } from '@ant-design/icons'

console.log('sideMenuList', sideMenuList)


export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, mIndex) =>
        <Menu.SubMenu key={`side-menu-${mIndex}`} title={m.title} icon={<FireOutlined />}>
          {m.subMenu.map((sm, smIndex) =>
            <Menu.SubMenu key={`sub-menu-${mIndex}_${smIndex}`} title={sm.title} icon={<GifOutlined />}>
              {sm.subMenu.map((sms, smsIndex) =>
                <Menu.Item key={`sub-sub-menu-${mIndex}_${smIndex}_${smsIndex}`} icon={<GiftFilled />}>
                  {sms}
                </Menu.Item>
              )}
            </Menu.SubMenu>
          )}
        </Menu.SubMenu>
      )}
    </Menu>
  )
}

//  下面 key 是有问题的
// export const SideMenu: React.FC = () => {
//   return (
//     <Menu mode="vertical" className={styles['side-menu']}>
//       {sideMenuList.map((m, i) =>
//         <Menu.SubMenu
//           key={`side-menu-${i}`} title={m.title}>
//           {m.subMenu.map((sm, smIndex) =>
//             <Menu.SubMenu
//               key={`sub-menu-${smIndex}`} title={sm.title}>
//               {sm.subMenu.map((sms, smsIndex) =>
//                 <Menu.Item key={`sub-sub-menu-${smsIndex}`} title={sms} />
//               )}
//             </Menu.SubMenu>
//           )}
//         </Menu.SubMenu>
//       )}
//     </Menu>
//   )
// }
