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
import './App.scss';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(openMainPage());
  }, [dispatch]);

  const { headerState, lineFxState, footerState, descriptionState,
    technologyState, productsState, projectsState, contactsState,
    aboutUsState } = useSelector(store => store.appNavigation);
 
  return (
    <div className="App">
      {headerState && (<Header />)}
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
