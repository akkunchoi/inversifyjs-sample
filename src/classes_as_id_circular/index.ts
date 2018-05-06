import "reflect-metadata";
import { Container, injectable, inject } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { Dom } from "./Dom";
import { DomUi } from "./DomUi";
import { TYPE } from "./types";

const container = new Container();
export let lazyInject = <any>getDecorators(container);

@injectable()
class Test {
  public dom: Dom;
  constructor(
    @inject(TYPE.Dom) dom: Dom
  ) {
    this.dom = dom;
  }
}

container.bind<Dom>(TYPE.Dom).to(Dom).inSingletonScope();
container.bind<DomUi>(TYPE.DomUi).to(DomUi).inSingletonScope();

const test = container.resolve(Test); // Works!
console.log(test);