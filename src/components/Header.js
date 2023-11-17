import './Header.css';

function Header() {
  return (
    <div className='Header'>
        <img src={require('../assets/logo-conexao.png')}/>
        <ul>
            <li>Página inicial</li>
            <li>Categorias</li>
            <li>Quem somos</li>
            <li>Passou por aqui</li>
            <li>Contato</li>
        </ul>
    </div>
  );
}

export default Header;