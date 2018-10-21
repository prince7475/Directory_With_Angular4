import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any, terms?: any): any {
    //Check if search term is undefined
    if(terms === undefined) return students;
    return students.filter((student)=> {
      return student.name.toLowerCase().includes(terms.toLowerCase())
    })
  }

}
