import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='bg-primary py-8 px-6 flex-col'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div>
                <h3 className='font-bold text-primary-foreground text-2xl'>Navegação</h3>
                <ul>
                      <Link to="/">Início</Link>
                      <ul>Novidades</ul>
                      <ul>Loja</ul>
                      <ul>Ajuda</ul>
                      <ul>Perguntas frequentes</ul>
                </ul>
            </div>
            <div>
                  <h3 className='font-bold text-primary-foreground text-2xl'>Serviços online</h3>
                <ul className='gap-4'>
                    <li>Acordo de serviços</li>
                    <li>Drift online services</li>
                    <li>Declaração de confiabilidade</li>
                </ul>
            </div>
            <div>
                  <h3 className='font-bold text-primary-foreground text-2xl'>Recursos</h3>
                <ul>
                    <li>Regras da comunidade</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer