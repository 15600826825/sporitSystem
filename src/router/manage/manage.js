const manage = resolve => { require([ '@/components/manage/manage.vue' ], resolve) }
const user = resolve => { require([ '@/components/manage/userManage/user/user.vue' ], resolve) }
const message = resolve => { require([ '@/components/manage/userManage/message/message.vue' ], resolve) }
export default [
  {
    path: '/',
    name: 'manage',
    component: manage,
    children:[
      {
        path: '/user',
        name: 'user',
        component: user
      },
      {
        path: '/message',
        name: 'message',
        component: message
      }
    ]
  }
]
