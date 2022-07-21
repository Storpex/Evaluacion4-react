import galeria1 from '../assets/galeria1.jpg';
import galeria2 from '../assets/galeria2.jpg';
import galeria3 from '../assets/galeria3.jpg';
import galeria5 from '../assets/galeria5.jpg';
import galeria6 from '../assets/galeria6.jpg';

export const Galeria = () => {
  return (
    <section className='galeria-main d-flex align-items-center' >
      <div className='galeria-main-container container w-50'>
      <h3>GALERIA DE FOTOS</h3>
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img className="d-block w-100" src={ galeria1 } />
              </div>

              <div className="carousel-item">
                <img className="d-block w-100" src={ galeria2 } />
              </div>

              <div className="carousel-item">
                <img className="d-block w-100" src={ galeria3 } />
              </div>

              <div className="carousel-item">
                <img className="d-block w-100" src={ galeria5 } />
              </div>

              <div className="carousel-item">
                <img className="d-block w-100" src={ galeria6 } />
              </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
      </div>
    </section>
  )
}
