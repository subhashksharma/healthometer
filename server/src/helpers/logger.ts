class Logger {
  private environment = process.env.ENVIRONMENT || 'development';

  constructor() {}
  info(logText: String): void {
    if (this.environment !== 'prodcution')
      console.log(new Date() + 'info:::::' + logText);
  }
  debug(logText: String): void {
    if (this.environment !== 'prodcution')
      console.debug(new Date() + 'debug:::::' + logText);
  }
  error(logText: String): void {
    if (this.environment !== 'prodcution')
      console.error(new Date() + 'error:::::' + logText);
  }
}

export const logger = new Logger();
