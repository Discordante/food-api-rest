import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const defaultDocsPath = '/docs';

export interface SwaggerOptions {
  servers?: string[];
  globalPrefix?: string;
  docsPath?: string;
}

export const setupSwagger = (
  app: INestApplication,
  options?: SwaggerOptions,
) => {
  const config = new DocumentBuilder()
    .setTitle('Food REST API')
    .setDescription('Api of meals for didactic purposes.')
    .setVersion('0.0.1');

  options?.servers?.forEach((s) => config.addServer(s));

  const globalPrefix = options?.globalPrefix || '';
  let docsPath = options?.docsPath || defaultDocsPath;

  if (!docsPath.startsWith('/')) {
    docsPath = '/' + docsPath;
  }

  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup(`${globalPrefix}${docsPath}`, app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'method',
    },
  });
};
