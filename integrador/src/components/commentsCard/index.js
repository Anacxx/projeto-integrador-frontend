import React, { useState } from 'react';
import axios from 'axios'; // Importe o módulo axios
import { LikeContainer, PostContainer, StyledP, StyledSpan, Styledh1 } from "./styled";
import LikeIcon from '../../images/icons/seta-cima-cinza.png';
import DislikeIcon from '../../images/icons/seta-baixo-cinza.png';
import { BASE_URL, TOKEN_NAME } from '../../constants/url';
export const CommentsCard = ({ comment, fetchComments }) => {
  const url = `${BASE_URL}/comments/${comment.commentId}/like`;
  const [isLoading, setIsLoading] = useState(false); 

  const handleLikeDislikeClick = async (like) => { //função  async para permitir o uso de await
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
      setIsLoading(true); //isLoading como true para mostrar que a solicitação está em andamento
      await axios.put(url, body, config); // Faz uma solicitação PUT para a URL

      // Após a conclusão da solicitação, atualiza os comentários
      fetchComments();
    } catch (error) {
      console.error('Erro ao atualizar o comentário:', error);
    } finally {
      setIsLoading(false); //isLoading como false após a conclusão da solicitação
    }
  }

  return (
    <PostContainer>
      <StyledP>Enviado por: {comment.nickName}</StyledP>
      <Styledh1>{comment.commentContent}</Styledh1>
      <LikeContainer>
        <button onClick={() => handleLikeDislikeClick(true)} disabled={isLoading}>
          <img src={LikeIcon} width="16" height="16" alt="Seta para cima" />
        </button>
       <StyledSpan style={{ padding: '5px' }}>{comment.likes - comment.dislikes}</StyledSpan> 
        <button onClick={() => handleLikeDislikeClick(false)} disabled={isLoading}>
          <img src={DislikeIcon} width="16" height="16" alt="Seta para baixo" />
        </button>
      </LikeContainer>
    </PostContainer>
  );
}
