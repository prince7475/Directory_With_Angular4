import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {  
  students = [
  {name: "prince", favColor: "yellow"},
  {name: "Mike", favColor: "blue"},
  {name: "Aaron", favColor: "green"},
  {name: "Seth", favColor: "pink"}
]
  log(name,color){
    let newPerson = {
      name,
      favColor : color  
    }
    this.students.push(newPerson)

  }

  remove(name){
    console.log(name)

    let result  = this.students.filter((student)=>{
      return student.name != name
    })
    this.students = result
    return this.students

  }

  constructor() { }
}
