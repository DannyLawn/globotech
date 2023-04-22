import styles from './RequestPopup.module.scss';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../services/slices/request-form-slice';
import { clearError, sendRequest, successfulSending, updateMessage, failedSending  } from '../../services/slices/request-form-slice';
import MessageBoard from '../MessageBoard/MessageBoard';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const RequestPopup = () => {

  const dispatch = useDispatch();
  const popupElement = useRef(null);
  const containerElement = useRef(null);
  const { popupState, sendingRequest, sendingAnApplication} = useSelector(store => store.requestForm);
  const form = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const [dataForm, setDataForm] = useState({
    name: "",
    mail: "",
    phone: "",
    type: "",
    description: ""
  });

  setTimeout(() => {
    popupElement.current.classList.add(`${styles.popup_opened}`);
    containerElement.current.classList.add(`${styles.popupContainer_opened}`);
  }, 150);

  const handleClosePopup = useCallback(() => {

    popupElement.current.classList.remove(`${styles.popup_opened}`);
    containerElement.current.classList.remove(`${styles.popupContainer_opened}`);

    setTimeout(() => {
      dispatch(closePopup());
    }, 300);

  }, [dispatch]);


  const handleEscKeydown = useCallback((e) => {
    e.which === 27 && popupState && handleClosePopup();
  }, [popupState, handleClosePopup]);


  React.useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    }
  }, [handleEscKeydown]);

  const onChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setSubmitDisabled(!dataForm.name.trim() || !dataForm.mail.trim() || !dataForm.phone.trim() || !dataForm.type.trim() || !dataForm.description.trim());
}, [dataForm]);


const sendEmail = (e) => {
  e.preventDefault();

  dispatch(clearError());
  dispatch(sendRequest());

  emailjs.sendForm('service_ocxcw7m', 'template_2xwlldu', form.current, 'ggVhu4GbHdpVSB3AE')
      .then((result) => {


          handleClosePopup();  
          dispatch(successfulSending());
          dispatch(updateMessage('Заявка отправлена!')); 
          window.scrollTo(0, 0);             

      }, (error) => {
          dispatch(failedSending());
          dispatch(updateMessage(`Ошибка: ${error.status}. Пожалуйста, попробуйте позже.`)); 
      });

};




  return (
    <section className={styles.popup} ref={popupElement} onClick={() => handleClosePopup()} >
      <div className={styles.popupContainer} ref={containerElement} onClick={(e) => e.stopPropagation()}>

        <form ref={form}  onSubmit={sendEmail} noValidate>
          <h1 className={styles.popupTitleMain}>Заявка</h1>
          <fieldset className={styles.listContainer}>
            <legend className={styles.legendContainer}>Данные</legend>
            <ul className={styles.popupList}>
              <li className={styles.popupListItem}>
                <label className={styles.listItemTitle} htmlFor="name">Имя:</label>
                <input className={styles.popupInputContainer} type="text" name="name" id="name" value={dataForm.name}
                  onChange={onChange} required />
              </li>
              <li className={styles.popupListItem}>
                <label className={styles.listItemTitle} htmlFor="email">Электронная почта:</label>
                <input className={styles.popupInputContainer} type="email" name="mail" id="email" value={dataForm.mail}
                  onChange={onChange} required />
              </li>
              <li className={styles.popupListItem}>
                <label className={styles.listItemTitle} htmlFor="number">Телефон:</label>
                <input className={styles.popupInputContainer} type="tel" name="phone" id="number" maxLength="21" value={dataForm.phone}
                  onChange={onChange} required />
              </li>
              <li className={styles.popupListItem}>
                <label className={styles.listItemTitle} htmlFor="type">Тип:</label>
                <select className={styles.popupInputContainer} onChange={onChange} name="type" id="type">
                  <option value="">-- Выберите вид работы --</option>
                  <option value="design">Разработка дизайна</option>
                  <option value="web">Cоздание сайта</option>
                  <option value="sup">Поддержка проектов</option>
                </select>
              </li>
              <li className={styles.popupListItem}>
                <label className={styles.listItemTitle} htmlFor="description">Описание:</label>
                <textarea className={styles.descriptionContainer} value={dataForm.description} name="description" id='description' onChange={onChange}></textarea>
           
              </li>
            </ul>
          </fieldset>
          <div className={styles.submitContainer}>
            {submitDisabled ? (<button className={`${styles.popupSubmitButton}  ${styles.popupSubmitButton_disabled}`} disabled >Отправить</button>) : (sendingRequest ? (<p className={styles.requestLoading}>Обработка данных</p>) : (<button className={styles.popupSubmitButton} type="submit" >Отправить</button>))}
          </div>

        </form>
        <div className={styles.popup__toggle} onClick={() => handleClosePopup()} />

      </div>
      {sendingAnApplication===false && <MessageBoard />}
    </section>
  );
}

export default RequestPopup;