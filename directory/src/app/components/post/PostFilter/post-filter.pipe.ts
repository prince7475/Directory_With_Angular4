import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: any, termsPost?: any): any {
    if(!termsPost) return posts
    return posts.filter((post)=>{
      return post.body.toLowerCase().includes(termsPost.toLowerCase())
    })
  }

}
