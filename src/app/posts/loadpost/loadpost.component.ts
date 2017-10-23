import { Component, OnInit } from '@angular/core';
import { post } from "../posts.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'loadpost',
  templateUrl: './loadpost.component.html',
  styleUrls: ['./loadpost.component.scss'],
  providers:[PostsService]
})
export class LoadpostComponent implements OnInit {
public loadposts:post[];
  constructor(private postservice:PostsService) { }

  ngOnInit() {
    this.getpost();
  }
  public getpost(){
    this.postservice.getPost().subscribe(res=>{
      this.loadposts=res;
      console.log(this.loadposts);
    })
  }

}
