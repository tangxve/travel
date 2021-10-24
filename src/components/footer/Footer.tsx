import React from 'react'
import { Layout, Typography } from 'antd'

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        版权所以 ©️ 花果水帘洞齐天大圣
      </Typography.Title>
    </Layout.Footer>
  )
}
