import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.posts = data;
        }
      },
      (error) => {
        console.error('Error fetching posts:', error);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
