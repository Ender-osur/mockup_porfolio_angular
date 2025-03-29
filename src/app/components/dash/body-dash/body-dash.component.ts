import { Component, ViewEncapsulation  } from '@angular/core';
// import { SidebarDashComponent } from '../sidebar-dash/sidebar-dash.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body-dash',
  imports: [RouterOutlet],
  templateUrl: './body-dash.component.html',
  styleUrl: './body-dash.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BodyDashComponent {

}
