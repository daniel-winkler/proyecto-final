import React from 'react'
import { Route, Redirect } from 'react-router';
import Post from '../components/postpage/Post'
import { useAuthContext } from '../contexts/AuthContext'

export default function PostPage() {

    const { isAuthenticated } = useAuthContext();

    return (
    <Route render={() => {
        return isAuthenticated 
            ?
            <div>
                <Post />
            </div>
            : <Redirect exact to="/login" />
    }} />
    )
}
