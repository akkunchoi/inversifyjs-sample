import { injectable } from "inversify";
import { Weapon } from "./Weapon";

@injectable()
export class Katana implements Weapon {
  public hit() {
    return "cut!";
  }
}

