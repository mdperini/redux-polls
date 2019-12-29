import { S } from "xmlchars/xml/1.0/ed5";

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export const setAuthedUser = (id) => {
    return {
        type: SET_AUTHED_USER,
        id
    }    
}
