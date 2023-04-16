export enum TypeArmor {
  Light = 1,
  Medium,
  Heavy,
}

export class Armor {
    name: string;
    defense: number;
    type: TypeArmor;
  
    constructor(name: string, defense: number, type: TypeArmor) {
      this.name = name;
      this.defense = defense;
      this.type = type;
    }
  
    calculateArmor(): number {
      return this.defense;
    }
  
    reduceDamage(damage: number): number {
      return (damage - this.calculateArmor() > 0) ? damage - this.calculateArmor() : 0;
    }
  }