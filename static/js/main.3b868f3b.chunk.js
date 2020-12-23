(this["webpackJsonpcn-react-helpers-example"]=this["webpackJsonpcn-react-helpers-example"]||[]).push([[0],{301:function(n,e,t){"use strict";t.r(e);t(50);var a=t(0),r=t.n(a),o=t(39),c=t.n(o),i=t(1),l=t(2);function m(){var n=Object(i.a)(["\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n"]);return m=function(){return n},n}function u(){var n=Object(i.a)(["\n  min-height: 100vh;\n  width: 100%;\n  background-color: #1f2334;\n  padding: 20px;\n"]);return u=function(){return n},n}var f=l.a.div(u()),d=l.a.div(m()),s=t(305),p=t(304);function h(){var n=Object(i.a)(["\n  border-radius: 0px !important;\n  margin: 0px !important;\n  position: relative;\n  font-size: 1.2em !important;\n  background-color: #262A3F !important;\n  *{\n    font-family: 'JetBrains Mono', monospace !important;\n  }\n\n  .react-syntax-highlighter-line-number{\n    opacity: 0.5;\n  }\n\n  @media(max-width: 800px){\n    font-size: 1em !important;\n  }\n"]);return h=function(){return n},n}var b=Object(l.a)(s.a)(h());function E(n){return r.a.createElement("div",null,r.a.createElement(b,{"data-testid":"syntax-code",showLineNumbers:!0,language:"jsx",style:p.a},n.code.trim()))}function x(){var n=Object(i.a)(["\n  color: #8c9eec;\n  font-weight: normal;\n  font-size: 1.5em;\n"]);return x=function(){return n},n}function g(){var n=Object(i.a)(["\n  color: #8c9eec;\n  text-align: center;\n"]);return g=function(){return n},n}function v(){var n=Object(i.a)(["\n  color: #FFFFFF;\n  font-size: 2.2em;\n  text-align: center;\n  font-weight: normal;\n\n  @media(max-width: 800px){\n    font-size: 1.9em;\n  }\n"]);return v=function(){return n},n}var w=l.a.h1(v()),j=l.a.p(g()),O=l.a.h1(x()),F=t(47),y=t.n(F),k=t(48),z=t.n(k);function H(){var n=Object(i.a)(["\n  margin-bottom: 30px;\n"]);return H=function(){return n},n}function S(){var n=Object(i.a)(["\n  margin-bottom: 50px;\n  padding: 20px;\n  background-color: #262a3f;\n  text-align: center;\n  font-size: 1.5em;\n  color: #00ffff;\n\n  @media(max-width: 800px){\n    font-size: 1em;\n  }\n"]);return S=function(){return n},n}function T(){var n=Object(i.a)(["\n  margin-bottom: 50px;\n"]);return T=function(){return n},n}function C(){var n=Object(i.a)(["\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n"]);return C=function(){return n},n}function J(){var n=Object(i.a)(["\n  display: block;\n  max-width: 280px;\n  margin: 0 auto 50px auto;\n\n  @media(max-width: 800px){\n    max-width: 230px;\n  }\n"]);return J=function(){return n},n}function B(){var n=Object(i.a)(["\n  margin-bottom: 50px;\n"]);return B=function(){return n},n}function A(){var n=Object(i.a)(["\n  width: 60px;\n  display: block;\n  margin: 25px auto 25px auto;\n"]);return A=function(){return n},n}var D=l.a.img(A()),I=l.a.div(B()),L=l.a.a(J()),M=l.a.img(C()),N=l.a.div(T()),R=l.a.div(S()),_=l.a.div(H());function q(){return r.a.createElement(f,null,r.a.createElement(d,null,r.a.createElement(D,{src:y.a}),r.a.createElement(I,null,r.a.createElement(w,null," React Helpers "),r.a.createElement("br",null),r.a.createElement(j,null," Some useful react components ")),r.a.createElement(L,{target:"_blank",href:"https://github.com/C4co/cn-react-helpers"},r.a.createElement(M,{src:z.a})),r.a.createElement(R,null,"npm install cn-react-helpers"),r.a.createElement(N,null,r.a.createElement(O,null," ","<Show />"," "),r.a.createElement("br",null),r.a.createElement(E,{code:'\nimport { Show } from "cn-react-helpers"\nconst foo: number = 10\nconst bar: number = 5\n\n...\n\n// default\n{ foo > bar && <h1> valid condition </h1> }\n\n// show component\n<Show if={foo > bar}>\n  <h1> valid condition </h1>\n</Show>\n'})),r.a.createElement(N,null,r.a.createElement(O,null," ","<Hide />"," "),r.a.createElement("br",null),r.a.createElement(E,{code:'\nimport { Hide } from "cn-react-helpers"\nconst foo: number = 10\nconst bar: number = 5\n\n...\n\n// default\n{ foo > bar && <h1> valid condition </h1> }\n\n// Hide component\n<Hide if={foo > bar}>\n  <h1> valid condition </h1>\n</Hide>\n'})),r.a.createElement(N,null,r.a.createElement(O,null," ","<Each />"," "),r.a.createElement("br",null),r.a.createElement(E,{code:'\nimport { Each } from "cn-react-helpers"\nconst elements = [1, 2, 3, 4, 5]\n\n...\n\n// default\n{elements.each((item: number) => (\n  <h1> {item} </h1>\n))}\n\n// Each component\n<Each items=[elements]>\n  {(item: number) => (\n    <h1> {item} </h1>\n  )}\n</Each>\n'})),r.a.createElement(N,null,r.a.createElement(O,null," ","<Filter />"," "),r.a.createElement("br",null),r.a.createElement(E,{code:'\nimport { Filter } from "cn-react-helpers"\nconst elements = [1, 2, 3, 4, 5]\n\n...\n\n// default\n{elements.filter(item: number) => {\n  if(item > 5){\n    return (\n      <h1> {item} </h1>\n    )\n  }\n}}\n\n// Filter component\n<Filter items=[elements] if={(item: number) => item > 5}>\n  {(item: number) => (\n    <h1> {item} </h1>\n  )}\n</Filter>\n'})),r.a.createElement(N,null,r.a.createElement(O,null," ","<Truncate />"," "),r.a.createElement("br",null),r.a.createElement(E,{code:'\nimport { Truncate } from "cn-react-helpers"\n\n...\n\n<Truncate size="3" end="...">\n  Hello world!\n</Truncate>\n'})),r.a.createElement(_,null,r.a.createElement(j,null," Designed and coded by Carlos Costa "))))}c.a.render(r.a.createElement(q,null),document.getElementById("root"))},47:function(n,e,t){n.exports=t.p+"static/media/logo.10888a7b.svg"},48:function(n,e,t){n.exports=t.p+"static/media/github.e4cba353.svg"},49:function(n,e,t){n.exports=t(301)},50:function(n,e,t){}},[[49,1,2]]]);
//# sourceMappingURL=main.3b868f3b.chunk.js.map