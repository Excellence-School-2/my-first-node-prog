//Per fare inmport si usano sempre le const e importo la libreria installata express
const express = require('express')
//Per avviar express
const app = express()

//Variabili
const myPlayers = []
myPlayers.push({"id": 1, "name": "Carlo", "surname": "Mantovani"})
myPlayers.push({"id": 2, "name": "Fede", "surname": "jsjsjs"})
myPlayers.push({"id": 3, "name": "Fana", "surname": "Donaro"})
myPlayers.push({"id": 4, "name": "Giovanni", "surname": "farro"})
myPlayers.push({"id": 5, "name": "Martino", "surname": "finissi"})
//Oppure scrivo anche cosi
myPlayers[0].age=29

//Stiamo dicedo di usare un driver che mi prende il body di quello che riceve
//Il crpo delle richieste le trasforma in json
app.use(express.json())
//COsi inserisco html
app.use(express.static('public'))
/*facciamo un app web che ci espone delle API*/
//Con "/" sono collegata a localhost 
//(req, res) oggetto richiesta  e risposta
app.get("/", (req, res)=> {
    //Passo del testo con send
//res.send("Ciao Mondo!!")
//Qui sto dando l errore personalizzato 
res.status(300).send("Ciao Mondo!!")})

app.get("/players",(req, res)=> {
    //Qui ci facciamo dare dei dati che creo prima
    res.status(200).json(myPlayers)
})

//Implemento il get per avere una risorsa specifica
app.get("/players/:id",(req, res)=> {
    //Troviamo il giocatore con quel id e poi restituirlo
    //All id si accede così:
    console.log(req)
    const player = myPlayers[req.params.id-1]
    res.json(player)
})

//Metodo POST
app.post("/players",(req, res)=> {
    console.log(req.body)
    //Fa il push nell array
    myPlayers.push(req.body)
    res.status(200).send()

})

//mettiamo in ascolto l applicazione sulla porta 3000
app.listen(3001)