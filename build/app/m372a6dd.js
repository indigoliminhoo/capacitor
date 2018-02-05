/*! Built with http://stenciljs.com (es5) */

App.loadStyles("anchor-link","anchor-link{cursor:pointer;user-select:none}anchor-link.hover-anchor{position:absolute;margin-left:-25px;color:#d6d1d1}.anchor-link-relative{position:relative}.anchor-link-relative{position:relative}\nanchor-link.hydrated{visibility:inherit}","app-marked","\napp-marked.hydrated{visibility:inherit}","avc-code-type","\navc-code-type.hydrated{visibility:inherit}","doc-snippet","\ndoc-snippet.hydrated{visibility:inherit}","document-component","document-component ul{-webkit-padding-start:0}document-component ul code,document-component ul li{font-size:16px;margin-left:18px}document-component p a{color:#5eb6fc;text-decoration:none}document-component p code{font-weight:600;font-family:\"Source Code Pro\",monospace;font-size:14px;letter-spacing:-.02em}document-component #introButton{background:#5eb6fc;color:#fff;text-decoration:none;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}document-component #introButton:hover{box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}\ndocument-component.hydrated{visibility:inherit}","plugin-api","plugin-api .avc-code-plugin-index anchor-link{color:#5eb6fc;cursor:pointer}plugin-api .avc-code-plugin-name{display:none}plugin-api .avc-code-method-anchor-point{height:20px}plugin-api .avc-code-method .avc-code-method-header{margin-top:15px}plugin-api .avc-code-method .avc-code-method-comment{margin:20px 0}plugin-api .avc-code-method-signature{font-family:monospace;padding:8px;background-color:#eee;border-radius:3px}plugin-api .avc-code-method-params .avc-code-method-param-info .avc-code-method-param-info-name{font-size:14px;font-weight:700}plugin-api .avc-code-method-params .avc-code-method-param-info .avc-code-type-name,plugin-api .avc-code-method-params .avc-code-method-param-info avc-code-type{margin-left:5px;margin-right:5px;font-style:italic}plugin-api .avc-code-method-params .avc-code-method-param-info .avc-code-method-param-comment{display:inline-block}plugin-api .avc-code-method-params .avc-code-method-returns-label{font-weight:700;font-size:14px;text-transform:lowercase}plugin-api avc-code-type{display:inline-block;color:#5eb6fc;font-weight:500}plugin-api .avc-code-string{color:#5eb6fc}plugin-api .avc-code-interface{margin-top:25px}plugin-api .avc-code-interface-param{margin-left:25px}\nplugin-api.hydrated{visibility:inherit}");
App.loadComponents("m372a6dd",function(n,t,e,o){"use strict";var i=function(){function n(){}return n.prototype.handleClick=function(n){if(console.log("CLICK!",document.location.hash,this.to),document.location.hash!=="#"+this.to){document.location.hash=this.to;var t=document.querySelector("html").scrollTop;window.scrollTo(0,t-60)}else console.log("CLICK"),document.location.hash="",document.location.hash=this.to},n.prototype.render=function(){return t("div",{onClick:this.handleClick.bind(this)},t("slot",null))},n}(),r=function(){function n(){}return n.prototype.componentWillLoad=function(){return this.fetchNewContent()},n.prototype.componentDidLoad=function(){this.bindHeadings(this.el)},n.prototype.fetchNewContent=function(){var n=this;return fetch("/capacitor/docs-content/"+this.doc).then(function(n){return n.text()}).then(function(t){n.content=t;var e=document.createElement("div");e.innerHTML=t;var o=e.querySelector("h1");document.title=o&&o.textContent+" - Capacitor"||"Capacitor",n.isServer||window.requestAnimationFrame(function(){window.scrollTo(0,0)})})},n.prototype.bindHeadings=function(n){Array.from(n.querySelectorAll("h1,h2,h3,h4,h5")).forEach(function(n){n.classList.add("anchor-link-relative");var t=document.createElement("anchor-link");t.className="hover-anchor",n.id&&(t.to=n.id),t.innerHTML="#",n.insertBefore(t,n.firstChild)})},n.prototype.render=function(){return t("div",{innerHTML:this.content})},n}(),c=function(){function n(){}return n.prototype.render=function(){return this.typeId?t("anchor-link",{to:"type-"+this.typeId},t("slot",null)):t("slot",null)},n}(),a=function(){function n(){}return n.prototype.render=function(){return t("div",{class:"snippet"})},n}(),l=function(){function n(){this.pages=[]}return n.prototype.render=function(){return console.log(this.pages),t("div",{class:"wrapper"},t("div",{class:"container container-flex"},t("div",{class:"pull-left"},t("site-menu",null)),t("div",{class:"pull-right"},this.pages.map(function(n){return t("app-marked",{doc:n})}))))},n}(),s=function(){function n(){}return n.prototype.componentWillLoad=function(){var n=this,t="api"+(this.index?"-index":"")+".html";return fetch("/capacitor/docs-content/apis/"+this.name+"/"+t).then(function(n){return n.text()}).then(function(t){n.content=t,document.createElement("div").innerHTML=t})},n.prototype.componentDidLoad=function(){this.bindHeadings(this.el)},n.prototype.bindHeadings=function(n){Array.from(n.querySelectorAll("h1,h2,h3,h4,h5")).forEach(function(n){n.classList.add("anchor-link-relative");var t=document.createElement("anchor-link");t.className="hover-anchor",n.id&&(t.to=n.id),t.innerHTML="#",n.insertBefore(t,n.firstChild)})},n.prototype.render=function(){return t("div",null,t("div",{innerHTML:this.content}))},n}();n["anchor-link"]=i,n["app-marked"]=r,n["avc-code-type"]=c,n["doc-snippet"]=a,n["document-component"]=l,n["plugin-api"]=s},["anchor-link",[["to",1,1,2]],{}],["app-marked",[["content",5,0,1],["doc",1,1,2],["el",7,0,1],["isServer",3,0,1,"isServer"]],{},0,0,[["doc","fetchNewContent"]]],["avc-code-type",[["typeId",1,1,2]],{}],["doc-snippet",0,{}],["document-component",[["pages",1,1,1]],{}],["plugin-api",[["content",5,0,1],["el",7,0,1],["index",1,1,3],["name",1,1,2]],{}]);;