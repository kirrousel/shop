import { shallowMount } from '@vue/test-utils'
import { describe, expect, test, beforeEach, vi } from 'vitest'
import ProductList from '@/components/product/ProductList.vue'
import { faker } from '@faker-js/faker'
import { useQuery } from '@vue/apollo-composable'
import getProducts from '@/api/queries/get-products-by-category.gql'
import { toRefs } from 'vue'
import ProductListPlaceholder from '@/components/product/ProductListPlaceholder.vue'
import ProductItem from '@/components/product/ProductItem.vue'

vi.mock('@vue/apollo-composable')
describe('ProductList.vue', () => {
  let wrapper
  let categoryUidProp
  let loadingState
  let expectedResult

  function mountComponent() {
    useQuery.mockImplementation(() => ({ result: expectedResult, loading: loadingState }))
    wrapper = shallowMount(ProductList, {
      props: {
        categoryUid: categoryUidProp
      }
    })
  }

  beforeEach(() => {
    loadingState = false
    expectedResult = {
      value: {
        products: {
          items: [{ name: faker.commerce.product() }, { name: faker.commerce.product() }]
        }
      }
    }
    categoryUidProp = faker.string.uuid()
    mountComponent()
  })

  test('it mounts properly', () => {
    expect(wrapper).toBeTruthy()
  })

  test('it fetches products', () => {
    const { categoryUid } = toRefs({ categoryUid: categoryUidProp })
    expect(useQuery).toHaveBeenCalled()
    expect(useQuery).toHaveBeenCalledWith(getProducts, { uid: categoryUid })
  })

  test('it does not render placeholder', () => {
    expect(wrapper.findComponent(ProductListPlaceholder).exists()).toBeFalsy()
  })

  test('it renders received product items', () => {
    const expectedProducts = expectedResult.value.products.items
    expect(wrapper.findAllComponents(ProductItem).length).toEqual(expectedProducts.length)
    expect(wrapper.findAllComponents(ProductItem)[0].props('product')).toEqual(expectedProducts[0])
  })

  describe('when products are still fetching', () => {
    beforeEach(() => {
      loadingState = true
      mountComponent()
    })

    test('it should render placeholder', () => {
      expect(wrapper.getComponent(ProductListPlaceholder)).toBeTruthy()
    })
  })
})
