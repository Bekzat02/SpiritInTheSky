(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2K43N",selectedPage:"users_selectedPage__33yB3"}},134:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},136:function(e,t,n){e.exports={posts:"Post_posts__3ruuJ",item:"Post_item__oPCH9"}},163:function(e,t,n){e.exports=n(290)},168:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__3yIYF",item:"Navbar_item__Uouiq",active:"Navbar_active__3DBz4"}},27:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3q7Vz",dialogsItems:"Dialogs_dialogsItems__3IdjJ",active:"Dialogs_active__A4az1",messages:"Dialogs_messages__2o8y0",message:"Dialogs_message__17JAz"}},289:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);n(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(62),s=n.n(o),i=n(23),u=n(24),c=n(26),l=n(25),m=(n(168),n(20)),p=n.n(m),f=n(12),d=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/profile",activeClassName:p.a.active},"Profile")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/users",activeClassName:p.a.active},"Users")),r.a.createElement("div",{className:p.a.item},r.a.createElement("a",null,"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement("a",null,"Music")),r.a.createElement("div",{className:p.a.item},r.a.createElement("a",null,"Settings")))},g=n(27),h=n.n(g),E=n(42),v=n(5),b={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"What's up"},{id:3,message:"I'm good"},{id:4,message:"I'm good"}],defaultMessage:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=Object(v.a)({},e);return n.messages=Object(E.a)(e.messages),n.defaultMessage="",n.messages.push({id:8,message:t.message}),n;default:return e}},_=function(e){return r.a.createElement("div",{className:h.a.dialog+" "+h.a.active},r.a.createElement(f.b,{to:"/dialogs/"+e.id}," ",e.name))},j=function(e){return r.a.createElement("div",{className:h.a.dialog},e.message)},P=n(126),w=n(127),S=function(e){if(!e)return"Field is required"},y=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},C=n(71),k=n(50),I=n.n(k),N=function(e){var t=e.meta,n=Object(C.a)(e,["meta"]),a=t.touched&&t.error;return r.a.createElement("div",{className:I.a.formControl+" "+(a?I.a.error:"")},r.a.createElement("div",null,n.children),a&&r.a.createElement("span",null,t.error))},T=function(e){var t=e.input,n=Object(C.a)(e,["input"]);return r.a.createElement(N,e," ",r.a.createElement("textarea",Object.assign({},t,n)))},A=function(e){var t=e.input,n=(e.meta,Object(C.a)(e,["input","meta"]));return r.a.createElement(N,e," ",r.a.createElement("input",Object.assign({},t,n)))},U=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(P.a,Object.assign({placeholder:e,name:t,validate:n,component:a},o))," ",s)},x=y(50),F=Object(w.a)({form:"dialog-add-message-form"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(P.a,{component:T,validate:[S,x],placeholder:"Enter your message",name:"newMessageBody"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),L=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return r.a.createElement(_,{name:e.name,id:e.id})})),a=t.messages.map((function(e){return r.a.createElement(j,{message:e.message})}));return r.a.createElement("div",{className:h.a.dialogs},r.a.createElement("div",{className:h.a.dialogsItems},n),r.a.createElement("div",{className:h.a.messages},a,r.a.createElement("br",null),r.a.createElement(F,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},M=n(9),D=n(10),z=function(e){return{isAuth:e.auth.isAuth}},R=n(7),B=Object(R.d)(Object(M.b)((function(e){return{dialogsPage:e.dialogsPage,defaultMessage:e.dialogsPage.defaultMessage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",message:e}}(t))}}})),(function(e){var t=function(t){Object(c.a)(a,t);var n=Object(l.a)(a);function a(){return Object(i.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(D.a,{to:"/login"})}}]),a}(r.a.Component);return Object(M.b)(z)(t)}))(L),G=n(131),W=n.n(G),H=n(67),q=n.n(H),J=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:q.a,className:W.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},V=n(65),Y=n(53),Z=n(70),K=n.n(Z),X=n(132),Q=n.n(X),$=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,s=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,c=Math.ceil(t/n),l=[],m=1;m<=c;m++)l.push(m);var p=Math.ceil(c/u),f=Object(a.useState)(1),d=Object(Y.a)(f,2),g=d[0],h=d[1],E=(g-1)*u+1,v=g*u;return r.a.createElement("div",{className:K.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return r.a.createElement("span",{className:Q()(Object(V.a)({},K.a.selectedPage,o===e),K.a.pageNumber),key:e,onClick:function(t){s(e)}},e)})),p>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},ee=function(e){return r.a.createElement("div",null,e.users.map((function(t){return r.a.createElement(J,{user:t,followingInProgress:e.followingInProgress,key:t.id,unfollow:e.unfollow,follow:e.follow})})))},te=n(8),ne=n.n(te),ae=n(17),re=n(133),oe=n.n(re).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6fd89697-288c-4fc6-8169-f6886a11cd31"}}),se={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return oe.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return oe.post("follow/".concat(e))},unfollow:function(e){return oe.delete("follow/".concat(e))}},ie=function(){return oe.get("auth/me")},ue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return oe.post("auth/login",{email:e,password:t,rememberMe:n})},ce=function(){return oe.delete("auth/login")},le=function(e){return oe.get("profile/"+e)},me=function(e){return oe.get("profile/status/"+e)},pe=function(e){return oe.put("profile/status",{status:e})},fe=function(e){var t=new FormData;return t.append("image",e),oe.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},de=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(v.a)(Object(v.a)({},e),a):e}))},ge={users:[],pageSize:5,totalUsersCount:20,currentPage:1,isFetching:!0,followingInProgress:[]},he=function(e){return{type:"FOLLOW",userId:e}},Ee=function(e){return{type:"UNFOLLOW",userId:e}},ve=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},be=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Oe=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},_e=function(){var e=Object(ae.a)(ne.a.mark((function e(t,n,a,r){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Oe(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(Oe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:de(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:de(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(v.a)(Object(v.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(v.a)(Object(v.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Pe=n(134),we=n.n(Pe),Se=function(){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:we.a}))},ye=n(135),Ce=Object(ye.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ke=function(e){return e.usersPage.pageSize},Ie=function(e){return e.usersPage.totalUsersCount},Ne=function(e){return e.usersPage.currentPage},Te=function(e){return e.usersPage.isFetching},Ae=function(e){return e.usersPage.followingInProgress},Ue=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize}),this.props.isFetching?r.a.createElement(Se,null):r.a.createElement(ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),xe=Object(R.d)(Object(M.b)((function(e){return{users:Ce(e),currentPage:Ne(e),pageSize:ke(e),totalUsersCount:Ie(e),isFetching:Te(e),followingInProgress:Ae(e)}}),{follow:function(e){return function(){var t=Object(ae.a)(ne.a.mark((function t(n){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_e(n,e,se.follow.bind(se),he);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(ae.a)(ne.a.mark((function t(n){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_e(n,e,se.unfollow.bind(se),Ee);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ve,requestUsers:function(e,t){return function(){var n=Object(ae.a)(ne.a.mark((function n(a){var r;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(be(!0)),a(ve(e)),n.next=4,se.getUsers(e,t);case 4:r=n.sent,a(be(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ue),Fe=(n(289),n(93)),Le=n.n(Fe),Me=function(e){var t=Object(a.useState)(!1),n=Object(Y.a)(t,2),o=n[0],s=n[1],i=Object(a.useState)(e.status),u=Object(Y.a)(i,2),c=u[0],l=u[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){e.isOwner&&s(!0)}},e.status||"Slim Shady")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},value:c})))},De=function(e){if(!e.profile)return r.a.createElement(Se,null);return r.a.createElement("div",null,r.a.createElement("div",{className:Le.a.descriptionBlock},r.a.createElement("img",{src:e.profile.photos.large||q.a,className:Le.a.mainPhoto}),e.isOwner&&r.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),r.a.createElement(Me,{status:e.status,isOwner:e.isOwner,updateStatus:e.updateStatus})))},ze={posts:[{id:1,message:"Hi",likesCount:12},{id:2,message:"What's up",likesCount:26}],profile:null,status:""},Re=function(e){return{type:"SET_STATUS",status:e}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:8,message:t.newPostText,likesCount:0};return Object(v.a)(Object(v.a)({},e),{},{posts:[].concat(Object(E.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(v.a)(Object(v.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{profile:Object(v.a)(Object(v.a)({},e.profile),{},{photos:t.photos})});default:return e}},Ge=n(94),We=n.n(Ge),He=n(136),qe=n.n(He),Je=function(e){return r.a.createElement("div",{className:qe.a.item},r.a.createElement("img",{src:e.img}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"likes")," ",e.likecount),r.a.createElement("br",null))},Ve=y(10),Ye=Object(w.a)({form:"ProfileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(P.a,{component:T,name:"newPostText",validate:[S,Ve]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),Ze=r.a.memo((function(e){var t=e.posts.map((function(e){return r.a.createElement(Je,{message:e.message,likecount:e.likesCount,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ0-g8vswsaeEKDYEYiBWtgYBXH0Zhy06CAw&usqp=CAU"})}));return r.a.createElement("div",{className:We.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(Ye,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:We.a.posts},t))})),Ke=Object(M.b)((function(e){return{posts:e.profilePage.posts,defaultText:e.profilePage.defaultText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(Ze),Xe=function(e){return r.a.createElement("div",null,r.a.createElement(De,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Ke,null))},Qe=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.isFetching?r.a.createElement(Se,null):r.a.createElement(Xe,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,savePhoto:this.props.savePhoto,updateStatus:this.props.updateStatus}))}}]),n}(r.a.Component),$e=Object(R.d)(Object(M.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.id,isFetching:e.usersPage.isFetching}}),{getUserProfile:function(e){return function(t){t(be(!0)),le(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data}),t(be(!1))}))}},getStatus:function(e){return function(){var t=Object(ae.a)(ne.a.mark((function t(n){var a;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e);case 2:a=t.sent,n(Re(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(ae.a)(ne.a.mark((function t(n){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:0===t.sent.data.resultCode&&n(Re(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(ae.a)(ne.a.mark((function t(n){var a;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleIsFetching:be}),D.f)(Qe),et=n(68),tt=n.n(et),nt=function(e){return r.a.createElement("header",{className:tt.a.header},r.a.createElement("img",{src:"https://angular.io/assets/images/logos/angular/angular_solidBlack.png"}),r.a.createElement("div",{className:tt.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,"  ",r.a.createElement("button",{onClick:e.logout},"Log out")," "):r.a.createElement(f.b,{to:"/login"},"Login")))},at=n(34),rt={id:null,email:null,login:null,isAuth:!1},ot=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},st=function(){return function(){var e=Object(ae.a)(ne.a.mark((function e(t){var n,a,r,o,s;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,s=a.login,t(ot(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},ut=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(nt,this.props)}}]),n}(r.a.Component),ct=Object(M.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(ae.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:0===e.sent.data.resultCode&&t(ot(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ut),lt=Object(w.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},U("Email","email",[S],A),U("Password","password",[S],A,{type:"password"}),U(null,"rememberMe",[],A,{type:"checkbox"},"remember me"),e.error&&r.a.createElement("div",{className:I.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),mt=Object(M.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(ae.a)(ne.a.mark((function a(r){var o,s;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ue(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(st()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(at.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(D.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(lt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),pt={initialized:!1},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},dt=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ct,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(D.b,{path:"/profile/:userId?",render:function(){return r.a.createElement($e,null)}}),r.a.createElement(D.b,{path:"/dialogs",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(D.b,{path:"/users",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(D.b,{path:"/login",render:function(){return r.a.createElement(mt,null)}}))):r.a.createElement(Se,null)}}]),n}(r.a.Component),gt=Object(R.d)(D.f,Object(M.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(st());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(dt),ht={},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht;return e},vt=n(137),bt=n(128),Ot=Object(R.c)({profilePage:Be,dialogsPage:O,sidebar:Et,usersPage:je,auth:it,form:bt.a,app:ft}),_t=Object(R.e)(Ot,Object(R.a)(vt.a));window.store=_t;var jt=_t;s.a.render(r.a.createElement(f.a,null,r.a.createElement(M.a,{store:jt},r.a.createElement(gt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1OWJt",error:"FormsControls_error__Lo1ky",formSummaryError:"FormsControls_formSummaryError__3040z"}},67:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},68:function(e,t,n){e.exports={header:"Header_header__3k67y",loginBlock:"Header_loginBlock__1MYz2"}},70:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3hwQG",paginator:"Paginator_paginator__1tIDa",pageNumber:"Paginator_pageNumber__1-xBa"}},93:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2xjUu",mainPhoto:"ProfileInfo_mainPhoto__30jjo"}},94:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__15atM",posts:"MyPosts_posts__29U14"}},95:function(e,t,n){}},[[163,1,2]]]);
//# sourceMappingURL=main.29a93c83.chunk.js.map