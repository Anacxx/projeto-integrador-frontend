import React, { useContext, useState } from 'react';
import CommentsIcon from '../../images/icons/bate-papo-icon.png';
import { LikeContainer, PostContainer, StyledP, StyledSpan, StyledContent, CommentsButton } from './styled';
import LikeIcon from '../../images/icons/seta-cima-cinza.png'
import DislikeIcon from '../../images/icons/seta-baixo-cinza.png'
import { BASE_URL, TOKEN_NAME } from '../../constants/url';
import axios from 'axios';
import { GlobalContext } from '../../contexts/GlobalContext';


export const PostsCard = ({ post, onCardClick,fetchPost }) => {
  const context = useContext(GlobalContext);
  const { fetchPosts } = context;
  const url = `${BASE_URL}/posts/${post.id}/like`;
  const [isLoading, setIsLoading] = useState(false); 

  const handleLikeDislikeClick = async (like) => { 
    const token = window.localStorage.getItem(TOKEN_NAME);
    const config = {
      headers: {
        Authorization: token
      }
    };
    const body = {
      like: like
    };
    try {
      setIsLoading(true); 
      await axios.put(url, body, config); 
      fetchPosts()
      fetchPost()
    } catch (error) {
      console.error('Erro ao atualizar o comentário:', error);
    } finally {
      setIsLoading(false); 
    }
  }
  return (
    <PostContainer>
      <StyledP>Enviado por: {post.creatorNick_name}</StyledP>
      <StyledContent>{post.content}</StyledContent>
      <LikeContainer>
        <button onClick={() => handleLikeDislikeClick(true)} disabled={isLoading}>
          <img src={LikeIcon} width="16" height="16" alt="Seta para cima" />
        </button>
        <StyledSpan>{post.likes - post.dislikes}</StyledSpan>
        <button onClick={() => handleLikeDislikeClick(false)} disabled={isLoading}>
          <img src={DislikeIcon} width="16" height="16" alt="Seta para baixo" />
        </button>
      </LikeContainer>
      <CommentsButton onClick={onCardClick}>
       <img src={CommentsIcon} width="16" height="16" alt="Comentários" /> &nbsp; {post.comments}
      </CommentsButton>
    </PostContainer>
  );
};
