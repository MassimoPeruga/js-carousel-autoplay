# Carosello Automatico

Viene aggiunta la funzionalità di autoplay: dopo  3 secondi l’immagine attiva passa alla successiva. 

1. Viene creata una nuova funzione per l'autoplay,
2. Viene aggiunta una variabile per tracciare lo stato dell'autoplay,
3. Viene usato setInterval per eseguire una funzione ad intervalli regolari, all'interno di questa funzione viene simulato il click del pulsante "next".
4. Viene chiamata la funzione startAutoplay per avviare l'autoplay quando la pagina viene caricata.

## Bonus 

Aggiunta dei bottoni di start / stop.

1. Viene creata una nuova funzione stopAutoplay che usa clearInterval per fermare l'autoplay,
2. Vengono dichiarate due variabili che selezionano i bottoni nel DOM, alle quali viene associato un eventListener:
    - Il bottone start richiama la funzione startAutoplay per dare il via al setInterval,
    - Il bottone stop richiama la funzione stopAutoplay per fermare setInterval tramite clearInterval.