import Vue from 'vue'
import Router from 'vue-router'
const Index = () =>
	import('@/view/index/index');
const Home = () =>
	import('@/view/home/home');

const Login = () =>
	import('@/view/login/login');
const Res = () =>
	import('@/view/login/res');
const Activ = () =>
	import('@/view/activ/activ');
const Huodong = () =>
	import('@/view/activ/huodong');
const Main = () =>
	import('@/view/activ/main');
const Assit = () =>
	import('@/view/activ/assit');
const Show = () =>
	import('@/view/activ/show');
const Booking = () =>
	import('@/view/booking/booking');
const Gift = () =>
	import('@/view/gift/gift');
const Predetermine = () =>
	import('@/view/predetermine/predetermine');
const Order = () =>
	import('@/view/order/order');
const OrderOk = () =>
	import('@/view/order/orderOk');
const OrderConfirm = () =>
	import('@/view/order/order_confirm');
const OrderPay = () =>
	import('@/view/order/order_pay');
const PersonalHome = () =>
	import('@/view/personal/personalHome');
const PersonalXinx = () =>
	import('@/view/personal/personal_xinx');
const PersonalOrder = () =>
	import('@/view/personal/personal_order');
const PersonalLy = () =>
	import('@/view/personal/personal_ly');
const PersonalWallet = () =>
	import('@/view/personal/personal_wallet');
const findPass = () =>
	import('@/view/findpass/findpass');
const About = () =>
	import('@/view/about/about');
const AboutContact = () =>
	import('@/view/about/aboutContact');
const ZhaoShang = () =>
	import('@/view/about/zhaoshang');
const ZhaoShangLogin = () =>
	import('@/view/about/zhaoshanglogin');
const LiuCheng = () =>
	import('@/view/about/liucheng');
const Problem = () =>
	import('@/view/about/problem');
const Error = () =>
	import('@/view/home/error');
const News = () =>
  import('@/view/news/news');
const Life = () =>
  import('@/view/news/life');
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/yangcun/',
	routes: [{
			path: '/',
			component: Index,
			children: [{
					path: '',
					name: 'home',
					component: Home
				},
				{
					path: '/activ',
					component: Activ,
					children: [{
						path: '',
						name: 'huodong',
						component: Huodong
					}, {
						path: '/main',
						component: Main
					}, {
						path: '/assit',
						component: Assit
					}, {
						path: '/show',
						component: Show
					}]
				},
        {
          path: '/news',
          component:News,
          children:[{
              path:'',
            name:'life',
            component:Life,
          }]
        },
				{
					path: '/res',
					component: Res
				},
				{
					path: '/booking',
					component: Booking
				},
				{
					path: '/predetermine',
					component:Predetermine
				},
				{
					path: '/gift',
					component: Gift
				}, {
					path: '/order/:id',
					component: Order
				}, {
					path: '/orderOk',
					component: OrderOk
				}, {
					path: '/orderConfirm',
					component: OrderConfirm
				}, {
					path: '/orderPay',
					component: OrderPay
				}, {
					path: '/personalHome',
					component: PersonalHome,
					children: [{
							path: '',
							name: 'personalXinx',
							component: PersonalXinx
						},
						{
							path: '/personalOrder',
							component: PersonalOrder
						},

						{
							path: '/personalWallet',
							component: PersonalWallet
						},
						{
							path: '/personalLy',
							component: PersonalLy
						},
					]
				}, {
					path: '/findPass',
					component: findPass
				}, {
					path: '/about',
					component: About,
				}, {
					path: '/AboutContact',
					component: AboutContact,
				}, {
					path: '/zhaoshang',
					component: ZhaoShang,
				}, {
					path: '/zhaoshanglogin',
					component: ZhaoShangLogin,
				}, {
					path: '/liucheng',
					component: LiuCheng,
				}, {
					path: '/problem',
					component: Problem,
				}
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '*',
			name: 'error',
			component: Error
		}
	]
})
