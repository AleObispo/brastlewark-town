import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import GnomesList from './components/GnomesList';

import HairColorProvider from './context/HairColorContext';
import SelectedProvider from './context/SelectedContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <HairColorProvider>
      <SelectedProvider>
        <ModalProvider>
        <Header/>
          
              <div className='container mt-5'>
                <div className='row'>
                  <Form />
                </div>
                <GnomesList/>
              </div>
          
          </ModalProvider>
      </SelectedProvider>
    </HairColorProvider>
  );
}

export default App;
