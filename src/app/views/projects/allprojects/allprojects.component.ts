import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {uniqueId} from "lodash-es";
import {Post} from "../../../models/post.model";
import {PostsService} from "../../../services/posts.service";
@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.scss'
})
export class AllprojectsComponent implements OnInit{

  posts: Post[] = [];

  allProjects: any[] = [];
  showAllProjects: boolean = false;
  displayedProjects: number = 6;
  projectsWithTasks: any[] = [];

  isPostsLoading: boolean = false; // Flag to indicate if posts are loading

  constructor(private projectsModule: ProjectsModule, private postsService: PostsService) {
    this.allProjects = projectsModule.projects;
  }

  toggleAllProjects(): void {
    this.showAllProjects = !this.showAllProjects;
    if (!this.showAllProjects) {
      this.displayedProjects = 6;
    }
  }
  ngOnInit(): void {
    this.isPostsLoading = true; // Set loading flag to true before fetching data

    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log(this.posts);
        this.isPostsLoading = false; // Set loading flag to false after fetching data
      },
      error: (error) => {
        console.error(error);
        this.isPostsLoading = false; // Set loading flag to false if there's an error
      },
    });

    // You might want to move this logic inside the subscription to ensure it's executed after fetching posts.
    this.projectsWithTasks = this.projectsModule.projects.map(project => ({
      ...project,
      allTasks: project.backlog?.allTasks || 0,
      doneTasks: project.backlog?.doneTasks || 0
    }));
  }

  createNewPost(): void {
    const newPost: Post = {
      // create your new post object here
      userId: 1,
      id: uniqueId(), // id will be assigned by the server
      title: 'New Post Title',
      body: 'New Post Body'
    };

    this.postsService.createPost(newPost).subscribe({
      next: (createdPost) => {
        console.log('New post created:', createdPost);
        // handle success
      },
      error: (error) => {
        console.error('Error creating post:', error);
        // handle error
      }
    });
  }

}
