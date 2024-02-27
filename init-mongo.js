// init-mongo.js
db.createUser({
  user: "Ricardo",
  pwd: "123456",
  roles: [
    { role: "readWrite", db: "Tagarelas" },
    // Adicione outros papéis conforme necessário
  ]
})

  // Adicione mais comandos conforme necessário
  
  
