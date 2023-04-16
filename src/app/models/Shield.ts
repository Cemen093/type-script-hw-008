export class Shield {
    name: string;
    defense: number;

    constructor(name:string, defense: number){
        this.name = name;
        this.defense = defense;
    }
  
    calculateArmor(): number {
      return this.defense;
    }
  
    reduceDamage(damage: number): number {
      return (damage - this.calculateArmor() > 0) ? damage - this.calculateArmor() : 0;
    }
}