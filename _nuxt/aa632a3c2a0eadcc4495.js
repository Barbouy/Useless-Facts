(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("e46b6ba2",content,!0,{sourceMap:!1})},192:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("6759f5ab",content,!0,{sourceMap:!1})},201:function(t,e,n){t.exports=n.p+"img/383d496.png"},202:function(t,e,n){t.exports=n.p+"img/e6cd3e0.png"},203:function(t,e,n){"use strict";var o=n(191);n.n(o).a},204:function(t,e,n){(e=n(50)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},223:function(t,e,n){"use strict";var o=n(192);n.n(o).a},224:function(t,e,n){(e=n(50)(!1)).push([t.i,'body,html{margin:0;padding:0}body{background:#222831;background:linear-gradient(18deg,#222831,#222831 50%,#393e46);color:#eee}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column;font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}img{height:auto;min-height:auto;width:2rem}.liens{position:absolute;display:flex;bottom:3rem}.copyright{position:absolute;bottom:0;font-size:.8rem;color:hsla(0,0%,100%,.12)}.liens a{display:flex;flex-direction:row;margin:0 1rem}.liens a div{padding:.2rem 0 0 .5rem;color:#f57170;font-weight:500;font-size:1rem}.liens a div:after{content:"";display:block;width:0;height:1px;background:#f57170;transition:width .3s}.liens a div:hover:after{width:100%;transition:width .3s}a:visited{color:#eee}a:hover{text-decoration:none}@media (max-width:425px){.titre{display:block;text-align:left;font-weight:300;font-size:1.2rem;margin-bottom:5rem;color:#f57170}.titre span{font-size:.8rem;color:hsla(0,0%,100%,.6)}.phrase{display:block;text-align:right;font-weight:300;font-size:1.8rem;letter-spacing:1px}}@media (min-width:425px) and (max-width:768px){.titre{display:block;text-align:left;font-weight:300;font-size:1.6rem;margin-bottom:5rem;color:#f57170}.titre span{font-size:.9rem;color:hsla(0,0%,100%,.6)}.phrase{display:block;text-align:right;font-weight:300;font-size:2rem;letter-spacing:1px}}@media (min-width:768px){.titre{display:block;text-align:left;font-weight:300;font-size:2rem;margin-bottom:5rem;color:#f57170}.titre span{font-size:1rem;color:hsla(0,0%,100%,.6)}.phrase{display:block;text-align:right;font-weight:300;font-size:3.5rem;letter-spacing:1px}}',""]),t.exports=e},225:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"titre"},[this._v("\n      Voici une info"),e("span",[this._v(" ma foi ")]),this._v(" plutôt inutile...\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"liens"},[e("a",{attrs:{href:"https://github.com/Barbouy/Useless-Facts",target:"_blank"}},[e("img",{attrs:{src:n(201),alt:"github",id:"git"}}),e("div",{staticClass:"github"},[this._v("GitHub")])]),this._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/in/pierre-alexandre-holliger-541301146/",target:"_blank",id:"link"}},[e("img",{attrs:{src:n(202),alt:"linkedin"}}),e("div",{staticClass:"linkedin"},[this._v("LinkedIn")])])])}],r=(n(203),n(46)),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!1,null,null,null).exports,c=n(205),h=n.n(c),f=(n(222),{components:{Logo:l},data:function(){return{phrase:"Une seconde, ça charge..."}},mounted:function(){var t=this;h.a.get("https://uselessfacts.jsph.pl/random.json?language=en").then((function(e){return t.phrase=e.data.text}))}}),d=(n(223),Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[t._m(0),t._v(" "),n("h2",{staticClass:"phrase"},[t._v("\n      "+t._s(t.phrase)+"\n    ")])]),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"copyright"},[t._v("© Copyright 2020 - Pierre-Alexandre Holliger")])])}),o,!1,null,null,null));e.default=d.exports}}]);