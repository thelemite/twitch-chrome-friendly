const CLIENTID = 'eskb1rltcdwllydj806d0txcccsks2';

function getUsersByName(userNames, clientID) {
    var url = new URL('https://api.twitch.tv/kraken/users');
    url.searchParams.append("login", userNames);
    var prom =  fetch(url, {
        method: "GET",
        cache: "no-cache", 
        headers: {"Accept": "application/vnd.twitchtv.v5+json", 
            "Client-ID": clientID}
    }).then(response => response.json());
}

function getCurrentUser(oauthToken, clientID) {
    var url = new URL('https://api.twitch.tv/kraken/user');
    return fetch(url, {
        method: "GET", 
        cache: "no-cache", 
        headers: {"Accept": "application/vnd.twittv.v5+json", 
            "Client-ID": clientID, 
            "Authorization": "OAuth "+oauthToken}
    }).then(response => response.json());
}

function getUserFollows(authToken, clientID) {
    var url = new URL('https://api.twitch.tv/kraken/users/' + userID + '/follows/channels');
}