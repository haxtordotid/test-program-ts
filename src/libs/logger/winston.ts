import winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(winston.format.logstash(), winston.format.timestamp(), winston.format.errors({ stack: true })),
	defaultMeta: { service: 'app-service' },
	transports: [
		//
		// - Write all logs with level `error` and below to `error.log`
		// - Write all logs with level `info` and below to `combined.log`
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
		new winston.transports.Console(),
	],
});

export default logger;
