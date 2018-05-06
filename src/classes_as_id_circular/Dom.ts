import { injectable, inject } from "inversify";
import { TYPE } from "./types";
import { DomUi } from "./DomUi";
import { lazyInject } from "./index";

@injectable()
export class Dom {
  public name: string;
  @lazyInject(TYPE.DomUi) public domUi: DomUi;
  public constructor() {
    this.name = "Dom";
  }
}

