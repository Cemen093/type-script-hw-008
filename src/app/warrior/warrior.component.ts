import { Component, Input } from '@angular/core';
import { Warrior } from '../models/Warrior';

@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.css']
})

export class WarriorComponent {
  @Input()
  warrior!: Warrior;
}
