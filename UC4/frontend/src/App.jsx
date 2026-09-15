import './App.css'
import apiLocal from './Api/apilocal'

export default function App(){
 
  const email = 'rafael@teste.com.br'
  const senha = '123456'

  async function logarUsuario(){
    try {
      const resposta = await apiLocal.post('/LoginUsuarios', {
        email,
        senha
      })
      localStorage.setItem('@token', JSON.stringify(resposta.data.token ))
      console.log(resposta)

    } catch (err) {
      if (err.response && err.response.data) {
        const mensagemDoBackEnd = err.response.data.error 

        console.log('Mensagem real do backend', mensagemDoBackEnd)
      } else{
        console.log('Erro de conexão', err.message)
        console.log('Não foi possivel conectar ao servidor.')
      }
    }
  }

  async function consultarUsuarios(){
    try {
      const itoken = localStorage.getItem('@token')
      const token = JSON.parse(itoken)
      const resposta = await apiLocal.get('/VisualizarDadosGeral', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(resposta
      )
    } catch (err) {
      
    }
  }

  async function consultarProdutos(){
    try {
      const
    } catch (err) {
      
    }
  }


  function limparLocalStorage(){
    localStorage.clear()
  }
  return(
    <>
    <div>
      <h1>Front com Api</h1>
      < input type='email' name='email' alt='email' Submit='Email'></input>
      <br/>

      <button onClick={logarUsuario}>Logar</button>
      <button onClick={consultarUsuarios}>Consultar</button>
      <button onClick={limparLocalStorage}>Sair do Sistema</button>
    
      </div>
      </>
  )
}