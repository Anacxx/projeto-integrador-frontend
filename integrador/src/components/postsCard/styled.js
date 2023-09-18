import styled from 'styled-components'
export const PostContainer = styled.div`
    background-color: #f5f5f5;
    width: 90%;
    border-radius: 15px;
    padding: 10px;
    margin: 15px auto;
    max-width: 500px;
    border: 1px solid #eeeeee;
`;
export const StyledContent = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.3rem;
    max-width: 100%;
    word-wrap: break-word;
    padding: 10px 0px 10px 0px;

`;
export const LikeContainer = styled.span`
    border: 1px solid #DDDDDD;
    width: 90%;
    border-radius: 18px;
    padding: 7px;
    margin-right: 10px;
    cursor: pointer;
    button {
        border:none;
        margin:10px;
    }
    

`;
export const StyledP = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    color:#a4a4a4;
    font-size: 0.8rem;
`
export const StyledSpan = styled.span`
    font-family: sans-serif;
    padding: 15px;
    font-size: 0.9rem;
    font-weight: bold;
    color:#6F6F6F;
`
export const CommentsButton = styled.button`
   border: 1px solid #DDDDDD;
   font-weight: bold;
   font-size:0.9rem;
    border-radius: 18px;
    padding: 6px;
    cursor: pointer;
    color:#6F6F6F;
`