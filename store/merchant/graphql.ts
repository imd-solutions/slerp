import graphqlClient from "@/utils/apollo";
import GET_MERCHANT from "@/apollo/query/merchant/get.gql";
import {Merchant} from "@/mainStore/merchant/types";

// GraphQL query to the merchant details.
export async function merchant(data: string): Promise<Merchant> {
    try {
        const response = await graphqlClient.query({
            query: GET_MERCHANT,
            variables: {
                slug: data,
            },
        });

        return response.data.merchants[0] as Merchant;
    } catch (error) {
        throw(error)
    }
}
