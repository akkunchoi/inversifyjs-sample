import { Container, injectable, inject } from "inversify";
import { Katana, Ninja, Shuriken, Symbols, Weapon } from "./fixtures";

const container = new Container();
container.bind<Ninja>(Symbols.Ninja).to(Ninja).inSingletonScope();
container.bind<Katana>(Symbols.Katana).to(Katana);
container.bind<Shuriken>(Symbols.Shuriken).to(Shuriken).inRequestScope();

// true! (singleton)
console.log("Ninja=", container.get<Ninja>(Symbols.Ninja) === container.get<Ninja>(Symbols.Ninja));
// true!
console.log("Ninja=", container.get<Ninja>(Symbols.Ninja).katana === container.get<Ninja>(Symbols.Ninja).katana);
// true!
console.log("Ninja=", container.get<Ninja>(Symbols.Ninja).shuriken === container.get<Ninja>(Symbols.Ninja).shuriken);

// false!
console.log("Katana=", container.get<Katana>(Symbols.Katana) === container.get<Katana>(Symbols.Katana));


@injectable()
export class SuperNinja {

  private _shuriken: Shuriken;
  private _ninja: Ninja;

  public constructor(@inject(Symbols.Shuriken) shuriken: Shuriken, @inject("NormalNinja") ninja: Ninja) {
    this._shuriken = shuriken;
    this._ninja = ninja;
  }

  public fight() {
    return this._shuriken.throw();
  }

  public sneak() {
    return this._shuriken.throw();
  }

  get shuriken() {
    return this._shuriken;
  }
  get ninja() {
    return this._ninja;
  }

}
container.bind<SuperNinja>(SuperNinja).to(SuperNinja);
container.bind<Ninja>("NormalNinja").to(Ninja);
const superninja = container.get<SuperNinja>(SuperNinja);

// shurikenはrequestScopeなので === になる
console.log(superninja.shuriken === superninja.ninja.shuriken);
