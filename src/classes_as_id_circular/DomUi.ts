import { inject, injectable } from "inversify";
import { TYPE } from "./types";
import { Dom } from "./Dom";

@injectable()
export class DomUi {
  public dom: Dom;
  public name: string;
  constructor (
    @inject(TYPE.Dom) dom: Dom
  ) {
    this.dom = dom;
    this.name = "DomUi";
  }
}
