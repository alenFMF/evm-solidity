# Vzorčna koda za predavanje na sredinem seminarju

Najprej je potrebno namestiti [Node.js](https://nodejs.org/en/download/)
Repozitorij kloniramo in zaženemo `npm install`

# Inicializacija novega projekta s Hardhat

Projekt je inicializiran, prirejen za delo s Typescriptom.
Za inicializacijo projekta na novo glej: https://hardhat.org/getting-started/

# Primeri

## Metamask

**Metamask** si namestimo preko povezave (https://metamask.io)
Najbolje je **Metamask** namestiti v brskalnik **Chrome**.
To je kripto denarnica, ki omogoča delo z računi v različnih omrežjih. Primarno hrani privatne ključe računov.
Omogoča kreiranje privatnih ključev in računov, priklop na različna omrežja in izvajanje transakcij iz računov.
Omogoča tudi integracijo denarnice s kodo v Javascriptu na spletni strani.

Primer priklopa:
- V terminalu zaženemo `npx hardhat node`
- Testna omrežja tečejo na portu 8545 (izberemo omrežje Localhost 8545)
- Iz prvega primarnega ključa pri izpisu v terminalu (hardhat node) ustvarimo račun in na njemu imamo 10000 ETH

## Zagon testa

- Zaženemo `npx hardhat test`
- Požene se datoteka v mapi `test`
- Test se uspešno izvede

## Ročni zagon ukazov

Iz terminala zaženemo ukaz `npx hardhat console`
Odpre se ukazna vrstica, kjer lahko zaganjamo kodo v Javascriptu.
Ročno izvedemo ukaze iz testa in preverimo delovanje

## Pogodba ERC20

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

# Reference

https://medium.com/swlh/getting-deep-into-evm-how-ethereum-works-backstage-ab6ad9c0d0bf
https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html#sendtransaction
https://docs.soliditylang.org/en/v0.8.4/introduction-to-smart-contracts.html#blockchain-basics
