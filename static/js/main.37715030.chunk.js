(this["webpackJsonpchange-png"]=this["webpackJsonpchange-png"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),i=a.n(s),r=(a(14),a(2)),l=a(3),o=a(5),g=a(4),u=a(7),d=a(9),j=a(0),b=function(e){Object(o.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={mergeImage:"",backgroundImage:"",overlayImage:"",overlayImagex:0,overlayImagey:0,backgroundImagex:0,backgroundImagey:0},n}return Object(l.a)(a,[{key:"uploadImage",value:function(e,t){e.target.files[0]&&this.setState(Object(u.a)({},t,URL.createObjectURL(e.target.files[0])))}},{key:"mergeImage",value:function(){var e=this,t=this.state,a=t.backgroundImage,n=t.overlayImage,c=t.backgroundImagex,s=t.backgroundImagey,i=t.overlayImagex,r=t.overlayImagey;a&&n&&Object(d.a)([{src:a,x:c,y:s},{src:n,x:i,y:r}]).then((function(t){e.setState({mergeImage:t})}))}},{key:"positionchange",value:function(e){var t=this,a=e.target,n=a.name,c=a.value;this.setState(Object(u.a)({},n,c),(function(){t.mergeImage()}))}},{key:"blurchange",value:function(e){var t=this,a=e.target.value,n=document.createElement("canvas");n.height=400,n.width=400;var c=n.getContext("2d");c.filter="blur(".concat(a,"px)");var s=new Image;s.src=this.state.backgroundImage,s.onload=function(){c.drawImage(s,0,0,n.width,n.height),t.setState({backgroundImage:n.toDataURL("image/png")})}}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{class:"display-1 my-2 mx-4",children:"Image Editor"})}),Object(j.jsx)("div",{class:"mt-4",children:Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(j.jsxs)("div",{style:{width:"35%"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{for:"Imageinput",class:this.state.overlayImage?"text-success":"text-primary",children:"Select Image"}),Object(j.jsx)("input",{id:"Imageinput",class:"invisible",type:"file",onChange:function(t){e.uploadImage(t,"overlayImage")}})]}),this.state.overlayImage?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{class:"row mt-2",children:[Object(j.jsxs)("div",{class:"col-md-4",children:[Object(j.jsx)("label",{children:"X-Position"}),Object(j.jsx)("input",{type:"number",class:"form-control",name:"overlayImagex",value:this.state.overlayImagex,onChange:function(t){return e.positionchange(t)}})]}),Object(j.jsxs)("div",{class:"col-md-4",children:[Object(j.jsx)("label",{children:"y-Position"}),Object(j.jsx)("input",{type:"number",class:"form-control",name:"overlayImagey",value:this.state.overlayImagey,onChange:function(t){return e.positionchange(t)}})]})]})}):""]}),Object(j.jsxs)("div",{style:{width:"35%"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{for:"Imageinput2",class:this.state.backgroundImage?"btn text-success":"btn text-primary",children:"Select Background Image"}),Object(j.jsx)("input",{id:"Imageinput2",class:"invisible",type:"file",onChange:function(t){e.uploadImage(t,"backgroundImage")}})]}),this.state.backgroundImage?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{class:"row",children:[Object(j.jsxs)("div",{class:"col-md-4",children:[Object(j.jsx)("label",{children:"X-Position"}),Object(j.jsx)("input",{type:"number",class:"form-control",name:"backgroundImagex",value:this.state.backgroundImagex,onChange:function(t){return e.positionchange(t)}})]}),Object(j.jsxs)("div",{class:"col-md-4",children:[Object(j.jsx)("label",{children:"y-Position"}),Object(j.jsx)("input",{type:"number",class:"form-control",name:"backgroundImagey",value:this.state.backgroundImagey,onChange:function(t){return e.positionchange(t)}})]})]}),Object(j.jsx)("div",{class:"row",children:Object(j.jsxs)("div",{class:"col",children:[Object(j.jsx)("label",{children:"Blur Value"}),Object(j.jsx)("input",{type:"number",class:"form-control",onChange:function(t){return e.blurchange(t)}})]})})]}):""]}),Object(j.jsx)("div",{style:{width:"20%"},children:Object(j.jsx)("button",{type:"button",class:"btn btn-success",onClick:function(t){e.mergeImage()},children:"Apply Changes"})})]})}),this.state.mergeImage?Object(j.jsx)("div",{class:"text-center",children:Object(j.jsx)("a",{href:this.state.mergeImage,download:!0,children:Object(j.jsx)("img",{class:"mt-3",style:{height:400,width:400},id:"123",alt:"aa",src:this.state.mergeImage})})}):""]})}}]),a}(c.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(g.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)(b,{})}}]),a}(c.a.Component),m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(16);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.37715030.chunk.js.map