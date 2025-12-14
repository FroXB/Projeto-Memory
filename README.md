Projeto Memory — Jogo da Memória (Web)

Implementação de um jogo da memória em HTML/CSS/JavaScript, com embaralhamento de cartas, controle de estado de jogo (cartas viradas, pares encontrados, bloqueio durante validação) e interface com feedback de progresso (acertos/tentativas) e tela de finalização.

1. Visão Geral

O projeto simula a mecânica clássica de “memory game”:

O jogador vira duas cartas por vez;

Se as cartas formam um par, elas permanecem abertas;

Se não formam par, elas são ocultadas novamente após um curto delay;

O jogo contabiliza tentativas e pares encontrados;

Ao completar todos os pares, exibe uma tela de vitória com desempenho.

O foco é exercitar:

manipulação de DOM,

controle de estado em JavaScript,

lógica de jogo consistente (bloqueios e validações),

layout responsivo com Grid.

2. Funcionalidades

Embaralhamento das cartas a cada partida (Fisher–Yates).

Controle de tentativas (cada par de cartas virado conta 1 tentativa).

Contagem de acertos (pares corretos).

Bloqueio de interação enquanto o par é validado (evita “spam click” e estados inválidos).

Detecção de fim de jogo e exibição de overlay com resultado.

Reinício de partida com reset de estado e novo embaralhamento.

3. Regras do Jogo

O deck contém 8 pares (16 cartas).

O jogador pode ter no máximo duas cartas reveladas por vez.

Se as cartas forem iguais (mesmo pairId), viram par permanente.

Se forem diferentes, retornam ao estado fechado após 700ms.

O jogo termina quando matchedPairs === totalPairs.

4. Tecnologias Utilizadas

HTML5 (estrutura)

CSS3 (layout e estilos)

CSS Grid para o tabuleiro

overlay com backdrop-filter no fim do jogo

JavaScript (Vanilla) (lógica e interação)

manipulação do DOM

controle de estado do jogo

embaralhamento e validação de pares

5. Estrutura do Projeto
Projeto-Memory/
│
├── assets/
│   ├── logo.svg
│   └── lines.svg
│
├── index.html
├── styles.css
└── scripts.js