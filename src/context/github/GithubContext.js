
import { createContext, useReducer } from "react";
// uncomment if needed to test API call
//import { createContext, useReducer, useEffect } from "react";

import GithubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)


    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }

    // uncomment if needed to test API call
    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    return <GithubContext.Provider value={{ ...state, dispatch }} >
        {children}
    </GithubContext.Provider>
}

export default GithubContext
