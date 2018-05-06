import { Container, ContainerModule, interfaces } from "inversify";
import { Katana, Ninja, Shuriken, Symbols, Weapon } from "./fixtures";

const warriors = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<Ninja>(Symbols.Ninja).to(Ninja);
});

const weapons = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
  ) => {
    bind<Katana>(Symbols.Katana).to(Katana);
    bind<Shuriken>(Symbols.Shuriken).to(Shuriken);
  }
);

const container = new Container();
container.load(warriors, weapons);
console.log(container.getAll<Ninja>(Symbols.Ninja));

container.unload(warriors);
// Error: No matching bindings found for serviceIdentifier: Symbol(Ninja)
// console.log(container.getAll<Ninja>(Symbols.Ninja));

