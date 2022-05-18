import PropTypes from 'prop-types';
import styles from './infosection.module.css';
import ModalSingIn from '../ModalSingIn/ModalSingIn';
import GeneralModal from '../GeneralModal/GeneralModal';

import data from '../../data/faq.json';
import CustomerSupport from '../CustomerSupport/CustomerSupport';

const InfoSection = ({ className }) => {
  return (
    <div className={`container py-2 ${className}`}>
      <div className='row justify-content-between'>
        <div className={`col-sm-2 col-md-6 col-lg-3 pb-lg-0 pb-5 d-flex flex-column justify-content-center align-items-center ${styles.box}`} data-bs-toggle="modal" data-bs-target='#customerSupport'>
          <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
          <span>ATENCIÓN AL CIENTE</span>
        </div>
        <GeneralModal id='customerSupport'>
          <CustomerSupport />
        </GeneralModal>
        <div className={`col-sm-12 col-md-6 col-lg-3 pb-lg-0 pb-5 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-credit-card-2-back fs-1 ${styles.iconColor}`}></i>
          <span>MEDIOS DE PAGO</span>
        </div>
        <div data-bs-toggle="modal" data-bs-target='#faqmodal' className={`col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-question-circle fs-1 ${styles.iconColor}`}></i>
          <span>PREGUNTAS FRECUENTES</span>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 pt-md-1 ${styles.box}`}>
          <div className='d-flex flex-column justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#login">
            <i className={`bi bi-person-fill fs-1 ${styles.iconColor}`}></i>
            <span>MI CUENTA</span>
          </div>
          <ModalSingIn isLogin idModal='login' activeLogin={1}/>
        </div>
      </div>

      <GeneralModal id='faqmodal'>
        <h3 className={`mb-4 ${styles.textColorSecondary}`}>Preguntas frecuentes</h3>

        {
          data.map((text, i) => (
            <div key={i} className="mt-2">
              <h6 className={styles.textColorPrimary}>{text.question}</h6>
              <p className={styles.textColorSecondary}>{text.answer}</p>
            </div>
          ))
        }
      </GeneralModal>
    </div>
  );
};

InfoSection.propTypes = {
  className: PropTypes.string.isRequired,
};

export default InfoSection;
