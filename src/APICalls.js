//TODO: make this into a class so that store can be connected
// import React, { Component } from 'react'
// export default class Call {
    
    
//     render() {
//         return (
//             <div/>
//         )
//     }
// }

export const hideMove = (payload, callback) => {
    persistCoords(payload, callback)
}

export const destroyPlayer = (player_id) => {
    fetch(`http://localhost:3000/api/v1/players/${player_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": localStorage.getItem("token")
            },
    })
}

export const postNewPlay = (payload,callback) => {
    fetch(`http://localhost:3000/api/v1/plays/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data => callback(data))
}

export const persistCoords = (payload, callback) => {
    callback = callback || console.log("Coordinates Persisted")
    fetch(`http://localhost:3000/api/v1/players/${payload.player.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
    })
    .then(callback)
}

export const createNewMove = (player, callback) => {
    callback = callback || console.log("New Move Created")
    fetch(`http://localhost:3000/api/v1/players/${player.id}/moves/`, {
        method: "POST",
        headers: {
        "Content-Type" : "application/json"
        },
        body: JSON.stringify({ player_id: player.id, startX: player.x, startY:player.y, endX: player.x, endY: player.y, duration: 5})
    })
    .then(callback)
}