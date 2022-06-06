import React, { memo } from 'react'

import { NavMenuWrapper } from './style'
import { Menu } from 'antd'
import logo from '@/assets/img/logo.png'
import { AppstoreOutlined } from '@ant-design/icons'

import useLocalStorage from '@/hooks/localStorage-hook'
function mapMenuToItem(menu) {
  return menu.map((item) => {
    if (item.type !== 3) {
      if (item.type === 1 && item.children.length) {
        return getItem(
          item.name,
          item.id,
          <AppstoreOutlined />,
          mapMenuToItem(item.children)
        )
      } else {
        return getItem(item.name, item.id)
      }
    }
  })
}
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const NavMenu = memo(() => {
  const [menu] = useLocalStorage('menu')

  const items = mapMenuToItem(menu)
  return (
    <NavMenuWrapper>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>react-cms</span>
      </div>
      <Menu
        defaultSelectedKeys={['39']}
        defaultOpenKeys={['38']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </NavMenuWrapper>
  )
})

NavMenu.displayName = 'NavMenu'

export default NavMenu
