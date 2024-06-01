import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PolicyService } from '@/modules/system/policy/policy.service';
import { CreatePolicyDto } from '@/modules/system/policy/dto/create-policy.dto';
import { UpdatePolicyDto } from '@/modules/system/policy/dto/update-policy.dto';

@Controller('policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Post()
  create(@Body() createPolicyDto: CreatePolicyDto) {
    return this.policyService.create(createPolicyDto);
  }

  @Get()
  findAll() {
    return this.policyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolicyDto: UpdatePolicyDto) {
    return this.policyService.update(+id, updatePolicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policyService.remove(+id);
  }
}
