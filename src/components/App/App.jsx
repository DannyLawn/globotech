import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../Header/Header';
import { Description } from '../Description/Description';
import { Products } from '../Products/Products';
import { Technology } from '../Technology/Technology';
import { Projects } from '../Projects/Projects';
import { Contacts } from '../Contacts/Contacts';
import { AboutUs } from '../AboutUs/AboutUs';
import { LineFx } from '../LineFx/LineFx';
import { Footer } from '../Footer/Footer';
import { openMainPage } from '../../services/slices/app-navigation-slice';
import RequestPopup from '../RquestPopup/RequestPopup';
import RequestButton from '../RequestButton/RequestButton';
import './App.scss';


function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(openMainPage());
  }, [dispatch]);

  const { headerState, lineFxState, footerState, descriptionState,
    technologyState, productsState, projectsState, contactsState,
    aboutUsState } = useSelector(store => store.appNavigation);

  const {popupState} = useSelector(store => store.requestForm)
  
 
  return (
    <div className="App">
      {headerState && (<Header />)}
      {!aboutUsState && <RequestButton />}
      {popupState && <RequestPopup />}
      <main className="App__content">
        {descriptionState && (<Description />)}
        {technologyState && (<Technology />)}
        {productsState && (<Products />)}
        {projectsState && (<Projects />)}
        {contactsState && (<Contacts />)}
      </main>
      {aboutUsState && (<AboutUs />)}
      {lineFxState && (<LineFx />)}
      {footerState && (<Footer />)}
    </div>
  );
}

export default App;
