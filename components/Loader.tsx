// components/Loader.tsx
import React from 'react';
import './Loader.module.css'; // Adicione o CSS em um módulo CSS

const Loader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="preloader-body">
        <div className="cssload-container">
          <div className="cssload-speeding-wheel" />
        </div>
        <p>Carregando...</p>
      </div>
    </div>
  );
};

export default Loader;
