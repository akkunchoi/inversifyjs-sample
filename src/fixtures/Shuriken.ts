import { injectable } from "inversify";
import { Weapon } from "./Weapon";

@injectable()
export class Shuriken implements Weapon {
  public throw() {
    return "hit!";
  }
}

