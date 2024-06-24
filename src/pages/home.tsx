import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../assets/styles/swiper.css'
import SwiperNav from '../components/SwiperNav';
import { carImg, photoImg, photoImg2, serviceImg } from '../assets/img';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const buttonStyle: CSSProperties = {
    '--bs-btn-padding-y': '8px',
    '--bs-btn-padding-x': '12px',
    '--bs-btn-font-size': '14px'
  } as CSSProperties

  const [open, setOpen] = useState('')
  function toggle (id: string) {
    if (open === id) {
      setOpen('')
    } else {
      setOpen(id)
    }
  }

  return (
    <>
      <div className="hero bg--smoke d-flex flex-column gap-4 text--neutral">
        <div className="d-flex justify-content-center gap-2">
          <div className="w-100 d-flex flex-column align-items-start justify-content-center gap-2">
            <h1 className="fw-bold hero__title">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="fw-light lh-sm hero__desc">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link type="button" to={'/cars'} className="btn btn--primary" style={buttonStyle} >
              Mulai Sewa Mobil
            </Link>
          </div>
          <div className="w-100">
            <img src={carImg} alt=""/>
          </div>
        </div>
      </div>
      <section className="services d-flex justify-content-center">
        <div className="h-100 services__main d-flex justify-content-center align-items-center">
          <div className="services__banner">
            <img src={serviceImg} alt="services"/>
          </div>
          <div className="services__text w-100">
            <h1 className="services__title fs-4 fw-bold mb-3">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p className="services__desc">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div className="services__desc">
              <p>
                <svg className="service__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                  <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <svg className="service__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                  <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <svg className="service__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                  <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <svg className="service__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                  <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <svg className="service__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                  <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why d-flex flex-column justify-content-center">
        <h1 className="why__title fw-bold fs-4 mb-3">Why Us?</h1>
        <p className="why__about fw-light">Mengapa harus pilih Binar Car Rental?</p>
        <div className="why__cards">
          <div className="why__card d-flex flex-column align-items-start justify-content-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#F9CC00"/>
              <path d="M11.8333 24.3333H9.33329C8.89127 24.3333 8.46734 24.1577 8.15478 23.8452C7.84222 23.5326 7.66663 23.1087 7.66663 22.6667V16.8333C7.66663 16.3913 7.84222 15.9674 8.15478 15.6548C8.46734 15.3423 8.89127 15.1667 9.33329 15.1667H11.8333M17.6666 13.5V10.1667C17.6666 9.50362 17.4032 8.86774 16.9344 8.3989C16.4656 7.93006 15.8297 7.66666 15.1666 7.66666L11.8333 15.1667V24.3333H21.2333C21.6352 24.3379 22.0253 24.197 22.3315 23.9367C22.6378 23.6763 22.8397 23.3141 22.9 22.9167L24.05 15.4167C24.0862 15.1778 24.0701 14.9339 24.0027 14.7019C23.9354 14.4698 23.8184 14.2552 23.6598 14.0729C23.5013 13.8906 23.305 13.7449 23.0846 13.646C22.8642 13.5471 22.6249 13.4973 22.3833 13.5H17.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="why__text fw-bold">Mobil Lengkap</span>
            <span className="why__desc fw-light">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</span>
          </div>
          <div className="why__card d-flex flex-column align-items-start justify-content-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#FA2C5A"/>
              <path d="M23.1583 17.175L17.1833 23.15C17.0285 23.305 16.8447 23.4279 16.6424 23.5118C16.44 23.5956 16.2232 23.6388 16.0041 23.6388C15.7851 23.6388 15.5682 23.5956 15.3659 23.5118C15.1636 23.4279 14.9797 23.305 14.825 23.15L7.66663 16V7.66666H16L23.1583 14.825C23.4687 15.1373 23.6429 15.5597 23.6429 16C23.6429 16.4403 23.4687 16.8627 23.1583 17.175V17.175Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.8334 11.8333H11.8417" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="why__text fw-bold">Harga Murah</span>
            <span className="why__desc fw-light">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</span>
          </div>
          <div className="why__card d-flex flex-column align-items-start justify-content-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
              <path d="M16 24.3333C20.6023 24.3333 24.3333 20.6024 24.3333 16C24.3333 11.3976 20.6023 7.66666 16 7.66666C11.3976 7.66666 7.66663 11.3976 7.66663 16C7.66663 20.6024 11.3976 24.3333 16 24.3333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11V16L19.3333 17.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="why__text fw-bold">Layanan 24 Jam</span>
            <span className="why__desc fw-light">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</span>
          </div>
          <div className="why__card d-flex flex-column align-items-start justify-content-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#5CB85F"/>
              <path d="M16.0001 18.5C19.2217 18.5 21.8334 15.8883 21.8334 12.6667C21.8334 9.44501 19.2217 6.83334 16.0001 6.83334C12.7784 6.83334 10.1667 9.44501 10.1667 12.6667C10.1667 15.8883 12.7784 18.5 16.0001 18.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.8416 17.575L11.8333 25.1667L15.9999 22.6667L20.1666 25.1667L19.1583 17.5667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="why__text fw-bold">Sopir Profesional</span>
            <span className="why__desc fw-light">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</span>
          </div>
        </div>
      </section>
      <section className="testimony d-flex flex-column justify-content-center align-items-center">
        <div className="testimony__header d-flex flex-column align-items-center">
          <h1 className="testimony__title fw-bold fs-4">Testimonial</h1>
          <p className="testimony__about fw-light">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="testimony__slider d-flex flex-column align-items-center gap-4">
          <Swiper className="mySwiper"
            spaceBetween={'30'}
            slidesPerView={'auto'}
            loop
            centeredSlides={true}
            navigation
          >
            <div className="testimony__nav swipeer-wrapper d-flex gap-4 justify-content-center mt-3">
              <SwiperNav>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="15.5" fill="white" stroke="#C4C4C4"/>
                  <path d="M18.5 21L13.5 16L18.5 11" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SwiperNav>
              <SwiperNav>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#5CB85F"/>
                  <rect width="20" height="20" transform="translate(6 6)" fill="#5CB85F"/>
                  <path d="M13.5 21L18.5 16L13.5 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SwiperNav>
            </div>
            <div>
              <SwiperSlide>
                <div className="slider_img">
                  <img src={photoImg} alt=""/>
                </div>
                <div className="slider_text d-flex flex-column text-start gap-2">
                  <span>
                    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
                    <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00"/>
                    <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00"/>
                    <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00"/>
                    <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00"/>
                    </svg>
                  </span>
                  <span className="text--light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </span>
                  <span className="text--regular">John Dee 32, Bromo</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_img">
                  <img src={photoImg2} alt=""/>
                </div>
                <div className="slider_text d-flex flex-column text-start gap-2">
                  <span>
                    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
                    <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00"/>
                    <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00"/>
                    <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00"/>
                    <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00"/>
                    </svg>
                  </span>
                  <span className="text--light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </span>
                  <span className="text--regular">John Dee 32, Bromo</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_img">
                  <img src={photoImg} alt=""/>
                </div>
                <div className="slider_text d-flex flex-column text-start gap-2">
                  <span>
                    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
                    <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00"/>
                    <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00"/>
                    <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00"/>
                    <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00"/>
                    </svg>
                  </span>
                  <span className="text--light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </span>
                  <span className="text--regular">John Dee 32, Bromo</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_img">
                  <img src={photoImg2} alt=""/>
                </div>
                <div className="slider_text d-flex flex-column text-start gap-2">
                  <span>
                    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
                    <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00"/>
                    <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00"/>
                    <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00"/>
                    <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00"/>
                    </svg>
                  </span>
                  <span className="text--light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </span>
                  <span className="text--regular">John Dee 32, Bromo</span>
                </div>
              </SwiperSlide>
            </div>
            
          </Swiper>
        </div>
      </section>
      <section className="cta">
        <div className="cta--banner d-flex flex-column align-items-center justify-content-center">
          <h1 className="text--white text--bolder mb-3">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p className="cta--desc text--white text--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to={'/cars'} type="button" className="btn btn--primary" style={buttonStyle} >
            Mulai Sewa Mobil
          </Link>
        </div>
      </section>
      <section className="faq d-flex align-items-center">
        <div className="faq__container w-100 d-flex flex-row">
          <div className="faq__header">
            <h1 className="text--bold mb-3">Frequently Asked Question</h1>
            <p className="text--light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className='faq__list'>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem className='faq__item'>
                <AccordionHeader targetId="1" className='text--light faq__button'>Apa saja syarat yang dibutuhkan?</AccordionHeader>
                <AccordionBody accordionId="1" className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className='faq__item'>
                <AccordionHeader targetId="2" className='text--light faq__button'>Berapa hari minimal sewa mobil lepas kunci?</AccordionHeader>
                <AccordionBody accordionId="2" className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className='faq__item'>
                <AccordionHeader targetId="3" className='text--light faq__button'>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </AccordionHeader>
                <AccordionBody accordionId="3" className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className='faq__item'>
                <AccordionHeader targetId="4" className='text--light faq__button'>
                  Apakah Ada biaya antar-jemput?
                </AccordionHeader>
                <AccordionBody accordionId="4" className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className='faq__item'>
                <AccordionHeader targetId="5" className='text--light faq__button'>
                  Bagaimana jika terjadi kecelakaan
                </AccordionHeader>
                <AccordionBody accordionId="5" className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
