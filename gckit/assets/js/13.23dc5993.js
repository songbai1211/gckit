(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{166:function(t,e,s){"use strict";s.r(e);var _=s(0),i=Object(_.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("Bit"),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("\b 在执行文件生成时，必须保证对应的模板已经配置自定义。")]),t._v(" "),s("ul",[t._m(3),t._v(" "),s("li",[t._v("当然大家可以贡献自己的模板，可以通过给我发 issue 提供您理想的模板")]),t._v(" "),s("li",[t._v("推荐大家 Clone 一份"),s("a",{attrs:{href:"https://github.com/SeongBrave/gckit-templates",target:"_blank",rel:"noopener noreferrer"}},[t._v("gckit-templates"),s("OutboundLink")],1),t._v("然后根据需要自定义自己的模板")]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("模板文件的文件组织结构大概如下:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("ol",[s("li",[t._v("首先 Clone 一份"),s("a",{attrs:{href:"https://github.com/SeongBrave/gckit-templates",target:"_blank",rel:"noopener noreferrer"}},[t._v("gckit-templates"),s("OutboundLink")],1),t._v("项目")]),t._v(" "),t._m(14),t._v(" "),t._m(15)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Gckit-CLI")]),this._v("文件生成最重要的条件就是需要模板的支持，每一种语言的每一种文件类型都需要唯一的一种模板所对应支持。系统默认提供了一套简单的模板，大家也可以根据需要自定义自己的一套适用的模板。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("所有的语言文件类型的模板都可以支持用户自定义，只需要将自定义的模板文件放到"),e("code",[this._v(".gckit")]),this._v("的"),e("code",[this._v("templates")]),this._v("文件夹下即可")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v(".gckit")]),this._v("目录下存放"),e("code",[this._v("templates")]),this._v("文件夹底下即可")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[this._v(".")]),this._v("\n├── config\n└── templates\n    └── swift\n        ├── api\n        │   ├── all.template\n        │   ├── common.template\n        │   ├── inherit.template\n        │   └── normal.template\n        ├── cell\n        │   ├── all.template\n        │   ├── common.template\n        │   ├── inherit.template\n        │   └── normal.template\n        ├── core\n        │   ├── all.template\n        │   ├── common.template\n        │   ├── inherit.template\n        │   └── normal.template\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("以"),s("code",[t._v("Swift")]),t._v("语言模板为例，在"),s("code",[t._v("templates")]),t._v("目录底下，顶级目录为语言("),s("code",[t._v("Swift")]),t._v("首字母小写与"),s("code",[t._v(".gckitconfig")]),t._v("中的"),s("code",[t._v("lang")]),t._v("字段对应)，然后是各个文件类型目录("),s("code",[t._v("viewcontroller")]),t._v("、"),s("code",[t._v("model")]),t._v("、"),s("code",[t._v("cell")]),t._v("...)，然后是对应的模板文件，一般情况提供了\n"),s("code",[t._v("normal")]),t._v("、"),s("code",[t._v("common")]),t._v("、"),s("code",[t._v("inherit")]),t._v("、"),s("code",[t._v("all")]),t._v("四种不同的模板")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"加载顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" 加载顺序")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("模板文件可以加载系统提供的，也可以自定义存放到"),s("code",[t._v("系统用户目录")]),t._v("底下的"),s("code",[t._v(".gckit")]),t._v("目录下，当然也可以存放到"),s("code",[t._v("项目级别")]),t._v("的"),s("code",[t._v(".gckit")]),t._v("目录下，加载顺序是:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[this._v("#与`.gckitconfig`文件的加载顺序是一样的")]),this._v("\n项目级别 -"),e("span",{attrs:{class:"token operator"}},[this._v(">")]),this._v(" 用户级别 -"),e("span",{attrs:{class:"token operator"}},[this._v(">")]),this._v(" Gckit-CLI 默认\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("优先级最高为: "),s("code",[t._v("项目级别")]),t._v("，当前项目下 存在"),s("code",[t._v(".gckit")]),t._v("并且对应的模板文件存在就优先加载")]),t._v(" "),s("li",[t._v("次优先级为:"),s("code",[t._v("用户级别")]),t._v("，当项目目录下找不到对应的模板就会到系统的用户目录对应的"),s("code",[t._v(".gckit")]),t._v("目录下寻找，如果能找到就加载")]),t._v(" "),s("li",[t._v("最低优先级为:"),s("code",[t._v("Gckit-CLI")]),t._v("默认提供的，当"),s("code",[t._v("项目级别")]),t._v("和"),s("code",[t._v("用户级别")]),t._v("都找不到最好才会匹配默认提供的模板")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义模板","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义模板")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果"),e("code",[this._v("Gckit-CLI")]),this._v("默认提供的模板满足不了自己的需求时，可以通过自定义模板来实现\n自定义模板的步骤:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("然后将 Clone 的项目中"),e("code",[this._v("templates")]),this._v("文件夹拷贝到用户目录"),e("code",[this._v(".gckit")]),this._v("或者项目的"),e("code",[this._v(".gckit")]),this._v("文件夹下")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("找到对应语言对应文件类型的模板，然后根据"),e("code",[this._v(".gckitconfig")]),this._v("中的配置参数自定义模板")])}],!1,null,null,null);i.options.__file="README.md";e.default=i.exports}}]);