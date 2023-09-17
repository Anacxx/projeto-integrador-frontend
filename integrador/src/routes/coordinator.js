
export const goToSignupPage = ( navigator ) => {
    navigator('/signup')
}
export const goToLoginPage = ( navigator ) => {
    navigator('/login')
}
export const goToPostsPage = ( navigator ) => {
    navigator('/posts')
}
export const goToCommentsPage = ( navigator ) => {
    navigator( '/posts/:id' )
}
export const goToUserAgreementPage = ( navigator ) => {
    navigator( '/agreement' )
}
