import React from 'react';
import axios from 'axios'
import Header from "../../components/header"
import { BASE_URL, TOKEN_NAME } from "../../constants/url"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import { useContext, useEffect, useState } from "react"
import { PostsCard, StyledTextArea } from "../../components"
import { GlobalContext } from '../../contexts/GlobalContext';
export const PostsPage = () => {
    const navigate = useNavigate()
    const globalContext = useContext(GlobalContext);
    const { posts, fetchPosts } = globalContext;
    const [isLoading, setIsloading] = useState(false)
    const [newPost, setNewPost] = useState("")
    const logout = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }
    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if(!token){
            goToLoginPage(navigate)
        } else {
            fetchPosts()
        }
    },[])
    const createPost = async (event) => {
        event.preventDefault()
        setIsloading(true)
        try {
            const token = window.localStorage.getItem(TOKEN_NAME)
            const config = {
                headers: {
                    Authorization: token
                }
            }
            const body = {
                content: newPost
            }
            if (!newPost.trim()) {
                window.alert("O post não pode estar vazio.");
                setIsloading(false);
                return;
              }
          
              if (newPost.length > 200) {
                window.alert("O post não pode exceder 200 caracteres.");
                setIsloading(false);
                return;
              }
            await axios.post(BASE_URL + "/posts",body,config)
            setNewPost("")
            setIsloading(false)
            fetchPosts()
        } catch (error) {
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    }

    return (
        <>
        <Header onClick ={logout} buttonName="Logout"/>
        <StyledTextArea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            isLoading={isLoading}
            onPostClick={createPost}
            placeholder="Escreva seu post..."  
        />
        <section>
            {posts.slice().reverse().map((post) => {
               return <PostsCard key = {post.id} post = {post} onCardClick={() => {
                // Navegue para a página de comentários com o post selecionado
                navigate(`/posts/${post.id}`);
              }}/>
            })
            }
            
        </section>
        </>

    )
}