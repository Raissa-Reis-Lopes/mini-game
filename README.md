Exercício proposto na aula de javascript da Alpha EdTech com o tema *"Class"*


Descrição da atividade:

Obs: Não foi solicitado a criação de uma apresentação tela, eu apenas complementei a atividade para começar a pensar em algumas estratégias para desenvolver um game no futuro

Crie uma classe que represente um Avatar num jogo de plataforma, considerando os seguintes critérios: 

- a classe deve ser iniciada com atributos que representem as posições x e y do avatar no jogo, e com um atributo que represente uma bolsa de moedas 
- os métodos get devem retornar as coordenadas x e y, e a quantidade de moedas na bolsa do avatar

- quatro métodos de movimentação devem ser criados:
  
forward: indicando que o avatar se movimente para frente
back: indicando que o avatar se movimente para trás 
right: indicando que o avatar se movimente para a direita
left: indicando que o avatar de movimente para a esquerda

- as coordenadas do avatar não podem ser menores do zero 
- um método de adição de moedas à bolsa deve ser adicionado, simulando que o avatar encontrou uma moeda durante sua movimentação pelo jogo
- um atributo que represente pontos de vida deve ser adicionado, com valor inicial igual a 10
- um atributo que represente pontos de dano deve ser adicionado, com valor inicial igual a 1
- um método chamado attack, que representará um ataque do avatar em seus adversários deve ser adicionado, sendo retornado pelo mesmo os pontos de dano especificados no atributo de pontos de danos
- um método que represente um ataque recebido por um adversário, recebendo como parâmetro um valor de dano, que deve ser descontado dos pontos de vida do Avatar deve ser adicionado
- caso os pontos de vida do avatar sejam zerados, todos os métodos da classe devem ser bloqueados
