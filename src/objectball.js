function gameObject() {
    const teams = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamdunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamdunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamdunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamdunks": 5
                },
                "Alan Anderson": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamdunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamdunks": 12
                },
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamdunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamdunks": 10
                },
                "DeSagna Diop" : {
                    "number" : 2,
                    "shoe" : 14,
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamdunks" : 5
                },
                "Ben Gordan" : {
                    "number" : 8,
                    "shoe" : 15,
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamdunks" : 0
                }
            }
        }
    }

    return teams
}

//help functions

function homeTeamName() {
    return gameObject().home.teamName
}

function awayTeamName() {
    return gameObject().away.teamName
}

function findPlayers() {
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
    return Object.assign({}, homePlayers, awayPlayers)
    // Object.assign is putting the homeplayers/awayplayers into an object together 
}

function findPlayer(playerName) {
   const players = findPlayers()
   return players[playerName] 
}

function getTeamByName(teamName) {
    return gameObject().home.teamName === teamName
    ? gameObject().home
    : gameObject().away
}

function getPlayerStatsArray() {
    return Object.values(findPlayers())
}

//functions
function numPointsScored(playerName) {
    return findPlayer(playerName).points
}

function shoeSize(playerName) {
    return findPlayer(playerName).shoe
}

function teamColors(teamName) {
    return getTeamByName(teamName).colors
}

function teamNames() {
    names = []
    names.push(homeTeamName(), awayTeamName())
    return names
}

function getTeamsPlayers(teamName) {
    return getTeamByName(teamName).players
}
 
function playerNumbers(teamName) {
    return Object.values(findPlayers(teamName)).map(player => player.number)
}

function playerStats(playerName) {
   return findPlayer(playerName)
}

function bigShoeRebounds() {
    return getPlayerStatsArray().reduce((biggestPlayer, currentPlayer) => {
        if (currentPlayer.shoe > biggestPlayer.shoe) {
            return currentPlayer
        } else {
            return biggestPlayer
        }
    }).rebounds
}

console.log(gameObject())
console.log(homeTeamName())
console.log(awayTeamName())
console.log(findPlayers())
console.log(findPlayer("Alan Anderson"))
console.log(getTeamsPlayers("Charolotte Hornets"))
console.log(playerNumbers("Charolotte Hornets"))
console.log(playerShoe("Charlotte Hornets"))
console.log(bigShoeRebounds())
