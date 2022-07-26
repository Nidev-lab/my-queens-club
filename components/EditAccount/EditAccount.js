import React from 'react';
import { useForm } from 'react-hook-form';
import clientAxios from '../../config/clientAxios';
import styles from './editAccount.module.css';

const EditAccount = () => {
  const {
    register, handleSubmit, watch,
  } = useForm();

  const onSubmit = async (data) => {
    clientAxios.patch('/user/', data)
      .then(response => console.log(response));
  };

  return (
    <div className="container w-100">
      <form className="row m-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 d-flex justify-content-between mb-4">
          <div className="col-5">
            <label className={`form-label ${styles.formLabel}`}>Nombre</label>
            <input className={`form-control form-control-sm ${styles.formPlaceholder}`} {...register('name')} type="text"/>
          </div>
          <div className="col-5">
            <label className={`form-label ${styles.formLabel}`}>Apellido</label>
            <input className={`form-control form-control-sm ${styles.formPlaceholder}`} {...register('lastName')} type="text"/>
          </div>
        </div>
        <div className="col-12 mb-4">
          <label className={`form-label ${styles.formLabel}`}>Nombre de Usuario</label>
          <input className={`form-control form-control-sm ${styles.formPlaceholder}`} aria-describedby="userName" {...register('userName', { minLength: 4 })} type="text"/>
          <div id="userName" className={`form-text fst-italic ${styles.formLabel}`}>
            Así será como se mostrará tu nombre en la sección de tú cuenta y en las valoraciones.
          </div>
        </div>
        <div className="col-12 mb-4">
          <label className={`form-label ${styles.formLabel}`}>Correo electrónico</label>
          <input className={`form-control form-control-sm ${styles.formPlaceholder}`} {...register('email')} type="email" />
        </div>
        <div className="col-12 d-flex justify-content-center flex-column border p-3 m2 cardPassword">
          <h5 className={ styles.formLabel }>Cambio de contraseña</h5>
          <div className="card-body">
            <div className="mb-4">
              <label className={`form-label ${styles.formLabel}`}>Contraseña actual</label>
              <input className={`form-control form-control-sm ${styles.formPlaceholder}`} aria-describedby="passHelp" {...register('pass', { minLength: 8 })} type="password"/>
              <div id="passHelp" className={`form-text fst-italic ${styles.formLabel}`}>Dejar en blanco para no cambiar.</div>
            </div>
            <div className="mb-4">
              <label className={`form-label ${styles.formLabel}`}>Contraseña nueva</label>
              <input className={`form-control form-control-sm ${styles.formPlaceholder}`} aria-describedby="newPassHelp" {...register('passNew')} type="password"/>
              <div id="newPassHelp" className={`form-text fst-italic ${styles.formLabel}`}>Dejar en blanco para no cambiar.</div>
            </div>
            {
              (watch('passNew'))
                && <div className="mb-4">
                  <label className={`form-label ${styles.formLabel}`}>Confirmar nueva contraseña</label>
                  <input className={`form-control form-control-sm ${styles.formPlaceholder}`} aria-describedby="newPassHelp2" {...register('passNew2', { required: true, minLength: 8 })} type="password"/>
                  <div id="newPassHelp2" className={`form-text fst-italic ${styles.formLabel}`}>Dejar en blanco para no cambiar.</div>
                </div>
            }
          </div>
        </div>
        <div className="w-100 me-5 text-end">
          <input className={`btn ${styles.button}`} value="Guardar cambios" type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
