import React from 'react'
import { Layout, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        {/*版权所以 ©️ 花果水帘洞齐天大圣*/}
        {t('footer.detail')}
      </Typography.Title>
    </Layout.Footer>
  )
}
