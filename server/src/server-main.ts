import express from 'express';
import cors from 'cors';
import * as http from 'http';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import mongoStart from './databaseutils/mongoConnect';

//Custom import
import { RouteController } from './route-controller';

export class ServerMain {
  public static readonly PORT: number = 8080;
  private app?: express.Application;
  private server?: http.Server;
  private io?: SocketIO.Server;
  private port?: string | number;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
    this.app.use(cors());
    this.app?.set('trust proxy', true);
    this.app?.use(json());
    this.app?.use(
      cookieSession({
        signed: false,
        secure: false, //process.env.NODE_ENV !== "test",
      })
    );
    const route = new RouteController(this.app);
  }

  private createServer(): void {
    this.server = http.createServer(this.app);
  }

  private config(): void {
    this.port = process.env.PORT || ServerMain.PORT;
    mongoStart(
      'mongodb+srv://subhash:subhash@shopping-btf66.gcp.mongodb.net/authservice'
    );
  }

  private sockets(): void {
    this.io = require('socket.io')?.(this.server, { origins: '*:*' });
  }

  private listen(): void {
    this.server?.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io?.on('connect', (socket: SocketIO.Socket) => {
      console.log('Connected client on port %s.', this.port);
      console.log(
        'Print second time ::Connected client on port %s.',
        this.port
      );
      // socket.on('message', (m: Message) => {
      //   console.log('[server](message): %s', JSON.stringify(m));
      //   this.io?.emit('message', m);
      // });

      setInterval(function () {
        let data = Math.floor(Math.random() * 100 + 1);
        console.log('randdom  generator ' + data);
        socket.emit('message', { name: 'Steve', age: 56, id: data });
      }, 3000);

      socket.on('forceDisconnect', () => {
        console.log('Client disconnecting');
        socket.disconnect();
        console.log('Client disconnected');
      });
    });
  }

  public getApp(): express.Application {
    return this.app!;
  }
}
