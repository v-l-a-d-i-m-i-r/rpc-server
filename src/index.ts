import server from './server';
import config from './config/config';

const HTTP_PORT = config.get('HTTP_PORT');

const dependencies = {};

server(dependencies).listen(80, '0.0.0.0', () => {
  console.log(`Server is running on ${HTTP_PORT}`);
});
