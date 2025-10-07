import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import GallerySection from '../sections/Gallery'

export default function page() {
  return (
    <div className='dark:bg-white'>
    <Breadcrumb name={'Our Gallery'} />
    <GallerySection />
    </div>
  )
}
