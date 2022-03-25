import { useState } from 'react';
import CardCarousel from '../CardCarousel/CardCarousel';
import styles from './tab.module.css';
import carouselGalleryData from '../CardCarousel/carouselGalleryData.example.json';
import carouselQueenData from '../CardCarousel/carouselQueenData.example.json';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <>
      <ul className={`row gx-0 nav mb-3 ${styles['nav-pills']}`} id="pills-tab" role="tablist">
        <div className="col-12 col-md-4 p-1">
          <li className={`nav-item ${styles.bgTab}`} role="presentation" style={{ backgroundImage: 'url("https://cdnmansite.metartnetwork.com/static/media/photography.493d088d5e7196be7f4a.jpg")' }}>
            <button className={`text-uppercase w-100 py-5 text-white ${activeTab === 1 && styles.active} ${styles['tab-nav-link']}`} id="pills-galerias-tab" data-bs-toggle="pill" data-bs-target="#pills-galerias" type="button" role="tab" aria-controls="pills-galerias" aria-selected="true" onClick={() => setActiveTab(1)}>
              <p className='fs-5 m-0'>galerias</p>
              <div className='d-flex justify-content-center'>
                <i className={`bi bi-caret-down-fill position-absolute ${activeTab !== 1 && styles.iconColor}`} />
              </div>
            </button>
          </li>
        </div>

        <div className="col-12 col-md-4 p-1">
          <li className={`nav-item ${styles.bgTab}`} role="presentation" style={{ backgroundImage: 'url("https://cdnmansite.metartnetwork.com/static/media/models.3dc42abec49fead08f1b.jpg")' }}>
            <button className={`text-uppercase w-100 py-5 text-white ${activeTab === 2 && styles.active} ${styles['tab-nav-link']}`} id="pills-queens-tab" data-bs-toggle="pill" data-bs-target="#pills-queens" type="button" role="tab" aria-controls="pills-queens" aria-selected="false" onClick={() => setActiveTab(2)}>
              <p className='fs-5 m-0'>Queens</p>
              <div className='d-flex justify-content-center'>
                <i className={`bi bi-caret-down-fill position-absolute ${activeTab !== 2 && styles.iconColor}`} />
              </div>
            </button>
          </li>
        </div>

        <div className="col-12 col-md-4 p-1">
          <li className={`nav-item ${styles.bgTab}`} role="presentation" style={{ backgroundImage: 'url("https://cdnmansite.metartnetwork.com/static/media/films.964724b67d6caf99ba28.jpg")' }}>
            <button className={`text-uppercase w-100 py-5 text-white ${activeTab === 3 && styles.active} ${styles['tab-nav-link']}`} id="pills-films-tab" data-bs-toggle="pill" data-bs-target="#pills-films" type="button" role="tab" aria-controls="pills-films" aria-selected="false" onClick={() => setActiveTab(3)}>
              <p className='fs-5 m-0'>Films</p>
              <div className='d-flex justify-content-center'>
                <i className={`bi bi-caret-down-fill position-absolute ${activeTab !== 3 && styles.iconColor}`} />
              </div>
            </button>
          </li>
        </div>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade" id="pills-galerias" role="tabpanel" aria-labelledby="pills-galerias-tab">
          <CardCarousel carouselInfo={carouselGalleryData} gallery={4} />
        </div>

        <div className="tab-pane fade show active" id="pills-queens" role="tabpanel" aria-labelledby="pills-queens-tab">
          <CardCarousel carouselInfo={carouselQueenData} queen={5} />
        </div>
        
        <div className="tab-pane fade" id="pills-films" role="tabpanel"
        aria-labelledby="pills-films-tab">
          <div className='vh-100 d-flex justify-content-center align-items-center'>
            <h3 className='text-white'>Example text...</h3>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Tab;