import './Main.css';

function Main() {
  return (
    <div className='Main'>
        <div className='Left'>
            <h2>Contato</h2>
            <form>
                <label>Nome:</label>
                <input type='text' />

                <label>Email:</label>
                <input type='email' />
                
                <label>Assunto:</label>
                <input type='text' />

                <label>Mensagem:</label>
                <textarea></textarea>

                <label>Termos e condições:</label>
                <div>
                    <input type='checkbox'/><span>Habilitando esta opção você aceita e concorda com os nossos <strong>termos</strong></span>
                </div>
            </form>
        </div>
        <div className='Right'>
            <input placeholder='Search' type='text'/>
            <h3>Categorias</h3>
            <p>Assuntos gerais</p>
            <p>Projeto Conexão Panvel</p>
            <p>Sem categoria</p>
            <p>Tecnologias</p>

            <h3>Quem somos</h3>
            <p>Somos uma equipe de 8 estagiários do projeto Conexão Panvel, uma parceria entre a Faccat e PanVel que tem como objetivo desenvolver</p>
        </div>
    </div>
  );
}

export default Main;