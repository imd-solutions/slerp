import {Module, VuexModule, Mutation, Action} from "vuex-module-decorators";
import * as apollo from "./graphql";
import {Product} from "./types";

@Module({
    name: "products",
    namespaced: true,
})
export default class ProductsModule extends VuexModule {
    // State
    products: Product | null = null;

    // Mutation: Get the all products.
    @Mutation
    GET_PRODUCTS(data: Product) {
        this.products = data;
    }

    // Action: query the database for all the products that belong to shop.
    @Action
    async queryProducts(slug: string): Promise<any> {
        const response = await apollo.products(slug);
        this.GET_PRODUCTS(response);
        return response;
    }

    // Getter: get the products data.
    get getProducts() {
        return this.products;
    }
}
