import { Container, AsyncContainerModule, interfaces } from "inversify";
import { Katana, Ninja, Shuriken, Symbols, Weapon } from "./fixtures";

const warriors = new AsyncContainerModule(async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<Ninja>(Symbols.Ninja).to(Ninja);
});

const weapons = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
  ) => {
    bind<Katana>(Symbols.Katana).to(Katana);
    bind<Shuriken>(Symbols.Shuriken).to(Shuriken);
  }
);

(async () => {
  const container = new Container();
  await container.loadAsync(warriors, weapons);
  console.log(container.getAll<Ninja>(Symbols.Ninja));

  container.unload(warriors);
// Error: No matching bindings found for serviceIdentifier: Symbol(Ninja)
// console.log(container.getAll<Ninja>(Symbols.Ninja));
})();


