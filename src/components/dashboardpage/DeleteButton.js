import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { DELETE_URL } from '../../config';

export default function DeleteButton() {

    const { getToken } = useAuthContext();

    const options = {
        method: "PUT", // utilizamos un 'soft delete'
        headers: {"Authorization": `Bearer ${getToken()}`}
    }

    async function handleDelete(){
        if(window.confirm("Are you sure you want to delete your shop?")){

            const response = await fetch(DELETE_URL, options)
            // eslint-disable-next-line
            const data = await response.json()
        
            if(response.status === 404){
                alert("Shop not found!")
            } else if (response.status === 202){
                alert("Shop successfully removed!")
            }
        }
    }
     
    return (
        <div className="delete" onClick={()=>handleDelete()}>
            <button>Delete your shop</button>
        </div>
    )
}
