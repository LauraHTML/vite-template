import React from 'react'

const Card = ({nomeJogo, preco, descricao, imagem}) => {
  return (
    <article>
        <div>
            <h3>{nomeJogo}</h3>
            <img src={imagem} alt="Image do jogo" width={250} height={300} />
        </div>
        <div>
            <p>{descricao}</p>
        </div>
        <div>
            <button>Comprar</button>
        </div>
    </article>
  )
}

export default Card