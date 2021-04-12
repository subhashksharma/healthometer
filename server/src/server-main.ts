import express from 'express';
import cors from 'cors';
import * as http from 'http';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { Message } from './model';
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

    const route = new RouteController(this.app);
  }

  private createServer(): void {
    this.server = http.createServer(this.app);
  }

  private config(): void {
    this.app?.set('trust proxy', true);
    this.app?.use(json());
    this.app?.use(
      cookieSession({
        signed: false,
        secure: false, //process.env.NODE_ENV !== "test",
      })
    );
    this.port = process.env.PORT || ServerMain.PORT;
  }

  private sockets(): void {
    this.io = require('socket.io')?.(this.server, { origins: '*:*' });
  }

  private listen(): void {
    this.server?.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io?.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port);
      socket.on('message', (m: Message) => {
        console.log('[server](message): %s', JSON.stringify(m));
        this.io?.emit('message', m);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  public getApp(): express.Application {
    return this.app!;
  }
}
