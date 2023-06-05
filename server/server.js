const express = require('express');
const path = require('path');

const app = express();

// Define a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, '../')));

// Define a rota para a página de índice
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

const os = require('os');
const port = 3000;


app.listen(port, '0.0.0.0', () => {
  const networkInterfaces = os.networkInterfaces();
  const interfaceName = 'Ethernet'; // Substitua pelo nome da sua interface de rede
  const networkInterface = networkInterfaces[interfaceName];

  let ipAddress = '';
  if (networkInterface) {
    const ipv4Addresses = networkInterface.filter(
      (details) => details.family === 'IPv4'
    );

    if (ipv4Addresses.length > 0) {
      ipAddress = ipv4Addresses[0].address;
    }
  }

  if (ipAddress) {
    console.log(`Servidor em execução em http://${ipAddress}:${port}`);
  } else {
    console.log(`Endereço IP não encontrado para a interface ${interfaceName}`);
  }
});
