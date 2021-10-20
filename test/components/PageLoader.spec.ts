import { mount, shallowMount } from '@vue/test-utils'
import PageLoaderComponent from '@/components/PageLoader.vue'

describe('PageLoader.vue', () => {
  it('is a vue component', () => {
    const wrapper = mount(PageLoaderComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
