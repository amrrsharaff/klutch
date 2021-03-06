import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisionService } from './vision/vision.service';
import { VisionController } from './vision/vision.controller';
import { WatsonController } from './watson/watson.controller';
import { WatsonService } from './watson/watson.service';

@Module({
  imports: [],
  controllers: [AppController, VisionController, WatsonController],
  providers: [AppService, VisionService, WatsonService],
})
export class AppModule {}
