import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Moutain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'I saw this mountain today',
    },
    {
      title: 'Moutain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
      content: 'I saw this bike today',
    },
  ];
}
