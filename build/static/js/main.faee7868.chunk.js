(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{110:function(e,t,a){e.exports=a(139)},137:function(e,t,a){e.exports=a.p+"static/media/dt.621267fc.png"},139:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),s=a(11),c=a(12),l=a(13),u=a(14),p=a(180),d=a(44),m=a(74),g=a(21),h=a.n(g),f=a(56),v=a(179),E=a(140),y=a(195),T="http://localhost:5000",b=a(182),S=a(181),O=a(177),F=a(178),L=a(89),C=(Object(L.a)((function(){return{typographyStyles:{flex:1}}})),function(e){return o.a.createElement(O.a,{position:"static"},o.a.createElement(F.a,null,o.a.createElement(v.a,{onClick:function(t){t.preventDefault(),e.goLogIn()}},o.a.createElement(f.a,{color:"secondary",variant:"h6"},"Dinner Time"))))}),w=function(e){return{typographyStyles:{flex:1},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},j=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).nextStep=function(e){e.preventDefault(),n.props.nextStep()},n.prevStep=function(e){e.preventDefault(),n.props.prevStep()},n.handleChangeUsername=function(e){n.setState({username:e.target.value})},n.handleChangePassword=function(e){n.setState({password:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password},a={method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(t),url:T+"/users/login"};h()(a).then((function(e){n.props.updateUsername(t.username),n.props.setJWT(e.data.token),n.props.setUserId(e.data.userId),n.props.nextStep()})).catch((function(e){"Authorization Unsuccessful"===e.response.data.message?console.log("INCORRECT LOGIN DETAILS"):"Authorization Unsuccessful, confirm email"===e.response.data.message?console.log("EMAIL UNVERIFIED"):console.log("SOME UNKNOWN ERROR :(")}))},n.goLogIn=function(e){n.props.goToLogOut()},n.state={username:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(p.a,{container:!0,direction:"column",spacing:2},o.a.createElement(C,{goLogIn:this.goLogIn}),o.a.createElement(p.a,{item:!0,style:{height:"10vh"}}),o.a.createElement(S.a,{component:"main",maxWidth:"xs"},o.a.createElement(b.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(f.a,{variant:"h3",align:"center",className:w.typographyStyles},"Log In"),o.a.createElement("form",{className:e.form,noValidate:!0},o.a.createElement(y.a,{required:!0,defaultValue:"",id:"outlined-required",label:"Username",variant:"outlined",fullWidth:!0,onChange:this.handleChangeUsername,margin:"normal"}),o.a.createElement(y.a,{required:!0,defaultValue:"",id:"outlined-required",label:"Password",type:"password",variant:"outlined",fullWidth:!0,onChange:this.handleChangePassword,margin:"normal"}),o.a.createElement(v.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,className:e.submit},"Login"),o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.prevStep},"Sign Up")))))}}]),a}(n.Component),x=Object(E.a)(w)(j),I=a(81),k=a.n(I),W=a(82),N=a.n(W),R=a(53),D=a.n(R),U=a(83),H=a.n(U),J=a(87),A=a(184),B=a(183),P=a(79),_=a.n(P),z=a(186),q=a(196),M=a(88),G=a(185),V=a(199),Y=a(198),K=(n.Component,Object(B.a)((function(e){return{root:{display:"flex",flexGrow:1},paper:{marginRight:e.spacing(2)},typographyStyles:{flex:1},menuButton:{marginRight:e.spacing(2)}}}))),X=function(e){var t=K(),a=o.a.useState(!1),n=Object(J.a)(a,2),r=n[0],i=n[1],s=o.a.useRef(null),c=function(e){s.current&&s.current.contains(e.target)||i(!1)},l=function(t){t.preventDefault(),e.goToLogOut()},u=function(t){t.preventDefault(),e.goHome()},p=function(t){t.preventDefault(),e.getFavorites()};function d(e){"Tab"===e.key&&(e.preventDefault(),i(!1))}var m=o.a.useRef(r);return o.a.useEffect((function(){!0===m.current&&!1===r&&s.current.focus(),m.current=r}),[r]),o.a.createElement(O.a,{position:"static"},o.a.createElement(F.a,null,o.a.createElement("div",{className:t.root},o.a.createElement("div",null,o.a.createElement(A.a,{ref:s,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){i((function(e){return!e}))},className:t.menuButton,edge:"start"},o.a.createElement(_.a,null)),o.a.createElement(G.a,{open:r,anchorEl:s.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return o.a.createElement(q.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),o.a.createElement(M.a,null,o.a.createElement(z.a,{onClickAway:c},o.a.createElement(Y.a,{autoFocusItem:r,id:"menu-list-grow",onKeyDown:d},o.a.createElement(V.a,{onClick:u},"Home"),o.a.createElement(V.a,{onClick:p},"Favorites"),o.a.createElement(V.a,{onClick:l},"Log Out")))))})))),o.a.createElement(f.a,{variant:"h6"},"Dinner Time")))},$=(a(137),function(e){return{typographyStyles:{flex:1},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},root:{flexGrow:1}}}),Q=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.prevStep=function(t){e.props.prevStep()},e.goToConfirm=function(t){t.preventDefault(),e.props.goToConfirm()},e.goToFavoritesList=function(t){t.preventDefault(),e.props.goToFavoritesList()},e.goToFindFood=function(t){t.preventDefault(),e.props.goToFindFood()},e.goHome=function(t){e.props.goHome()},e.goToLeave=function(t){e.props.goToLogOut()},e.getFavorites=function(t){e.props.goToFavoritesList()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;"geolocation"in navigator?(console.log("Available"),navigator.geolocation.getCurrentPosition((function(t){console.log("Latitude is :",t.coords.latitude),console.log("Longitude is :",t.coords.longitude),e.props.updateLatitude(t.coords.latitude),e.props.updateLongitude(t.coords.longitude)}))):console.log("Not Available")}},{key:"render",value:function(){var e=this.props.classes,t=this.props.handleChange;return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(X,{goToLogOut:this.goToLeave,goHome:this.goHome,getFavorites:this.getFavorites}),o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,style:{height:"80vh"}},o.a.createElement(p.a,{item:!0}),o.a.createElement(S.a,{component:"main",maxWidth:"md"},o.a.createElement(b.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(f.a,{variant:"h3",align:"center",className:$.typographyStyles},"It's Dinner Time!"),o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.continue,startIcon:o.a.createElement(k.a,null),className:e.submit},"Dinner Time"),o.a.createElement(v.a,{variant:"contained",color:"secondary",onChange:t("foodTypes"),fullWidth:!0,onClick:this.goToConfirm,startIcon:o.a.createElement(N.a,null),className:e.submit},"Random"),o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.goToFavoritesList,startIcon:o.a.createElement(D.a,null),className:e.submit},"View Favorites"),o.a.createElement(v.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.prevStep,startIcon:o.a.createElement(H.a,null),className:e.submit},"Log Out")))))}}]),a}(n.Component),Z=Object(E.a)($)(Q),ee=a(187),te=a(188),ae=Object(L.a)((function(){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:500,height:450},typographyStyles:{flex:1}}})),ne=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.goBack=function(t){t.preventDefault(),e.props.prevStep()},e.handleSubmit=function(t){return function(a){console.log("food is "+t),a.preventDefault(),e.props.updateFoodTypes(t),console.log("test: "),e.props.nextStep()}},e.goHome=function(t){e.props.goHome()},e.goToLeave=function(t){e.props.goToLogOut()},e.getFavorites=function(t){e.props.goToFavoritesList()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(X,{goToLogOut:this.goToLeave,goHome:this.goHome,getFavorites:this.getFavorites}),o.a.createElement("div",{className:ae.root},o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,style:{height:"80vh"}},o.a.createElement(ee.a,{cellHeight:80,className:ae.gridList},o.a.createElement(te.a,{cols:2,style:{height:"10vh"}},o.a.createElement(f.a,{variant:"h5",align:"center",className:ae.typographyStyles},"Select what type of food you want.")),this.props.possibleFoodTypes.map((function(t){return o.a.createElement(te.a,null,o.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:e.handleSubmit(t),fullWidth:!0,key:t},t))}))))))}}]),a}(n.Component),oe=Object(L.a)((function(){return{typographyStyles:{flex:1}}})),re=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).continue=function(e){e.preventDefault(),n.props.nextStep()},n.handleChangeUsername=function(e){n.setState({username:e.target.value})},n.handleChangePassword=function(e){n.setState({password:e.target.value})},n.handleChangeName=function(e){n.setState({name:e.target.value})},n.handleChangeEmail=function(e){n.setState({email:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={username:n.state.username,name:n.state.name,password:n.state.password,email:n.state.email};console.log("username is: "+t.username+" and password is "+t.password+", and email is "+t.email+", name is "+t.name);var a={method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(t),url:T+"/users/createAccount"};h()(a).then((function(e){console.log("SIGNUP SUCCESSFUL :)"),console.log(e),n.props.nextStep()})).catch((function(e){"User already exists"===e.response.data.message?console.log("USER ALREADY EXISTS"):(console.log(a),console.log("SOME UNKNOWN ERROR :("))}))},n.goLogIn=function(e){n.props.goToLogOut()},n.state={username:"",name:"",password:"",email:""},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(C,{goLogIn:this.goLogIn}),o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3},o.a.createElement(p.a,{item:!0,style:{height:"20vh"}}),o.a.createElement(p.a,{item:!0,container:!0,spacing:3,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(p.a,{item:!0,xs:12,sm:7},o.a.createElement(f.a,{variant:"h3",align:"center",className:oe.typographyStyles},"Sign Up!")),o.a.createElement(p.a,{item:!0,xs:6},o.a.createElement(y.a,{required:!0,id:"outlined-required",label:"Username",variant:"outlined",fullWidth:!0,onChange:this.handleChangeUsername})),o.a.createElement(p.a,{item:!0,xs:6},o.a.createElement(y.a,{required:!0,id:"outlined-required",label:"Email",variant:"outlined",fullWidth:!0,onChange:this.handleChangeEmail})),o.a.createElement(p.a,{item:!0,xs:6},o.a.createElement(y.a,{required:!0,id:"outlined-required",label:"Name",variant:"outlined",fullWidth:!0,onChange:this.handleChangeName})),o.a.createElement(p.a,{item:!0,xs:6},o.a.createElement(y.a,{required:!0,id:"outlined-required",label:"Password",type:"password",variant:"outlined",fullWidth:!0,onChange:this.handleChangePassword})),o.a.createElement(p.a,{item:!0,xs:12,sm:6},o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.handleSubmit},"Confirm")))))}}]),a}(n.Component),ie=a(197),se=Object(L.a)((function(){return{typographyStyles:{flex:1}}})),ce=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).setRadius=function(t){e.props.setRadius(t)},e.nextStep=function(t){e.props.nextStep()},e.goHome=function(t){e.props.goHome()},e.goToLeave=function(t){e.props.goToLogOut()},e.getFavorites=function(t){e.props.goToFavoritesList()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(X,{goToLogOut:this.goToLeave,goHome:this.goHome,getFavorites:this.getFavorites}),o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,style:{height:"80vh"}},o.a.createElement(p.a,{item:!0}),o.a.createElement(p.a,{item:!0,container:!0,spacing:10,justify:"center"},o.a.createElement(p.a,{item:!0,xs:12,sm:7},o.a.createElement(f.a,{variant:"h3",align:"center",className:se.typographyStyles},"How far do you want to search?")),o.a.createElement(p.a,{item:!0,xs:12,sm:8},o.a.createElement(f.a,{id:"discrete-slider",gutterBottom:!0},"Miles"),o.a.createElement(ie.a,{defaultValue:5,onChange:function(t,a){e.setRadius(a)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:30})),o.a.createElement(p.a,{item:!0,xs:12,sm:6},o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.nextStep},"Confirm")))))}}]),a}(n.Component),le=a(189),ue=a(193),pe=a(191),de=a(190),me=a(84),ge=a.n(me),he=a(54),fe=a.n(he),ve=a(192),Ee=Object(L.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),ye=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(le.a,{className:Ee.card},o.a.createElement(de.a,{title:o.a.createElement(f.a,{align:"center",variant:"h4"},this.props.favorite.name)}),o.a.createElement(pe.a,{className:Ee.title},o.a.createElement("div",null,o.a.createElement(p.a,{container:!0,alignItems:"center"},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(f.a,{gutterBottom:!0,variant:"h5"},"Contact Information")),o.a.createElement(p.a,{item:!0},o.a.createElement(f.a,{gutterBottom:!0,variant:"h5"},this.props.favorite.rating,o.a.createElement(fe.a,null))))),o.a.createElement(f.a,{align:"left",variant:"subtitle1"},this.props.favorite.address),o.a.createElement(f.a,{align:"left",variant:"subtitle1"},this.props.favorite.phone),o.a.createElement(f.a,{align:"left",variant:"body1"},this.props.favorite.website),o.a.createElement(f.a,{align:"left",variant:"body1"},this.props.favorite.restaurantId),o.a.createElement("br",null),o.a.createElement(ve.a,{variant:"middle"})),o.a.createElement(ue.a,null,o.a.createElement(v.a,{variant:"contained",color:"secondary",startIcon:o.a.createElement(ge.a,null),onClick:this.props.removeFav.bind(this,this.props.favorite.arrId)},"Delete")))}}]),a}(n.Component),Te=function(e){return{typographyStyles:{flex:1},gridList:{width:500,height:450}}},be=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).goToFindFood=function(){n.props.goToFindFood()},n.loadFavorites=function(){var e={method:"GET",headers:{"content-type":"application/json",authorization:n.props.JWT},url:T+"/users/getFavorites/"+n.props.userId};h()(e).then((function(e){console.log("res is "+JSON.stringify(e));for(var t=0;t<e.data.length;t++){var a={name:e.data[t].restaurantName,address:e.data[t].restaurantAddress,rating:e.data[t].rating,website:e.data[t].websiteUrl,phone:e.data[t].restaurantPhone,restarauntId:e.data[t]._id,arrId:t};n.setState({favorites:[].concat(Object(d.a)(n.state.favorites),[a])})}})).catch((function(e){console.log(e)}))},n.deleteFavorite=function(e){console.log("delteting...");var t={method:"DELETE",headers:{"content-type":"application/json",authorization:n.props.JWT},url:T+"/users/deleteFavorite/"+n.props.userId+"&"+n.state.favorites[e].restarauntId};h()(t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},n.removeFav=function(e){console.log(e),n.setState({favorites:Object(d.a)(n.state.favorites.filter((function(t){return t.arrId!==e})))}),n.deleteFavorite(e)},n.goHome=function(e){n.props.goHome()},n.goToLeave=function(e){n.props.goToLogOut()},n.getFavorites=function(e){n.props.goToFavoritesList()},n.state={favorites:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.loadFavorites()}},{key:"render",value:function(){var e=this;this.props.classes;return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(X,{goToLogOut:this.goToLeave,goHome:this.goHome,getFavorites:this.getFavorites}),o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3},o.a.createElement(p.a,{item:!0}),o.a.createElement(p.a,{item:!0,container:!0,spacing:3,justify:"center"},o.a.createElement(p.a,{item:!0,xs:12,sm:7},o.a.createElement(f.a,{variant:"h5",align:"center",className:Te.typographyStyles},"Your favorite restaurants")),this.state.favorites.map((function(t){return o.a.createElement(p.a,{item:!0,key:t.arrId,xs:12,sm:6},o.a.createElement(ye,{favorite:t,JWT:e.props.JWT,key:t.arrId,removeFav:e.removeFav}))})),o.a.createElement(p.a,{item:!0,container:!0,xs:12,justify:"center",alignItems:"stretch",spacing:3},o.a.createElement(p.a,{item:!0,xs:6,sm:4},o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.goToFindFood},"Back"))))))}}]),a}(n.Component),Se=Object(E.a)(Te)(be),Oe=a(85),Fe=a.n(Oe),Le=Object(L.a)({root:{borderRadius:12,margin:"auto",minWidth:275,textAlign:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),Ce=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addToFavorites=function(e){var t={restaurantName:n.props.restaurant.name,restaurantAddress:n.props.restaurant.address,restaurantPhone:n.props.restaurant.phone,rating:n.props.restaurant.rating,websiteUrl:n.props.restaurant.website},a={method:"PUT",headers:{"content-type":"application/json",authorization:n.props.JWT},data:JSON.stringify(t),url:T+"/users/addFavorite/"+n.props.userId};h()(a).then((function(e){console.log(e),n.setState({isFavorite:!0})})).catch((function(e){console.log(e)}))},n.state={isFavorite:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(le.a,{className:Le.root},o.a.createElement(de.a,{title:o.a.createElement(f.a,{align:"center",variant:"h4",letterSpacing:6},this.props.restaurant.name)}),o.a.createElement(pe.a,{className:Le.title},o.a.createElement("div",null,o.a.createElement(p.a,{container:!0,alignItems:"center"},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(f.a,{gutterBottom:!0,variant:"h5"},"Contact Information")),o.a.createElement(p.a,{item:!0},o.a.createElement(f.a,{gutterBottom:!0,variant:"h5"},this.props.restaurant.rating,o.a.createElement(fe.a,null))))),o.a.createElement(f.a,{gutterBottom:!0,align:"left",variant:"subtitle1",color:"textSecondary"},this.props.restaurant.address),o.a.createElement(f.a,{gutterBottom:!0,align:"left",variant:"subtitle1",color:"textSecondary"},this.props.restaurant.phone),o.a.createElement(f.a,{gutterBottom:!0,align:"left",variant:"body1",color:"textSecondary"},this.props.restaurant.website),o.a.createElement("br",null),o.a.createElement(ve.a,{variant:"middle"})),o.a.createElement(ue.a,null,o.a.createElement(A.a,{onClick:this.addToFavorites,align:"center"},this.state.isFavorite?o.a.createElement(D.a,{fontSize:"large"}):o.a.createElement(Fe.a,{fontSize:"large"}))))}}]),a}(n.Component),we=Object(L.a)((function(){return{typographyStyles:{flex:1}}})),je=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).pickRestaurant=function(){console.log("in confirm:"+n.props.radius);var e={method:"GET",headers:{"content-type":"application/json"},url:"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+n.props.latitude+","+n.props.longitude+"&radius="+n.props.radius+"&type=restaurant&keyword="+n.props.foodTypes+"&key=AIzaSyDqBSIr1u7owxnrzuWY-GlULfxeTuz9kIk"};h()(e).then((function(e){var t=Math.floor(Math.random()*e.data.results.length);console.log(e.data.results[t].place_id),n.getRestaurantDetails(e.data.results[t].place_id)})).catch((function(e){console.log(e)}))},n.getRestaurantDetails=function(e){var t={method:"GET",headers:{"content-type":"application/json"},url:"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id="+e+"&fields=name,rating,formatted_phone_number,formatted_address,website&key=AIzaSyDqBSIr1u7owxnrzuWY-GlULfxeTuz9kIk"};h()(t).then((function(t){n.setSelectedRestaurant(t.data.result.name,t.data.result.formatted_address,t.data.result.formatted_phone_number,t.data.result.rating,t.data.result.website,e)})).catch((function(e){console.log(e)}))},n.setSelectedRestaurant=function(e,t,a,o,r,i){var s={name:e,address:t,phone:a,rating:o,website:r,place_id:i};n.setState((function(e){return{selectedRestaurant:{name:s.name,address:s.address,rating:s.rating,website:s.website,phone:s.phone,place_id:s.place_id}}}))},n.goToFindFood=function(){n.props.goToFindFood()},n.addToFavorites=function(e){n.props.addToFavorites(e)},n.goHome=function(e){n.props.goHome()},n.goToLeave=function(e){n.props.goToLogOut()},n.getFavorites=function(e){n.props.goToFavoritesList()},n.state={selectedRestaurant:{name:"",address:"",rating:"",website:"",phone:"",place_id:""}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.pickRestaurant()}},{key:"render",value:function(){return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(X,{goToLogOut:this.goToLeave,goHome:this.goHome,getFavorites:this.getFavorites}),o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3},o.a.createElement(p.a,{item:!0,style:{height:"20vh"}}),o.a.createElement(p.a,{item:!0,xs:12,sm:7},o.a.createElement(f.a,{variant:"h3",align:"center",className:we.typographyStyles},"Here's what we found:")),o.a.createElement(p.a,{item:!0,container:!0,spacing:3,justify:"center"},o.a.createElement(p.a,{item:!0,xs:12,sm:6},o.a.createElement(Ce,{restaurant:this.state.selectedRestaurant,addToFavorites:this.addToFavorites,JWT:this.props.JWT,userId:this.props.userId})),o.a.createElement(p.a,{item:!0,xs:12,sm:7},o.a.createElement(v.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:this.goToFindFood},"Done")))))}}]),a}(n.Component),xe=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={step:0,emailConfirmed:!1,username:"",userId:"",foodTypes:"",possibleFoodTypes:["Chinese","Mexican","American","Italian","Japanese","Greek"],radius:8046.7,latitude:28.5619217,longitude:-81.1640778,JWT:"",favorites:[],selectedRestaurant:{name:"",address:"",rating:0,website:"",phone:"",place_id:"",restarauntId:""}},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.goToConfirm=function(){var t=Math.floor(Math.random()*Math.floor(e.state.possibleFoodTypes.length));e.setState({step:3,foodTypes:e.state.possibleFoodTypes[t]})},e.goToFavoritesList=function(){e.setState({step:100})},e.goToFindFood=function(){e.setState({step:1})},e.handleChange=function(t){return function(a){e.setState(Object(m.a)({},t,a.target.value))}},e.updateFoodTypes=function(t){e.setState({foodTypes:t})},e.updateUsername=function(t){e.setState({username:t})},e.updateLongitude=function(t){e.setState({longitude:t})},e.updateLatitude=function(t){e.setState({latitude:t})},e.setJWT=function(t){e.setState({JWT:t})},e.setUserId=function(t){e.setState({userId:t})},e.setRadius=function(t){e.setState({radius:1609.34*t})},e.setSelectedRestaurant=function(t){e.setState((function(e){return{selectedRestaurant:{name:t.name,address:t.address,rating:t.rating,website:t.website,phone:t.phone,place_id:t.place_id}}})),console.log(e.state.selectedRestaurant)},e.addToFavorites=function(t){e.setState((function(e){return{favorites:[].concat(Object(d.a)(e.favorites),[{restaraunt:t}])}}))},e.goHome=function(t){e.state.step;e.setState({step:1})},e.goToLogOut=function(t){e.state.step;e.setState({step:0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={username:t.username,foodTypes:t.foodTypes,favorites:t.favorites,friends:t.friends};switch(e){case-1:return o.a.createElement(re,{nextStep:this.nextStep,handleChange:this.handleChange,value:a,goToLogOut:this.goToLogOut});case 0:return o.a.createElement(x,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,updateUsername:this.updateUsername,setJWT:this.setJWT,setUserId:this.setUserId,value:a,goToLogOut:this.goToLogOut});case 1:return o.a.createElement(Z,{nextStep:this.nextStep,prevStep:this.prevStep,goToFavoritesList:this.goToFavoritesList,goToConfirm:this.goToConfirm,handleChange:this.handleChange,value:a,updateLongitude:this.updateLongitude,updateLatitude:this.updateLatitude,goHome:this.goHome,goToLogOut:this.goToLogOut});case 2:return o.a.createElement(ne,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,updateFoodTypes:this.updateFoodTypes,value:a,possibleFoodTypes:this.state.possibleFoodTypes,goHome:this.goHome,goToLogOut:this.goToLogOut,goToFavoritesList:this.goToFavoritesList});case 3:return o.a.createElement(ce,{handleChange:this.handleChange,nextStep:this.nextStep,values:a,foodTypes:this.state.foodTypes,setRadius:this.setRadius,radius:this.state.radius,setSelectedRestaurant:this.setSelectedRestaurant,goHome:this.goHome,goToLogOut:this.goToLogOut,goToFavoritesList:this.goToFavoritesList});case 4:return o.a.createElement(je,{restaraunt:this.state.selectedRestaurant,longitude:this.state.longitude,latitude:this.state.latitude,foodTypes:this.state.foodTypes,radius:this.state.radius,setSelectedRestaurant:this.setSelectedRestaurant,goToFindFood:this.goToFindFood,addToFavorites:this.addToFavorites,JWT:this.state.JWT,userId:this.state.userId,goHome:this.goHome,goToLogOut:this.goToLogOut,goToFavoritesList:this.goToFavoritesList});case 100:return o.a.createElement(Se,{goToFindFood:this.goToFindFood,favorites:this.state.favorites,username:this.state.username,JWT:this.state.JWT,userId:this.state.userId,goHome:this.goHome,goToLogOut:this.goToLogOut,goToFavoritesList:this.goToFavoritesList});default:return o.a.createElement(x,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,updateUsername:this.updateUsername,setJWT:this.setJWT,setUserId:this.setUserId,value:a})}}}]),a}(n.Component),Ie=a(194),ke=a(86),We=(a(138),Object(ke.a)({palette:{primary:{main:"#328CC1"},secondary:{main:"#D5E7F1"}}})),Ne=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(Ie.a,{theme:We},o.a.createElement(p.a,{item:!0}),o.a.createElement(p.a,{item:!0,container:!0},o.a.createElement(p.a,{item:!0,xs:1,sm:2}),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(xe,null)),o.a.createElement(p.a,{item:!0,xs:1,sm:2}))))}}]),a}(n.Component),Re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(Ne,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(t,e)}))}}()}},[[110,1,2]]]);
//# sourceMappingURL=main.faee7868.chunk.js.map