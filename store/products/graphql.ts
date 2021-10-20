import graphqlClient from "@/utils/apollo";
import GET_PRODUCTS from "@/apollo/query/product/all.gql";
import {Product} from "@/mainStore/products/types";

// GraphQL query to get all products details.
export async function products(data: string): Promise<Product> {
    try {
        const response = await graphqlClient.query({
            query: GET_PRODUCTS,
            variables: {
                slug: data,
            },
        });

        return response.data.merchants[0].products as Product;
    } catch (error) {
      throw(error)
    }
}
