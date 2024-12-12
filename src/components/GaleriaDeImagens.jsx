import React, { useState } from 'react';
import './GaleriaDeImagens.css'

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Neymar_Junior_the_Future_of_Brazil_2.jpg/300px-Neymar_Junior_the_Future_of_Brazil_2.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Neymargoldenball.jpg/270px-Neymargoldenball.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/330px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg'
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Neymar_FCBarcelona.JPG/270px-Neymar_FCBarcelona.JPG']);
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>O Neymar, O Neymar</button>
    </div>
  );
}

export default GaleriaDeImagens;