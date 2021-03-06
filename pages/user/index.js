import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import EditAccount from '../../components/EditAccount/EditAccount';
import { useUser } from '../../context/userContext';

const User = () => {
  const { userData, flagReload, setFlagReload } = useUser();
  const [user, setUser] = useState(1);
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    setFlagReload(!flagReload);
    router.push('/');
  };

  return (
    <div className={ styles.controlUser }>
      <div className="text-center py-5">
        <h5 className={ styles.title }>Editar cuenta</h5>
        <span className={` text-normal ${styles.text} `}>Bienvenido {userData.name}. En esta sección verás toda la información detallada de tú cuenta.</span>
      </div>
      <section className='row gx-0'>
        <section className="d-flex col-12 col-md-4 col-lg-4">
          <div className="border-end">
            <div className="d-flex justify-content-center flex-wrap">
              <div className="mt-3 d-flex align-items-center justify-content-between">
                <i className={`bi bi-person-circle ${styles.icoUser}`}></i>
                <div className="p-4 d-flex flex-column">
                  <a className={` ${styles.column} text-end `} href="#" onClick={logout}>Cerrar sesión</a>
                </div>
              </div>
              <div className="w-100">
                <nav className="nav flex-column mt-5">
                  <div className={`nav-link ${styles.column}`}>
                    <span onClick={() => setUser(1)}>Editar cuenta</span>
                  </div>
                  <div className={`nav-link ${styles.column}`}>
                    <span onClick={() => setUser(2)}>Mis pedidos</span>
                  </div>
                  <div className={`nav-link ${styles.column}`}>
                    <span onClick={() => setUser(3)}>Método de pago</span>
                  </div>
                  <div className={`nav-link ${styles.column}`}>
                    <span onClick={() => setUser(4)}>Suscripciones</span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className='col-12 col-md-8 col-lg-7'>
          {user === 1 && <EditAccount />}
          {user === 2 && <p className='text-white'>Hola Mundo 2</p>}
          {user === 3 && <p className='text-white'>Hola Mundo 3</p>}
          {user === 4 && <p className='text-white'>Hola Mundo 4</p>}
        </section>
      </section>
    </div>
  );
};

export default User;
