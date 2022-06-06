import React, { memo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainWrapper } from './style'
import { Layout, Button, Card } from 'antd'
const { Header, Sider, Content } = Layout
import NavMenu from '@/layout/nav-menu'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import useLocalStorage from '@/hooks/localStorage-hook'

const Main = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const [name] = useLocalStorage('token')

  const navigate = useNavigate()

  useEffect(() => {
    if (!name) {
      navigate('/login')
    }
  }, [name])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <MainWrapper>
      <Layout className="container">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <NavMenu collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header>
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{
                marginBottom: 16
              }}
              size="small"
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Header>
          <Content>
            <Card>Card content</Card>
          </Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
})

Main.displayName = 'Main'

export default Main
