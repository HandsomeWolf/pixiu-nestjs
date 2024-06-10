import { Injectable, PipeTransform } from '@nestjs/common';
// 没用到，但是可以在@Body(CreateUserPipe) 使用，来进行转换
@Injectable()
export class CreateUserPipe implements PipeTransform {
  transform(value: any) {
    if (!value) return;
    const { roleIds } = value;
    if (roleIds && roleIds instanceof Array) {
      value.roleIds = roleIds
        .map((role) => parseInt(role))
        .filter((o) => !isNaN(o));
    }
    return value;
  }
}
