# Projeto resília: FaciListas (Case - Final)
 
📋 O projeto consiste em montar um MVP para a empresa testar o seu novo app (MVP é a
sigla em inglês para Minimum Viable Product – ou Produto Mínimo Viável).
Para isso construímos um app (front e back-end) desenvolvendo um site para apresentar e que vai implementar as
funcionalidades básicas do CRUD.

## Passos da construção da API 📍

### 1. Inicialização
        
        npm init -y
         
        npm i express
        
        npm cors
        
        npm sqlite3
        
        npm i nodemon
        
### 2. Criando pastas dos arquivos  

• Criar a pasta src, que contém todos os arquivos que fazem o backend rodar

• Criar o arquivo app.js com as configurações da API

• Criar o arquivo server.js que iniciará o servidor

• Criar a pasta chamada infra com os arquivos db.js e contents.js que vão ser responsáveis por configurar a criação das tabelas dentro do SQLite

• Criar pasta chamada controllers e adicionar um arquivo contentsController.js, que será responsável por gerenciar as rotas e configurar o CRUD.

• Criar uma pasta chamada DAO com um arquivo contentsDAO.js que será responsável por realizar as ações dos métodos dentro do banco do SQLite.  

### 3. Fazendo rodar  
        
        npm start
         
### 4. Adicionando informações no SQLite  

• Utilizando a extensão "Thunder Cliente" do VSCode foi possível adicionar novos atributos através do método POST.
         
