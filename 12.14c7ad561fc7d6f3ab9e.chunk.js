(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4baf978c269f7e83ac7b":function(e,t,n){"use strict";n.r(t);var o,i=n("8af190b70a6bc55c6f1b"),a=n.n(i),r=n("0d7f0986bcd2f33d8a2a"),l=n("1037a6e0d5914309f74c"),c=n.n(l),d=n("6938d226fd372a75cbf9"),u=n("4dd2a92e69dcbe1bab10"),f=(n("8a2d1b95e05b6a321e74"),n("b02fe3f80d4238b52f20")),s=n.n(f),m=n("edc5ec6b13db97ea0a32"),b=n("63bac7d5ea40ecc9ba06"),p=n.n(b),v=n("c09d19c0d058d138126d"),y=n.n(v),h=n("435859b6b76fb67a754a"),g=n.n(h),w=n("fee60f331c8753fe01a3"),x=n.n(w),O=n("2618892602a0e7905b7d"),S=n.n(O),j=n("16c7abd7abc407b9f247"),F=n.n(j),T=n("c37835866a3298466125"),A=n.n(T),k=n("5c0a236ca4c0b26f32cd"),N=n.n(k),C=n("921c0b8c557fe6ba5da8"),I=n.n(C),E=n("ab4cb61bcb2dc161defb"),P=n("d7dd51e1bf6bfc2c9c3d"),R=n("2aea235afd5c55b8b19b"),$=n.n(R),B=n("36164894564e60edef62"),D=n("9987d64eaa9d2906e283"),W=function(e){return{type:D.b,data:e}},q={type:D.a};function Z(e,t,n,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=i;else if(r>1){for(var l=new Array(r),c=0;c<r;c++)l[c]=arguments[c+3];t.children=l}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var J=function(e){var t=e.input,n=G(e,["input"]);return a.a.createElement(S.a,_({},t,n,{valueselected:t.value,onChange:function(e,n){return t.onChange(n)}}))},V=function(e){return null==e?"Required":void 0},z=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email":void 0},H={text:"Sample Text",email:"sample@mail.com",radio:"option1",selection:"option1",onof:!0,checkbox:!0,textarea:"This is default text"},L=Z(I.a,{variant:"h5",component:"h3"},void 0,"Simple Form Example"),M=Z(I.a,{component:"p"},void 0,"The delay between when you click (Submit) and when the alert dialog pops up is intentional, to simulate server latency."),U=Z(A.a,{component:"label"},void 0,"Choose One Option"),Y=Z(N.a,{value:"option1",control:Z(x.a,{}),label:"Option 1"}),K=Z(N.a,{value:"option2",control:Z(x.a,{}),label:"Option 2"}),Q=Z(y.a,{htmlFor:"selection"},void 0,"Selection"),X=Z(m.Field,{name:"selection",component:B.b,placeholder:"Selection",autoWidth:!0},void 0,Z(p.a,{value:"option1"},void 0,"Option One"),Z(p.a,{value:"option2"},void 0,"Option Two"),Z(p.a,{value:"option3"},void 0,"Option Three")),ee=Z(A.a,{component:"label"},void 0,"Toggle Input"),te=Z(N.a,{control:Z(m.Field,{name:"onof",component:B.c}),label:"On/OF Switch"}),ne=Z(N.a,{control:Z(m.Field,{name:"checkbox",component:B.a}),label:"Checkbox"});var oe,ie=Object(m.reduxForm)({form:"immutableExample",enableReinitialize:!0})((function(e){var t=e.classes,n=e.handleSubmit,o=e.pristine,i=e.reset,a=e.submitting,r=e.init,l=e.clear;return Z("div",{},void 0,Z(g.a,{container:!0,spacing:3,alignItems:"flex-start",direction:"row",justify:"center"},void 0,Z(g.a,{item:!0,xs:12,md:6},void 0,Z(s.a,{className:t.root},void 0,L,M,Z("div",{className:t.buttonInit},void 0,Z($.a,{onClick:function(){return r(H)},color:"secondary",type:"button"},void 0,"Load Sample Data"),Z($.a,{onClick:function(){return l()},type:"button"},void 0,"Clear Data")),Z("form",{onSubmit:n},void 0,Z("div",{},void 0,Z(m.Field,{name:"text",component:B.d,placeholder:"Text Field",label:"Text Field",validate:V,required:!0,className:t.field})),Z("div",{},void 0,Z(m.Field,{name:"email",component:B.d,placeholder:"Email Field",label:"Email",required:!0,validate:[V,z],className:t.field})),Z("div",{className:t.fieldBasic},void 0,U,Z(m.Field,{name:"radio",className:t.inlineWrap,component:J},void 0,Y,K)),Z("div",{},void 0,Z(F.a,{className:t.field},void 0,Q,X)),Z("div",{className:t.fieldBasic},void 0,ee,Z("div",{className:t.inlineWrap},void 0,te,ne)),Z("div",{className:t.field},void 0,Z(m.Field,{name:"textarea",className:t.field,component:B.d,placeholder:"Textarea",label:"Textarea",multiline:!0,rows:4})),Z("div",{},void 0,Z($.a,{variant:"contained",color:"secondary",type:"submit",disabled:a},void 0,"Submit"),Z($.a,{type:"button",disabled:o||a,onClick:i},void 0,"Reset")))))))})),ae=Object(P.connect)((function(e){return{force:e,initialValues:e.getIn(["initval","formValues"])}}),(function(e){return{init:Object(E.bindActionCreators)(W,e),clear:function(){return e(q)}}}))(ie),re=Object(d.withStyles)((function(e){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},fieldBasic:{width:"100%",marginBottom:20,marginTop:10},inlineWrap:{display:"flex",flexDirection:"row"},buttonInit:{margin:e.spacing(4),textAlign:"center"}}}))(ae);function le(e,t,n,o){oe||(oe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var r=new Array(a),l=0;l<a;l++)r[l]=arguments[l+3];t.children=r}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:oe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ue=le("p",{},void 0,"Submited Result: ");t.default=Object(d.withStyles)({root:{flexGrow:1}})((function(){var e=ce(Object(i.useState)(null),2),t=e[0],n=e[1],o=c.a.name+" - Form",a=c.a.desc;return le("div",{},void 0,le(r.Helmet,{},void 0,le("title",{},void 0,o),le("meta",{name:"description",content:a}),le("meta",{property:"og:title",content:o}),le("meta",{property:"og:description",content:a}),le("meta",{property:"twitter:title",content:o}),le("meta",{property:"twitter:description",content:a})),le(u.h,{title:"Redux Form",icon:"ios-list-box-outline",desc:"This is a simple demonstration of how to connect all the standard material-ui form elements to redux-form."},void 0,le("div",{},void 0,le(re,{onSubmit:function(e){return function(e){setTimeout((function(){n(e),console.log("You submitted:\n\n".concat(t))}),500)}(e)}}),ue,le("code",{},void 0,t&&t.toString()),le(u.m,{componentName:"containers/Pages/Forms/ReduxFormDemo.js"}))))}))}}]);