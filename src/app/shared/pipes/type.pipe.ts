import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args: any): any {
    switch (value) {
      case 0:
        return 'Nhà riêng'
      case 1:
        if(args === 1)
          return 'Đất nền'
        if (args === 0)
          return 'Mặt bằng'
        return 'Đất nền/Mặt bằng'
      case 2:
        return 'Chung cư'
      default:
        return '--'
      }
  }

}
