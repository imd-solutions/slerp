import {Module, VuexModule, Mutation, Action} from "vuex-module-decorators";
import * as apollo from "./graphql";
import {Merchant} from "./types";

@Module({
    name: "merchant",
    namespaced: true,
})
export default class MerchantModule extends VuexModule {
    // State
    merchant: Merchant | null = null;

    // Mutation: Get the merchant data.
    @Mutation
    GET_MERCHANT(data: Merchant) {
        this.merchant = data;
    }

    // Action: query the database for the merchant data.
    @Action
    async queryMerchant(slug: string): Promise<any> {
        const response = await apollo.merchant(slug);
        this.GET_MERCHANT(response);
        return response;
    }

    // Getter: get the merchant data.
    get getMerchant() {
        return this.merchant;
    }
}
