(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,s){},133:function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,178)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))},n=s(33),i=s.n(n),r=s(0),o=s.n(r),c=(s(104),s(16)),l=s(9),u=s(8),d="UPDATE-NEW-MESSAGE-TEXT",j="SEND-MESSAGES",g={dialogsData:[{id:1,name:"Dimych",image:"https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},{id:2,name:"Sveta",image:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:3,name:"Sasha",image:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},{id:4,name:"Viktor",image:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"'},{id:5,name:"Valera",image:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"yo Hi"},{id:4,message:"Hello Hi"},{id:5,message:"Yo yo yo"}],newMessageText:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{newMessageText:t.newText});case j:var s=e.newMessageText;return""!==s?Object(u.a)(Object(u.a)({},e),{},{newMessageText:"",messagesData:[].concat(Object(l.a)(e.messagesData),[{id:6,message:s}])}):e;default:return e}},p=s(21),h=s.n(p),O=s(28),f=s(1),m=function(e){var t="/dialogs/"+e.id;return Object(f.jsx)("div",{className:h.a.containerDialog,children:Object(f.jsxs)(O.b,{to:t,activeClassName:h.a.active,className:h.a.dialogsStyle,children:[Object(f.jsx)("img",{src:e.image,className:h.a.imageDialog}),Object(f.jsxs)("div",{children:[" ",e.name]})]})})},x=function(e){return Object(f.jsxs)("div",{className:h.a.messageStyle,children:[Object(f.jsx)("div",{className:h.a.wrapper_style}),Object(f.jsx)("div",{className:h.a.wrapper,children:Object(f.jsxs)("div",{children:[e.message," "]})})]})};var v,_=function(e){var t=e.dialogPage.dialogsData.map((function(e){return Object(f.jsx)(m,{image:e.image,name:e.name,id:e.id},e.id)})),s=e.dialogPage.messagesData.map((function(e){return Object(f.jsx)(x,{message:e.message},e.id)})),a=e.dialogPage.newMessageText,n=function(){e.onSendMessageClick(a)};return Object(f.jsxs)("div",{className:h.a.dialogs,children:[Object(f.jsx)("div",{className:h.a.dialogsItem,children:t}),Object(f.jsxs)("div",{className:h.a.messages,children:[s,Object(f.jsxs)("div",{className:h.a.buttonMessage,children:[Object(f.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.onNewMessageChange(s)},onKeyPress:function(e){13===e.charCode&&n()},placeholder:"Enter your message",value:a,className:h.a.textArea}),Object(f.jsx)("button",{onClick:n,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})]})},y=s(29),P=Object(y.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{onSendMessageClick:function(t){e({type:j,newText:t})},onNewMessageChange:function(t){e({type:d,newText:t})}}}))(_),w=s(170),C=s(38),S=s(39),N=s(44),T=s(43),k=s(175),E=s(176),D=s(177),U=s(173),L=s(6),F=s(15),I=s(171),A=s(172),R=s(167),G=s(164),M=s(163),H=s(22),W=s.n(H),z=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:e.image,className:W.a.sidebarImg})})})},K=s(61),q="ADD-POST",Y="UPDATE-NEW-POST-TEXT",B="SET-USERS-PROFILE",J={postData:[{id:1,message:"Sosiska",likeCount:23},{id:2,message:"REDDISKA",likeCount:77},{id:3,message:"Do you want me? ",likeCount:107}],newPostText:"",profile:null},V={imagesData:[{image:"https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},{image:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{image:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},{image:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"'},{image:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e},Z=s(87),Q=s.n(Z).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8cfe719b-61ef-4519-9519-1e1d9dd44f52"}}),$=function(e,t){return Q.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ee=function(e){return Q.delete("follow/".concat(e))},te=function(e){return Q.post("follow/".concat(e))};!function(e){e.FOLLOW="Users/FOLLOW",e.UNFOLLOW="Users/UNFOLLOW",e.SET_USERS="Users/SET_USERS",e.SET_CURRENT="Users/SET_CURRENT",e.SET_TOTAL_COUNT="Users/SET_TOTAL_COUNT",e.TOGGLE_FETCHING="Users/CHANGE_FETCHING",e.FOLLOWING_PROGRESS="Users/FOLLOWING_PROGRESS"}(v||(v={}));var se={users:[],pageSize:63,totalUserCount:0,currentPage:1,isFetching:!1,followingProgress:[]},ae=function(e){return{type:v.SET_CURRENT,page:e}},ne=function(e){return{type:v.TOGGLE_FETCHING,isFetching:e}},ie=function(e,t){return{type:v.FOLLOWING_PROGRESS,isFetching:e,userId:t}},re="SET-USER-DATA",oe="SET-PHOTO",ce={id:null,email:null,login:null,isAuth:!1,photo:null},le=s(88),ue=Object(K.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(u.a)(Object(u.a)({},e),{},{postData:[{id:(new Date).getTime(),message:e.newPostText,likeCount:0}].concat(Object(l.a)(e.postData)),newPostText:""});case Y:return Object(u.a)(Object(u.a)({},e),{},{newPostText:t.postText});case B:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});default:return e}},dialogPage:b,sidebar:X,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.FOLLOW:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case v.UNFOLLOW:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case v.SET_USERS:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case v.SET_CURRENT:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.page});case v.SET_TOTAL_COUNT:return Object(u.a)(Object(u.a)({},e),{},{totalUserCount:t.totalCount});case v.TOGGLE_FETCHING:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case v.FOLLOWING_PROGRESS:return Object(u.a)(Object(u.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(l.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.data),{},{isAuth:!0});case oe:return Object(u.a)(Object(u.a)({},e),{},{photo:t.photo});default:return e}}}),de=Object(K.c)(ue,Object(K.a)(le.a));window.store=de;var je=function(){var e=de.getState().sidebar.imagesData.map((function(e){return Object(f.jsx)(z,{image:e.image})}));return Object(f.jsxs)("div",{className:W.a.nav,children:[Object(f.jsx)("div",{className:W.a.item,children:Object(f.jsx)(O.b,{to:"/profile",activeClassName:W.a.active,children:" Profile"})}),Object(f.jsx)("div",{className:W.a.item,children:Object(f.jsx)(O.b,{to:"/dialogs",activeClassName:W.a.active,children:"Messages"})}),Object(f.jsx)("div",{className:W.a.item,children:Object(f.jsx)(O.b,{to:"/users",activeClassName:W.a.active,children:"Users"})}),Object(f.jsx)("div",{className:W.a.item,children:Object(f.jsx)("a",{children:"News"})}),Object(f.jsx)("div",{className:W.a.item,children:Object(f.jsx)("a",{children:"Music"})}),Object(f.jsx)("div",{className:W.a.item,children:Object(f.jsx)("a",{children:"Settings"})}),Object(f.jsxs)("div",{className:W.a.friendsSidebar,children:[Object(f.jsx)("h3",{children:"FRIENDS "}),Object(f.jsx)("div",{className:W.a.sidebarElements,children:e})]})]})},ge=function(){var e,t=r.useState({left:!1}),s=Object(F.a)(t,2),a=s[0],n=s[1],i=function(e,t){return function(s){("keydown"!==s.type||"Tab"!==s.key&&"Shift"!==s.key)&&n(Object(u.a)(Object(u.a)({},a),{},Object(L.a)({},e,t)))}};return Object(f.jsx)("div",{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(U.a,{size:"large",onClick:i("left",!0),children:[" ",Object(f.jsx)(M.a,{style:{color:"white"}})," "]}),Object(f.jsx)(G.a,{anchor:"left",open:a.left,onClose:i("left",!1),children:(e="left",Object(f.jsx)(I.a,{style:{backgroundColor:"#b5c9b3",height:"100%"},sx:{width:250},role:"presentation",onClick:i(e,!1),onKeyDown:i(e,!1),children:Object(f.jsx)(A.a,{children:Object(f.jsx)(R.a,{children:Object(f.jsx)(je,{})})})}))})]})})},be=s.p+"static/media/headerImages.adb5c696.png",pe=s(69),he=s.n(pe),Oe=function(e){return Object(f.jsx)(k.a,{style:{backgroundColor:"#02988e"},position:"relative",children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(ge,{}),Object(f.jsx)(D.a,{variant:"h3",component:"div",sx:{flexGrow:1}}),e.isAuth?Object(f.jsxs)("div",{className:he.a.login,children:[" ",Object(f.jsx)("img",{className:he.a.photoHeader,src:e.photo?e.photo:be})," ",e.login," "]}):Object(f.jsx)(U.a,{color:"inherit",style:{color:"#cc5aa6",fontWeight:"bold"},children:"Login"})]})})},fe=function(e){Object(N.a)(s,e);var t=Object(T.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(S.a)(s,[{key:"componentDidMount",value:function(){var e=this;Q.get("auth/me",{withCredentials:!0}).then((function(t){if(console.log(t),0===t.data.resultCode){var s=t.data.data,a=s.id,n=s.email,i=s.login;return e.props.setUsersDataAC(a,n,i),t}})).then((function(t){t&&Q.get("/profile/"+t.data.data.id).then((function(t){e.props.setPhotoLoginAC(t.data.photos.small)}))}))}},{key:"render",value:function(){return Object(f.jsx)(Oe,Object(u.a)({},this.props))}}]),s}(o.a.Component),me=Object(y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,photo:e.auth.photo}}),{setUsersDataAC:function(e,t,s){return{type:re,data:{id:e,email:t,login:s}}},setPhotoLoginAC:function(e){return{type:oe,photo:e}}})(fe),xe=s(36),ve=s.n(xe),_e=s(169),ye=function(e){var t=e.users.filter((function(e){return null!==e.photos.small})),s=e.users.filter((function(e){return null==e.photos.small})),a=[].concat(Object(l.a)(t),Object(l.a)(s));return Object(f.jsx)("div",{className:ve.a.usersContainer,children:a.map((function(t){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:ve.a.user,children:[Object(f.jsx)("div",{children:Object(f.jsx)(O.b,{to:"/profile/"+t.id,children:Object(f.jsx)("div",{children:null!==t.photos.small?Object(f.jsx)("img",{src:t.photos.small,className:ve.a.userPhoto}):Object(f.jsxs)(_e.a,{className:ve.a.userPhoto,sx:{fontSize:"50px",width:"100px",height:"100px",background:"#10ab9e"},children:[" ",t.name[0].toUpperCase()]})})})}),Object(f.jsx)("div",{className:ve.a.name,children:Object(f.jsx)("span",{className:ve.a.span,children:t.name})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)(U.a,{variant:"outlined",size:"small",color:"error",disabled:e.followingProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(f.jsx)(U.a,{variant:"contained",size:"small",disabled:e.followingProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]})},t.id)}))})},Pe=s.p+"static/media/preloader.3fb26d9b.gif",we=function(){return Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[" ",Object(f.jsx)("img",{style:{width:"80px",height:"100px"},src:Pe})," "]})},Ce=s(166),Se=function(e){Object(N.a)(s,e);var t=Object(T.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(S.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.getUsers(e,this.props.pageSize)}},{key:"render",value:function(){var e=this,t=Math.ceil(this.props.totalUserCount/this.props.pageSize);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:ve.a.paginator,children:Object(f.jsx)(Ce.a,{color:"primary",onChange:function(t,s){e.onPageChanged(s)},count:t,variant:"text",shape:"rounded",defaultPage:1,siblingCount:22,size:"small"})}),Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(we,{}):null,Object(f.jsx)(ye,{pageSize:this.props.pageSize,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingProgress:this.props.followingProgress})]})]})}}]),s}(o.a.Component),Ne=Object(y.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUserCount:e.usersPage.totalUserCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingProgress:e.usersPage.followingProgress}}),{follow:function(e){return function(t){t(ie(!0,e)),te(e).then((function(s){var a;0===s.data.resultCode&&t((a=e,{type:v.FOLLOW,userID:a})),t(ie(!1,e))}))}},unfollow:function(e){return function(t){t(ie(!0,e)),ee(e).then((function(s){var a;0===s.data.resultCode&&t((a=e,{type:v.UNFOLLOW,userID:a})),t(ie(!1,e))}))}},setCurrentPage:ae,getUsers:function(e,t){return function(s){s(ne(!0)),$(e,t).then((function(t){var a,n;s((a=t.items,{type:v.SET_USERS,users:a})),s((n=t.totalCount,{type:v.SET_TOTAL_COUNT,totalCount:n})),s(ne(!1)),s(ae(e))}))}}})(Se),Te=function(e){var t,s,a,n,i,r,o;return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:null===(t=e.profile)||void 0===t?void 0:t.photos.large}),Object(f.jsx)("div",{children:null===(s=e.profile)||void 0===s?void 0:s.fullName}),Object(f.jsx)("div",{children:null===(a=e.profile)||void 0===a?void 0:a.contacts.instagram}),Object(f.jsx)("div",{children:null===(n=e.profile)||void 0===n?void 0:n.contacts.vk}),Object(f.jsx)("div",{children:null===(i=e.profile)||void 0===i?void 0:i.contacts.github}),Object(f.jsx)("div",{children:"looking for a job:  ".concat((null===(r=e.profile)||void 0===r?void 0:r.lookingForAJob)&&"Yes")}),Object(f.jsx)("div",{children:"Job Description:  ".concat(null===(o=e.profile)||void 0===o?void 0:o.lookingForAJobDescription)}),Object(f.jsx)("br",{})]})})})},ke=s(90),Ee=s.n(ke),De=s(52),Ue=s.n(De),Le=function(e){return Object(f.jsxs)("div",{className:Ue.a.item,children:[Object(f.jsx)("img",{src:"https://bizlit.com.ua/image/data/pictures/YeDYzSR-10apkm4.png"}),Object(f.jsxs)("div",{className:Ue.a.messagePost,children:[e.message,Object(f.jsx)("div",{className:Ue.a.likeType,children:Object(f.jsx)("span",{className:Ue.a.countLike,children:e.likeCount})})]})]})},Fe=function(e){var t=e.profilePage.postData.map((function(e){return Object(f.jsx)(Le,{message:e.message,likeCount:e.likeCount})})),s=o.a.createRef(),a=function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.addPosts(a)};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:" My posts "}),Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{onKeyPress:function(e){13===e.charCode&&a()},onChange:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.onPostChange(a)},ref:s,value:e.profilePage.newPostText})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:a,children:"Add post"})}),Object(f.jsx)("div",{className:Ee.a.posts,children:t})]})},Ie=Object(y.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPosts:function(t){t&&e({type:q,postText:t})},onPostChange:function(t){t&&e({type:Y,postText:t})}}}))(Fe),Ae=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Te,{profile:e.profile}),Object(f.jsx)(Ie,{})]})},Re=function(e){Object(N.a)(s,e);var t=Object(T.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(S.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t="2"),Q.get("/profile/"+t).then((function(t){e.props.setUsersProfile(t.data)}))}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(Ae,Object(u.a)(Object(u.a)({},this.props),{},{profile:this.props.profile}))})}}]),s}(o.a.Component),Ge=Object(c.f)(Re),Me=Object(y.b)((function(e){return{profile:e.profilePage.profile}}),{setUsersProfile:function(e){return{type:B,profile:e}}})(Ge),He=function(){return Object(f.jsx)(O.a,{children:Object(f.jsxs)(w.a,{container:!0,children:[Object(f.jsx)(w.a,{item:!0,xs:12,style:{border:"1px solid"},children:Object(f.jsx)(me,{})}),Object(f.jsxs)(w.a,{item:!0,xs:12,style:{border:"1px solid",backgroundColor:"#ecffea"},children:[Object(f.jsx)(c.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(c.a,{to:"/profile"})}}),Object(f.jsx)(c.b,{path:"/dialogs",render:function(){return Object(f.jsx)(P,{})}}),Object(f.jsx)(c.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(Me,{})}}),Object(f.jsx)(c.b,{path:"/users",render:function(){return Object(f.jsx)(Ne,{})}})]})]})})},We=function(){i.a.render(Object(f.jsx)(y.a,{store:de,children:Object(f.jsx)(He,{})}),document.getElementById("root"))};We(),de.subscribe((function(){We()})),a()},21:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2ljic",dialogsItem:"Dialogs_dialogsItem__dkL1w",messages:"Dialogs_messages__3CLYv",dialogsStyle:"Dialogs_dialogsStyle__1WKEc",active:"Dialogs_active__cWjhb",wrapper:"Dialogs_wrapper__QWmPS",wrapper_style:"Dialogs_wrapper_style__jqb8Y",messageStyle:"Dialogs_messageStyle__3rO8r",imageDialog:"Dialogs_imageDialog__3bOZI",buttonMessage:"Dialogs_buttonMessage__Soa9S",textArea:"Dialogs_textArea__3DOs-"}},22:function(e,t,s){e.exports={item:"Navbar_item__3NmC5",active:"Navbar_active__Yhrhi",friendsSidebar:"Navbar_friendsSidebar__3a2By",sidebarImg:"Navbar_sidebarImg__31U-u",sidebarElements:"Navbar_sidebarElements__1KLTe"}},36:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__1uFet",selectedPage:"Users_selectedPage__2yzV4",usersContainer:"Users_usersContainer__16uvB",user:"Users_user__1G7hI",name:"Users_name__u2WlR",paginator:"Users_paginator__8Gq43"}},52:function(e,t,s){e.exports={content:"Post_content__c9gD9",item:"Post_item__bSl-J",messagePost:"Post_messagePost__3uuyM",countLike:"Post_countLike__S3MtX",likeType:"Post_likeType__3kNlY"}},69:function(e,t,s){e.exports={header:"Header_header__H0yV5",photoHeader:"Header_photoHeader__1LYeP",login:"Header_login___9nR7"}},90:function(e,t,s){}},[[133,1,2]]]);
//# sourceMappingURL=main.21b5fd26.chunk.js.map