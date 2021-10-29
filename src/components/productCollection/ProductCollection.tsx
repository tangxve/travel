import React from 'react'
import styles from './ProductCollection.module.css'
import { Row } from 'antd'

interface Prop {
  title: JSX.Element
  sideImage: string
  products: any[]
}

export const ProductCollection: React.FC<Prop> = ({ title, products, sideImage }) => {
  return (
    <div className={styles.content}>

    </div>
  )
}
