// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 bg--smoke">
        <div className="container-fluid">
          <a className="navbar-brand bg--primary text--primary" href="#">BCRCAR.CO</a>
          <div className="d-flex">
            <button className="navbar-toggler border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end w-50" data-bs-scroll="true" data-bs-backdrop="true" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">BCR</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className="navbar-nav gap-3">
                  <a className="nav-link" href="#services">Our Services</a>
                  <a className="nav-link" href="#why">Why Us</a>
                  <a className="nav-link" href="#testimony">Testimonial</a>
                  <a className="nav-link" href="#faq">FAQ</a>
                  <button type="button" className="btn btn--primary">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero bg--smoke d-flex flex-column gap-4 text--neutral">
        <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
          <div className="w-100 pe-3 pe-sm-4 pe-md-0 d-flex flex-column align-items-start justify-content-center gap-2">
            <h1 className="fw-bold hero__title mb-3">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="fw-light lh-sm mb-3 hero__desc">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button type="button" className="btn btn--primary">
              Mulai Sewa Mobil
            </button>
            {/* <button type="button" class="btn btn--primary" style="--bs-btn-padding-y: 8px; --bs-btn-padding-x: 12px; --bs-btn-font-size: 14px;">
              Mulai Sewa Mobil
            </button> */}
          </div>
          <div className="w-100">
            <img src="src/img/img_car.png" alt=""></img>
          </div>
        </div>
      </div>
      <section id="services" className="services d-flex justify-content-center">
        <div className="h-100 services__main d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="services__banner">
            <img src="src/img/img_service.png" alt="services"></img>
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
      <section id="why" className="why d-flex flex-column justify-content-center">
        <h1 className="why__title fw-bold mb-3 text-center text-lg-start text--bold">Why Us?</h1>
        <p className="why__about fw-light text-center text-lg-start">Mengapa harus pilih Binar Car Rental?</p>
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
      <section id="testimony" className="testimony d-flex flex-column justify-content-center align-items-center">
        <div className="testimony__header d-flex flex-column align-items-center">
          <h1 className="testimony__title fw-bold text--bold">Testimonial</h1>
          <p className="testimony__about fw-light">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="testimony__slider d-flex flex-column align-items-center gap-3 gap-md-4">
          <Swiper className="mySwiper" loop={true} centered-slides="true">
            <SwiperSlide>
              <div className="slider_img mb-4">
                <img src="src/img/img-photo.png" alt=""></img>
              </div>
              <div className="slider_text d-flex flex-column text-start gap-2">
                <span className="align-self-center align-self-md-start mb-3 mb-md-0">
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
                <img src="src/img/img-photo-2.png" alt=""></img>
              </div>
              <div className="slider_text d-flex flex-column text-start gap-2">
                <span className="align-self-center align-self-md-start mb-3 mb-md-0">
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
                <img src="src/img/img-photo.png" alt=""></img>
              </div>
              <div className="slider_text d-flex flex-column text-start gap-2">
                <span className="align-self-center align-self-md-start mb-3 mb-md-0">
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
                <img src="src/img/img-photo-2.png" alt=""></img>
              </div>
              <div className="slider_text d-flex flex-column text-start gap-2">
                <span className="align-self-center align-self-md-start mb-3 mb-md-0">
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
          </Swiper>
          <div className="testimony__nav d-flex gap-4">
            <a className="testimony__nav--prev">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.5" fill="white" stroke="#C4C4C4"/>
                <path d="M18.5 21L13.5 16L18.5 11" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a className="testimony__nav--next">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#5CB85F"/>
                <rect width="20" height="20" transform="translate(6 6)" fill="#5CB85F"/>
                <path d="M13.5 21L18.5 16L13.5 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="cta" className="cta">
        <div className="cta__banner d-flex flex-column align-items-center justify-content-center">
          <h1 className="cta__title text--white text--bolder mb-3 text-center">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p className="cta__desc text--white text--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* <button type="button" class="btn btn--primary" style="--bs-btn-padding-y: 8px; --bs-btn-padding-x: 12px; --bs-btn-font-size: 14px;">
            Mulai Sewa Mobil
          </button> */}
          <button type="button" className="btn btn--primary">
            Mulai Sewa Mobil
          </button>
        </div>
      </section>
      <section id="faq" className="faq d-flex align-items-center">
        <div className="faq__container w-100 d-flex flex-column flex-md-row">
          <div className="faq__header text-center text-md-start">
            <h1 className="text--bold mb-3">Frequently Asked Question</h1>
            <p className="text--light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq__list">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item faq__item">
                <h2 className="accordion-header" id="heading1">
                  <button className="accordion-button collapsed text--light faq__button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </div>
                </div>
              </div>
              <div className="accordion-item faq__item">
                <h2 className="accordion-header" id="heading2">
                  <button className="accordion-button collapsed text--light faq__button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </div>
                </div>
              </div>
              <div className="accordion-item faq__item">
                <h2 className="accordion-header" id="heading3">
                  <button className="accordion-button collapsed text--light faq__button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </div>
                </div>
              </div>
              <div className="accordion-item faq__item">
                <h2 className="accordion-header" id="heading4">
                  <button className="accordion-button collapsed text--light faq__button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </div>
                </div>
              </div>
              <div className="accordion-item faq__item">
                <h2 className="accordion-header" id="heading5">
                  <button className="accordion-button collapsed text--light faq__button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__container d-flex w-100 flex-column flex-sm-row align-items-start">
          <div className="footer__address text--light">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="text--regular d-flex flex-column gap-3 mb-3 mb-md-0">
            <a className="nav-link" href="#services">Our Services</a>
            <a className="nav-link" href="#why">Why Us</a>
            <a className="nav-link" href="#testimony">Testimonial</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </div>
          <div>
            <p className="text--light">Connect with us</p>
            <div className="social__link d-flex gap-3 mb-3 mb-md-0">
              <a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
                <path d="M21 7.66663H18.5C17.395 7.66663 16.3352 8.10561 15.5538 8.88701C14.7724 9.66842 14.3334 10.7282 14.3334 11.8333V14.3333H11.8334V17.6666H14.3334V24.3333H17.6667V17.6666H20.1667L21 14.3333H17.6667V11.8333C17.6667 11.6123 17.7545 11.4003 17.9108 11.244C18.0671 11.0878 18.279 11 18.5 11H21V7.66663Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
                  <path d="M20.1666 7.66663H11.8333C9.53211 7.66663 7.66663 9.53211 7.66663 11.8333V20.1666C7.66663 22.4678 9.53211 24.3333 11.8333 24.3333H20.1666C22.4678 24.3333 24.3333 22.4678 24.3333 20.1666V11.8333C24.3333 9.53211 22.4678 7.66663 20.1666 7.66663Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.3334 15.475C19.4362 16.1685 19.3178 16.8769 18.9948 17.4992C18.6719 18.1215 18.161 18.6262 17.5347 18.9414C16.9085 19.2566 16.1987 19.3663 15.5065 19.2549C14.8143 19.1436 14.1748 18.8167 13.6791 18.321C13.1833 17.8252 12.8565 17.1857 12.7451 16.4935C12.6337 15.8013 12.7434 15.0916 13.0586 14.4653C13.3739 13.8391 13.8785 13.3281 14.5009 13.0052C15.1232 12.6823 15.8315 12.5638 16.525 12.6667C17.2325 12.7716 17.8874 13.1012 18.3931 13.6069C18.8988 14.1126 19.2285 14.7676 19.3334 15.475Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5834 11.4166H20.5917" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </a>
              <a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
                  <path d="M25.1667 8.49996C24.3687 9.06285 23.4851 9.49338 22.55 9.77496C22.0482 9.19788 21.3812 8.78887 20.6392 8.60323C19.8973 8.41759 19.1163 8.46429 18.4018 8.737C17.6873 9.00972 17.0737 9.49529 16.6442 10.1281C16.2146 10.7608 15.9898 11.5102 16 12.275V13.1083C14.5356 13.1463 13.0844 12.8215 11.7759 12.1628C10.4673 11.5042 9.34197 10.5322 8.50004 9.33329C8.50004 9.33329 5.16671 16.8333 12.6667 20.1666C10.9505 21.3316 8.906 21.9157 6.83337 21.8333C14.3334 26 23.5 21.8333 23.5 12.25C23.4993 12.0178 23.477 11.7863 23.4334 11.5583C24.2839 10.7195 24.8841 9.66055 25.1667 8.49996V8.49996Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </a>
              <a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
                  <path d="M9.33329 9.33337H22.6666C23.5833 9.33337 24.3333 10.0834 24.3333 11V21C24.3333 21.9167 23.5833 22.6667 22.6666 22.6667H9.33329C8.41663 22.6667 7.66663 21.9167 7.66663 21V11C7.66663 10.0834 8.41663 9.33337 9.33329 9.33337Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24.3333 11L16 16.8333L7.66663 11" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </a>
              <a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
                  <path d="M19.3333 15.1666V11.8333M23.5 7.66663H8.5V21H12.6667V24.3333L16 21H20.1667L23.5 17.6666V7.66663ZM15.1667 15.1666V11.8333V15.1666Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text--">Copyright Binar 2022</p>
            <a className="footer__brand navbar-brand bg--primary text--primary" href="#">BCRCAR.CO</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
