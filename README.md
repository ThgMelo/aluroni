# Curso Alura | Criando e limpando o projeto

## ESLing
* Instalar extensão ESLint no VSCode
* [Documentação](https://www.npmjs.com/package/eslint)
* Para Iniciar configurações: `npm init @eslint/config`
* Opção: **To check syntax, find problems, and enforce code style**
* How would you like to use ESLint? · **style**
* Which framework does your project use? · **react**
* Where does your code run? · **browser**
* How would you like to define a style for your project? **Answer questions about your style**
* What format do you want your config file to be in? **JSON**
* What style of indentation do you use? **spaces**
* What quotes do you use for strings? **single**
* What line endings do you use? **unix**
* Do you require semicolons? **No / Yes**
* Would you like to install them now? **Yes**
*  Which package manager do you want to use? **npm**
*  `npx eslint ./src --fix`

Obs: `"react/react-in-jsx-scope": "off",` configurar a regra