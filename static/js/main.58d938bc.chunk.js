(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,s){e.exports={content:"Post_content__2y9CA",item:"Post_item__2e1ow",messagePost:"Post_messagePost__2tAxE",countLike:"Post_countLike__3jVtI",likeType:"Post_likeType__2tFvV"}},27:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__1aUe3",selectedPage:"Users_selectedPage__e5Bse"}},37:function(e,t,s){e.exports={header:"Header_header__xCRiM"}},38:function(e,t,s){},39:function(e,t,s){},48:function(e,t,s){},5:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2FJyO",dialogsItem:"Dialogs_dialogsItem__MSxD1",messages:"Dialogs_messages__2CafO",dialogsStyle:"Dialogs_dialogsStyle__13RnD",active:"Dialogs_active__3jWpU",wrapper:"Dialogs_wrapper__1ANx0",wrapper_style:"Dialogs_wrapper_style__3uhjr",messageStyle:"Dialogs_messageStyle__1Wb6M",imageDialog:"Dialogs_imageDialog__DoiRT",buttonMessage:"Dialogs_buttonMessage__11m31",textArea:"Dialogs_textArea__TqoYL"}},6:function(e,t,s){e.exports={nav:"Navbar_nav__3gxxt",item:"Navbar_item__1hAV5",active:"Navbar_active__WDzq8",friendsSidebar:"Navbar_friendsSidebar__YQ87y",sidebarImg:"Navbar_sidebarImg__3zP9Q",sidebarElements:"Navbar_sidebarElements__3eZXY"}},73:function(e,t,s){"use strict";s.r(t);var a,n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))},i=s(19),c=s.n(i),r=s(12),o=s(1),l=s.n(o),u=(s(48),s(37)),d=s.n(u),j=s(0),g=function(){return Object(j.jsx)("header",{className:d.a.header,children:Object(j.jsx)("img",{src:"http://pngimg.com/uploads/megaphone/megaphone_PNG94.png"})})},p=s(6),b=s.n(p),m=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.image,className:b.a.sidebarImg})})})},O=s(28),h=s(21),x=s(3),f="ADD-POST",v="UPDATE-NEW-POST-TEXT",_={postData:[{id:1,message:"Games",likeCount:23},{id:2,message:"sdsdsssssssss",likeCount:77},{id:3,message:"Do you want me? ",likeCount:107}],newPostText:""},w="UPDATE-NEW-MESSAGE-TEXT",N="SEND-MESSAGES",P={dialogsData:[{id:1,name:"Dimych",image:"https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},{id:2,name:"Sveta",image:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:3,name:"Sasha",image:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},{id:4,name:"Viktor",image:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"'},{id:5,name:"Valera",image:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"yo Hi"},{id:4,message:"Hello Hi"},{id:5,message:"Yo yo yo"}],newMessageText:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(x.a)(Object(x.a)({},e),{},{newMessageText:t.newText});case N:var s=e.newMessageText;return""!==s?Object(x.a)(Object(x.a)({},e),{},{newMessageText:"",messagesData:[].concat(Object(h.a)(e.messagesData),[{id:6,message:s}])}):e;default:return e}},C={imagesData:[{image:"https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},{image:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{image:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},{image:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"'},{image:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return e};!function(e){e.FOLLOW="Users/FOLLOW",e.UNFOLLOW="Users/UNFOLLOW",e.SET_USERS="Users/SET_USERS",e.SET_CURRENT="Users/SET_CURRENT",e.SET_TOTAL_COUNT="Users/SET_TOTAL_COUNT"}(a||(a={}));var S={users:[],pageSize:50,totalUserCount:233,currentPage:1},D=Object(O.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(x.a)(Object(x.a)({},e),{},{postData:[{id:(new Date).getTime(),message:e.newPostText,likeCount:0}].concat(Object(h.a)(e.postData)),newPostText:""});case v:return Object(x.a)(Object(x.a)({},e),{},{newPostText:t.postText});default:return e}},dialogPage:T,sidebar:y,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FOLLOW:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(x.a)(Object(x.a)({},e),{},{followed:!0}):e}))});case a.UNFOLLOW:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(x.a)(Object(x.a)({},e),{},{followed:!1}):e}))});case a.SET_USERS:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case a.SET_CURRENT:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.page});case a.SET_TOTAL_COUNT:return Object(x.a)(Object(x.a)({},e),{},{totalUserCount:t.totalCount});default:return e}}}),k=Object(O.b)(D);window.store=k;var U=function(){var e=k.getState().sidebar.imagesData.map((function(e){return Object(j.jsx)(m,{image:e.image})}));return Object(j.jsxs)("nav",{className:b.a.nav,children:[Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/Social_Network/profile",activeClassName:b.a.active,children:" Profile"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/Social_Network/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/Social_Network/users",activeClassName:b.a.active,children:"Users"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)("a",{children:"News"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)("a",{children:"Music"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)("a",{children:"Settings"})}),Object(j.jsxs)("div",{className:b.a.friendsSidebar,children:[Object(j.jsx)("h3",{children:"FRIENDS "}),Object(j.jsx)("div",{className:b.a.sidebarElements,children:e})]})]})},E=s(38),L=s.n(E),M=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:L.a.img,src:"https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"})}),Object(j.jsx)("div",{children:"ava + discription"})]})},A=s(39),R=s.n(A),I=s(16),F=s.n(I),W=function(e){return Object(j.jsxs)("div",{className:F.a.item,children:[Object(j.jsx)("img",{src:"https://bizlit.com.ua/image/data/pictures/YeDYzSR-10apkm4.png"}),Object(j.jsxs)("div",{className:F.a.messagePost,children:[e.message,Object(j.jsx)("div",{className:F.a.likeType,children:Object(j.jsx)("span",{className:F.a.countLike,children:e.likeCount})})]})]})},z=function(e){var t=e.profilePage.postData.map((function(e){return Object(j.jsx)(W,{message:e.message,likeCount:e.likeCount})})),s=l.a.createRef(),a=function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.addPosts(a)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:" My posts "}),Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{onKeyPress:function(e){13===e.charCode&&a()},onChange:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.onPostChange(a)},ref:s,value:e.profilePage.newPostText})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:a,children:"Add post"})}),Object(j.jsx)("div",{className:R.a.posts,children:t})]})},q=s(13),H=Object(q.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPosts:function(t){t&&e({type:f,postText:t})},onPostChange:function(t){t&&e({type:v,postText:t})}}}))(z),K=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(M,{}),Object(j.jsx)(H,{})]})},Y=s(4),B=s(5),V=s.n(B),G=function(e){var t="/dialogs/"+e.id;return Object(j.jsx)("div",{className:V.a.containerDialog,children:Object(j.jsxs)(r.b,{to:t,activeClassName:V.a.active,className:V.a.dialogsStyle,children:[Object(j.jsx)("img",{src:e.image,className:V.a.imageDialog}),Object(j.jsxs)("div",{children:[" ",e.name]})]})})},J=function(e){return Object(j.jsxs)("div",{className:V.a.messageStyle,children:[Object(j.jsx)("div",{className:V.a.wrapper_style}),Object(j.jsx)("div",{className:V.a.wrapper,children:Object(j.jsxs)("div",{children:[e.message," "]})})]})};var X=function(e){var t=e.dialogPage.dialogsData.map((function(e){return Object(j.jsx)(G,{image:e.image,name:e.name,id:e.id},e.id)})),s=e.dialogPage.messagesData.map((function(e){return Object(j.jsx)(J,{message:e.message},e.id)})),a=e.dialogPage.newMessageText,n=function(){e.onSendMessageClick(a)};return Object(j.jsxs)("div",{className:V.a.dialogs,children:[Object(j.jsx)("div",{className:V.a.dialogsItem,children:t}),Object(j.jsxs)("div",{className:V.a.messages,children:[s,Object(j.jsxs)("div",{className:V.a.buttonMessage,children:[Object(j.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.onNewMessageChange(s)},onKeyPress:function(e){13===e.charCode&&n()},placeholder:"Enter your message",value:a,className:V.a.textArea}),Object(j.jsx)("button",{onClick:n,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})]})},Z=Object(q.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{onSendMessageClick:function(t){e({type:N,newText:t})},onNewMessageChange:function(t){e({type:w,newText:t})}}}))(X),Q=s(40),$=s(41),ee=s(43),te=s(42),se=s(26),ae=s.n(se),ne=s(27),ie=s.n(ne),ce=s.p+"static/media/userImages.027e123a.png",re=function(e){for(var t=Math.ceil(e.totalUserCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:s.map((function(t){return Object(j.jsx)("span",{className:e.currentPage===t?ie.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:null!==t.photos.small?t.photos.small:ce,className:ie.a.userPhoto})}),Object(j.jsx)("div",{children:t.followed?Object(j.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(j.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:"m.location.city"}),Object(j.jsx)("div",{children:"m.location.country"})]})]})]},t.id)}))]})},oe=function(e){Object(ee.a)(s,e);var t=Object(te.a)(s);function s(){return Object(Q.a)(this,s),t.apply(this,arguments)}return Object($.a)(s,[{key:"componentDidMount",value:function(){var e=this;ae.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"onPageChanged",value:function(e){var t=this;this.props.setCurrentPage(e),ae.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(this.props.pageSize)).then((function(e){t.props.setUsers(e.data.items)}))}},{key:"render",value:function(){return Object(j.jsx)(re,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow})}}]),s}(l.a.Component),le=Object(q.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUserCount:e.usersPage.totalUserCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(t){var s;e((s=t,{type:a.FOLLOW,userID:s}))},unfollow:function(t){var s;e((s=t,{type:a.UNFOLLOW,userID:s}))},setUsers:function(t){e(function(e){return{type:a.SET_USERS,users:e}}(t))},setCurrentPage:function(t){var s;e((s=t,{type:a.SET_CURRENT,page:s}))},setTotalUsersCount:function(t){var s;e((s=t,{type:a.SET_TOTAL_COUNT,totalCount:s}))}}}))(oe),ue=function(){return Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(g,{}),Object(j.jsx)(U,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(Y.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(Y.a,{to:"/profile"})}}),Object(j.jsx)(Y.b,{path:"/dialogs",render:function(){return Object(j.jsx)(Z,{})}}),Object(j.jsx)(Y.b,{path:"/profile",render:function(){return Object(j.jsx)(K,{})}}),Object(j.jsx)(Y.b,{path:"/users",render:function(){return Object(j.jsx)(le,{})}})]})]})},de=function(){c.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(q.a,{store:k,children:Object(j.jsx)(ue,{})})}),document.getElementById("root"))};de(),k.subscribe((function(){de()})),n()}},[[73,1,2]]]);
//# sourceMappingURL=main.58d938bc.chunk.js.map