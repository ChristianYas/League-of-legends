const Request = (name) => {
 const API_KEY = 'RGAPI-14432763-3716-492e-b336-450e0de78976'

 let champ = 'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json'

 if(name){
    champ = `https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion/${name}.json`
 }

 return fetch(champ)
 .then(res => res.ok ? res.json() : Promise.reject(res))
 .then(data => data)
 .catch(err => err)
};

export default Request;
