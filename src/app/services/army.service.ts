import { Injectable } from "@angular/core";
import { Armor } from "../models/Armor";
import { Weapon } from "../models/Weapon";
import { Warrior } from "../models/Warrior";
import { Horse } from "../models/Horse";
import { Shield } from "../models/Shield";
import { TypeArmor } from '../models/Armor';

@Injectable({
  providedIn: "root"
})
export class ArmyService {
  warriors: Warrior[] = [];

  constructor() {}

  public getWarriors(): Warrior[]{
    return this.warriors;
  }

  public createCavalryArcher(): void {
    const newInfantry = new Warrior("Cavalry archer", 300, 100, 
    this.createLeatherArmor(), this.createOnion(), null, this.createHorse());
    this.warriors.push(newInfantry);
  }

  public createCavalryPikeman(): void {
    const newInfantry = new Warrior("Cavalry pikeman", 300, 100, 
    this.createStealArmor(), this.createPeak(), null, this.createHorse());
    this.warriors.push(newInfantry);
  }

  public createCavalrySwordsman(): void {
    const newInfantry = new Warrior("Cavalry swordsman", 300, 100, 
    this.createStealArmor(), this.createSword(), null, this.createHorse());
    this.warriors.push(newInfantry);
  }

  public createHalberdier(): void {
    const newInfantry = new Warrior("Halberdier", 300, 100, 
    this.createStealArmor(), this.createHalderd());
    this.warriors.push(newInfantry);
  }

  public createMorgensternAndShieldFighter(): void {
    const newInfantry = new Warrior("Morgenstern and shield fighter", 300, 100, 
    this.createChainArmor(), this.createMorgenstern(), this.createShield());
    this.warriors.push(newInfantry);
  }

  public createTwoHander(): void {
    const newInfantry = new Warrior("Two-hander", 300, 100, 
    this.createStealArmor(), this.createTwoHandedSword());
    this.warriors.push(newInfantry);
  }

  public createAxeman(): void {
    const newInfantry = new Warrior("axeman", 300, 100, 
    this.createChainArmor(), this.createAxe());
    this.warriors.push(newInfantry);
  }

  public createSabreFighter(): void {
    const newInfantry = new Warrior("sabre fighter", 300, 100, 
    this.createChainArmor(), this.createSaber());
    this.warriors.push(newInfantry);
  }

  public createSpearman(): void {
    const newInfantry = new Warrior("spearman", 300, 100, 
    this.createLeatherArmor(), this.createSpear());
    this.warriors.push(newInfantry);
  }

  public createSwordsman(): void {
    const newInfantry = new Warrior("swordsman", 300, 100, 
    this.createPlateArmor(), this.createSword());
    this.warriors.push(newInfantry);
  }

  public createSwordAndShieldFighter(): void {
    const newInfantry = new Warrior("sword and shield fighter", 300, 100, 
    this.createPlateArmor(), this.createSword(), this.createShield());
    this.warriors.push(newInfantry);
  }

  public createArcher(): void {
    const newInfantry = new Warrior("archer", 300, 100, 
    this.createClothArmor(), this.createOnion());
    this.warriors.push(newInfantry);
  }

  public attack(from: Warrior, target: Warrior): void {
    from.attack(target);
    if (target.health <= 0) {
      this.removeWarrior(target);
    }
  }

  private removeWarrior(warrior: Warrior): void {
    const index = this.warriors.indexOf(warrior);
    this.warriors.splice(index, 1);
  }

  private createAxe(): Weapon{
    return new Weapon("Axe", 10, 5);
  }

  private createHalderd(): Weapon{
    return new Weapon("Halderd", 10, 5);
  }

  private createOnion(): Weapon{
    return new Weapon("Onion", 10, 5);
  }

  private createPeak(): Weapon{
    return new Weapon("Peak", 10, 5);
  }

  private createSaber(): Weapon{
    return new Weapon("Saber", 10, 5);
  }

  private createSpear(): Weapon{
    return new Weapon("Spear", 10, 5);
  }

  private createTwoHandedSword(): Weapon{
    return new Weapon("Two handed sword", 10, 5);
  }

  private createSword(): Weapon{
    return new Weapon("Sword", 10, 5);
  }

  private createMorgenstern(): Weapon{
    return new Weapon("Morgenstern", 10, 5);
  }

  private createShield(): Shield{
    return new Shield("Shield", 10);
  }

  private createClothArmor(): Armor{
    return new Armor("Cloth", 5, TypeArmor.Light);
  }

  private createLeatherArmor(): Armor{
    return new Armor("Leather", 5, TypeArmor.Light);
  }

  private createChainArmor(): Armor{
    return new Armor("Chain", 10, TypeArmor.Medium);
  }

  private createPlateArmor(): Armor{
    return new Armor("Plate", 15, TypeArmor.Heavy);
  }

  private createStealArmor(): Armor{
    return new Armor("Steal", 15, TypeArmor.Heavy);
  }

  private createHorse(): Horse{
    return new Horse(10);
  }
}