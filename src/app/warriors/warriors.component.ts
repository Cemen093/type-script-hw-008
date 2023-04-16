import { Component } from '@angular/core';
import { ArmyService } from '../services/army.service';
import { Warrior } from '../models/Warrior';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.css']
})

export class WarriorsComponent {
  warriors: Warrior[] = [];
  armyService: ArmyService = new ArmyService;

  constructor(){

  }

  ngOnInit(){
    this.armyService.createCavalryArcher();
    this.armyService.createCavalryPikeman();
    this.armyService.createCavalrySwordsman();
    this.armyService.createHalberdier();
    this.armyService.createMorgensternAndShieldFighter();
    this.armyService.createTwoHander();
    this.armyService.createAxeman();
    this.armyService.createSpearman();
    this.armyService.createSwordsman();
    this.armyService.createSwordAndShieldFighter();
    this.armyService.createArcher();
    this.warriors = this.armyService.getWarriors();
  }
}
