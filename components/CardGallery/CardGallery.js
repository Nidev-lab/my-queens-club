import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './cardgallery.module.css';

const CardGallery = ({
  src, title, alt, galleryName, imageQuantity,
}) => {
  return (
    <div className={styles.cardGallery}>
      <div className='position-relative'>
        <Image src={src} alt={alt} height="1031px" width="687px" layout="responsive" quality priority />
        <div className='text-white px-2 py-1 bg-dark bg-opacity-75 position-absolute bottom-0 end-0 d-flex'>
          <i className="bi bi-camera me-1" />
          <div className={styles.imageQuantity}>{imageQuantity}</div>
        </div>
      </div>
      <p className={`text-white pt-3 pb-2 px-3 m-0 fw-normal fs-6 ${styles.titleName}`}>{galleryName}</p>
      <p className={`text-secondary pt-1 pb-3 px-3 m-0 fw-light fs-6 ${styles.titleName}`}>{title}</p>
    </div>
  );
};

CardGallery.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  imageQuantity: PropTypes.number.isRequired,
};

export default CardGallery;
