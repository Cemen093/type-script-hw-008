import { Armor } from "./Armor";
import { Horse } from "./Horse";
import { Shield } from "./Shield";
import { Weapon } from "./Weapon";

export class Warrior {
    public name: string;
    public health: number;
    public stamina: number;
    public armor: Armor;
    public weapon: Weapon;
    public shield: Shield | null;
    public horse: Horse | null;
  
    constructor(name: string, health: number, stamina: number, armor: Armor, weapon: Weapon, 
      shield: Shield | null = null, horse: Horse | null = null) {
      this.name = name;
      this.health = health;
      this.stamina = stamina;
      this.armor = armor;
      this.weapon = weapon;
      this.shield = shield;
      this.horse = horse;
    }

    getName(): string{
      return this.name;
    }
  
    attack(target: Warrior): void {
      if (this.stamina < this.weapon.staminaCost) {
        return;
      }
      const damage = this.weapon.calculateDamage();
      target.defend(damage);
      this.stamina -= this.weapon.staminaCost;
    }
  
    defend(damage: number): void {
      const damageReducedByShield = this.shield == null ? damage : this.shield.reduceDamage(damage);
      const totalDamage = this.armor.reduceDamage(damageReducedByShield);
      this.health -= totalDamage;
    }

    toString(): string {
      let warriorString = `${this.name} (health: ${this.health}, stamina: ${this.stamina}, armor: ${this.armor}, weapon: ${this.weapon}`;
      if (this.shield) {
        warriorString += `, shield: ${this.shield}`;
      }
      if (this.horse) {
        warriorString += `, horse: ${this.horse}`;
      }
      warriorString += `)`;
      return warriorString;
    }
  }