import { Component, OnInit,ViewChild  } from '@angular/core';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { post } from "../posts.model";
import { PostsService } from "../posts.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadpostComponent } from "../loadpost/loadpost.component";
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers:[PostsService]
})
export class AddPostComponent implements OnInit {
  public uploadImage: boolean = false;
  public UploadVideo: boolean = false;
  public post: post;
  public postCount:number=0;
  constructor(private postservice:PostsService) { }
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 2
  };

  onUpload(file: UploadedFile) {
    console.log(file.response);
  }
  image() {
    this.uploadImage = true;
    this.UploadVideo = false;
  }
  video() {
    this.uploadImage = false;
    this.UploadVideo = true;

  }

  ngOnInit() {
    this.post = new post;
    this.post.id=this.postCount;
  
  }
  public addpost(){
  
    this.postservice.addPost(this.post).subscribe(data =>console.log(data ));
    this.postCount=this.post.id+1;
    this.post.desc="";
    this.post.img="";
    this.post.vedio="";

  }
}
