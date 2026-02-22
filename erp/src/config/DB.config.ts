import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USERNAME || 'ERP',
  password: process.env.DB_PASSWORD || 'Omar2023',
  database: process.env.DB_NAME || 'ERP',
  synchronize: true, // 👈 خليها Boolean
  autoLoadEntities: true,
}));