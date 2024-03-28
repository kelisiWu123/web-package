export interface MockDataType  {
    name:string
    father?:boolean
    iconName?:string
    url?:string
    children?:MockDataType[]
}
export const mockData:MockDataType[] = [
    {
        name: '阿里系', father: true, children: [
            {name: 'Ant-Design', iconName: 'antd.png', url: 'https://ant-design.antgroup.com/components/overview-cn'},
            {name: 'Ant-Mobile', iconName: 'antd.png', url: 'https://ant-design-mobile.antgroup.com/zh/guide/quick-start'},
            {name: 'Ant-ProComponents', iconName: 'antd.png', url: 'https://pro-components.antdigital.dev/components'},
            {name: 'Umi', iconName: 'antd.png', url: 'https://umijs.org/docs/guides/getting-started'},
            {name: '通义', iconName: 'antd.png', url: 'https://tongyi.aliyun.com/'},
        ]
    },
    {
        name: 'react工具库', father: true, children: [
            {name: 'Lodash', iconName: 'tools.png', url: 'https://www.lodashjs.com/'},
            {name: 'AHooks', iconName: 'tools.png', url: 'https://ahooks.js.org/zh-CN/'},
            {name: 'React-Use',iconName: 'tools.png',url:'https://github.com/zenghongtu/react-use-chinese/blob/master/README.md'}
        ]
    },
    {
        name: '前端代码规范', father: true, children: [
            {name: '状态管理规范', iconName: 'gf.png', url: 'https://jdf2e.github.io/jdc_fe_guide/docs/react/state/'},
        ]
    },
    {
        name: '京东', father: true, children: [
            {name: 'NutUI-React', iconName: 'jd.png', url: 'https://ant-design.antgroup.com/components/overview-cn'},
        ]
    },
    {
        name: 'AI', father: true, children: [
            {name: 'Poe', iconName: 'poe.svg', url: 'https://poe.com/'},
            {name: '通义千问', iconName: 'ty.png', url: 'https://tongyi.aliyun.com/qianwen/'},
            {name: '文心一言', iconName: 'wy.png', url: 'https://yiyan.baidu.com/'},
        ]
    },
    {
        name: '知名文档导航', father: true, children: [
            {name: '印记中文', iconName: 'wd.png', url: 'https://www.docschina.org/'},
        ]
    },
    {
        name: '开源项目趋势', father: true, children: [
            {name: 'Github Trending', iconName: 'github.png', url: 'https://poe.com/'},
            {name: 'js生态调查报告', iconName: '2024.png', url: 'https://2022.stateofjs.com/en-US/'},
        ]
    }

]