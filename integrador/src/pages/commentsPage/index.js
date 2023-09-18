import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, TOKEN_NAME } from '../../constants/url';
import { PostsCard, CommentsCard, StyledTextArea } from '../../components'; 
import Header from '../../components/header';
import { goToLoginPage } from '../../routes/coordinator';

export const CommentsPage = () => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem(TOKEN_NAME);
    goToLoginPage(navigate);
  };
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [newComment, setNewComment] = useState(""); 
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // renderiza o post.
    fetchPost();
    fetchComments()
  }, [id]);
      const fetchPost = async () => {
      try {
        const token = window.localStorage.getItem(TOKEN_NAME);
     
        const config = {
          headers: {
            Authorization: token,
          },
        };
        const apiUrl = `${BASE_URL}/posts/${id}`;
        const response = await axios.get(apiUrl, config);
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    //busca os comentários referentes ao post.
  const fetchComments = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME);
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const apiUrl = `${BASE_URL}/comments/post/${id}`; // Endpoint para buscar comentários de um post específico
      const response = await axios.get(apiUrl, config);
      setComments(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  const createComment = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const token = window.localStorage.getItem(TOKEN_NAME);
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const body = {
        content: newComment,
      };
      if (!newComment.trim()) {
        window.alert("O comentário não pode estar vazio.");
        setIsLoading(false);
        return;
      }
  
      if (newComment.length > 200) {
        window.alert("O comentário não pode exceder 200 caracteres.");
        setIsLoading(false);
        return;
      }
      const apiUrl = `${BASE_URL}/comments/${id}`; // Endpoint para criar um comentário em um post específico
      await axios.post(apiUrl, body, config);
      setNewComment("");
      setIsLoading(false);
       // Atualiza a lista de comentários após a criação de um novo comentário
      fetchPost();
      fetchComments();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };
  return (
    <div>
        <>
          <Header onClick={logout} buttonName='logout' />
          <PostsCard key={post.id} post={post} fetchPost={fetchPost} onClickCard={() => {}} />
          <div>
          <StyledTextArea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            isLoading={isloading}
            onPostClick={createComment}
            placeholder="Escreva seu comentário..."  
        />
          </div>
          <div>
            {comments.slice().reverse().map((comment) => (
              <CommentsCard key={comment.commentId} comment={comment} fetchComments={fetchComments} fetchPost={fetchPost}/>
            ))}
          </div>
        </>
    </div>
  
  );
};
