import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import GallerySection from '../sections/Gallery'
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  alternates: { canonical: "/gallery" },
  openGraph: {
    images: [getOgImageForPath("gallery")],
  },
  twitter: {
    images: [getOgImageForPath("gallery")],
  },
};

export default function page() {
  return (
    <div className='dark:bg-white'>
    <Breadcrumb name={'Our Gallery'} />
    <GallerySection />
    </div>
  )
}
