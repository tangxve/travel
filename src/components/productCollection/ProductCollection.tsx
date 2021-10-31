import React from 'react'
import styles from './ProductCollection.module.css'
import { Row, Divider, Col } from 'antd'
import { ProductImage } from './ProductImage'

interface Prop {
  title: JSX.Element
  sideImage: string
  products: any[]
}

export const ProductCollection: React.FC<Prop> = ({ title, products, sideImage }) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} alt="" className={styles['side-image']} />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                size="large"
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url} />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    size="small"
                    title={products[1].title}
                    price={products[1].price}
                    imageSrc={products[1].touristRoutePictures[0].url} />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[2].id}
                    size="small"
                    title={products[2].title}
                    price={products[2].price}
                    imageSrc={products[2].touristRoutePictures[0].url} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products[5].id}
                size="small"
                title={products[5].title}
                price={products[5].price}
                imageSrc={products[5].touristRoutePictures[0].url} /></Col>
            <Col span={6}>
              <ProductImage
                id={products[6].id}
                size="small"
                title={products[6].title}
                price={products[6].price}
                imageSrc={products[6].touristRoutePictures[0].url} /></Col>
            <Col span={6}>
              <ProductImage
                id={products[7].id}
                size="small"
                title={products[7].title}
                price={products[7].price}
                imageSrc={products[7].touristRoutePictures[0].url} /></Col>
            <Col span={6}>
              <ProductImage
                id={products[8].id}
                size="small"
                title={products[8].title}
                price={products[8].price}
                imageSrc={products[8].touristRoutePictures[0].url} /></Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
