function celsiusFahrenheit(){

    // 1. Variável para a temperatura em Celsius
    const celsius = 35.65;
    
    // 2. Converte Celsius para Fahrenheit usando a fórmula
    const fahrenheit = celsius * (9 / 5) + 32;
    
    // 3. Verifica se a parte inteira de Fahrenheit é par ou ímpar usando o operador ternário
    const arredondado = Math.round(fahrenheit); // Opcional: arredonda para  baixo e garantir número inteiro
    const parOuImpar = (arredondado % 2 === 0) ? "Par" : "Ímpar";
    
    // 4. Exibe os resultados
    console.log(`Temperatura em Celsius: ${celsius}°C`);
    console.log(`Temperatura em Fahrenheit: ${fahrenheit}°F`);
    console.log(`Temperatura em Fahrenheit Arredondado: ${arredondado}°F`);
    console.log(`O valor de Fahrenheit é: ${parOuImpar}`);

    /*
    1. Constantes Matemáticas O Math possui propriedades fixas que retornam constantes muito usadas em engenharia e ciência:Math.PI: Retorna o valor do \(\pi \) (Pi), aproximadamente \(3.14159\).Math.E: Retorna a base dos logaritmos naturais (número de Euler), aproximadamente \(2.718\).Math.SQRT2: Retorna a raiz quadrada de 2, aproximadamente \(1.414\).
    
    2. Funções de Arredondamento Ideais para transformar números decimais em inteiros:Math.round(x): Arredonda um número para o inteiro mais próximo (para cima se a parte decimal for \(\ge 0.5\), para baixo se for \(<0.5\)).Math.floor(x): Arredonda o número sempre para baixo (para o menor inteiro mais próximo).Math.ceil(x): Arredonda o número sempre para cima (para o maior inteiro mais próximo).
    
    3. Operações Numéricas e Aritméticas Math.abs(x): Retorna o valor absoluto (sem o sinal negativo) de um número. Exemplo: Math.abs(-5) retorna 5.Math.max(n1, n2, ...): Analisa uma lista de números e retorna o maior deles.Math.min(n1, n2, ...): Analisa uma lista de números e retorna o menor deles.Math.pow(base, expoente): Calcula a potência de um número. Exemplo: Math.pow(2, 3) retorna \(8\).Math.sqrt(x): Retorna a raiz quadrada positiva de um número.
    
    4. Geração de Aleatoriedade Math.random(): Retorna um número pseudo-aleatório no intervalo entre \(0\) (inclusivo) e \(1\) (exclusivo). É muito utilizado para sortear itens, criar jogos e embaralhar dados.
    
    5. Funções Trigonométricas Úteis para computação gráfica, física e desenvolvimento de jogos:Math.sin(x): Retorna o seno de \(x\) (radianos).Math.cos(x): Retorna o cosseno de \(x\) (radianos).Math.tan(x): Retorna a tangente de \(x\) (radianos).
    */
}
celsiusFahrenheit()