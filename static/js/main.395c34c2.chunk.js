(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,s){e.exports={content:"Post_content__2y9CA",item:"Post_item__2e1ow",messagePost:"Post_messagePost__2tAxE",countLike:"Post_countLike__3jVtI",likeType:"Post_likeType__2tFvV"}},24:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__1aUe3",selectedPage:"Users_selectedPage__e5Bse"}},41:function(e,t,s){e.exports={header:"Header_header__xCRiM"}},42:function(e,t,s){},43:function(e,t,s){},48:function(e,t,s){},5:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2FJyO",dialogsItem:"Dialogs_dialogsItem__MSxD1",messages:"Dialogs_messages__2CafO",dialogsStyle:"Dialogs_dialogsStyle__13RnD",active:"Dialogs_active__3jWpU",wrapper:"Dialogs_wrapper__1ANx0",wrapper_style:"Dialogs_wrapper_style__3uhjr",messageStyle:"Dialogs_messageStyle__1Wb6M",imageDialog:"Dialogs_imageDialog__DoiRT",buttonMessage:"Dialogs_buttonMessage__11m31",textArea:"Dialogs_textArea__TqoYL"}},6:function(e,t,s){e.exports={nav:"Navbar_nav__3gxxt",item:"Navbar_item__1hAV5",active:"Navbar_active__WDzq8",friendsSidebar:"Navbar_friendsSidebar__YQ87y",sidebarImg:"Navbar_sidebarImg__3zP9Q",sidebarElements:"Navbar_sidebarElements__3eZXY"}},73:function(e,t,s){"use strict";s.r(t);var a,n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))},i=s(20),c=s.n(i),r=s(13),o=s(1),l=s.n(o),u=(s(48),s(41)),j=s.n(u),d=s(0),p=function(){return Object(d.jsx)("header",{className:j.a.header,children:Object(d.jsx)("img",{src:"http://pngimg.com/uploads/megaphone/megaphone_PNG94.png"})})},g=s(6),b=s.n(g),O=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.image,className:b.a.sidebarImg})})})},h=s(32),m=s(25),x=s(2),f="ADD-POST",v="UPDATE-NEW-POST-TEXT",_="SET-USERS-PROFILE",N={postData:[{id:1,message:"Sosiska",likeCount:23},{id:2,message:"REDDISKA",likeCount:77},{id:3,message:"Do you want me? ",likeCount:107}],newPostText:"",profile:null},T="UPDATE-NEW-MESSAGE-TEXT",C="SEND-MESSAGES",w={dialogsData:[{id:1,name:"Dimych",image:"https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},{id:2,name:"Sveta",image:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:3,name:"Sasha",image:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},{id:4,name:"Viktor",image:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"'},{id:5,name:"Valera",image:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"yo Hi"},{id:4,message:"Hello Hi"},{id:5,message:"Yo yo yo"}],newMessageText:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(x.a)(Object(x.a)({},e),{},{newMessageText:t.newText});case C:var s=e.newMessageText;return""!==s?Object(x.a)(Object(x.a)({},e),{},{newMessageText:"",messagesData:[].concat(Object(m.a)(e.messagesData),[{id:6,message:s}])}):e;default:return e}},y={imagesData:[{image:"https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},{image:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{image:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},{image:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"'},{image:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return e};!function(e){e.FOLLOW="Users/FOLLOW",e.UNFOLLOW="Users/UNFOLLOW",e.SET_USERS="Users/SET_USERS",e.SET_CURRENT="Users/SET_CURRENT",e.SET_TOTAL_COUNT="Users/SET_TOTAL_COUNT",e.TOGGLE_FETCHING="Users/CHANGE_FETCHING"}(a||(a={}));var D={users:[],pageSize:100,totalUserCount:0,currentPage:1,isFetching:!1},E=Object(h.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(x.a)(Object(x.a)({},e),{},{postData:[{id:(new Date).getTime(),message:e.newPostText,likeCount:0}].concat(Object(m.a)(e.postData)),newPostText:""});case v:return Object(x.a)(Object(x.a)({},e),{},{newPostText:t.postText});case _:return Object(x.a)(Object(x.a)({},e),{},{profile:t.profile});default:return e}},dialogPage:P,sidebar:S,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FOLLOW:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(x.a)(Object(x.a)({},e),{},{followed:!0}):e}))});case a.UNFOLLOW:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(x.a)(Object(x.a)({},e),{},{followed:!1}):e}))});case a.SET_USERS:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case a.SET_CURRENT:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.page});case a.SET_TOTAL_COUNT:return Object(x.a)(Object(x.a)({},e),{},{totalUserCount:t.totalCount});case a.TOGGLE_FETCHING:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),U=Object(h.b)(E);window.store=U;var k=function(){var e=U.getState().sidebar.imagesData.map((function(e){return Object(d.jsx)(O,{image:e.image})}));return Object(d.jsxs)("nav",{className:b.a.nav,children:[Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(r.b,{to:"/profile",activeClassName:b.a.active,children:" Profile"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(r.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(r.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)("a",{children:"News"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)("a",{children:"Music"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)("a",{children:"Settings"})}),Object(d.jsxs)("div",{className:b.a.friendsSidebar,children:[Object(d.jsx)("h3",{children:"FRIENDS "}),Object(d.jsx)("div",{className:b.a.sidebarElements,children:e})]})]})},L=s(4),F=s(5),A=s.n(F),I=function(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:A.a.containerDialog,children:Object(d.jsxs)(r.b,{to:t,activeClassName:A.a.active,className:A.a.dialogsStyle,children:[Object(d.jsx)("img",{src:e.image,className:A.a.imageDialog}),Object(d.jsxs)("div",{children:[" ",e.name]})]})})},M=function(e){return Object(d.jsxs)("div",{className:A.a.messageStyle,children:[Object(d.jsx)("div",{className:A.a.wrapper_style}),Object(d.jsx)("div",{className:A.a.wrapper,children:Object(d.jsxs)("div",{children:[e.message," "]})})]})};var R=function(e){var t=e.dialogPage.dialogsData.map((function(e){return Object(d.jsx)(I,{image:e.image,name:e.name,id:e.id},e.id)})),s=e.dialogPage.messagesData.map((function(e){return Object(d.jsx)(M,{message:e.message},e.id)})),a=e.dialogPage.newMessageText,n=function(){e.onSendMessageClick(a)};return Object(d.jsxs)("div",{className:A.a.dialogs,children:[Object(d.jsx)("div",{className:A.a.dialogsItem,children:t}),Object(d.jsxs)("div",{className:A.a.messages,children:[s,Object(d.jsxs)("div",{className:A.a.buttonMessage,children:[Object(d.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.onNewMessageChange(s)},onKeyPress:function(e){13===e.charCode&&n()},placeholder:"Enter your message",value:a,className:A.a.textArea}),Object(d.jsx)("button",{onClick:n,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})]})},H=s(12),G=Object(H.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{onSendMessageClick:function(t){e({type:C,newText:t})},onNewMessageChange:function(t){e({type:T,newText:t})}}}))(R),W=s(22),z=s(23),q=s(27),K=s(26),Y=s(16),J=s.n(Y),B=s(24),V=s.n(B),X=s.p+"static/media/userImages.027e123a.png",Z=function(e){return Object(d.jsx)("div",{children:e.users.map((function(t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:null!==t.photos.small?t.photos.small:X,className:V.a.userPhoto})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(d.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:t.name}),Object(d.jsx)("div",{children:t.status})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"m.location.city"}),Object(d.jsx)("div",{children:"m.location.country"})]})]})]},t.id)}))})},Q=s.p+"static/media/239.ccdadae0.svg",$=function(){return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("img",{src:Q})]})},ee=function(e){Object(q.a)(s,e);var t=Object(K.a)(s);function s(){return Object(W.a)(this,s),t.apply(this,arguments)}return Object(z.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleFetching(!0),J.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount),e.props.toggleFetching(!1)}))}},{key:"onPageChanged",value:function(e){var t=this;this.props.setCurrentPage(e),this.props.toggleFetching(!0),J.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(this.props.pageSize)).then((function(e){t.props.toggleFetching(!1),t.props.setUsers(e.data.items)}))}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalUserCount/this.props.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(d.jsxs)("div",{children:[s.map((function(t){return Object(d.jsx)("span",{className:e.props.currentPage===t?V.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t})})),Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching?Object(d.jsx)($,{}):null,Object(d.jsx)(Z,{pageSize:this.props.pageSize,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow})]})]})}}]),s}(l.a.Component),te=Object(H.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUserCount:e.usersPage.totalUserCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:a.FOLLOW,userID:e}},unfollow:function(e){return{type:a.UNFOLLOW,userID:e}},setUsers:function(e){return{type:a.SET_USERS,users:e}},setCurrentPage:function(e){return{type:a.SET_CURRENT,page:e}},setTotalUsersCount:function(e){return{type:a.SET_TOTAL_COUNT,totalCount:e}},toggleFetching:function(e){return{type:a.TOGGLE_FETCHING,isFetching:e}}})(ee),se=s(42),ae=s.n(se),ne=function(e){var t,s,a,n,i,c,r;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:ae.a.img,src:"https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:null===(t=e.profile)||void 0===t?void 0:t.photos.small}),Object(d.jsx)("div",{children:null===(s=e.profile)||void 0===s?void 0:s.fullName.toLocaleUpperCase()}),Object(d.jsx)("div",{children:null===(a=e.profile)||void 0===a?void 0:a.contacts.instagram.toLocaleUpperCase()}),Object(d.jsx)("div",{children:null===(n=e.profile)||void 0===n?void 0:n.contacts.vk.toLocaleUpperCase()}),Object(d.jsx)("div",{children:null===(i=e.profile)||void 0===i?void 0:i.contacts.github.toLocaleUpperCase()}),Object(d.jsx)("div",{children:"looking for a job:  ".concat((null===(c=e.profile)||void 0===c?void 0:c.lookingForAJob)&&"Yes")}),Object(d.jsx)("div",{children:"Job Description:  ".concat(null===(r=e.profile)||void 0===r?void 0:r.lookingForAJobDescription.toLocaleUpperCase())}),Object(d.jsx)("br",{})]})})]})},ie=s(43),ce=s.n(ie),re=s(17),oe=s.n(re),le=function(e){return Object(d.jsxs)("div",{className:oe.a.item,children:[Object(d.jsx)("img",{src:"https://bizlit.com.ua/image/data/pictures/YeDYzSR-10apkm4.png"}),Object(d.jsxs)("div",{className:oe.a.messagePost,children:[e.message,Object(d.jsx)("div",{className:oe.a.likeType,children:Object(d.jsx)("span",{className:oe.a.countLike,children:e.likeCount})})]})]})},ue=function(e){var t=e.profilePage.postData.map((function(e){return Object(d.jsx)(le,{message:e.message,likeCount:e.likeCount})})),s=l.a.createRef(),a=function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.addPosts(a)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:" My posts "}),Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onKeyPress:function(e){13===e.charCode&&a()},onChange:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.onPostChange(a)},ref:s,value:e.profilePage.newPostText})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:a,children:"Add post"})}),Object(d.jsx)("div",{className:ce.a.posts,children:t})]})},je=Object(H.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPosts:function(t){t&&e({type:f,postText:t})},onPostChange:function(t){t&&e({type:v,postText:t})}}}))(ue),de=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ne,{profile:e.profile}),Object(d.jsx)(je,{})]})},pe=function(e){Object(q.a)(s,e);var t=Object(K.a)(s);function s(){return Object(W.a)(this,s),t.apply(this,arguments)}return Object(z.a)(s,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://social-network.samuraijs.com/api/1.0/profile/2").then((function(t){e.props.setUsersProfile(t.data)}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(de,{profile:this.props.profile})})}}]),s}(l.a.Component),ge=Object(H.b)((function(e){return{profile:e.profilePage.profile}}),{setUsersProfile:function(e){return{type:_,profile:e}}})(pe),be=function(){return Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(p,{}),Object(d.jsx)(k,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(L.b,{exact:!0,path:"/Social_Network",render:function(){return Object(d.jsx)(L.a,{to:"/profile"})}}),Object(d.jsx)(L.b,{path:"/dialogs",render:function(){return Object(d.jsx)(G,{})}}),Object(d.jsx)(L.b,{path:"/profile",render:function(){return Object(d.jsx)(ge,{})}}),Object(d.jsx)(L.b,{path:"/users",render:function(){return Object(d.jsx)(te,{})}})]})]})},Oe=function(){c.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(H.a,{store:U,children:Object(d.jsx)(be,{})})}),document.getElementById("root"))};Oe(),U.subscribe((function(){Oe()})),n()}},[[73,1,2]]]);
//# sourceMappingURL=main.395c34c2.chunk.js.map