import {mount, shallowMount} from '@vue/test-utils'
import ProductListComponent from '@/components/ProductList.vue'
import Product from '@/store/products/types.ts';

describe('ProductList.vue', () => {
    it('is a vue component', () => {
        const wrapper = mount(ProductListComponent)
        expect(wrapper.vm).toBeTruthy()
    })
    it('is renders the products', () => {

        //
        const product_1 = 'product-1';
        const product_2 = 'product-2';

        const products: typeof Product[] = [
            {
                name: product_1,
                default_variant: [
                    {
                        price: 10
                    }
                ]
            },
            {
                name: product_2,
                default_variant: [
                    {
                        price: 10
                    }
                ]
            }
        ];

        //
        const wrapper = mount(ProductListComponent, {
            propsData: {products}
        });

        //
        const html = wrapper.text();
        expect(html).toContain(product_1);
        expect(html).toContain(product_2);
    })
})
