import { Container, inject, injectable, interfaces, optional } from "inversify";
import { Katana, Shuriken } from "./fixtures";

@injectable()
class Ninja implements Ninja {

  private _katana: Katana;
  private _shuriken: Shuriken;

  public constructor(
    @inject("Factory<Katana>") katanaFactory: interfaces.Factory<Katana>,
    @inject("Shuriken") @optional() shuriken: Shuriken
  ) {
    this._katana = <Katana>katanaFactory();
    this._shuriken = shuriken;
  }

  public fight() {
    return this._katana.hit();
  }

  public sneak() {
    return this._shuriken.throw();
  }

}

const container = new Container();

container.bind<Katana>("Katana").to(Katana);
container.bind<Ninja>(Ninja).to(Ninja);

container.bind<interfaces.Factory<Katana>>("Factory<Katana>")
  .toAutoFactory<Katana>("Katana");

const ninja = container.get<Ninja>(Ninja);
console.log(ninja);

console.log(container.get<Ninja>(Ninja) === container.get<Ninja>(Ninja));
