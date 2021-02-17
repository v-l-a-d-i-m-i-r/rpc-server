import { createServer, Server } from 'http';

export default (dependencies: any): Server =>
  createServer((request, response) => {
    const content = {};

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(content), 'utf-8');
  });
