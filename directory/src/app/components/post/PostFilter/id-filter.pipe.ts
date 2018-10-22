import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFilter'
})
export class IdFilterPipe implements PipeTransform {

  transform(posts: any, terms?: any): any {
    if(!terms) return posts
    return posts.filter((post)=>{
      return post.id === Number(terms)
    })
  }

}
