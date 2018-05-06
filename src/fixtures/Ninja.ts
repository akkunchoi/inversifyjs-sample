import { inject, injectable } from "inversify";
import { Katana } from "./Katana";
import { Shuriken } from "./Shuriken";
import { Symbols } from "./Symbols";

@injectable()
export class Ninja implements Ninja {

  private _katana: Katana;
  private _shuriken: Shuriken;
  private t: number;

  public constructor(@inject(Symbols.Katana) katana: Katana, @inject(Symbols.Shuriken) shuriken: Shuriken) {
    this._katana = katana;
    this._shuriken = shuriken;
    this.t = new Date().getTime();
  }

  public fight() {
    return this._katana.hit();
  }

  public sneak() {
    return this._shuriken.throw();
  }

  get katana() {
    return this._katana;
  }

  get shuriken() {
    return this._shuriken;
  }

}
