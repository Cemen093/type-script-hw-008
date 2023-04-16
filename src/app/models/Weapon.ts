export class Weapon {
    name: string;
    damage: number;
    staminaCost: number;
  
    constructor(name: string, damage: number, staminaCost: number) {
      this.name = name;
      this.damage = damage;
      this.staminaCost = staminaCost;
    }
  
    calculateDamage(): number {
      return this.damage;
    }

    toString(): string {
      return `${this.name} (damage: ${this.damage}, stamina cost: ${this.staminaCost})`;
    }
  }