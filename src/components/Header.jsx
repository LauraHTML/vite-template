import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-4 m-2 flex flex-col md:flex-row gap-4 justify-around'>
        <span>Drifit</span>
        <nav>
            <ul className='flex flex-col md:flex-row gap-4 items-center'>
                <Link to="/">Início</Link>
                <ul>Novidades</ul>
                <ul>Loja</ul>
                <ul>Ajuda</ul>
                <ul>Perguntas frequentes</ul>
            </ul>
        </nav>
        <button>Entrar</button>
    </header>
  )
}

export default Header