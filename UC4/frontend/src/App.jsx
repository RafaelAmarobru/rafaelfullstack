import { useState, useEffect } from 'react'
import './App.css'
import apiLocal from './Api/apilocal'

export default function App() {
  const [nome, setNome] = useState('')
  const [cargos, setCargos] = useState([''])
  useEffect(() => {
    async function visualizarCargosGeral(){
      const resposta = await apiLocal('/VisulizarCargosGeral')
      console.log(resposta)
    }
    visualizarCargosGeral()
  }, [])
  async function cadastrarCargos() {
    try {
      const itoken = localStorage.getItem('@token')
      const token = JSON.parse(itoken)

      const resposta = await apiLocal.post(
        '/CadastrarCargos', 
        { nome }, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(resposta)
    } catch (err) {
      console.log('Erro ao cadastrar cargo:', err.response?.data || err.message)
    }
  } 

  async function logarUsuario() {
    const email = 'rafael@teste.com.br'
    const senha = '123456'

    try {
      const resposta = await apiLocal.post('/LoginUsuarios', {
        email,
        senha
      })
      localStorage.setItem('@token', JSON.stringify(resposta.data.token))
      console.log(resposta)
    } catch (err) {
      if (err.response && err.response.data) {
        const mensagemDoBackEnd = err.response.data.error 
        console.log('Mensagem real do backend', mensagemDoBackEnd)
      } else {
        console.log('Erro de conexão', err.message)
        console.log('Não foi possível conectar ao servidor.')
      }
    }
  }

  async function consultarUsuarios() {
    try {
      const itoken = localStorage.getItem('@token')
      const token = JSON.parse(itoken)

      const resposta = await apiLocal.get('/VisualizarDadosGeral', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(resposta)
    } catch (err) {
      console.log('Erro ao consultar usuários:', err.response?.data || err.message)
    }
  }

  function limparLocalStorage() {
    localStorage.clear()
  }

  return (
    <div>
      <h1>Front com Api</h1>
      <form onSubmit={cadastrarCargos}>
        <input type='text' placeholder='Digite o Cargo' value={nome} onChange={(e) => setNome(e.target.value)}></input>
        <button type='submit'>Cadastrar Cargos</button>
      </form>
      <form>
        <select>
          <option value="">Selecione o Cargo</option>
          {cargos.map((item) => {
            return(
              <>
              <option value="">{item.nome}</option>
              </>
            )
          })}
        </select>

        <button type='submit'>Cadastrar Usuarios</button>
      </form>
      <button onClick={logarUsuario}>Logar</button>
      <button onClick={consultarUsuarios}>Consultar</button>
      <button onClick={limparLocalStorage}>Sair do Sistema</button>
      
    </div>
  )
}