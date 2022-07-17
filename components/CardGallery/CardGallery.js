import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './cardgallery.module.css';

const CardGallery = ({
  coverPhotoGallery, nameQueen, galleryName, price, gallery, _id, photos,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/gallery/${_id}`);
  };

  return (
    <div className='p-1'>
      <div className={styles.cardGallery} onClick={handleClick}>
        <div className='position-relative'>
          <Image src={coverPhotoGallery} alt="cover foto gallery" height={1920}
          width={1200} layout="responsive" quality={100} priority />
          <div className='text-white px-2 py-1 bg-dark bg-opacity-75 position-absolute bottom-0 end-0 d-flex'>
            <i className="bi bi-camera me-1" />
            <div className={styles.imageQuantity}>{photos?.lenght}</div>
          </div>
        </div>
        <div className='px-3'>
          {
            !gallery
              ? (
                <>
                  <p className={`col-6 pt-3 pb-2 m-0 fw-normal fs-6 ${styles.titleName}`}>{galleryName}</p>
                  <p className={`text-secondary pt-1 pb-3 m-0 fw-light fs-6 ${styles.titleName}`}>{nameQueen}</p>
                </>
              )
              : (
                <>
                  <div className="row">
                    <p className={`col-6 pt-3 pb-2 m-0 fw-normal fs-6 ${styles.titleName}`}>{galleryName}</p>
                    <p className={`col-6 pt-3 pb-2 m-0 fw-light text-end ${styles.priceGallery}`}>${price} / mes</p>
                  </div>
                  <div className='row pb-3 pt-2'>
                    <div className='col-6'>
                      <p className={`text-secondary m-0 fw-light fs-6 ${styles.titleName}`}>{nameQueen}</p>
                    </div>
                    <div className='col-6 d-flex justify-content-end align-items-center m-0'>
                      <button className={`btn ${styles.button}`}>Suscribete</button>
                    </div>
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};

CardGallery.propTypes = {
  _id: PropTypes.string.isRequired,
  coverPhotoGallery: PropTypes.string,
  nameQueen: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  gallery: PropTypes.bool,
  photos: PropTypes.array.isRequired,
};

CardGallery.defaultProps = {
  gallery: false,
};

export default CardGallery;
