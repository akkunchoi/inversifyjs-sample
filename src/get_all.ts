import { Container, injectable, inject } from "inversify";
import { Katana, Ninja, Shuriken, Symbols, Weapon } from "./fixtures";

const container = new Container();
container.bind<Ninja>(Symbols.Ninja).to(Ninja);
container.bind<Katana>(Symbols.Katana).to(Katana);
container.bind<Shuriken>(Symbols.Shuriken).to(Shuriken);
container.bind<Weapon>(Symbols.Weapon).to(Katana).whenTargetTagged("faction", "samurai");
container.bind<Weapon>(Symbols.Weapon).to(Shuriken).whenTargetTagged("faction", "ninja");

const weapons = container.getAll<Weapon>(Symbols.Weapon);
console.log(weapons);

const shrikens = container.getAllTagged<Weapon>(Symbols.Weapon, "faction", "ninja");
console.log(shrikens);
