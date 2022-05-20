import configs from '../../configs'
import mutations from './mutations'

const { product, time, theme, currencies  } = configs

const { globalTheme, menuTheme, toolbarTheme, isToolbarDetached, isContentBoxed, isRTL } = theme
const { currency, availableCurrencies } = currencies

// state initial values
const state = () => ({
  product,

  time,

  // currency
  currency,
  availableCurrencies,

  // themes and layout configurations
  globalTheme,
  menuTheme,
  toolbarTheme,
  isToolbarDetached,
  isContentBoxed,
  isRTL
})

export default {
  namespaced: true,
  state,
  mutations
}
