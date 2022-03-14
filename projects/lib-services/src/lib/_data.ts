export const PAY_CHANNCEL_MAP: any = {
  weda: '微达积分',
  wechat: '微信.公众号',
  weapp: '微信.APP',
  weh5: '微信.H5',
  wxmpp: '微信.小程序',
  wxmcp: '微信.付款码',
  alipay: '支付宝.APP',
  aliweb: '支付宝.移动网页',
  alapp: '支付宝.未定',
  money_jkh: '钱包余额',
  combine: '组合支付',
  free: '免费订单',
  cash: '现金',
  bankc: '刷银行卡',
  onaccount: '挂帐',
  voucher: '消费券',
  jinkeh: '核销码',
  multi: '多种方式',
};

export const PAY_CHANNCEL_FILTER: any[] = [
  { value: '', text: '- 全部' },
  { value: 'money-', text: '现金' },
  { value: 'money-wechat,weapp,weh5,wxmpp,wxmcp', text: '现金-微信' },
  { value: 'money-wechat', text: '现金-微信.公众号支付' },
  { value: 'money-weh5', text: '现金-微信.H5支付' },
  { value: 'money-weapp', text: '现金-微信.APP支付' },
  { value: 'money-wxmpp', text: '现金-微信.小程序支付' },
  { value: 'money-wxmcp', text: '现金-微信.付款码支付' },
  { value: 'money-alipay,aliweb', text: '现金-支付宝' },
  { value: 'money-alipay', text: '现金-支付宝.APP支付' },
  { value: 'money-aliweb', text: '现金-支付宝.移动网页' },
  { value: 'money-money_jkh', text: '钱包余额' },
  { value: 'money-combine', text: '组合支付' },
  { value: 'money-cash', text: '现金支付' },
  { value: 'money-bankc', text: '刷银行卡' },
  { value: 'money-onaccount', text: '挂帐' },
  { value: 'money-voucher', text: '消费券' },
  { value: 'money-jinkeh', text: '核销码' },
  { value: 'money-multi', text: '多种方式' },
  { value: 'point-', text: '积分' },
];

export const ORDER_TYPE_FILTER: any[] = [
  { value: '', text: '- 全部' },
  { value: '商品', text: '商品' },
  { value: '客房', text: '客房' },
  { value: '点餐', text: '点餐' },
  { value: '充值', text: '充值' },
  { value: '扫码扣款', text: '扫码扣款' },
  { value: '金厨', text: '金厨' },
  { value: '商品-客房', text: '商品-客房' },
  { value: '商品-餐饮', text: '商品-餐饮' },
  { value: '商品-健身休闲', text: '商品-健身休闲' },
  { value: '商品-金科良品', text: '商品-金科良品' },
  { value: '商品-通用卡券', text: '商品-通用卡券' },
  { value: '商品-宴会', text: '商品-宴会' },
  { value: '商品-优惠券', text: '商品-优惠券' },
  { value: '商品-视频充值', text: '商品-视频充值' },
  { value: '点餐-客房点餐', text: '点餐-客房点餐' },
  { value: '点餐-餐厅点餐', text: '点餐-餐厅点餐' },
  { value: '点餐-食堂点餐', text: '点餐-食堂点餐' },
  // {value: '驴妈妈-', text: '驴妈妈'},
];

export const ORDER_STATUS_FILTER: any[] = [
  { value: '', text: '- 全部' },
  { value: '已支付', text: '已支付' },
  { value: '未支付', text: '未支付' },
  { value: '待确认', text: '待确认' },
  { value: '已退款', text: '已退款' },
  { value: '已取消', text: '已取消' },
  { value: '已支付-未使用', text: '已支付-未使用' },
  { value: '已支付-已使用', text: '已支付-已使用' },
  { value: '已支付-审核中', text: '已支付-审核中' },
  { value: '已支付-已退款', text: '已支付-已退款' },
];

export const ORDER_RESERVATION_STATUS_FILTER: any[] = [
  { value: '', text: '- 全部' },
  { value: '已支付', text: '已支付' },
  { value: '未支付', text: '未支付' },
  { value: '已退款', text: '已退款' },
  { value: '已取消', text: '已取消' },
  { value: '已支付-预订中', text: '已支付-预订中' },
  { value: '已支付-审核中', text: '已支付-审核中' },
  { value: '已支付-已预订', text: '已支付-已预订' },
  { value: '已支付-已入住', text: '已支付-已入住' },
  { value: '已支付-已退房', text: '已支付-已退房' },
];

export const VOUCHER_MAP: any = {
  hotel: '酒店消费券',
  meituan: '美团消费券',
  xiecheng: '携程消费券',
};

export const GOODS_TYPES: string[] = [
  '客房',
  '餐饮',
  '健身休闲',
  '通用卡券',
  '金科良品',
  '宴会',
  '优惠券',
  '会员年费',
];
// 视频充值

export const RESOURCE_ORDER = {
  REFUND: 'jinkeh:order:refund:*',
  REFUND_USED: 'jinkeh:order:refund-used:*',
  REFUND_CREDIT: 'jinkeh:order:refund-credit:*',
};

export enum RESERVATION_STATUS {
  预订中 = '预订中',
  已预订 = '已预订',
  已入住 = '已入住',
  已退房 = '已退房',
  审核中 = '审核中',
  已取消 = '已取消',
}

export const MAT_ICON_OPTIONS = { viewBox: '0 0 512 512' };
