/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';
import ModalSingIn from '../../components/ModalSingIn/ModalSingIn';

import styles from '../../styles/Galleries.module.css';

const Gallery = ({ gallery }) => {
  return (
    <div className={styles.bgHome}>
      <Head>
        <title>My Queens Club - Enjoy The Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ModalSingIn idModal='singIn' />
        <ModalSingIn idModal='singInBuy' isLogin />
        <div className='pt-5 pb-4'>
          <h6 className={`text-uppercase fw-bolder text-center ${styles.title}`}>{gallery?.galleryName}</h6>
          <h6 className={`fw-bolder text-center mb-4 ${styles.subTitle}`}>Galería de fotos de {gallery?.nameQueen}</h6>
        </div>
      </header>

      <main className='mb-5 container-fluid'>
        <section className='row gx-0'>
          {
            gallery?.photos?.map((src, i) => (
              <div key={i} className="mb-3 position-relative d-flex justify-content-center">
                <Image src={src} alt={src} width={1322} height={1920}/>
                <div className={`w-100 position-absolute top-50 start-50 translate-middle text-center ${styles.textColor} ${i !== (gallery.photos.length - 1) ? 'visually-hidden' : null}`}>
                  <h4 className={`fw-bold text-uppercase mb-4 ${styles.contentTitle}`}>Contenido restringido</h4>
                  <p>
                    Para ver las {gallery.photos.length} fotos sin censura,
                    <br />
                     hacé click en el botón de abajo
                  </p>
                  <div className='my-4'>
                    <button className={`px-5 btn ${styles.button}`}>Suscríbete</button>
                  </div>
                  <p>
                    <em>Precio final de la galería AR${gallery?.price}</em>
                  </p>
                  <p>Si ya tenes una suscripción a esta galería,
                  inicia sesión para poder visualizarla. </p>
                  <div className='my-4'>
                    <button className={`btn ${styles.outlineButton} btn-outline-dark`} data-bs-toggle="modal" data-bs-target="#singInBuy">Iniciar sesión</button>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:8000/galleries');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/galleries/${params.id}`);
  const gallery = await res.json();

  return {
    props: { gallery },
  };
};

Gallery.propTypes = {
  gallery: PropTypes.object,
};

export default Gallery;
