import { useState } from 'react'
import meninaJogando from './assets/menina.jpg'
import './App.css'

function App() {

  const [cadUsuario, setCadUsuario] = useState('');
  const [cadEmail, setCadEmail] = useState('');
  const [cadSenha, setCadSenha] = useState('');
  const [cadTermos, setCadTermos] = useState(false);

  async function salvarCadastro(event) {
    event.preventDefault();

    try {
      const resposta = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuario: cadUsuario,
          email: cadEmail,
          senha: cadSenha
        })
      })

      if (resposta.ok) {
        alert('Cadastro realizado com sucesso! ');
      } else {
        alert('Erro no cadastro. ');
      }
    } catch {
      alert("Erro ao conectar com o servidor.");
    }

  }
  return (
    <div className="pagina">
      <div className="container1">
        <div className="container2">
          <div className="conteudo">
            <section className="esquerda">
              <div className="imagem-esquerda">

                <img
                  id="imagem"
                  alt="menina jogando"
                  src={meninaJogando}
                />

              </div>
            </section>

            <section className="direita">
              <h1>Desenvolva sua lógica <br /> enquanto joga!</h1>
              <p>Sincronize seu pensamento e alcance <br /> o nível mestre na programação</p>

              <form className="formulario" onSubmit={salvarCadastro}>
                <div className="formulario-direita">
                  <fieldset>
                    <div className="campo">

                      <label htmlFor="usuario">Usuário</label>
                      <input
                        type="text"
                        name="usuario"
                        id="usuario"
                        value={cadUsuario}
                        onChange={(e) => setCadUsuario(e.target.value)}
                        required
                      />

                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={cadEmail}
                        onChange={(e) => setCadEmail(e.target.value)}
                        required
                      />

                      <label htmlFor="senha">Senha</label>
                      <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={cadSenha}
                        onChange={(e) => setCadSenha(e.target.value)}
                        required
                      />

                    </div>
                  </fieldset>

                  <div className="aceito-btn">
                    <input
                      type="checkbox"
                      name="termos"
                      id="termos"
                      checked={cadTermos}
                      onChange={(e) => setCadTermos(e.target.checked)}
                      required
                    />

                    <label htmlFor="termos">Concordo com os termos de privacidade</label>
                  </div>

                  <div className="cadastre-btn">
                    <button
                      type="submit">Cadastre-se</button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;