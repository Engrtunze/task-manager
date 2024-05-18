import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerOptions() {
  return new DocumentBuilder()
    .setTitle('NIYO-task-manager documentation')
    .setDescription('NIYO-task-manager documentation')
    .setVersion('1.0')
    .build();
}
