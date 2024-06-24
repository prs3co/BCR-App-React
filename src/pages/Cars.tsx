import { useEffect, useState } from "react"
import { carImg } from "../assets/img"

interface Car {
  name: string
  image: string
  type: string
  model: string
  rentPerDay: number
  description: string
  capacity: string
  transmission: string
  year: number
  manufacture: string
}

function Cars() {
  const [result, setResult] = useState<Car[]>()

  useEffect(() => {
    async function getCars() {
      const res = await fetch("http://localhost:8000/api/v1/cars")
      const data = await res.json()
      setResult(data)
    }
    getCars()
  }, [])
  console.log(result)
  
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
          </div>
          <div className="w-100">
            <img src={carImg} alt="" />
          </div>
        </div>
      </div>
      <div className="search d-flex w-100 position-absolute translate-middle-y justify-content-center">
        <div className="form-search">
          <form id="filter-form" action="submit" className="d-flex gap-3">
            <div className="search-input d-flex flex-column">
              <label htmlFor="driver" className="form-label fw-light">Tipe Driver</label>
              <select id="driver" className="form-control fw-light search-select">
                <option className="search-select fw-light" selected disabled hidden>Pilih Tipe Driver</option>
                <option className="search-select fw-light" value="">Dengan Supir</option>
                <option className="search-select fw-light" value="">Tanpa Supir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="search-input d-flex flex-column">
              <label htmlFor="date" className="form-label fw-light">Tanggal</label>
              <input id="date" type="text" className="form-control search-select fw-light" name="datepicker"/>
            </div>
            <div className="search-input d-flex flex-column">
              <label htmlFor="dateAvailable" className="form-label fw-light">Waktu Jemput/Ambil</label>
              <select id="dateAvailable" className="form-control fw-light search-select">
                <option className="search-select fw-light" selected disabled hidden>Pilih Waktu</option>
                <option className="search-select fw-light" value="">08.00</option>
                <option className="search-select fw-light" value="">09.00</option>
                <option className="search-select fw-light" value="">10.00</option>
                <option className="search-select fw-light" value="">11.00</option>
                <option className="search-select fw-light" value="">12.00</option>
              </select>
            </div>
            <div className="search-input d-flex flex-column">
              <label htmlFor="capacity" className="form-label fw-light">Jumlah Penumpang (optional)</label>
              <input id="capacity" type="text" className="form-control search-select fw-light"/>
            </div>
            <div className="d-flex flex-column justify-content-end">
              <button type="submit" className="btn btn--primary search-select fw-light" id="search-btn">Cari Mobil</button>
            </div>
          </form>
        </div>
      </div>
      <div className="cars" style={{height: '10rem'}}>
        <div id="cars-container" className="cars-container" >
          {
            result ? ( result.map((car: Car) => (
              <div className="car-card">
                <div className="car-img">
                  <img src={car.image} alt={car.manufacture} width="64px" />
                </div>
                <div className="car-text">
                  <div>
                    <p><b>${car.type} ${car.model}</b></p>
                    <p><b>RP ${(car.rentPerDay)} / Hari</b></p>
                    <p className="car-desc">${car.description}</p>
                    <p>${car.capacity} Orang</p>
                    <p>${car.transmission}</p>
                    <p>Tahun ${car.year}</p>
                  </div>
                  <div className="d-flex flex-column justify-content-end">
                    <button type="button" className="btn btn--primary search-select fw-light" id="search-btn">Pilih Mobil</button>
                  </div>
                </div>
              </div>
            ))
            ) : (
              <div>
                <p>Data kosong</p>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Cars
