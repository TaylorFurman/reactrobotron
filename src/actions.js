export function updateScore (data){
    return{
        type: 'UPDATE_SCORE',
        data: data
    }
}

export function timerReset (data){
    return{
        type: 'TIMER_RESET',
        data: data
    }
}

export function playerCountUpdate (data){
    return{
        type: 'PLAYER_COUNT_UPDATE',
        data: data
    }
}

export function graphUpdate(data){
    return{
        type: 'GRAPH_UPDATE',
        data: data
    }
}

