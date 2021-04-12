import path from 'path';
import express from 'express';
import { Application } from 'express';

export class StaticRoutes {
  private DIST_DIR = path.join(__dirname, '../../public');

  constructor(private app: Application) {
    this.apply();
  }

  private apply(): void {
    this.app.use(express.static(this.DIST_DIR));
    this.app.get('*', function (req, res) {
      console.log(' I ma here ');
      res.sendFile(
        path.join(path.join(__dirname, '../../public'), 'index.html')
      );
    });
  }
}
