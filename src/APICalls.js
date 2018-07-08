//TODO: make this into a class so that store can be connected
// import React, { Component } from 'react'
// export default class Call {
    
    
//     render() {
//         return (
//             <div/>
//         )
//     }
// }

// export const persistPlayerAndEndCoords = ({startX, startY, endX, endY}, player_id, move) => {
//     fetch(`http://localhost:3000/api/v1/players/${player_id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({ x:x, y:y })
//     })
//     .then(()=> {
//         fetch(`http://localhost:3000/api/v1/moves/${move.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({ startX: x, startY: y ,endX:move.endX, endY:move.endY })
//         })
//     })
// }

export const persistStartCoords = (payload, callback) => {
    fetch(`http://localhost:3000/api/v1/players/${payload.player.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
    })
    .then(callback)
}

export const persistEndCoords = ({x, y}, move, callback) => {
    fetch(`http://localhost:3000/api/v1/moves/${move.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ startX: x, startY: y ,endX:move.endX, endY:move.endY })
    })
    .then(callback)
}

export const createNewMove = (player, callback) => {
    fetch(`http://localhost:3000/api/v1/players/${player.id}/moves/`, {
        method: "POST",
        headers: {
        "Content-Type" : "application/json"
        },
        body: JSON.stringify({ player_id: player.id, startX: player.x, startY:player.y, endX: player.x, endY: player.y - 40, duration: 5})
    })
    .then(callback)
}