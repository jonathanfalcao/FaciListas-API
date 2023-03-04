 /*
  Esse arquivo deve ser executado apenas uma vez para que a tabela do banco seja criada
  */
  import db from "./db.js";

  //==== Conteúdos
  const CONTENTS_SCHEMA = `
  CREATE TABLE IF NOT EXISTS "conteudos" (
      "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
      "TITULO" varchar(64),
      "DESCRICAO" varchar(64)
    );`;

  function createTableContents() {
      db.run(CONTENTS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de conteúdos");
      });
  }

  db.serialize( ()=> {
      createTableContents();
  });