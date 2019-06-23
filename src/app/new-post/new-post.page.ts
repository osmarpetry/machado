import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post/post.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})

export class NewPostPage implements OnInit {

  post: Post = { title: "", subject:"", description:""}

  constructor(private postService: PostService,public navCtrl: NavController) { }

  ngOnInit() {
  }

  newPost(){
    let record = {};
    record['title'] = this.post.title;
    record['subject'] = this.post.subject;
    record['description'] = this.post.description;
    this.postService.create_NewPost(record).then(resp => {
      this.post.title = "";
      this.post.subject = "";
      this.post.description = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  
  voltar()  {
    this.navCtrl.navigateForward('tabs/tab2');
  }

}
