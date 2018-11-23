import application from './app';
import http from 'http';

const DEFAULT_PORT = 3000;

function startServer(port: number): void {
    http.createServer(application.callback()).listen(port);
    console.log(`Server Started on port ${port}`);
}

startServer(parseInt(process.env.PORT, 10) || DEFAULT_PORT);
