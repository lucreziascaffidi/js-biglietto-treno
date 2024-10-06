
# Biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20 % per i minorenni
- va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 




## Author

- [@lucreziascaffidi](https://www.github.com/lucreziascaffidi)


## Svolgimento logico

1) Inizializzo la variabile relativa ai KM che l'utente deve percorrere per il viaggio e le assegno il numero che l'utente inserisce nel prompt in cui appare la domanda "Quanti km devi percorrere?"

2) Inizializzo la variabile relativa all'età dell'utente che deve fare il viaggio e le assegno il numero che l'utente inserisce nel prompt in cui appare la domanda "Quanti anni hai?"

3) Inizializzo la variabile relativa al prezzo del biglietto per 1 Km e le assegno il numero 0.21 considerando che il costo è di 0.21€ per 1 km. 

4) Inizializzo la variabile relativa al costo dell'interno biglietto moltiplicando 0.21 per i KM indicati dall'utente nella prima domanda e associati alla variabile del punto 1.

5) Inizializzo la variabile dell'età inferiore ai 18 anni

6) Inizializzo la variabile del costo del bigletto scontato del 20% per l'età inferiore ai 18 anni. 

7) Inizializzo la variabile dell'età maggiore di 65 anni

8) Inizializzo la variabile del costo del bigletto scontato del 40% per l'età maggiore di 65 anni. 

9) Istruzioni condizionali: 

- se l'età è inferiore ai 18 anni allora il costo del biglietto è scontato del 20% quindi faccio apparire questo prezzo

- altrimenti se l'età è maggiore di 65 anni il costo del biglietto è scontato del 40% e faccio apparire questo prezzo

- altrimenti l'età è sicuramente tra i 18 e i 65 anni quindi il costo del biglietto non è scontato e faccio apparire il prezzo senza sconti. 