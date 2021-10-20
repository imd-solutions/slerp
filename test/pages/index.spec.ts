import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex, { Store, ActionTree } from 'vuex';
// import { getModule } from 'vuex-module-decorators';
import IndexPage from '@/pages/index.vue';
// import {
//   merchantStore,
//   productStore,
// } from "@/utils/store-accessor";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('index.vue', () => {


  let actions
  let store

  beforeEach(() => {
    actions = {
      queryMerchant: jest.fn(),
      queryProducts: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('is a vue component', () => {

    const wrapper = shallowMount(IndexPage, {
      localVue,
      store,
    });

    console.log("Wrapper", wrapper.vm.$store);

    // await wrapper.vm.$nextTick();

    expect(actions.queryMerchant).toHaveBeenCalled();
    // expect(wrapper.vm).toBeTruthy();

  });


})
