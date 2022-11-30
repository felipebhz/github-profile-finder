
import { createContext, useReducer } from "react";
// uncomment if needed to test API call
//import { createContext, useReducer, useEffect } from "react";

import GithubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

// get initial users - testing purposes
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                //Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        })

        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }

    const clearUsersResults = () => {
        dispatch({type: 'CLEAR_USERS_RESULTS'})
    }

// uncomment if needed to test API call
    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    return <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers, clearUsersResults }} >
        {children}
    </GithubContext.Provider>
}

export default GithubContext
