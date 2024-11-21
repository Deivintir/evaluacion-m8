const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para las páginas
app.get('/inicio', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/helloworld', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'helloworld.html'))
})

// Iniciar el servidor
app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
})