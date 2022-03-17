import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.bgNav}`}>
      <div className="container px-4 ">
        <div>
          <a className="navbar-brand" href="#">
            <Image className="w-25 d-inline-block" width={100} height={70} src='/images/logo.png' alt='logo'/>
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink} px-0 px-md-3`} aria-current="page" href="#">Updates</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink} px-0 px-md-3`} aria-current="page" href="#">Galleries</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink} px-0 px-md-3`} aria-current="page" href="#">Films</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink} px-0 px-md-3`} aria-current="page" href="#">Queens</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink} px-0 px-md-3`} aria-current="page" href="#">Join the Club</a>
            </li>
            <li className="nav-item">
              <button type="button" className={`nav-link ${styles.buttonStyleGet} px-4 mx-0 mx-md-4 my-2 my-md-0`}>Get started</button>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
