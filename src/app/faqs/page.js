import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FAQSection from '../sections/FAQ'
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  alternates: { canonical: "/faqs" },
  openGraph: {
    images: [getOgImageForPath("faqs")],
  },
  twitter: {
    images: [getOgImageForPath("faqs")],
  },
};

export default function page() {
  return (
    <div className='dark:bg-white'>
    <Breadcrumb name={'FAQs'} />
    <FAQSection />
    </div>
  )
}
