# Vue3 + TS 项目代码规范

这里推荐代码格式化工具 `prettier` 插件，用了它，提效必备。爱不释手~



> prettier 官方文档：https://prettier.io/



### What is Prettier?

- An opinionated code formatter
- Supports many languages
- Integrates with most editors
- Has few options



官方自己介绍说，prettier是一款强势武断的代码格式化工具，它几乎移除了编辑器本身所有的对代码的操作格式，然后重新显示。就是为了让所有用这套规则的人有完全相同的代码。在团队协作开发的时候更是体现出它的优势。与eslint，tslint等各种格式化工具不同的是，prettier只关心代码格式化，而不关心语法问题。



## 项目中如何使用？

环境：

+ 编辑器：vscode



1. 首先安装插件 `Prettier - Code formatter`

2. 创建一个 vue3 项目

   1. 这里注意选择lint 可以选择相关 `prettier`或者直接第一项即可

3. 在项目根目录下创建 `.prettierrc` 文件，写入相关配置。

   ```
   {
       "semi": false,
       "trailingComma": "es5",
       "tabWidth": 2,
       "singleQuote": true
   }
   ```

   在这里可以写你希望的代码格式，看官网会知道更多哈

4. 然后，在设置中搜 format

   勾选 Editor: Format On Save 这一个配置，注意这里保存文件的相关方式哈

5. 文件保存方式，设置中搜 files: auto save

   这里推荐设置为 `onWindowChange`



好了之后就可以在项目中随意写代码了，最后 记得保存就会自动格式化的，快去试试吧~