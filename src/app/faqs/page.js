import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FAQSection from '../sections/FAQ'

export default function page() {
  return (
    <div className='dark:bg-white'>
    <Breadcrumb name={'FAQs'} />
    <FAQSection />
    </div>
  )
}
