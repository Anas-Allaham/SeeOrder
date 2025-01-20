import { Test, TestingModule } from '@nestjs/testing';
import { DiscountsController } from './discounts.controller';
import { DiscountsService } from './discounts.service';

describe('DiscountsController', () => {
  let discountsController: DiscountsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiscountsController],
      providers: [DiscountsService],
    }).compile();

    discountsController = app.get<DiscountsController>(DiscountsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(discountsController.getHello()).toBe('Hello World!');
    });
  });
});
