import { mount, shallowMount } from '@vue/test-utils'
import MerchantComponent from '@/components/Merchant.vue'
import Merchant from '@/store/merchant/types.ts';

describe('Merchant.vue', () => {
  it('is a vue component', () => {
    const wrapper = mount(MerchantComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
