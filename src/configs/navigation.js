import menuPages from './menus/pages.menu'

export default {
  // main navigation - side menu
  menu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Dashboard', link: '/dashboard/analytics' },
      { icon: 'mdi-file-outline', key: 'menu.blank', text: 'Blank Page', link: '/blank' }
    ]
  }, {
    text: 'Landing Pages',
    items: [
      { icon: 'mdi-airplane-landing', key: 'menu.landingPage', text: 'Landing Page', link: '/landing' },
      { icon: 'mdi-cash-usd-outline', key: 'menu.pricingPage', text: 'Pricing Page', link: '/landing/pricing' }
    ]
  }, {
    text: 'Pages',
    key: 'menu.pages',
    items: menuPages
  }],

  // footer links
  footer: [{
    text: 'Docs',
    key: 'menu.docs',
    href: 'https://vuetifyjs.com',
    target: '_blank'
  }]
}
