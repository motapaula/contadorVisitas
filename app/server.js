const express = require('express');
const redis = require('redis');

const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

client.on('error', (err) => console.error('Redis Client Error', err));

const app = express();

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    if (err) return res.status(500).send('Erro ao conectar ao Redis');
    
    visits = visits ? parseInt(visits) : 0;
    res.send(`Número de visitas: ${visits}`);
    
    client.set('visits', visits + 1);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
