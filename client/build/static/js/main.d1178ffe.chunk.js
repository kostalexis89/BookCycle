(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),c=t(25),s=t.n(c),r=(t(95),t(96),t(17)),l=t(3),o=t(10),d=t.n(o),u=t(8),m=t(1),j=i.a.createContext();function b(a){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),o=r[0],b=r[1],p=Object(n.useState)(!0),h=Object(l.a)(p,2),O=h[0],g=h[1],x=Object(u.f)(),f=function(){var a=localStorage.getItem("authToken");a?d.a.get("/auth/verify",{headers:{Authorization:"Bearer ".concat(a)}}).then((function(a){var e=a.data;b(e),c(!0),g(!1)})).catch((function(a){c(!1),b(null),g(!1)})):g(!1)};return Object(n.useEffect)((function(){f()}),[]),Object(m.jsx)(j.Provider,{value:{isLoggedIn:i,user:o,isLoading:O,loginUser:function(a){localStorage.setItem("authToken",a),f()},logoutUser:function(){localStorage.removeItem("authToken"),c(!1),b(null),x("/")}},children:a.children})}var p=t(50),h=t(88),O=t(35),g=t(72),x=t(89);function f(){var a=Object(n.useContext)(j),e=a.isLoggedIn,t=a.user,i=a.logoutUser;return Object(m.jsx)(p.a,{bg:"dark",expand:!1,variant:"dark",children:Object(m.jsxs)(O.a,{fluid:!0,children:[Object(m.jsx)(p.a.Brand,{href:"#",children:"BookCycle"}),e&&Object(m.jsxs)(p.a.Brand,{children:["Welcome ",t.username," "]}),Object(m.jsx)(p.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(m.jsxs)(p.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(m.jsx)(h.a.Header,{closeButton:!0,children:Object(m.jsx)(h.a.Title,{id:"offcanvasNavbarLabel",children:"Welcome to BookCycle"})}),Object(m.jsx)(h.a.Body,{className:"sidebar",children:Object(m.jsxs)(x.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(m.jsx)(r.b,{to:"/",className:"menuLinks",children:"Home"}),e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(g.a,{title:"My BookCycle",id:"dropdown",children:[Object(m.jsx)(r.b,{to:"/myLibrary",className:"dropdown-item",children:"My Library"}),Object(m.jsx)(g.a.Divider,{}),Object(m.jsx)(r.b,{to:"/inbox",className:"dropdown-item",children:"Inbox Requests"}),Object(m.jsx)(r.b,{to:"/outbox",className:"dropdown-item",children:"Outbox Requests"})]}),Object(m.jsx)(r.b,{to:"/",className:"menuLinks",onClick:i,children:"Logout"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r.b,{to:"/signup",className:"menuLinks",children:"Sign Up"}),Object(m.jsx)(r.b,{to:"/login",className:"menuLinks",children:"Log In"})]})]})})]})]})})}var v=t(7),y=t(12),S=t(86);function k(){var a=Object(n.useState)(""),e=Object(l.a)(a,2),t=e[0],i=e[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),r=s[0],o=s[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),p=b[0],h=b[1],O=Object(n.useState)(""),g=Object(l.a)(O,2),x=g[0],f=g[1],k=Object(n.useState)([]),w=Object(l.a)(k,2),N=w[0],C=w[1],I=Object(n.useState)(""),B=Object(l.a)(I,2),T=B[0],M=B[1],P=Object(n.useState)(void 0),A=Object(l.a)(P,2),L=A[0],G=A[1],F=Object(u.f)();Object(n.useEffect)((function(){var a=[];S.data.map((function(e){return e.capital.toLowerCase().includes(x.toLowerCase())&&a.unshift(e.capital+", "+e.name),!0})),0===x.length&&(a=[]),a=a.slice(0,5),C(a)}),[x]);var R=function(a){return f(a.target.innerHTML)};return Object(m.jsxs)("div",{className:"App-header",children:[Object(m.jsx)("h1",{className:"headingOne",children:"Sign Up to BookCycle"}),Object(m.jsxs)(v.a,{onSubmit:function(a){a.preventDefault();var e={email:r,password:p,username:t,town:x};d.a.post("/auth/signup",e).then((function(a){F("/login")})).catch((function(a){var e=a.response.data.message;G(e)}))},children:[Object(m.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(m.jsx)(v.a.Label,{children:"Username"}),Object(m.jsx)(v.a.Control,{type:"text",placeholder:"Username",value:t,onChange:function(a){return i(a.target.value)}})]}),Object(m.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(v.a.Label,{children:"Email address"}),Object(m.jsx)(v.a.Control,{type:"email",placeholder:"Enter email",value:r,onChange:function(a){return o(a.target.value)}}),Object(m.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your e-mail to third party"})]}),Object(m.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(v.a.Label,{children:"Password"}),Object(m.jsx)(v.a.Control,{type:"password",placeholder:"Password",value:p,onChange:function(a){return h(a.target.value)}})]}),Object(m.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicTown",children:[Object(m.jsx)(v.a.Label,{children:"Town"}),Object(m.jsx)(v.a.Control,{type:"text",placeholder:"Password",value:x,onChange:function(a){f(a.target.value)}}),Object(m.jsx)("div",{className:"drop-towns",children:N.map((function(a,e){return Object(m.jsx)("div",{className:"child-towns",onClick:R,children:a},e)}))})]}),Object(m.jsxs)(v.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(m.jsx)(v.a.Label,{children:"Upload Image"}),Object(m.jsx)(v.a.Control,{type:"file",value:T,onChange:function(a){return M(a.target.value)}})]}),Object(m.jsx)(y.a,{variant:"danger",type:"submit",children:"Submit"})]}),L&&Object(m.jsx)("p",{children:L}),Object(m.jsx)("p",{children:"Already have an account?"}),Object(m.jsx)(y.a,{variant:"danger",children:"Login"})]})}function w(){var a=Object(n.useState)(""),e=Object(l.a)(a,2),t=e[0],i=e[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),o=s[0],b=s[1],p=Object(n.useState)(void 0),h=Object(l.a)(p,2),O=h[0],g=h[1],x=Object(u.f)(),f=Object(n.useContext)(j).loginUser;return Object(m.jsxs)("div",{className:"App-header App",children:[Object(m.jsx)("h1",{className:"headingOne",children:"Log In"}),Object(m.jsxs)(v.a,{onSubmit:function(a){a.preventDefault();var e={email:t,password:o};d.a.post("/auth/login",e).then((function(a){var e=a.data.authToken;f(e),x("/")})).catch((function(a){var e=a.response.data.message;g(e)}))},children:[Object(m.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(v.a.Label,{children:"Email address"}),Object(m.jsx)(v.a.Control,{type:"email",placeholder:"Enter email",value:t,onChange:function(a){return i(a.target.value)}})]}),Object(m.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(v.a.Label,{children:"Password"}),Object(m.jsx)(v.a.Control,{type:"password",placeholder:"Password",value:o,onChange:function(a){return b(a.target.value)}})]}),Object(m.jsx)(y.a,{variant:"danger",type:"submit",children:"Log In"}),O&&Object(m.jsx)("p",{children:O}),Object(m.jsxs)(v.a.Group,{children:[Object(m.jsx)(v.a.Text,{className:"text-muted",children:"Don't have an account?"}),Object(m.jsx)("br",{}),Object(m.jsx)(y.a,{variant:"danger",children:Object(m.jsx)(r.b,{id:"signup-btn",to:"/signup",children:"Sign up"})})]})]})]})}var N=t(28),C=t(24),I=(t(59),t(9)),B=t(68),T=(t(120),t(87));function M(a){var e=a.owner,t=a.ownerId,i=a.bookId,c=Object(n.useContext)(j).user,s=Object(n.useState)(!0),r=Object(l.a)(s,2),o=r[0],u=r[1],b=Object(n.useState)(""),p=Object(l.a)(b,2),h=p[0],O=p[1],g=function(){u(!o)};return Object(m.jsx)(m.Fragment,{children:o?Object(m.jsxs)(y.a,{variant:"danger",onClick:g,children:["Send a message to ",e]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(v.a,{className:"send-form",onSubmit:function(a){a.preventDefault(),d.a.post("/messages/sendRequest",{userId:c._id,ownerId:t,message:c.username+": "+h,bookId:i}).then((function(a){console.log(a)})),O("")},style:{width:"100%"},children:[Object(m.jsx)(v.a.Group,{className:"mb-2",controlId:"exampleForm.ControlTextarea1",style:{width:"100%"},children:Object(m.jsx)(v.a.Control,{value:h,onChange:function(a){a.preventDefault(),O(a.target.value)},as:"textarea",rows:3,placeholder:"Write a message "})}),Object(m.jsxs)("div",{className:"message-btns",children:[Object(m.jsx)(y.a,{variant:"danger",type:"submit",children:"Submit Request"}),Object(m.jsx)(y.a,{variant:"danger",onClick:g,children:"Cancel"})]})]})})})}function P(a){var e=a.title,t=a.description,i=a.image,c=a.author,s=a.language,r=(a.town,a.usersBookId),o=a.bookId,u=a.setRefresh,b=a.refresh,p=a.owner,h=a.ownerId,O=Object(n.useState)(!0),g=Object(l.a)(O,2),x=g[0],f=g[1],v=Object(n.useState)(""),S=Object(l.a)(v,2),k=S[0],w=S[1],N=Object(n.useContext)(j).user,C=Object(n.useState)(!0),I=Object(l.a)(C,2),B=I[0],P=I[1];return Object(m.jsx)(m.Fragment,{children:B?Object(m.jsxs)("div",{className:"modal-wrapper",children:[Object(m.jsx)("div",{className:"image-wrapper",children:Object(m.jsx)("img",{src:i,alt:e})}),Object(m.jsxs)("div",{className:"info-wrapper",children:[Object(m.jsxs)("div",{className:"title-wrapper",children:[Object(m.jsx)("h3",{children:e}),Object(m.jsxs)("h3",{children:["by ",c]}),Object(m.jsxs)("h3",{children:["language: ",s]})]}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("h5",{children:["Owner ",p]}),Object(m.jsx)("div",{className:"button-wrapper",children:N._id===r?Object(m.jsxs)(m.Fragment,{children:[x?Object(m.jsx)(y.a,{variant:"danger",onClick:function(){f(!x)},children:"Edit Purpose or availability"}):Object(m.jsxs)("div",{className:"addProperties",onClick:function(a){w(a.target.value)},children:[Object(m.jsxs)("span",{className:"radio-select",children:[Object(m.jsx)("input",{type:"radio",value:"GiveAway",name:"gender",id:"giveaway"})," ",Object(m.jsx)("label",{htmlFor:"giveaway",children:"Give Away"})]}),Object(m.jsxs)("span",{className:"radio-select",children:[Object(m.jsx)("input",{type:"radio",value:"Exchange",name:"gender",id:"exchange"})," ",Object(m.jsx)("label",{htmlFor:"exchange",children:"Exchange"})]}),Object(m.jsxs)("span",{className:"radio-select",children:[Object(m.jsx)("input",{type:"radio",value:"TradeForAPeriod",name:"gender",id:"shortTrade"}),Object(m.jsx)("label",{htmlFor:"shortTrade",children:"Short Trade"})]}),Object(m.jsx)(y.a,{variant:"danger",onClick:function(){if(console.log("I am handling"),""!==k){var a=N._id,e=r;d.a.post("/books/edit/".concat(o),{userId:a,bookOwner:e,purpose:k}).then((function(){u(!b),P(!1)}))}console.log(k)},children:"Update Purpose"})]}),Object(m.jsx)(y.a,{variant:"danger",onClick:function(){console.log(N._id);var a=N._id,e=r;d.a.post("books/delete/".concat(o),{userId:a,bookOwner:e}).then((function(){u(!b),P(!1)})).catch((function(a){return console.log(a)}))},children:"Delete from your Collection"})]}):Object(m.jsx)(M,{owner:p,ownerId:h,bookId:o})})]})]}):Object(m.jsx)("span",{style:{justifyContent:"space-around"},children:Object(m.jsx)(T.a,{animation:"grow"})})})}function A(a){var e=a.title,t=a.ownerId,i=a.description,c=a.image,s=a.author,r=a.language,o=a.town,d=a.usersBookId,u=a.bookId,j=a.setRefresh,b=a.refresh,p=a.owner,h=Object(n.useState)(""),O=Object(l.a)(h,2),g=O[0],x=O[1];return Object(n.useEffect)((function(){i&&x(i.slice(0,100-e.length+s.length+r.length+o.length)+"...")}),[]),Object(m.jsx)(B.a,{trigger:Object(m.jsx)("div",{className:"book-card",children:Object(m.jsxs)(I.a,{className:"home-card",style:{width:"14rem"},children:[Object(m.jsx)(I.a.Img,{variant:"top",src:c}),Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Title,{children:e}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["By ",s]}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["Written in ",r]}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["Location ",o]}),Object(m.jsx)(I.a.Text,{children:g})]})]})}),modal:!0,children:Object(m.jsx)(P,{title:e,description:i,image:c,author:s,language:r,town:o,usersBookId:d,bookId:u,setRefresh:j,refresh:b,owner:p,ownerId:t})})}var L=t(46),G=t.n(L);function F(a){var e=a.purpose,t=a.user,i=a.town,c=Object(n.useState)([]),s=Object(l.a)(c,2),r=s[0],o=s[1];Object(n.useEffect)((function(){d.a.post("books/byPurpose",{user:t,purpose:e,town:i}).then((function(a){o(a.data)})).catch((function(a){return console.log(a)}))}),[]);var u=r.map((function(a){return Object(m.jsx)("div",{children:Object(m.jsx)(A,{title:a.title,description:a.description,image:a.image,author:a.author,language:a.language,town:a.town,usersBookId:a.user,bookId:a._id,owner:a.user.username,ownerId:a.user._id})},"book._id")}));return Object(m.jsx)("div",{children:Object(m.jsx)(G.a,{partialVisible:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30}},infinite:!0,children:u})})}function R(a){var e=a.user,t=a.town,i=Object(n.useState)([]),c=Object(l.a)(i,2),s=c[0],r=c[1];Object(n.useEffect)((function(){d.a.post("books/town",{user:e,town:t}).then((function(a){r(a.data)})).catch((function(a){return console.log(a)}))}),[]);var o=s.map((function(a){return Object(m.jsx)("div",{children:Object(m.jsx)(A,{title:a.title,description:a.description,image:a.image,author:a.author,language:a.language,town:a.town,usersBookId:a.user,bookId:a._id,owner:a.user.username,ownerId:a.user._id})},"book._id")}));return Object(m.jsx)("div",{children:Object(m.jsx)(G.a,{partialVisible:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30}},infinite:!0,children:o})})}function E(){var a=Object(n.useContext)(j).user;return Object(m.jsx)(m.Fragment,{children:a?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(O.a,{children:[Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2-home",children:Object(m.jsxs)("span",{className:"headers-container",children:["Books accross ",a.town]})}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(R,{user:a._id,town:a.town})," "]})]}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2-home",children:Object(m.jsxs)("span",{className:"headers-container",children:["Give Away Books in ",a.town]})}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(F,{purpose:"GiveAway",user:a._id,town:a.town})," "]})]}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2-home",children:Object(m.jsxs)("span",{className:"headers-container",children:["Exchange Books among ",a.town]})}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(F,{purpose:"Exchange",user:a._id,town:a.town})," "]})]}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2-home",children:Object(m.jsxs)("span",{className:"headers-container",children:["Trade Books for Short Period in ",a.town]})}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(F,{purpose:"TradeForAPeriod",user:a._id,town:a.town})," "]})]})]})}):Object(m.jsxs)("div",{className:"front-page",children:[Object(m.jsx)("h1",{children:"Welcome to BookCycle"}),Object(m.jsx)("p",{children:"An application that helps people trade exchange or Give Away their books"})]})})}function D(a){var e=a.title,t=a.message,i=a.description,c=a.image,s=a.author,r=a.language,o=a.handleStoreToMyDB,d=a.handlePurpose,u=Object(n.useState)(""),j=Object(l.a)(u,2),b=j[0],p=j[1];return Object(n.useEffect)((function(){console.log(i),i&&"string"===typeof i&&p(i.slice(0,70)+"...")}),[]),console.log(t),Object(m.jsxs)("div",{children:[Object(m.jsxs)(I.a,{style:{width:"18rem"},children:[Object(m.jsx)(I.a.Img,{variant:"top",src:c}),Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Title,{children:e}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["By ",s]}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["Written in ",r]}),Object(m.jsx)(I.a.Text,{children:b}),Object(m.jsxs)("div",{className:"addProperties",onChange:d,children:[Object(m.jsxs)("span",{className:"radio-select",children:[Object(m.jsx)("input",{type:"radio",value:"GiveAway",name:"gender",id:"giveaway"})," ",Object(m.jsx)("label",{htmlFor:"giveaway",children:"Give Away"})]}),Object(m.jsxs)("span",{className:"radio-select",children:[Object(m.jsx)("input",{type:"radio",value:"Exchange",name:"gender",id:"exchange"})," ",Object(m.jsx)("label",{htmlFor:"exchange",children:"Exchange"})]}),Object(m.jsxs)("span",{className:"radio-select",children:[Object(m.jsx)("input",{type:"radio",value:"TradeForAPeriod",name:"gender",id:"shortTrade"}),Object(m.jsx)("label",{htmlFor:"shortTrade",children:"Short Trade"})]})]}),Object(m.jsx)(y.a,{onClick:o,variant:"danger",children:"Add it to my Library"})]})]}),t&&Object(m.jsx)("p",{children:t})]})}function _(a){var e=a.handleSubmit,t=a.handleIsbn,n=a.isbn;return Object(m.jsxs)(v.a,{className:"searchIsbn",onSubmit:e,children:[Object(m.jsx)(v.a.Group,{className:"mb-3",controlId:"formBasicIsbn",children:Object(m.jsx)(v.a.Control,{type:"text",placeholder:"Isbn",value:n,onChange:t})}),Object(m.jsx)(y.a,{variant:"danger",type:"submit",children:"Search with Isbn"})]})}function V(a){var e=a.user,t=a.purpose,i=a.refresh,c=a.setRefresh,s=Object(n.useState)([]),r=Object(l.a)(s,2),o=r[0],u=r[1];Object(n.useEffect)((function(){var a=e._id;d.a.post("books/mycollection",{userId:a,purpose:t}).then((function(a){u(a.data)})).catch((function(a){return console.log(a)}))}),[i]);var j=o.map((function(a){return Object(m.jsx)("div",{children:Object(m.jsx)(A,{title:a.title,description:a.description,image:a.image,author:a.author,language:a.language,town:a.town,usersBookId:a.user._id,bookId:a._id,setRefresh:c,refresh:i,owner:a.user.username})},"book._id")}));return Object(m.jsx)("div",{children:Object(m.jsx)(G.a,{partialVisible:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30}},infinite:!0,children:j})})}function q(){var a=Object(n.useState)(""),e=Object(l.a)(a,2),t=e[0],i=e[1],c=Object(n.useState)(null),s=Object(l.a)(c,2),r=s[0],o=s[1],u=Object(n.useState)(null),b=Object(l.a)(u,2),p=b[0],h=b[1],g=Object(n.useState)(null),x=Object(l.a)(g,2),f=x[0],v=x[1],y=Object(n.useState)(null),S=Object(l.a)(y,2),k=S[0],w=S[1],I=Object(n.useState)(null),B=Object(l.a)(I,2),T=B[0],M=B[1],P=Object(n.useState)(null),A=Object(l.a)(P,2),L=A[0],G=A[1],F=Object(n.useContext)(j).user,R=Object(n.useState)(!1),E=Object(l.a)(R,2),q=E[0],K=E[1],H=Object(n.useState)(null),U=Object(l.a)(H,2),z=U[0],W=U[1];return Object(m.jsx)(O.a,{children:Object(m.jsxs)(N.a,{children:[Object(m.jsxs)(C.a,{className:"my-library-left-column align-top",sm:4,children:[Object(m.jsx)(_,{handleSubmit:function(a){a.preventDefault(),W(null);var e="https://openlibrary.org/isbn/".concat(t,".json");d.a.get(e).then((function(a){console.log(a.data),o(a.data.title);var e="https://openlibrary.org".concat(a.data.works[0].key,".json");d.a.get(e).then((function(a){console.log(a.data);var e="https://openlibrary.org".concat(a.data.authors[0].author.key,".json");d.a.get(e).then((function(a){h(a.data.name)})).catch((function(a){return console.log(a)}));var t="https://covers.openlibrary.org/b/id/".concat(a.data.covers[0],"-L.jpg");w(t),void 0!==a.data.description&&v(a.data.description)})).catch((function(a){return console.log(a)}));var t="https://openlibrary.org".concat(a.data.languages[0].key,".json");d.a.get(t).then((function(a){M(a.data.name)}))})).catch((function(a){return console.log(a)}))},isbn:t,handleIsbn:function(a){return i(a.target.value)}}),r&&p&&T&&Object(m.jsx)(D,{title:r,message:z,author:p,language:T,description:f,image:k,handleStoreToMyDB:function(a){a.preventDefault(),"string"!==typeof f&&null!==f&&v(f.value),console.log(f);var e={isbn:t,title:r,description:f,author:p,image:k,language:T,town:F.town,purpose:L,available:!0,user:F._id};d.a.post("/books/add",e).then((function(a){i(""),h(null),v(""),w(null),M(null),G(null),o(null),a.data.message&&W(a.data.message)})).catch((function(a){return console.log(a)})),K(!q)},handlePurpose:function(a){G(a.target.value)}}),z&&Object(m.jsx)("p",{children:z})]}),Object(m.jsxs)(C.a,{className:"my-library-right-column",sm:8,children:[Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2",children:Object(m.jsx)("span",{className:"headers-container",children:"My Books to Give Away"})}),Object(m.jsx)(V,{user:F,refresh:q,setRefresh:K,purpose:"GiveAway"})]}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2",children:Object(m.jsx)("span",{className:"headers-container",children:"My Books for Exchange"})}),Object(m.jsx)(V,{refresh:q,setRefresh:K,user:F,purpose:"Exchange"})]}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)("h2",{className:"headers-h2",children:Object(m.jsx)("span",{className:"headers-container",children:"My Books for short trade period"})}),Object(m.jsx)(V,{refresh:q,setRefresh:K,user:F,purpose:"TradeForAPeriod"})]})]})]})})}function K(a){var e=a.messageHistory,t=a.requestId,i=a.proposal,c=a.requestSender,s=a.refresh,r=a.setRefresh,o=a.requestReciever,u=a.sendersBookList,b=Object(n.useState)(""),p=Object(l.a)(b,2),h=p[0],g=p[1],x=Object(n.useState)(null),f=Object(l.a)(x,2),S=f[0],k=f[1],w=Object(n.useContext)(j).user,B=Object(n.useState)(""),T=Object(l.a)(B,2),M=(T[0],T[1]),P=Object(n.useState)(!1),A=Object(l.a)(P,2),L=A[0],G=A[1],F=function(a,e){console.log(e),console.log(t),d.a.post("/messages/agree",{userId:a,requestId:t,userType:e}).then((function(a){console.log(a)}))},R=u.map((function(a){return Object(m.jsx)(I.a,{className:"message-card-for-grid",style:{width:"14rem"},children:Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Title,{onClick:function(){return function(a){M(a._id),d.a.post("/messages/requestexchange",{bookId:a._id,requestId:t}).then((function(a){console.log(a)})),G(!L),k(a.title)}(a)},children:a.title}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["By ",a.author]}),S===a.title&&Object(m.jsx)(y.a,{variant:"danger",onClick:function(){return F(o._id,"Receiver")},children:"Purpose Completed"})]})})})),E=e.slice(-8).map((function(a){return Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:a},t)})}));return Object(m.jsx)(O.a,{children:Object(m.jsxs)(N.a,{className:"card-wrap",children:[Object(m.jsx)(C.a,{className:"my-library-left-column",sm:5,children:Object(m.jsxs)("div",{className:"message-section",children:[E,Object(m.jsxs)(v.a,{className:"send-form",onSubmit:function(a){a.preventDefault(),console.log(h),console.log(o),d.a.post("/messages/send",{message:w.username+": "+h,requestId:t}).then((function(a){console.log(a)})),g(""),r(s+1)},children:[Object(m.jsx)(v.a.Group,{className:"mb-2",controlId:"exampleForm.ControlTextarea1",children:Object(m.jsx)(v.a.Control,{value:h,onChange:function(a){a.preventDefault(),g(a.target.value)},as:"textarea",rows:3,placeholder:"Write a message "})}),Object(m.jsxs)("div",{className:"message-btns",children:[Object(m.jsx)(y.a,{variant:"danger",type:"submit",children:"Send Message"}),Object(m.jsx)(y.a,{variant:"danger",onClick:function(){console.log(t),d.a.post("/messages/cancel",{requestId:t}).then((function(a){console.log(a),r(s+1)}))},children:"Cancel Request"})]})]})]},t)}),Object(m.jsxs)(C.a,{children:[w._id!==c._id&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"message-title",children:"Click a Title to Propose ur exchange wish"}),Object(m.jsx)("div",{className:"message-grid",children:R})]}),w._id===c._id&&Object(m.jsx)("div",{className:"message-grid",children:Object(m.jsxs)("div",{className:"proposal",children:[Object(m.jsxs)("h2",{className:"title-proposal",children:[o.username," is asking for"]}),i&&Object(m.jsxs)(I.a,{className:"message-card-for-grid",style:{width:"14rem"},children:[Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Img,{variant:"top",src:i.image}),Object(m.jsx)(I.a.Title,{children:i.title}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["By ",i.author]})]}),Object(m.jsx)(y.a,{variant:"danger",onClick:function(){return F(c._id,"sender")},children:"Purpose Completed"})]})]})})]})]})})}function H(a){var e=a.request,t=a.refresh,i=a.setRefresh,c=a.proposal,s=Object(n.useState)([]),r=Object(l.a)(s,2),o=r[0],u=r[1];return Object(n.useEffect)((function(){var a=e.sender._id;d.a.post("/books/getbooklist",{requestId:a}).then((function(a){console.log(a),u(a.data)}))}),[]),Object(m.jsx)(B.a,{trigger:Object(m.jsx)("div",{children:Object(m.jsxs)(I.a,{style:{width:"14rem"},children:[Object(m.jsx)(I.a.Img,{variant:"top",src:e.book.image}),Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Title,{children:e.book.title}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["By ",e.book.author]}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["Requested by user ",e.sender.username]}),Object(m.jsxs)(I.a.Subtitle,{className:"mb-2 text-muted",children:["Owner ",e.reciever.username]})]})]})},e.book._id),modal:!0,children:Object(m.jsx)(K,{proposal:c,sendersBookList:o,refresh:t,setRefresh:i,messageHistory:e.message,requestSender:e.sender,requestReciever:e.reciever,requestId:e._id})})}function U(){var a=Object(n.useContext)(j).user,e=Object(n.useState)([]),t=Object(l.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(0),r=Object(l.a)(s,2),o=r[0],u=r[1];Object(n.useEffect)((function(){d.a.post("/messages/outbox",{sender:a._id}).then((function(a){console.log("hello from response",a),c(a.data)}))}));var b=i.map((function(a){return Object(m.jsx)("div",{children:Object(m.jsx)(H,{request:a,refresh:o,setRefresh:u,proposal:a.proposal})})}));return Object(m.jsx)("div",{className:"grid",children:b})}function z(){var a=Object(n.useContext)(j).user,e=Object(n.useState)([]),t=Object(l.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(0),r=Object(l.a)(s,2),o=r[0],u=r[1];Object(n.useEffect)((function(){d.a.post("/messages/inbox",{reciever:a._id}).then((function(a){c(a.data)}))}));var b=i.map((function(a){return Object(m.jsx)("div",{children:Object(m.jsx)(H,{request:a,refresh:o,setRefresh:u})},a.book._id)}));return Object(m.jsx)("div",{className:"grid",children:b})}var W=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)("header",{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",element:Object(m.jsx)(E,{})}),Object(m.jsx)(u.a,{path:"/signup",element:Object(m.jsx)(k,{})}),Object(m.jsx)(u.a,{path:"/login",element:Object(m.jsx)(w,{})}),Object(m.jsx)(u.a,{path:"/myLibrary",element:Object(m.jsx)(q,{})}),Object(m.jsx)(u.a,{path:"/outbox",element:Object(m.jsx)(U,{})}),Object(m.jsx)(u.a,{path:"/inbox",element:Object(m.jsx)(z,{})})]})})]})},J=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,141)).then((function(e){var t=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;t(a),n(a),i(a),c(a),s(a)}))};t(133);s.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(b,{children:Object(m.jsx)(W,{})})}),document.getElementById("root")),J()},86:function(a){a.exports=JSON.parse('{"error":false,"msg":"countries and capitals retrieved","data":[{"name":"Afghanistan","capital":"Kabul"},{"name":"Aland Islands","capital":"Mariehamn"},{"name":"Albania","capital":"Tirana"},{"name":"Algeria","capital":"Algiers"},{"name":"American Samoa","capital":"Pago Pago"},{"name":"Andorra","capital":"Andorra la Vella"},{"name":"Angola","capital":"Luanda"},{"name":"Anguilla","capital":"The Valley"},{"name":"Antarctica","capital":""},{"name":"Antigua and Barbuda","capital":"St. John\'s"},{"name":"Argentina","capital":"Buenos Aires"},{"name":"Armenia","capital":"Yerevan"},{"name":"Aruba","capital":"Oranjestad"},{"name":"Australia","capital":"Canberra"},{"name":"Austria","capital":"Vienna"},{"name":"Azerbaijan","capital":"Baku"},{"name":"Bahamas","capital":"Nassau"},{"name":"Bahrain","capital":"Manama"},{"name":"Bangladesh","capital":"Dhaka"},{"name":"Barbados","capital":"Bridgetown"},{"name":"Belarus","capital":"Minsk"},{"name":"Belgium","capital":"Brussels"},{"name":"Belize","capital":"Belmopan"},{"name":"Benin","capital":"Porto-Novo"},{"name":"Bermuda","capital":"Hamilton"},{"name":"Bhutan","capital":"Thimphu"},{"name":"Bolivia","capital":"Sucre"},{"name":"Bonaire, Saint Eustatius and Saba ","capital":""},{"name":"Bosnia and Herzegovina","capital":"Sarajevo"},{"name":"Botswana","capital":"Gaborone"},{"name":"Bouvet Island","capital":""},{"name":"Brazil","capital":"Brasilia"},{"name":"British Indian Ocean Territory","capital":"Diego Garcia"},{"name":"British Virgin Islands","capital":"Road Town"},{"name":"Brunei","capital":"Bandar Seri Begawan"},{"name":"Bulgaria","capital":"Sofia"},{"name":"Burkina Faso","capital":"Ouagadougou"},{"name":"Burundi","capital":"Bujumbura"},{"name":"Cambodia","capital":"Phnom Penh"},{"name":"Cameroon","capital":"Yaounde"},{"name":"Canada","capital":"Ottawa"},{"name":"Cape Verde","capital":"Praia"},{"name":"Cayman Islands","capital":"George Town"},{"name":"Central African Republic","capital":"Bangui"},{"name":"Chad","capital":"N\'Djamena"},{"name":"Chile","capital":"Santiago"},{"name":"China","capital":"Beijing"},{"name":"Christmas Island","capital":"Flying Fish Cove"},{"name":"Cocos (Keeling) Islands","capital":"West Island"},{"name":"Cocos Islands","capital":"West Island"},{"name":"Colombia","capital":"Bogota"},{"name":"Comoros","capital":"Moroni"},{"name":"Cook Islands","capital":"Avarua"},{"name":"Costa Rica","capital":"San Jose"},{"name":"Croatia","capital":"Zagreb"},{"name":"Cuba","capital":"Havana"},{"name":"Curacao","capital":" Willemstad"},{"name":"Cyprus","capital":"Nicosia"},{"name":"Czech Republic","capital":"Prague"},{"name":"Democratic Republic of the Congo","capital":"Kinshasa"},{"name":"Denmark","capital":"Copenhagen"},{"name":"Djibouti","capital":"Djibouti"},{"name":"Dominica","capital":"Roseau"},{"name":"Dominican Republic","capital":"Santo Domingo"},{"name":"Ecuador","capital":"Quito"},{"name":"Egypt","capital":"Cairo"},{"name":"El Salvador","capital":"San Salvador"},{"name":"Equatorial Guinea","capital":"Malabo"},{"name":"Eritrea","capital":"Asmara"},{"name":"Estonia","capital":"Tallinn"},{"name":"Ethiopia","capital":"Addis Ababa"},{"name":"Falkland Islands","capital":"Stanley"},{"name":"Faroe Islands","capital":"Torshavn"},{"name":"Fiji","capital":"Suva"},{"name":"Finland","capital":"Helsinki"},{"name":"France","capital":"Paris"},{"name":"French Polynesia","capital":"Papeete"},{"name":"French Southern Territories","capital":"Port-aux-Francais"},{"name":"Gabon","capital":"Libreville"},{"name":"Gambia","capital":"Banjul"},{"name":"Georgia","capital":"Tbilisi"},{"name":"Germany","capital":"Berlin"},{"name":"Ghana","capital":"Accra"},{"name":"Gibraltar","capital":"Gibraltar"},{"name":"Greece","capital":"Athens"},{"name":"Greenland","capital":"Nuuk"},{"name":"Grenada","capital":"St. George\'s"},{"name":"Guadeloupe","capital":"Basse-Terre"},{"name":"Guam","capital":"Hagatna"},{"name":"Guatemala","capital":"Guatemala City"},{"name":"Guernsey","capital":"St Peter Port"},{"name":"Guinea","capital":"Conakry"},{"name":"Guinea-Bissau","capital":"Bissau"},{"name":"Guyana","capital":"Georgetown"},{"name":"Haiti","capital":"Port-au-Prince"},{"name":"Heard Island and McDonald Islands","capital":""},{"name":"Honduras","capital":"Tegucigalpa"},{"name":"Hong Kong","capital":"Hong Kong"},{"name":"Hungary","capital":"Budapest"},{"name":"Iceland","capital":"Reykjavik"},{"name":"India","capital":"New Delhi"},{"name":"Indonesia","capital":"Jakarta"},{"name":"Iran","capital":"Tehran"},{"name":"Iraq","capital":"Baghdad"},{"name":"Ireland","capital":"Dublin"},{"name":"Isle of Man","capital":"Douglas, Isle of Man"},{"name":"Israel","capital":"Jerusalem"},{"name":"Italy","capital":"Rome"},{"name":"Ivory Coast","capital":"Yamoussoukro"},{"name":"Jamaica","capital":"Kingston"},{"name":"Japan","capital":"Tokyo"},{"name":"Jersey","capital":"Saint Helier"},{"name":"Jordan","capital":"Amman"},{"name":"Kazakhstan","capital":"Astana"},{"name":"Kenya","capital":"Nairobi"},{"name":"Kiribati","capital":"Tarawa"},{"name":"Kosovo","capital":"Pristina"},{"name":"Kuwait","capital":"Kuwait City"},{"name":"Kyrgyzstan","capital":"Bishkek"},{"name":"Laos","capital":"Vientiane"},{"name":"Latvia","capital":"Riga"},{"name":"Lebanon","capital":"Beirut"},{"name":"Lesotho","capital":"Maseru"},{"name":"Liberia","capital":"Monrovia"},{"name":"Libya","capital":"Tripolis"},{"name":"Liechtenstein","capital":"Vaduz"},{"name":"Lithuania","capital":"Vilnius"},{"name":"Luxembourg","capital":"Luxembourg"},{"name":"Macau","capital":"Macao"},{"name":"Macedonia","capital":"Skopje"},{"name":"Madagascar","capital":"Antananarivo"},{"name":"Malawi","capital":"Lilongwe"},{"name":"Malaysia","capital":"Kuala Lumpur"},{"name":"Maldives","capital":"Male"},{"name":"Mali","capital":"Bamako"},{"name":"Malta","capital":"Valletta"},{"name":"Marshall Islands","capital":"Majuro"},{"name":"Martinique","capital":"Fort-de-France"},{"name":"Mauritania","capital":"Nouakchott"},{"name":"Mauritius","capital":"Port Louis"},{"name":"Mayotte","capital":"Mamoudzou"},{"name":"Mexico","capital":"Mexico City"},{"name":"Micronesia","capital":"Palikir"},{"name":"Moldova","capital":"Chisinau"},{"name":"Monaco","capital":"Monaco"},{"name":"Mongolia","capital":"Ulan Bator"},{"name":"Montenegro","capital":"Podgorica"},{"name":"Montserrat","capital":"Plymouth"},{"name":"Morocco","capital":"Rabat"},{"name":"Mozambique","capital":"Maputo"},{"name":"Myanmar","capital":"Nay Pyi Taw"},{"name":"Namibia","capital":"Windhoek"},{"name":"Nauru","capital":"Yaren"},{"name":"Nepal","capital":"Kathmandu"},{"name":"Netherlands","capital":"Amsterdam"},{"name":"New Caledonia","capital":"Noumea"},{"name":"New Zealand","capital":"Wellington"},{"name":"Nicaragua","capital":"Managua"},{"name":"Niger","capital":"Niamey"},{"name":"Nigeria","capital":"Abuja"},{"name":"Niue","capital":"Alofi"},{"name":"Norfolk Island","capital":"Kingston"},{"name":"North Korea","capital":"Pyongyang"},{"name":"Northern Mariana Islands","capital":"Saipan"},{"name":"Norway","capital":"Oslo"},{"name":"Oman","capital":"Muscat"},{"name":"Pakistan","capital":"Islamabad"},{"name":"Palau","capital":"Melekeok"},{"name":"Palestinian Territory","capital":"East Jerusalem"},{"name":"Panama","capital":"Panama City"},{"name":"Papua New Guinea","capital":"Port Moresby"},{"name":"Paraguay","capital":"Asuncion"},{"name":"Peru","capital":"Lima"},{"name":"Philippines","capital":"Manila"},{"name":"Pitcairn","capital":"Adamstown"},{"name":"Poland","capital":"Warsaw"},{"name":"Portugal","capital":"Lisbon"},{"name":"Puerto Rico","capital":"San Juan"},{"name":"Qatar","capital":"Doha"},{"name":"Republic of the Congo","capital":"Brazzaville"},{"name":"Romania","capital":"Bucharest"},{"name":"Russia","capital":"Moscow"},{"name":"Rwanda","capital":"Kigali"},{"name":"R\xe9union","capital":"Saint-Denis"},{"name":"Saint Barthelemy","capital":"Gustavia"},{"name":"Saint Helena","capital":"Jamestown"},{"name":"Saint Kitts and Nevis","capital":"Basseterre"},{"name":"Saint Lucia","capital":"Castries"},{"name":"Saint Martin","capital":"Marigot"},{"name":"Saint Pierre and Miquelon","capital":"Saint-Pierre"},{"name":"Saint Vincent and the Grenadines","capital":"Kingstown"},{"name":"Samoa","capital":"Apia"},{"name":"San Marino","capital":"San Marino"},{"name":"Sao Tome and Principe","capital":"Sao Tome"},{"name":"Saudi Arabia","capital":"Riyadh"},{"name":"Senegal","capital":"Dakar"},{"name":"Serbia","capital":"Belgrade"},{"name":"Seychelles","capital":"Victoria"},{"name":"Sierra Leone","capital":"Freetown"},{"name":"Singapore","capital":"Singapur"},{"name":"Sint Maarten","capital":"Philipsburg"},{"name":"Slovakia","capital":"Bratislava"},{"name":"Slovenia","capital":"Ljubljana"},{"name":"Solomon Islands","capital":"Honiara"},{"name":"Somalia","capital":"Mogadishu"},{"name":"South Africa","capital":"Pretoria"},{"name":"South Georgia and the South Sandwich Islands","capital":"Grytviken"},{"name":"South Korea","capital":"Seoul"},{"name":"South Sudan","capital":"Juba"},{"name":"Spain","capital":"Madrid"},{"name":"Sri Lanka","capital":"Colombo"},{"name":"Sudan","capital":"Khartoum"},{"name":"Suriname","capital":"Paramaribo"},{"name":"Svalbard and Jan Mayen","capital":"Longyearbyen"},{"name":"Swaziland","capital":"Mbabane"},{"name":"Sweden","capital":"Stockholm"},{"name":"Switzerland","capital":"Berne"},{"name":"Syria","capital":"Damascus"},{"name":"Taiwan","capital":"Taipei"},{"name":"Tajikistan","capital":"Dushanbe"},{"name":"Tanzania","capital":"Dodoma"},{"name":"Thailand","capital":"Bangkok"},{"name":"Timor-Leste","capital":"Dili"},{"name":"Togo","capital":"Lome"},{"name":"Tokelau","capital":""},{"name":"Tonga","capital":"Nuku\'alofa"},{"name":"Trinidad and Tobago","capital":"Port of Spain"},{"name":"Tunisia","capital":"Tunis"},{"name":"Turkey","capital":"Ankara"},{"name":"Turkmenistan","capital":"Ashgabat"},{"name":"Turks and Caicos Islands","capital":"Cockburn Town"},{"name":"Tuvalu","capital":"Funafuti"},{"name":"U.S. Virgin Islands","capital":"Charlotte Amalie"},{"name":"Uganda","capital":"Kampala"},{"name":"Ukraine","capital":"Kiev"},{"name":"United Arab Emirates","capital":"Abu Dhabi"},{"name":"United Kingdom","capital":"London"},{"name":"United States","capital":"Washington"},{"name":"United States Minor Outlying Islands","capital":""},{"name":"Uruguay","capital":"Montevideo"},{"name":"Uzbekistan","capital":"Tashkent"},{"name":"Vanuatu","capital":"Port Vila"},{"name":"Vatican","capital":"Vatican City"},{"name":"Vatican City State (Holy See)","capital":"Vatican City"},{"name":"Venezuela","capital":"Caracas"},{"name":"Vietnam","capital":"Hanoi"},{"name":"Wallis and Futuna","capital":"Mata Utu"},{"name":"Western Sahara","capital":"El-Aaiun"},{"name":"Yemen","capital":"Sanaa"},{"name":"Zambia","capital":"Lusaka"},{"name":"Zimbabwe","capital":"Harare"}]}')},95:function(a,e,t){},96:function(a,e,t){}},[[134,1,2]]]);
//# sourceMappingURL=main.d1178ffe.chunk.js.map