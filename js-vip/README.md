# JS-VIP

## TRACCIA

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.

Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
const vips = [
'Dwayne Johnson',
'Brad Pitt',
'Johnny Depp',
'Lady Gaga',
'Cristiano Ronaldo',
'Georgina Rodriguez',
'Chiara Ferragni',
'Fedez',
'George Clooney',
'Amal Clooney',
'Leonardo di Caprio',
];

La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:

- nome del tavolo,
- nome dell'ospite,
- posto occupato.

Generiamo e stampiamo in console l'array di oggetti per i segnaposto.

## RISOLUZIONE

1. Per ogni persona della lista devo:
   - Creare l'oggetto persona contenente, nome invitato, nome del tavolo e il numero del posto a sedere
   - inserirlo in un array contenente tutti gli invitati
