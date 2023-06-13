import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Interior Oasis is driven by a mission to inspire and empower individuals in creating beautiful living spaces. Their carefully curated selection of exceptional furniture pieces combines craftsmanship, timeless design, and personalized customer service.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our vision at Interior Oasis is to redefine the way people envision and experience their living spaces. We aspire to be the leading platform that transcends the traditional boundaries of furniture shopping, elevating it into an immersive journey of inspiration, creativity, and personal expression.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Interior Oasis was founded in 2022 by a group of passionate interior designers and furniture enthusiasts. Their shared vision was to create an online platform that would revolutionize the way people discover and acquire furniture for their living spaces.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
