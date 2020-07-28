import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"O que é Front-end? Trabalhando na área"}
      />

      <Carrousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      
    </div>
  );
}

export default App;
