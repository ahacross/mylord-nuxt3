import * as date from '@/js/date'
import '@/js/addPrototype'
import isEmpty from 'lodash/isEmpty'

const util = {
  randomString: (maxLength = 11) => {
    return Math.random()
      .toString(36)
      .substring(2, maxLength + 2)
  },
  isEmpty,
}

export default (app, inject) => {
  const move = async (url, params = null, type) => {
    const { push, replace } = app.$router
    const moveFn = type === 'replace' ? replace : push
    const urlType = url.includes('/') ? 'path' : 'name'
    await moveFn({ [urlType]: url }, params)
  }

  inject('move', move)
  inject('date', date)
  inject('util', util)
}
