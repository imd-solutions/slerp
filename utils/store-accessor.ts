import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import MerchantModule from "@/store/merchant/index.ts";
import ProductModule from "@/store/products/index.ts";

let merchantStore: any;
let productStore: any;

function initialiseStores(store: Store<any>): void {
  merchantStore = getModule(MerchantModule, store);
  productStore = getModule(ProductModule, store);
}

export {
  initialiseStores,
  merchantStore,
  productStore,
};
