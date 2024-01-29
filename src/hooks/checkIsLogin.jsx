
export const checkIsLogin = () => {

    const token = localStorage.getItem("token")        

    return token === null ? false : true
}
