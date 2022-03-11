import PropTypes from 'prop-types';
import styles from './cardhome.module.css';

const CardHome = ({ src, title }) => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.cardHome}`} style={{ backgroundImage: `url(${src})` }}>
      <div className='text-center'>
        <h2 className={`text-white mb-4 ${styles.titleName}`}>{title}</h2>
        <button type="button" className={`btn btn-outline-light mt-1 ${styles.buttonStyle}`} >Ver Galerias</button>
      </div>
    </div>
  );
};

CardHome.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardHome;
