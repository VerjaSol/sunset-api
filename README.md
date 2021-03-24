# sunset-api
Heroku ei suostunut toimimaan tällä projektilla, tulee Internal Server Error viesti, vaikka paikallisesti sivut toimii.
https://sunset-api.herokuapp.com/

Tämä sovellus ottaa vastaan kaupungin nimen valikosta ja päivämäärän ja lähettää api-kyselyn näillä tiedoilla, sitten toisessa sivussa avautuu tuloksia.

Tässä projekstissa törmäsin haasteeseen, miten saada app.post ja request(url, { json: true }, (err, res, body) toimimaan synkronisesti. Kun app.post saa linkin käyttäjän syöttämistä tiedoista, request on jo ehtinyt tehdä api-kyselyn.  Välillä tulee sitten vääriä tietoja edellisestä api-kyselystä. Siihen löysin mahdollisen ratkaisun promise, async ja await- toiminnoilla, mutta en saanut sitä toimimaan requestin kanssa.
Jos siihen pystyy tarjoamaan ratkaisun, kokeilisin vielä mielelläni. Siihen minulla meni monta tuntia kyllä....
