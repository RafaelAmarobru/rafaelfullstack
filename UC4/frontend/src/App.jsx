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
  return(
    <>
    <div>
      <h1>Front com Api</h1>

      <button onClick={logarUsuario}>Logar</button>
      </div>
      </>
  )
}