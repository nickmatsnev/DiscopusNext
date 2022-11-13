import Router from 'next/router'
import Cookies from 'universal-cookie'
import nextCookie from 'next-cookies'
import axios from 'axios'
const cookies = new Cookies() // ???

export async function handleAuth(ctx:any){
    const {token} = nextCookie(ctx)
    const url = 'http://localhost:4000/api/users/validate'
    const redirectOnError = () => {
        if( typeof window !== 'undefined'){
            Router.push('/index')
        }else{
            ctx.res.writeHead(302, {Location:'/index'})
            ctx.res.end()
        }
    }
    try {
        if (!token) {
          return redirectOnError()
        }
        const response = await axios.get(url, {
            headers: {Authorization : token},
          })
    
        if (!response.data.user) {
          return redirectOnError()
        }
      } catch (error) {
        /* eslint-disable no-console */
        console.log('Error: ', error)
        // Implementation or Network error
        return redirectOnError()
      }
      return {}
    }

export const register = async (token : string | any) => {
  // Cookie will expire after 24h
  cookies.set('token', token, { maxAge: 60 * 60 * 24 })
}
// we dont need it
export const logout = () => {
  cookies.remove('token')
}