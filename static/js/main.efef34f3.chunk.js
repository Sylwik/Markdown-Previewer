(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),s=t(3),c=t.n(s),r=(t(12),t(4)),d=t(5),l=t(7),o=t(6),b=t(0),j=t(14),u=function(e){Object(l.a)(t,e);var n=Object(o.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).state={markdown:" # Hello!\n\n## How are you?\n\n**I'm under** \n\n `<div> the water </div>`\n\n```\n// please help me\n\nfunction helpMe(me, water) {\n   for(let i=0; i < water.length; i++) {\n      if(water[i] === me) {\n         return water.splice(i, 1); \n      }\n   } \n }\n```\n> Here\n\n1. too\n2.much\n3.raining \n\n [\xeb\xea\u0119\xeb\u0113\u0117\xeb\xea\u0119\xeb](https://www.youtube.com/watch?v=z6-FWJteNLI) \n\n ![Fishes](https://www.pngkit.com/png/full/2-28671_cods-group-of-fish-png.png)"},a}return Object(d.a)(t,[{key:"updateMarkdown",value:function(e){this.setState({markdown:e})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{id:"header",children:"Markdown Previewer"}),Object(b.jsxs)("div",{id:"editor-container",className:"small-container",children:[Object(b.jsx)("h2",{class:"my-h2",children:"Editor"}),Object(b.jsx)("textarea",{id:"editor",value:this.state.markdown,onChange:function(n){e.updateMarkdown(n.target.value)}})]}),Object(b.jsxs)("div",{id:"preview-container",className:"small-container",children:[Object(b.jsx)("h2",{class:"my-h2",children:"Preview"}),Object(b.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:j(this.state.markdown)}})]})]}),Object(b.jsxs)("div",{id:"bubbles",children:[Object(b.jsx)("div",{className:"bubble"}),Object(b.jsx)("div",{className:"bubble"}),Object(b.jsx)("div",{className:"bubble"}),Object(b.jsx)("div",{className:"bubble"}),Object(b.jsx)("div",{className:"bubble"}),Object(b.jsx)("div",{className:"bubble"})]})]})}}]),t}(i.a.Component),h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.efef34f3.chunk.js.map