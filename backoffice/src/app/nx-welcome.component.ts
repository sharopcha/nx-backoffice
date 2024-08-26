import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from '@nx-asigno/shared';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, SharedComponent],
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
