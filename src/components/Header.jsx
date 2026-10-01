import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <span>Drifit</span>
        <nav>
            <ul>
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