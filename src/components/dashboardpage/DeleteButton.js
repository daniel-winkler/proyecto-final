import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { DELETE_URL } from '../../config';

export default function DeleteButton() {

    const { getToken } = useAuthContext();

    const options = {
        method: "PUT",
        headers: {"Authorization": `Bearer ${getToken()}`}
    }

    function handleDelete(){
        if(window.confirm("Are you sure you want to delete your shop?")){
            fetch(DELETE_URL, options)
            .then(r => r.json())
            .then(data => console.log(data))
        }
    }
     

    return (
        <div className="delete" onClick={()=>handleDelete()}>
            <button>Delete</button>
        </div>
    )
}
