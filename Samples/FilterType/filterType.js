const players=['virat','sachin','yuvi','sehwag','rohit','gill']

divContainerRef= document.querySelector('#listContainer')

function preparePlayerList() {
    let listOfPlayers=players.map(function(val){
        return `<li>${val}</li>`   
    })
    return listOfPlayers.join("")
}

function handleChange(eve) {
    let input= eve.target.value
    let filteredList=players.filter(function () {
        players.includes(input)
        console.log(filteredList);
        return filteredList
    })
}


function prepareUnorderdList(data) {
    let playerData = `<ul>${preparePlayerList(data)}</ul>`
    divContainerRef.innerHTML=playerData
}
prepareUnorderdList(players)