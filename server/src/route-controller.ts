import { Application } from 'express';
import { healthDataRoutes } from './routes/HealthDataRoutes';
import { StaticRoutes } from './routes/StaticFileRoutes';
import { staticDataRoutes } from './routes/StaticDataRoutes';
import { patientInfoRoutes } from './routes/PatientInfoRoutes';

import { authenticationRouter } from './routes/userAuthRoutes/userAuthenticationRoutes';

class RouteController {
  constructor(private app: Application) {
    this.apply();
  }

  private apply(): void {
    this.app.use('/api', patientInfoRoutes);
    this.app.use('/api/health', healthDataRoutes);
    this.app.use('/static/', staticDataRoutes);
    this.app.use('/api/auth/', authenticationRouter);
    const a = new StaticRoutes(this.app);
  }
}

export { RouteController };
