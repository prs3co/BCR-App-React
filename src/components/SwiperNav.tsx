import React from 'react'
import { useSwiper } from 'swiper/react'

interface ButtonProps {
  children: React.ReactNode
}

function SwiperNav({ children } : ButtonProps) {
  const swiper = useSwiper()
  return (
    <button onClick={() => swiper.slidePrev()} className="testimony__nav--btn">
      {children}
    </button>
  )
}

export default SwiperNav
