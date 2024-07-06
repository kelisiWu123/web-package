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
            {name: 'Dumi', iconName: 'antd.png', url: 'https://d.umijs.org/'},
            {name: '通义', iconName: 'antd.png', url: 'https://tongyi.aliyun.com/'},

        ]
    },
    {
        name: 'react and utils', father: true, children: [
            {name: 'React', iconName: 'React.png', url: 'https://react.docschina.org/'},
            {name: 'Lodash', iconName: 'React.png', url: 'https://www.lodashjs.com/'},
            {name: 'AHooks', iconName: 'React.png', url: 'https://ahooks.js.org/zh-CN/'},
            {name: 'React-Use',iconName: 'React.png',url:'https://github.com/zenghongtu/react-use-chinese/blob/master/README.md'},
            {name: 'JS框架语法特性对比', iconName: 'React.png', url: 'https://component-party.lainbo.com/'},
            {name: 'ES6 -书栈网', iconName: 'React.png',url:'https://www.bookstack.cn/read/es6-3rd/README.md'}
        ]
    },
    //https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md
    {
        name: 'TS', father: true, children: [
            {name: 'TS中文网', iconName: 'typescript.png', url: 'https://ts.nodejs.cn/docs/handbook/utility-types.html'},
            {name: 'TS使用手册', iconName: 'typescript.png', url: 'https://www.patrickzhong.com/TypeScript/PREFACE.html'},
            {name: 'Type-Hero', iconName: 'typescript.png', url: 'https://typehero.dev/aot-2023'},
            {name: 'Type-Challenge',iconName: 'typescript.png',url:'https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md'}
        ]
    },
    {
        name: 'react好文', father: true, children: [
            {name: '类组件和函数组件有什么不同?',iconName: 'React.png',url: 'https://overreacted.io/how-are-function-components-different-from-classes/'},
            {name: '为什么钩子?',iconName: 'React.png',url: 'https://geekdaxue.co/read/garronge@tyarry/rz5yor'},
            {name: 'React-技术揭秘-卡颂', iconName: 'React.png', url: 'https://react.iamkasong.com/'},
        ]
    },
    {
        name: '前端代码规范', father: true, children: [
            {name: '状态管理规范', iconName: 'gf.png', url: 'https://jdf2e.github.io/jdc_fe_guide/docs/react/state/'},
            {name: 'HTML标准', iconName: 'gf.png', url: 'https://html.spec.whatwg.org/multipage/'},
            {name: 'PromiseA+', iconName: 'gf.png',url: 'https://promisesaplus.com/'}
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
            {name: 'Github Trending', iconName: 'github.png', url: 'https://github.com/trending'},
            {name: 'js生态调查报告', iconName: '2024.png', url: 'https://2022.stateofjs.com/en-US/'},
        ]
    }
]
