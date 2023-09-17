import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LoginPage,SignupPage, PostsPage, CommentsPage, UserAgreementPage } from '../pages'
export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element = {<LoginPage/>}/>
                <Route path='/signup' element = {<SignupPage/>}/>
                <Route path='/posts' element = {<PostsPage/>}/>
                <Route path='posts/:id' element = {<CommentsPage/>}/>
                <Route path='/agreement' element = {<UserAgreementPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}