import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './cardhome.module.css';

const CardHome = ({
  coverImage, name, _id,
}) => {
  return (
    <div className='p-1 position-relative'>
      <Image src={coverImage} alt={name} height={1920} width={1200} layout="responsive" quality={100} priority className={styles.cardHome} />
      <div className='text-center position-absolute h-100 w-100 d-flex justify-content-center align-items-center top-0'>
        <div className='text-white'>
          <h4 className={`mb-4 ${styles.titleName}`}>{name}</h4>
          <Link href={`/galleries/${_id}`} passHref>
            <button type="button" className={`btn btn-outline-light mt-1 ${styles.buttonStyle}`} >Ver Galerias</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CardHome.propTypes = {
  _id: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardHome;
