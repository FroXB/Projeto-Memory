Projeto Memory – Jogo da Memória

Implementação de um jogo da memória utilizando tecnologias web básicas, com foco em lógica de jogo, manipulação do DOM e controle de estado em JavaScript.

1. Visão Geral

O Projeto Memory reproduz a mecânica clássica de jogos da memória, onde o jogador deve encontrar pares de cartas idênticas.
O sistema controla as cartas viradas, valida pares, contabiliza tentativas e identifica automaticamente o fim do jogo, exibindo o resultado final.

O objetivo do projeto é aplicar conceitos fundamentais de desenvolvimento web, especialmente no que diz respeito à lógica de interação e organização de código em JavaScript puro (Vanilla JS).

2. Funcionalidades

Embaralhamento aleatório das cartas a cada partida.

Controle de cartas reveladas e pares encontrados.

Contagem de tentativas realizadas pelo jogador.

Bloqueio de interação durante a verificação de pares.

Exibição de tela de finalização ao completar todos os pares.

Reinício do jogo com reset completo do estado.

3. Regras do Jogo

O jogo contém 8 pares de cartas (16 cartas no total).

O jogador pode revelar apenas duas cartas por vez.

Se as cartas reveladas forem iguais, elas permanecem abertas.

Caso contrário, elas retornam ao estado fechado após um pequeno intervalo.

Cada tentativa corresponde à verificação de um par.

O jogo termina quando todos os pares forem encontrados.

4. Tecnologias Utilizadas

HTML5 — Estrutura da aplicação.

CSS3 — Estilização, layout com Grid e overlay de finalização.

JavaScript (Vanilla) — Lógica do jogo, controle de estado e manipulação do DOM.

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