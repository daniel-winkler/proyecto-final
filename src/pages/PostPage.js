import React from 'react'
import { Route } from 'react-router';
import Post from '../components/post/Post'
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
            : alert("You have to be logged in to post a shop!")
    }} />
    )
}
