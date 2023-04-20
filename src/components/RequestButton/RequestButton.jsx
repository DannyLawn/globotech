import styles from './RequestButton.module.scss';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openPopup } from '../../services/slices/request-form-slice';


const RequestButton = () => {

  const dispatch = useDispatch();
  const {popupState} = useSelector(store => store.requestForm)
  const button = useRef(null);

  const onClick = () => {
    dispatch(openPopup());
  }

  useEffect(()=>{
    setTimeout(()=>{
      popupState ? button.current.classList.add(`${styles.requestButton_openedPopup}`) : button.current.classList.remove(`${styles.requestButton_openedPopup}`);
    },100)
   
  }, [popupState])


  return (
    <div ref={button} className={styles.requestButton} onClick={()=>onClick()}>
    </div>
  )
}

export default RequestButton;