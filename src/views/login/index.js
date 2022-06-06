import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginWrapper } from './style'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import useLocalStorage from '@/hooks/localStorage-hook'
import { login } from '@/api/login'
import { menuList } from '@/api/main'

const Login = memo(() => {
  const [token, setToken] = useLocalStorage('token')
  const [menu, setMenu] = useLocalStorage('menu')
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      menuList().then((res) => {
        setMenu(res.list)
      })
    }
  }, [token])
  useEffect(() => {
    if (menu) {
      navigate('/main')
    }
  }, [menu])

  const onFinish = async (values) => {
    const loginRes = await login(values.name, values.password)
    setToken(loginRes.token)
  }

  return (
    <LoginWrapper>
      <h1>后台管理系统</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
          name: 'coderwhy',
          password: '123456'
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: '请输入您的用户名！'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入您的密码！'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          或 <a href="">注册！</a>
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
})

Login.displayName = 'Login'

export default Login
