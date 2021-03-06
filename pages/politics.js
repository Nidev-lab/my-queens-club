import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import ModalSingIn from '../components/ModalSingIn/ModalSingIn';

import styles from '../styles/Politics.module.css';
import data from '../data/politics.json';

const Politics = () => {
  return (
    <div className={styles.bgHome}>
      <Head>
        <title>My Queens Club - Enjoy The Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ModalSingIn idModal='singIn' />
        <h5 className={`text-uppercase fw-bolder text-center py-5 ${styles.title}`}>Políticas de Privacidad</h5>
      </header>

      <main className='mb-5 container-fluid'>
        <section>
          <p className={`m-4 px-3 ${styles.politics}`}>{data.pre}</p>
          <p className={`m-4 px-3 ${styles.politics}`}>{data.presentation}</p>
          {
            data.parrafos.map((par, index) => (
              <p key={index} className={`m-4 px-3 ${styles.politics}`}>{par}</p>
            ))
          }
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Politics;
