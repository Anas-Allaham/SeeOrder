import { Test, TestingModule } from '@nestjs/testing';
import { RestaurentController } from './restaurent.controller';
import { RestaurentService } from './restaurent.service';

describe('RestaurentController', () => {
  let restaurentController: RestaurentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RestaurentController],
      providers: [RestaurentService],
    }).compile();

    restaurentController = app.get<RestaurentController>(RestaurentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(restaurentController.getHello()).toBe('Hello World!');
    });
  });
});
