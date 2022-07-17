/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Image } from 'cloudinary-react';
import CloudinaryUploadImage from '../CloudinaryUploadImage/CloudinaryUploadImage';
import styles from '../../styles/Forms.module.css';
import clientAxios from '../../config/clientAxios';

const NewGallery = ({ queenSelect }) => {
  const [queen, setQueen] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [coverPhotoGallery, setCoverPhotoGallery] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    clientAxios.post('/galleries', data)
      .then(response => console.log(response.data));
  };

  const handleQueen = async () => {
    clientAxios.get('/queen')
      .then(response => setQueen(response.data));
  };

  const handleGalleryImages = (arrayImages) => {
    setGallery(arrayImages);
  };

  const handleCoverPhotoGallery = (arrayImages) => {
    setCoverPhotoGallery(arrayImages);
  };

  useEffect(() => {
    handleQueen();
  }, [queenSelect]);

  return (
    <form className="col-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 pt-5">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Nombre de Queen</label>
        <select className={`form-select ${styles.placeholder}`} aria-label="Default select example" {...register('idQueen', { required: true })} >
          {
            queen.length > 0 && queen.map(x => <option key={x._id} value={x._id}>{x.name}</option>)
          }
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Nombre de la Galería</label>
        <input type="text" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('galleryName', { required: true })} />
        {errors.exampleRequired && <span className={`${styles.title}`}>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <div>
          <label htmlFor="galeria" className={`form-label ${styles.title}`}>Foto de portada</label>
        </div>
        {
          coverPhotoGallery.length > 0
            ? <Image src={coverPhotoGallery[0]} alt="cover photo gallery" className="w-25"/>
            : <CloudinaryUploadImage onSave={handleCoverPhotoGallery} label="Cargar foto portada" />
        }
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Precio de la Galeria</label>
        <input type="number" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('price', { required: true })} />
        {errors.exampleRequired && <span className={`${styles.title}`}>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <div>
          <label htmlFor="galeria" className={`form-label ${styles.title}`}>Galería</label>
        </div>
        {
          gallery.length > 0
            ? (
              <section className="row">
                {
                  gallery.map(img => (
                    <Image src={img} alt="cover photo gallery" className="col-3" key={img} />
                  ))
                }
              </section>
            )
            : <CloudinaryUploadImage onSave={handleGalleryImages} label="Cargar galeria" multiple/>
        }
      </div>
      <div className="text-end">
        <button type="submit" className={`btn ${styles.button}`}>Crear Galeria</button>
      </div>
      <button type="submit" className="btn btn-primary">Crear galería</button>
    </form>
  );
};

NewGallery.propTypes = {
  queenSelect: PropTypes.bool.isRequired,
};

export default NewGallery;
