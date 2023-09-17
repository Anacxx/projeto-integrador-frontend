import React, { useContext, useState } from 'react';
import CommentsIcon from '../../images/icons/bate-papo.png';
import { LikeContainer, PostContainer, StyledP, StyledSpan, Styledh1 } from './styled';
import LikeIcon from '../../images/icons/seta-cima-cinza.png'
import DislikeIcon from '../../images/icons/seta-baixo-cinza.png'
import { BASE_URL, TOKEN_NAME } from '../../constants/url';
import axios from 'axios';
import { GlobalContext } from '../../contexts/GlobalContext';


export const PostsCard = ({ post, onCardClick,fetchPost }) => {
  const context = useContext(GlobalContext);
  const { fetchPosts } = context;
  console.log("post.creatorNick_name:", post.creatorNick_name);
  const url = `${BASE_URL}/posts/${post.id}/like`;
  const [isLoading, setIsLoading] = useState(false); // Defina a variável isLoading e seu estado inicial

  const handleLikeDislikeClick = async (like) => { // Marque a função como async para permitir o uso de await
    const token = window.localStorage.getItem(TOKEN_NAME); // Obtém o token
    const config = {
      headers: {
        Authorization: token // Define um cabeçalho de autorização com o token
      }
    };
    const body = {
      like: like
    };

    try {
      setIsLoading(true); // Defina isLoading como true para mostrar que a solicitação está em andamento
      await axios.put(url, body, config); // Faz uma solicitação PUT para a URL

      // Após a conclusão da solicitação, atualize os comentários
      fetchPosts()
      fetchPost()
    } catch (error) {
      console.error('Erro ao atualizar o comentário:', error);
    } finally {
      setIsLoading(false); // Defina isLoading como false após a conclusão da solicitação
    }
  }

  const redirectToPage = () => {
    onCardClick(post);
  };

  return (
    <PostContainer>
      <StyledP>Enviado por: {post.creatorNick_name}</StyledP>
      <Styledh1>{post.content}</Styledh1>
      <LikeContainer>
        <button onClick={() => handleLikeDislikeClick(true)} disabled={isLoading}>
          <img src={LikeIcon} width="16" height="16" alt="Seta para cima" />
        </button>
        <StyledSpan>{post.likes - post.dislikes}</StyledSpan>
        <button onClick={() => handleLikeDislikeClick(false)} disabled={isLoading}>
          <img src={DislikeIcon} width="16" height="16" alt="Seta para baixo" />
        </button>
      </LikeContainer>
      <LikeContainer>
        <StyledSpan>{post.comments}</StyledSpan>
        <button onClick={redirectToPage}>
          <img src={CommentsIcon} width="16" height="16" alt="Comentários" />
        </button>
      </LikeContainer>
    </PostContainer>
  );
};