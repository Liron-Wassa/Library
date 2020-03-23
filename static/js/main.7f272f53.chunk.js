(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{18:function(e,t,a){e.exports={icon:"NavBar_icon__AjRub",navBar:"NavBar_navBar__1ar9J"}},26:function(e,t,a){e.exports={List:"BookDetails_List__W0lNE",unList:"BookDetails_unList__MoOvp",image:"BookDetails_image__1TAnM"}},27:function(e,t,a){e.exports={FavoriteList:"Favorite_FavoriteList__SDDOu",List:"Favorite_List__1BRHQ",image:"Favorite_image__3442X",header:"Favorite_header__15Ezl",pagination:"Favorite_pagination__2yi33"}},28:function(e,t,a){e.exports={BookList:"BookList_BookList__17Jao",error:"BookList_error__pfgLJ",pagination:"BookList_pagination__3-dUH"}},31:function(e,t,a){e.exports={Description:"Description_Description__2PdwP",text:"Description_text__29dKw"}},49:function(e,t,a){e.exports={Loading:"Loading_Loading__2R7VM"}},50:function(e,t,a){e.exports={header:"Library_header__XiuvQ"}},51:function(e,t,a){e.exports={header:"History_header__1sxnu"}},56:function(e,t,a){e.exports=a(88)},61:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o),c=(a(61),a(11)),l=a(45),s=a.n(l),u=Object(n.createContext)();var m=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(!1),m=Object(c.a)(l,2),d=m[0],v=m[1],f=Object(n.useState)([]),E=Object(c.a)(f,2),p=E[0],g=E[1];return r.a.createElement(u.Provider,{value:{books:p,error:"Not found",isLoading:d,favorites:o,findBooks:function(e){v(!0),s.a.get("https://www.googleapis.com/books/v1/volumes?q=search+".concat(e)).then((function(e){200===e.status&&(g(e.data.items),v(!1))})).catch((function(e){console.log(e)}))},addFavorit:function(e){var t=p.findIndex((function(t){return t.id===e})),a=JSON.parse(localStorage.getItem("favorites"))||[];a.push(p[t]),localStorage.setItem("favorites",JSON.stringify(a)),i(a)},removeFavorite:function(e){var t=o.filter((function(t){return t.id!==e}));localStorage.setItem("favorites",JSON.stringify(t)),i(t)}}},e.children)},d=Object(n.createContext)();var v=function(e){var t=Object(n.useState)(2),a=Object(c.a)(t,1)[0],o=Object(n.useState)(1),i=Object(c.a)(o,2),l=i[0],s=i[1],u=l*a,m=u-a;return r.a.createElement(d.Provider,{value:{indexOfFirstBooks:m,indexOfLastBooks:u,booksPerPage:a,currentPage:l,paginate:function(e,t){"Prev"===e?l>1&&s(l-1):"Next"===e?l<t&&s(l+1):s(e)},setPagesNumber:function(){s(l-1)}}},e.children)},f=a(17),E=a(9),p=a(31),g=a.n(p);var b=function(e){return r.a.createElement("div",{className:g.a.Description},r.a.createElement("p",{className:g.a.text},e.location.description))},h=a(96),k=a(90),_=a(26),N=a.n(_);var O=function(e){for(var t=e.book,a=e.bookId,o=e.setDescription,i=Object(n.useContext)(u),c=i.addFavorit,l=i.removeFavorite,s=i.favorites,m=[],d=0;d<s.length;d++)m[d]=s[d].id;return r.a.createElement(h.a,{className:m.includes(t.id)?N.a.unList:N.a.List},r.a.createElement(h.a.Img,{variant:"top",src:t.volumeInfo.imageLinks.smallThumbnail,className:N.a.image}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,t.volumeInfo.title),r.a.createElement(h.a.Text,null,t.volumeInfo.subtitle),r.a.createElement(k.a,{variant:"secondary",className:"mr-1",onClick:m.includes(t.id)?function(){return l(t.id)}:function(){return c(a)}},m.includes(t.id)?"Remove":"Add to favorite"),t.volumeInfo.description?r.a.createElement(k.a,{variant:"secondary",onClick:function(){return o(t.volumeInfo.description)}},"Description"):null))},x=a(98);var B=function(e){for(var t=e.booksPerPage,a=e.totalBooks,o=Object(n.useContext)(d),i=o.paginate,c=o.currentPage,l=o.setPagesNumber,s=[],u=1;u<=Math.ceil(a/t);u++)s.push(u);return Object(n.useEffect)((function(){2===c&&l()}),[a]),r.a.createElement(x.a,null,r.a.createElement(x.a.Prev,{onClick:function(){return i("Prev",s.length)}}),s.map((function(e,t){return c===e?r.a.createElement(x.a.Item,{active:!0,key:e,onClick:function(){return i(e)}},e):r.a.createElement(x.a.Item,{key:e,onClick:function(){return i(e)}},e)})),r.a.createElement(x.a.Next,{onClick:function(){return i("Next",s.length)}}))},L=a(27),y=a.n(L);var j=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useContext)(u).favorites,l=Object(n.useContext)(d),s=l.indexOfFirstBooks,m=l.indexOfLastBooks,v=l.booksPerPage,f=i.slice(s,m);if(a.length)return r.a.createElement(E.a,{to:{pathname:"/description",description:a}});var p=f.map((function(e){return r.a.createElement(O,{key:e.id,book:e,setDescription:o})}));return r.a.createElement("div",null,r.a.createElement("h1",{className:y.a.header},"Favorites"),r.a.createElement("div",{className:y.a.pagination},i.length?r.a.createElement(B,{booksPerPage:v,totalBooks:i.length}):null),r.a.createElement("div",{className:y.a.FavoriteList},p))},S=a(91),P=a(97);var I=function(){var e=Object(n.useContext)(u).findBooks,t=Object(n.useRef)(null),a="";return r.a.createElement(S.a,{className:"mb-3 container"},r.a.createElement(S.a.Prepend,null,r.a.createElement(k.a,{variant:"dark",onClick:function(){var n=JSON.parse(localStorage.getItem("history"))||[];isNaN(a)?(e(a),n.push({search:a,date:(new Date).toLocaleDateString()}),localStorage.setItem("history",JSON.stringify(n)),t.current.value="",a=""):alert("Enter a book!!!")}},"Search")),r.a.createElement(P.a,{onChange:function(e){a=e.target.value},placeholder:"Book",ref:t}))},C=a(28),D=a.n(C),F=a(92),w=a(49),J=a.n(w);var H=function(){return r.a.createElement(F.a,{animation:"border",variant:"secondary",className:J.a.Loading})};var R=function(){var e,t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useContext)(d),s=l.indexOfFirstBooks,m=l.indexOfLastBooks,v=l.booksPerPage,f=Object(n.useContext)(u),p=f.books,g=f.error,b=f.isLoading,h=p.slice(s,m);return o.length?r.a.createElement(E.a,{to:{pathname:"/description",description:o}}):b?r.a.createElement(H,null):(e=h?h.map((function(e){return r.a.createElement(O,{key:e.id,book:e,bookId:e.id,setDescription:i})})):r.a.createElement("h1",{className:D.a.error},g),r.a.createElement("div",null,p.length?r.a.createElement("div",{className:D.a.pagination},r.a.createElement(B,{booksPerPage:v,totalBooks:p.length})):null,r.a.createElement("div",{className:D.a.BookList},e)))},A=a(50),M=a.n(A);var T=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:M.a.header},"Library"),r.a.createElement(I,null),r.a.createElement(R,null))},W=a(51),Q=a.n(W),X=a(93);var q=function(){var e=(JSON.parse(localStorage.getItem("history"))||[]).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.search),r.a.createElement("td",null,e.date))}));return r.a.createElement("div",null,r.a.createElement("h1",{className:Q.a.header},"Search History"),r.a.createElement(X.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Search"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e)))},z=a(94),K=a(95),U=a(18),V=a.n(U);var $=function(){var e=Object(n.useContext)(u).favorites;return r.a.createElement(z.a,{bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(z.a.Brand,null,"Navbar"),r.a.createElement(K.a,{className:"mr-auto"},r.a.createElement("div",{className:V.a.navBar},r.a.createElement(f.b,{to:"/",className:V.a.navBar},"Home"),r.a.createElement(f.b,{to:"/history",className:V.a.navBar},"History"),r.a.createElement(f.b,{to:"/favorites",className:V.a.navBar},r.a.createElement("span",null,"Favorites"),e.length?r.a.createElement("span",{className:V.a.icon},r.a.createElement("span",{className:"badge badge-danger"},e.length)):null))))};a(87);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{basename:"/"},r.a.createElement(E.d,null,r.a.createElement(m,null,r.a.createElement($,null),r.a.createElement(v,null,r.a.createElement(E.b,{exact:!0,path:"/",component:T}),r.a.createElement(E.b,{path:"/favorites",component:j})),r.a.createElement(E.b,{path:"/history",component:q}),r.a.createElement(E.b,{path:"/description",component:b})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.7f272f53.chunk.js.map