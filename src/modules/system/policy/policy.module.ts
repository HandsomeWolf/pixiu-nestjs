import { Module } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { PolicyController } from './policy.controller';
import { CaslAbilityService } from '@/modules/system/policy/casl-ability.service';

@Module({
  providers: [PolicyService, CaslAbilityService],
  controllers: [PolicyController],
  exports: [CaslAbilityService],
})
export class PolicyModule {}
