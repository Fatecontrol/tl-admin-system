import Mock from 'mockjs'
const Random = Mock.Random

import './MenuData'

// 导入数据
import user from './userData'

// 登录接口
Mock.mock('/api/login/username', (options: any) => {
  console.log('options', options)
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数为空'
    }
  }
  const params = JSON.parse(options.body)
  if (!params || !params.username || !params.password || !params.imgcode) {
    return {
      code: 101,
      message: '参数错误'
    }
  }
  if (params.username === 'admin' && params.password === '123456') {
    return {
      code: 888,
      message: '成功',
      data: user.userInfo,
      token: Random.string(64)
    }
  }

  return {
    code: 102,
    message: '用户名或密码错误'
  }
})

// 后台返回的字段接口
Mock.mock('/api/entity', (options: { body: string }) => {
  console.log('options', options)
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数为空'
    }
  }

  const params = JSON.parse(options.body)
  if (params.type === 'demo') {
    return {
      code: 888,
      message: '',
      data: [
        {
          prop: 'id', // 字段名称
          label: 'ID', // 字段显示名
          search: true, //是否可用于搜索, 如果设置为false,则表示不可以通过id进行搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '1', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: 100, // 列的宽度
          fixed: 'left', //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'center', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: '', //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: '', //type为5的时关联数据的加载地址
          dictKey: '', //type为6时的数据字典的标识
          multiple: false, //当前字段是否是个列表,
          linkUrl: null //需要跳转时的跳转地址
        },
        {
          prop: 'name', // 字段名称
          label: '名称', // 字段显示名
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: 180, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'left', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: null, //type为5的时关联数据的加载地址
          dictKey: null, //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: '/index/demo/info' //需要跳转时的跳转地址
        },
        {
          prop: 'icon', // 字段名称
          label: '图标', // 字段显示名
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '7', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: 100, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: false, //是否可排序，
          align: 'center', //对齐方式，同elementplus的属性left / center / right
          // formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: null, //type为5的时关联数据的加载地址
          dictKey: null, //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: null //需要跳转时的跳转地址
        },
        {
          prop: 'createDate', // 字段名称
          label: '创建时间', // 字段显示名
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '3', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: 180, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'center', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //'YYYY-MM-DD HH:mm:ss'type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: null, //type为5的时关联数据的加载地址
          dictKey: null, //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: null //需要跳转时的跳转地址
        },
        {
          prop: 'createUser', // 字段名称
          label: '创建人', // 字段显示名
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '5', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: 150, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'left', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: '/api/user/list', //type为5的时关联数据的加载地址
          dictKey: null, //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: '/index/user/info' //需要跳转时的跳转地址
        },
        {
          prop: 'status', // 字段名称
          label: '状态', // 字段显示名
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '6', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: 150, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'center', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: null, //type为5的时关联数据的加载地址
          dictKey: 'demo-status', //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: null //需要跳转时的跳转地址
        },
        {
          prop: 'content', // 字段名称
          label: '内容', // 字段显示名
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableShow: true, // 是否在表格中显示
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: null, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'left', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: null, //type为5的时关联数据的加载地址
          dictKey: null, //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: null //需要跳转时的跳转地址
        },
        {
          prop: 'description', // 字段名称
          label: '备注', // 字段显示名
          tableShow: true, // 是否在表格中显示
          search: true, //是否可用于搜索
          defaultSearch: true, //是否默认快捷搜索
          tableDefaultShow: true, // 是否在表格中默认显示
          type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
          width: null, // 列的宽度
          fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
          sortable: true, //是否可排序，
          align: 'left', //对齐方式，同elementplus的属性left / center / right
          formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
          linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
          linkObjLoadUrl: null, //type为5的时关联数据的加载地址
          dictKey: null, //type为6时的数据字典的标识
          multiple: null, //当前字段是否是个列表,
          linkUrl: null //需要跳转时的跳转地址
        }
      ]
    }
  }
})
