import { Router } from "./routes";
import { createGlobalStyle } from 'styled-components';
import { BASE_URL, TOKEN_NAME } from "./constants/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
  }

`
function App() {

  const [posts, setPosts] = useState([]); // Define um estado para armazenar posts

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME); // Obtém o token armazenado localmente

    if (token) {
      fetchPosts(); // Chama a função fetchPosts se um token estiver presente
    }
  }, []);// O useEffect será executado apenas após a renderização inicial (dependências vazias)

  const fetchPosts = async () => { // Função assíncrona para buscar posts
    try {
      const token = window.localStorage.getItem(TOKEN_NAME); // Obtém o token

      const config = {
        headers: {
          Authorization: token // Define um cabeçalho de autorização com o token
        }
      };

      const response = await axios.get(BASE_URL + "/posts", config); // Faz uma solicitação GET para obter posts

      setPosts(response.data); // Atualiza o estado dos posts com os dados da resposta
    } catch (error) {
      console.error(error?.response?.data); // Registra erros no console
      window.alert(error?.response?.data); // Exibe um alerta de erro com a mensagem de erro da resposta
    }
  };

  const context = {
    posts,
    fetchPosts
  };

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
{/* Fornece o contexto global com os posts e a função fetchPosts */}
        <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
