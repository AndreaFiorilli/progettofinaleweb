Configurazione del progetto

Avvio del Backend:

Per prima cosa, apri il terminale nella cartella progettofinaleweb ed entra al suo interno utilizzando il comando:

    cd progettofinaleweb

    Installa il pacchetto Flask CORS con il comando:

    pip install flask_cors

Poi, avvia il server Flask eseguendo:

    python3 app.py

Avvio del Frontend:

A questo punto, apri un altro terminale nella stessa cartella progettofinaleweb e accedi di nuovo con:

    cd progettofinaleweb

Scarica tutte le dipendenze necessarie per il frontend utilizzando:

    npm install

Per avviare il progetto in modalità sviluppo, esegui:

    npm run dev

Una volta avviato, cliccando sul link fornito nel terminale, sarai indirizzato alla pagina web del progetto.


Il Front-end presenta una schermata con un titolo e un pulsante. Quando quest'ultimo viene cliccato, attiva le query per recuperare i dati dal backend (mostra gli username e le email).