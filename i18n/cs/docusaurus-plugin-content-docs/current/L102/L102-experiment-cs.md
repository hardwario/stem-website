---
slug: hardwario-tower-iot-kit-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Experiment 1 - Stavíme si sestavy TOWER

**Časová dotace**: 5 min. 

### Popis experimentu

Ze stavebnice HARDWARIO si několik týmů studentů postaví vzorové sestavy. Jejich přehled je dostupný v [online obchodě](https://www.hardwario.store/cz/tower).

## Experiment 2 - Tvoříme flow v aplikaci Playground

**Časová dotace**: 5 min. 

### Popis experimentu

V aplikaci Playground si vytvoříme vzrový flow zobrazující váhu studentů.

#### Postup experimentu

1. Stáhněte si a nainstalujete na vašem počítači aplikaci Playground
2. V záložce Functions si vytvořte nové flow:
    a. vložte mqtt in (dvojklikem na bublinu vyplňte topic cesko/mesto/jmeno/vaha + potvrďte Done)
    b. vložte dashboard text (dvojklikem na bublinu změňte Label na váha + potvrďte Done)
    c. propojte bubliny provázkem
    d. potvrďte Deploy
3. V záložce Messages se přihlaste k odběru zpráv cesko/# (pozor - nejdříve smažte křížkem bridge/#)
4. Pošlete zprávu s vaším topikem a payloadem - váhou v kg
5. Přejděte na záložku Dashboard a měli byste vidět vaší váhu

<div class="container">
  <div class="row">
    <Image img={require('./tower-experiment-1.avif')}/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./tower-experiment-2.webp')}/>
  </div>
</div>