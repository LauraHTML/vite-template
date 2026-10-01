import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'

const Home = () => {
  const jogos = [
    {
      "id": 1,
      "nome": "Baldurs gate III",
      "descricao":"uuuu",
      "imagem":"/jogo.jpg",
      "preco":"200"
    },
    {
      "id": 2,
      "nome": "Little witch in the woods",
      "descricao": "aa",
      "imagem": "/jogo.jpg",
      "preco": "200"
    },
    {
      "id": 3,
      "nome": "GTA 6",
      "descricao": "aadf rfg sd",
      "imagem": "/jogo.jpg",
      "preco": "200"
    },
  ]
  return (
    <main className='h-'>
        <h1>Bem vindo</h1>
        <Hero
          tituloJogo={'Little witch in the woods'}
        descricao={'Little Witch in the Woods is a life simulation and fantasy role-playing game by Sunny Side Up. Players control Ellie, an apprentice witch exploring a mystical forest, gathering resources, brewing potions, and helping villagers to complete her training'}
        />
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 mx-20 '>
          {jogos.map((jogo) => (
          <Card nomeJogo={jogo.nome} preco={jogo.preco} descricao={jogo.descricao} imagem={jogo.imagem}></Card>
        ))}
        </section>
        
    </main>
  )
}

export default Home