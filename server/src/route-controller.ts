import { Application } from 'express';
import { healthDataRoutes } from './routes/HealthDataRoutes';
import { StaticRoutes } from './routes/StaticFileRoutes';
import { staticDataRoutes } from './routes/StaticDataRoutes';
class RouteController {
  constructor(private app: Application) {
    this.apply();
  }

  private apply(): void {
    this.app.use('/api/', healthDataRoutes);
    this.app.use('/static/', staticDataRoutes);
    const a = new StaticRoutes(this.app);
  }
}

export { RouteController };
