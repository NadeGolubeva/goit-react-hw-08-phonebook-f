"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{157:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r,o,i,c,a,s,l,d,u,p,x,f,h,m,Z,b,g,j=t(168),v=t(4034),w=t(3495),y=t(3422),P=v.ZP.li(r||(r=(0,j.Z)(["\n  background-color: #e8eec5;\n  padding-left: 10px;\n  border-radius: 7px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n  border: 1px solid #2ca04f;\n  \n"]))),k=v.ZP.ul(o||(o=(0,j.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n"]))),z=(0,v.ZP)(w.Z)(i||(i=(0,j.Z)(["\n \n  margin-right: 8px;\n  color: #2ca04f;\n"]))),C=(0,v.ZP)(y.Z)(c||(c=(0,j.Z)(["\n  margin: 0 8px;\n  color: #2ca04f;\n"]))),A=v.ZP.div(a||(a=(0,j.Z)(["\n  min-width: 220px;\n"]))),F=v.ZP.h2(s||(s=(0,j.Z)(["\n  margin: 20px auto;\n  color: #132b1bbb;\n"]))),I=v.ZP.div(l||(l=(0,j.Z)(["\n  padding: 20px 0;\n"]))),L=t(7106),N=t(9434),_=t(4382),T=t(2791),q=v.ZP.div(d||(d=(0,j.Z)(["\n  font-size: 20px;\n"]))),K=v.ZP.input(u||(u=(0,j.Z)(["\n  height: 40px;\n  width: 250px;\n  padding: 0 10px;\n  font-size: 20px;\n  border: 1px solid #2ca04f;\n  border-radius: 5px;\n  transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;\n&:hover {border: 3px solid #2ca04f};\n&:focus {border: 3px solid #2ca04f};\n"]))),S=v.ZP.p(p||(p=(0,j.Z)(["\n  font-weight: 500;\n  margin-bottom: 20px;\n  color: #132b1bbb;\n"]))),D=t(5054),E=t(184),G=function(){var n=(0,N.I0)(),e=(0,N.v9)((function(n){return n.filter}));return(0,E.jsxs)(q,{children:[(0,E.jsx)(S,{children:"Find contacts by name"}),(0,E.jsx)(K,{type:"text",value:e,onChange:function(e){return n((0,D.ut)(e.target.value))}})]})},V=t(9439),Y=t(1891),$=t(2639),B=t(6587),H=(0,v.ZP)(Y.Z)(x||(x=(0,j.Z)(["\n  margin: 0 auto;\n\n"]))),J=v.ZP.button(f||(f=(0,j.Z)(["\n  margin-right: 8px;\n  margin-left: auto;\n background-color: #2ca04f;\n color: white;\n font-size: 16px;\n    height: 32px;\n    padding: 4px 15px;\n    border-radius: 6px;\n    border: 0px solid white;\n"]))),M=(0,v.ZP)(w.Z)(h||(h=(0,j.Z)(["\n  color: #2ca04f;\n"]))),O=(0,v.ZP)(y.Z)(m||(m=(0,j.Z)(["\n  color: #2ca04f;\n"]))),Q=(0,v.ZP)($.Z)(Z||(Z=(0,j.Z)(["\n  height: 35px;\n  font-size: 20px;\n  width: 100%;\n"]))),R=(0,v.ZP)(B.Z)(b||(b=(0,j.Z)(["\n  text-align: center;\n  .ant-modal-content {\n    width: 340px;\n    height: 225px;\n    position: absolute;\n    top: 50%;\n    left: 20%;\n    background-color: #e8eec5;\n  \n  }\n"]))),U=v.ZP.button(g||(g=(0,j.Z)(["\n  margin-right: 8px;\n  margin-top: 8px;\n  margin-left: auto;\n background-color: #2ca04f;\n color: white;\n font-size: 16px;\n    height: 32px;\n    padding: 4px 15px;\n    border-radius: 6px;\n    border: 0px solid white;\n      &:hover {\n    color: #132b1bbb;\n     \n  }\n\n"]))),W=function(){var n=(0,T.useState)(!1),e=(0,V.Z)(n,2),t=e[0],r=e[1],o=H.useForm(),i=(0,V.Z)(o,1)[0],c=(0,N.v9)((function(n){return n.contacts.items})),a=(0,N.v9)((function(n){return n.contacts.isLoading})),s=(0,N.I0)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(U,{type:"primary",onClick:function(){i.resetFields(),r(!0)},title:"add new contact",size:"large",children:"Add contact"}),(0,E.jsx)(R,{footer:null,title:"Add contact",open:t,onCancel:function(){return r(!1)},children:(0,E.jsxs)(H,{form:i,name:"normal_login",initialValues:{remember:!0},onFinish:function(n){var e={name:n.name,number:function(){var e=n.number;return e.length<7?"(".concat(e.slice(0,3),") ").concat(e.slice(3)):"(".concat(e.slice(0,3),") ").concat(e.slice(3,6),"-").concat(e.slice(6,10))}()},t=e.name.toLowerCase();c.find((function(n){return n.name.toLowerCase()===t}))?alert("".concat(e.name," is already in contact")):(s((0,_.uK)(e)),a||(i.resetFields(),r(!1)))},children:[(0,E.jsx)(H.Item,{name:"name",rules:[{required:!0,message:"Input Name!",type:"text"}],children:(0,E.jsx)(Q,{prefix:(0,E.jsx)(M,{}),placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})}),(0,E.jsx)(H.Item,{name:"number",rules:[{required:!0,message:"Please input Number!",type:"phone"}],children:(0,E.jsx)(Q,{prefix:(0,E.jsx)(O,{}),type:"",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"})}),(0,E.jsx)(H.Item,{children:(0,E.jsx)(J,{type:"primary",htmlType:"submit",children:"Create contact"})})]})})]})},X=t(229),nn=t(7309),en=t(2622);function tn(){var n=(0,N.I0)();(0,T.useEffect)((function(){n((0,_.yF)())}),[n]);var e=(0,N.v9)((function(n){return n.contacts})).isLoading,t=(0,N.v9)((function(n){return n.contacts.items})),r=(0,N.v9)((function(n){return n.filter})).toLowerCase(),o=t.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,E.jsx)("section",{children:(0,E.jsxs)(I,{children:[(0,E.jsxs)("div",{children:[" ",t.length<1?(0,E.jsx)(F,{children:"Add your contacts"}):(0,E.jsx)(G,{}),(0,E.jsx)(W,{}),e&&(0,E.jsx)(L.Z,{style:{fontSize:"22px",color:"#2ca04f"},spin:!0})]}),(0,E.jsx)(k,{children:o.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,E.jsxs)(P,{children:[(0,E.jsxs)(A,{children:[(0,E.jsx)(z,{}),r,":"]}),(0,E.jsxs)(A,{children:[(0,E.jsx)(C,{})," ",o]}),(0,E.jsx)(X.Z,{title:"Approve to delete this contact?",okText:"Yes",cancelText:"No",color:"#e8eec5",onConfirm:function(){return n((0,_.GK)(t))},children:(0,E.jsxs)(nn.ZP,{title:"delete contact",type:"primary",style:{backgroundColor:"#2ca04f"},children:[(0,E.jsx)(en.Z,{})," Delete"]})})]},t)}))})]})})}}}]);
//# sourceMappingURL=157.7ebbc200.chunk.js.map