(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7395],{7729:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[id]",function(){return n(8118)}])},163:function(e,s,n){"use strict";var o=n(5893),i=n(9008),a=n.n(i),l=n(1664),c=n.n(l),r=n(2806),t=n(1163);let d=e=>{let{pageTitle:s,pageDesc:n}=e,i="".concat(r.Xd.aD," - ").concat(s),{asPath:l}=(0,t.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a(),{children:(0,o.jsx)("title",{children:i})}),(0,o.jsx)("section",{className:"onovo-section onovo-intro intro--black",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("h1",{className:"onovo-title-1  onovo-text-white",children:[(0,o.jsx)("span",{children:s}),(0,o.jsx)("span",{className:"onovo-sep word",children:(0,o.jsx)("i",{className:"sep-img",style:{backgroundImage:"url(/images/title_icon.svg)"}})})]}),""!=n&&(0,o.jsx)("div",{className:"onovo-subtitle-2  onovo-text-white",children:(0,o.jsx)("span",{children:n})}),(0,o.jsx)("div",{className:"onovo-breadcrums",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/",children:"Home"})}),-1!=l.indexOf("/blog/")&&(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/blog",children:"Blog"})}),-1!=l.indexOf("/projects/")&&(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/projects",children:"Projects"})}),-1!=l.indexOf("/services/")&&(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/services",children:"Services"})}),-1!=l.indexOf("/team/")&&(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/team",children:"Team"})}),(0,o.jsx)("li",{className:"current",children:(0,o.jsx)("span",{children:s})})]})})]})})]})};s.Z=d},8118:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return h}});var o=n(5893),i=n(95),a=n(163),l=n(4076),c=n(1664),r=n.n(c),t=n(2806),d=n(2175);let m=e=>{let{postData:s,services:n}=e,c,m,h,x=0;return n.forEach(function(e,n){e.id==s.id&&(h=n-1,x=n+1)}),n.forEach(function(e,s){s==h&&(c=e.id),s==x&&(m=e.id)}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(a.Z,{pageTitle:s.title,pageDesc:"Our values and vaulted us to the top of our industry."}),(0,o.jsx)("section",{className:"onovo-section gap-top-140",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8",children:[(0,o.jsx)("div",{className:"gap-bottom-50",children:(0,o.jsx)("img",{src:s.image,alt:s.title})}),""!=s.contentHtml&&(0,o.jsx)("div",{className:"onovo-text",children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:s.contentHtml}})}),void 0!==s.accordion&&(0,o.jsx)(o.Fragment,{children:1==s.accordion.enabled&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:s.accordion.title}),(0,o.jsx)(l.Z,{children:(0,o.jsx)("div",{className:"onovo-faq-items",children:s.accordion.items.map((e,s)=>(0,o.jsx)(l.Z.Item,{eventKey:"faq-acc-".concat(s),children:(0,o.jsxs)("div",{className:"onovo-faq-item onovo-collapse-item",children:[(0,o.jsx)(l.Z.Header,{children:(0,o.jsxs)("h5",{className:"title onovo-collapse-btn",children:[(0,o.jsx)("span",{children:e.heading}),(0,o.jsx)("i",{className:"arrow"})]})}),(0,o.jsx)(l.Z.Body,{children:(0,o.jsx)("div",{className:"onovo-text",children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}})})})]})},"faq-item-".concat(s)))})})]})}),void 0!==s.additional&&(0,o.jsx)(o.Fragment,{children:1==s.additional.enabled&&(0,o.jsx)("div",{className:"onovo-text gap-top-50",children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:s.additional.content}})})})]}),(0,o.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-4",children:[(0,o.jsx)("div",{className:"onovo-service-item onovo-service-no-icon gap-bottom-40",children:(0,o.jsxs)("div",{className:"onovo-service-item-inner onovo-hover-3 onovo-hover-black",children:[(0,o.jsx)("h5",{className:"title",children:(0,o.jsx)("span",{"data-splitting":!0,"data-onovo-scroll":!0,children:" Services List "})}),(0,o.jsx)("div",{className:"list",children:(0,o.jsx)("ul",{children:n.map((e,s)=>(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"onovo-lnk",href:"/services/".concat(e.id),children:(0,o.jsx)("span",{"data-splitting":!0,"data-onovo-scroll":!0,children:e.title})})},"services-item-".concat(s)))})})]})}),(0,o.jsxs)("div",{className:"onovo-form-box onovo-text-white",children:[(0,o.jsx)("h5",{children:"Send Us A Message"}),(0,o.jsx)("p",{children:"Feel some love, to see what we can do...t!"}),(0,o.jsx)(d.J9,{initialValues:{email:"",name:"",tel:"",message:""},validate:e=>{let s={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(s.email="Invalid email address"):s.email="Required",s},onSubmit:(e,s)=>{let{setSubmitting:n}=s,o=document.getElementById("contactForm"),i=document.getElementById("contactFormStatus"),a=new FormData;a.append("name",e.name),a.append("tel",e.tel),a.append("email",e.email),a.append("message",e.message),fetch(o.action,{method:"POST",body:a,headers:{Accept:"application/json"}}).then(e=>{e.ok?(i.innerHTML="Thanks for your submission!",o.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?i.innerHTML=e.errors.map(e=>e.message).join(", "):i.innerHTML="Oops! There was a problem submitting your form"})}).catch(e=>{i.innerHTML="Oops! There was a problem submitting your form"}),n(!1)},children:e=>{let{values:s,errors:n,touched:i,handleChange:a,handleBlur:l,handleSubmit:c,isSubmitting:r}=e;return(0,o.jsxs)("form",{onSubmit:c,id:"contactForm",action:t.Xd.Tb,className:"cform",method:"post",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsx)("p",{children:(0,o.jsx)("input",{size:"40",placeholder:"Full Name",type:"text",name:"name",required:"required",onChange:a,onBlur:l,value:s.name})})}),(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsx)("p",{children:(0,o.jsx)("input",{size:"40",placeholder:"Email Address",type:"email",name:"email",required:"required",onChange:a,onBlur:l,value:s.email})})}),(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsx)("p",{children:(0,o.jsx)("input",{size:"40",placeholder:"Phone",type:"tel",name:"tel",required:"required",onChange:a,onBlur:l,value:s.tel})})}),(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsx)("p",{children:(0,o.jsx)("textarea",{cols:"40",rows:"10",placeholder:"Message",name:"message",required:"required",onChange:a,onBlur:l,value:s.message})})}),(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,o.jsx)("p",{children:(0,o.jsx)("button",{type:"submit",className:"onovo-btn onovo-hover-btn btn--active",children:(0,o.jsx)("span",{children:"Send Message"})})})})]}),(0,o.jsx)("div",{className:"form-status alert-success",id:"contactFormStatus"})]})}})]})]})]})})}),(0,o.jsx)("section",{className:"onovo-section",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"onovo-page-navigation",children:(0,o.jsxs)("div",{className:"onovo-page-navigation-content",children:[0!=c&&void 0!=c&&(0,o.jsx)(r(),{href:"/services/".concat(c),className:"page-navigation__prev",children:(0,o.jsx)("span",{className:"onovo-prev onovo-hover-2",children:(0,o.jsx)("i",{})})}),(0,o.jsx)(r(),{href:"/services",className:"page-navigation__posts",children:(0,o.jsx)("i",{className:"fas fa-th"})}),0!=m&&void 0!=m&&(0,o.jsx)(r(),{href:"/services/".concat(m),className:"page-navigation__next",children:(0,o.jsx)("span",{className:"onovo-next onovo-hover-2",children:(0,o.jsx)("i",{})})})]})})})})]})};var h=!0;s.default=m}},function(e){e.O(0,[7142,2175,9690,2156,95,9774,2888,179],function(){return e(e.s=7729)}),_N_E=e.O()}]);