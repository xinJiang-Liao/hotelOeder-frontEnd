import { faBuilding, faUtensils } from '@fortawesome/free-solid-svg-icons';

export const SIDEBAR_MENU = [
  // {icon: faDesktop, text: '主面板', link: '', active: true},
  {
    icon: faBuilding,
    text: '首页',
    link: '',
    active: false,
    items: [
      { text: '房型', active: false, link: '/roomset/type', resource: 'hms:hotel:type:' },
      { text: '房间', active: false, link: '/roomset/room', resource: 'hms:hotel:room:' },
      { text: '价格', active: false, link: '/roomset/price', resource: 'hms:hotel:price:' },
    ],
    resource: 'hms:hotel:*:',
    expanded: false,
  },
  {
    icon: faUtensils,
    text: '菜品',
    link: '',
    active: false,
    items: [
      { text: '头盘', active: false, link: '/catering/dishes', resource: 'hms:catering:dishes:' },
      { text: '靓汤', active: false, link: '/catering/daily-menu', resource: 'hms:catering:dailyMenu:' },
      { text: '副菜', active: false, link: '/catering/supper-book', resource: 'hms:catering:supperBook:' },
      { text: '主菜', active: false, link: '/catering/dashidai-banner', resource: 'hms:dashidai:banner:' },
      { text: '果蔬', active: false, link: '/catering/dashidai-banner', resource: 'hms:dashidai:banner:' },
    ],
    resource: 'hms:catering:*:',
    expanded: false,
  },
  {
    icon: faUtensils,
    text: '厨师',
    link: '',
    active: false,
    items: [
      { text: '头盘', active: false, link: '/catering/dishes', resource: 'hms:catering:dishes:' },
      { text: '靓汤', active: false, link: '/catering/daily-menu', resource: 'hms:catering:dailyMenu:' },
      { text: '副菜', active: false, link: '/catering/supper-book', resource: 'hms:catering:supperBook:' },
      { text: '主菜', active: false, link: '/catering/dashidai-banner', resource: 'hms:dashidai:banner:' },
      { text: '果蔬', active: false, link: '/catering/dashidai-banner', resource: 'hms:dashidai:banner:' },
    ],
    resource: 'hms:catering:*:',
    expanded: false,
  },
];

export const SIDEBAR_LABEL = {
  title: '系统功能',
  labels: [
    { text: '返回旧版', link: 'goto:/app', active: false },
    { text: '退出登录', link: 'goto:/login?action=signout', active: true },
  ],
};
