webpackJsonp([2],{"+YD6":function(t,a,e){"use strict";var l=e("aZwH"),s=e("HbuX"),n=e("VU/8"),i=n(l.a,s.a,null,null,null);a.a=i.exports},"1YKY":function(t,a,e){"use strict";a.a={data:function(){return{humansChatbotIcon:'\n        <svg width="56px" viewBox="0 0 322 324" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="facebook-messenger-white" transform="translate(-96.000000, -93.000000)" fill-rule="nonzero" fill="#1094F6">\n              <path d="M257,93 C168.082,93 96,160.157 96,243 C96,290.205 119.412,332.311 156,359.807 L156,417 L210.819,386.727 C225.449,390.801 240.948,393 257,393 C345.918,393 418,325.843 418,243 C418,160.157 345.918,93 257,93 Z M273,295 L232,251 L152,295 L240,201 L282,245 L361,201 L273,295 Z" id="Shape"></path>\n            </g>\n          </g>\n        </svg>\n      '}}}},"3EpW":function(t,a,e){"use strict";function l(t){e("rIFx")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("L+ul"),n=e("G9Ju"),i=e("VU/8"),r=l,c=i(s.a,n.a,r,null,null);a.default=c.exports},BDVc:function(t,a,e){"use strict";a.a={data:function(){return{patreonIcon:'\n        <svg viewBox="0 0 569 546" style="width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg"><circle fill="#052D49" cx="362.589996" cy="204.589996" r="204.589996"></circle><rect fill="#FFFFFF" x="0" y="0" width="100" height="545.799988"></rect></svg>\n      '}}}},G9Ju:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap xl-gutter-24 md-1"},[e("div",{staticClass:"col xl-2-3"},[e("div",{staticClass:"xl-tal xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200 xl-p24 lg-px16"},[e("div",{staticClass:"wrap xl-auto xl-gutter-16 xl-middle xl-pr"},[t.human.username?e("div",{staticClass:"col sm-hidden"},[e("div",{staticClass:"avatar--human xl-br8",style:{"background-image":"url(/img/avatar/"+t.human.username+".jpg)"}})]):t._e(),e("div",{staticClass:"col"},[t._m(0),e("div",{staticClass:"xl-mb4"},[e("div",{staticClass:"wrap xl-auto xl-middle xl-gutter-8"},[e("div",{staticClass:"col"},[e("div",{staticClass:"xl-dib xl-fs28 xl-fw600 xl-lh40"},[t._v(t._s(t.human.name))])]),t._l(t.human.tags,function(a){return e("div",{staticClass:"col"},[e("div",{staticClass:"xl-dib xl-ba-black-500 xl-co-white xl-py4 xl-px8 xl-br4 xl-ffscp xl-fs14 xl-my8"},[t._v(t._s(a.name))])])})],2)]),t.human.title?e("div",{staticClass:"xl-lh24"},[t._v(t._s(t.human.title))]):t._e()])]),e("div",{staticClass:"xl-oh xl-br8 xl-lh0 xl-mt24"},[t.videoLoading?e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("div",{staticClass:"embed-responsive-item"})]):t._e(),t.videoLoading?t._e():e("youtube",{staticClass:"xl-br8 embed-responsive embed-responsive-16by9",attrs:{"video-id":t.human.videoId,"player-vars":{autoplay:1,start:t.questionTime,rel:0}},on:{ready:t.ready}}),t.accounts.length?e("div",{staticClass:"wrap xl-auto xl-left xl-gutter-8 xl-middle xl-pt24 xl-ffscp xl-lh20"},[e("div",{staticClass:"col xl-co-gray-500 xl-fs14"},[t._v(t._s(t.$t("globals.socialMedia"))+":")]),t._l(t.accounts,function(a){return e("div",{staticClass:"col"},[e("a",{staticClass:"xl-dib xl-co-black-500 ho-co-black-500 xl-fs14 xl-tdu",attrs:{href:""+a.website.url+a.username,target:"_blank"}},[t._v(t._s(a.website.name))])])})],2):t._e()],1)]),e("FooterView")],1),e("div",{staticClass:"col xl-1-3"},[e("SidebarPatreon"),t.times.length?e("div",{staticClass:"xl-mb16"},[e("div",{staticClass:"xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18"},[t._v(t._s(t.$t("globals.questions")))]),e("div",{staticClass:"xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh"},[e("div",{staticClass:"xl-ba-gray-100"},t._l(t.times,function(a){return e("span",[e("a",{staticClass:"xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-200 xl-ba-white xl-co-black-500 xl-bwt1 xl-bo-gray-200 xl-cp",class:{active:a.second===t.questionTime},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.changeQuestionTime(a.second)}}},["tr"===t.$t("lang")?e("span",{staticClass:"xl-1-1 xl-db xl-wsnw xl-oh xl-toe"},[t._v(t._s(a.question.name))]):t._e(),"en"===t.$t("lang")?e("span",{staticClass:"xl-1-1 xl-db xl-wsnw xl-oh xl-toe"},[t._v(t._s(a.question.nameEnglish))]):t._e()])])}))])]):t._e(),e("SidebarHumansChatbot"),e("SidebarMailChimp"),e("SidebarGraphcool")],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"youtube"},[e("div",{staticClass:"g-ytsubscribe",attrs:{"data-channelid":"UCbu25feEIe6fY9fZx8BCMSA","data-layout":"default","data-count":"default"}})])}],n={render:l,staticRenderFns:s};a.a=n},HbuX:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a",{staticClass:"xl-p16 xl-br8 xl-ba-black-500 xl-bw2 xl-bo-black-500 xl-cp xl-db",attrs:{href:"https://www.graph.cool/?utm_medium=partner&utm_source=dnomak.com",target:"_blank"}},[e("div",{staticClass:"wrap xl-auto xl-center xl-middle xl-gutter-16"},[e("div",{staticClass:"col"},[e("div",{staticClass:"xl-co-black-100 xl-fs18 xl-lh24 xl-fw600"},[t._v(t._s(t.$t("globals.dataSponsor")))])]),e("div",{staticClass:"col xl-lh0"},[e("div",{domProps:{innerHTML:t._s(t.graphCoolIcon)}})]),t._m(0)])]),e("div",{staticClass:"xl-tac"},[e("a",{staticClass:"xl-ffscp xl-fs14 xl-tac xl-co-gray-500 xl-my24 xl-dib xl-lh24",attrs:{href:"https://github.com/dnomak/dnomak.com",target:"_blank"}},[t._v(t._s(t.$t("globals.contribute")))])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col"},[e("div",{staticClass:"xl-fw600 xl-ls1 xl-fs20 xl-lh24",staticStyle:{color:"#27ae60"}},[t._v("GRAPHCOOL")])])}],n={render:l,staticRenderFns:s};a.a=n},KVWm:function(t,a,e){"use strict";var l=e("BDVc"),s=e("QbFP"),n=e("VU/8"),i=n(l.a,s.a,null,null,null);a.a=i.exports},"L+ul":function(t,a,e){"use strict";var l=e("Xxa5"),s=e.n(l),n=e("exGp"),i=e.n(n),r=e("KVWm"),c=e("bo/D"),o=e("VlwC"),x=e("+YD6"),u=e("kQIn");a.a={layout:"main",asyncData:function(){function t(t){return a.apply(this,arguments)}var a=i()(s.a.mark(function t(a){var e,l=a.store,n=a.params,i=(a.error,a.payload);return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=i)){t.next=5;break}return t.abrupt("return",{human:e,times:e.times,accounts:e.accounts});case 5:return t.next=7,l.dispatch("humans/getHuman",n.username);case 7:return t.next=9,l.dispatch("accounts/getAllAccounts",n.username);case 9:return t.next=11,l.dispatch("times/getAllTimes",n.username);case 11:return t.abrupt("return",{human:l.getters["humans/human"],times:l.getters["times/times"],accounts:l.getters["accounts/accounts"]});case 12:case"end":return t.stop()}},t,this)}));return t}(),head:function(){return{title:this.human.name,meta:[{name:"description",hid:"description",content:this.human.title},{name:"og:title",content:this.human.name},{name:"og:description",content:this.human.title},{name:"og:type",content:"website"},{name:"og:url",content:"http://dnomak.com/"+this.human.username},{name:"og:image",content:"http://dnomak.com/img/avatar/"+this.human.username+".jpg"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@dnomak"},{name:"twitter:title",content:this.human.name},{name:"twitter:description",content:this.human.title},{name:"twitter:image",content:"http://dnomak.com/img/avatar/"+this.human.username+".jpg"},{name:"twitter:image:alt",content:this.human.name}]}},data:function(){return{questionTime:0,player:{j:{currentTime:0}},playerSecond:null,videoLoading:!1,graphCoolIcon:'\n        <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>\n      '}},created:function(){var t=this;setInterval(function(){var a=parseInt(t.player.j.currentTime,10);t.times.forEach(function(e){a===e.second&&(t.questionTime=e.second)})},1e3)},methods:{ready:function(t){this.player=t},changeQuestionTime:function(t){var a=this;this.videoLoading=!0,setTimeout(function(){a.questionTime=parseInt(t,10),a.videoLoading=!1},1)}},components:{SidebarPatreon:r.a,SidebarHumansChatbot:c.a,SidebarMailChimp:o.a,SidebarGraphcool:x.a,FooterView:u.a}}},QbFP:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"xl-pr xl-lh56 xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-br8 xl-mb16 xl-tac",staticStyle:{"background-color":"#F96854"},attrs:{href:"https://www.patreon.com/bePatron?u=5286443",target:"_blank"}},[e("span",{staticClass:"xl-vam xl-dib xl-lh0",domProps:{innerHTML:t._s(t.patreonIcon)}}),e("div",{staticClass:"xl-di xl-vam xl-pl8"},[t._v("Become a Patron!")])])},s=[],n={render:l,staticRenderFns:s};a.a=n},VlwC:function(t,a,e){"use strict";var l=e("qXLa"),s=e("VU/8"),n=s(null,l.a,null,null,null);a.a=n.exports},aZwH:function(t,a,e){"use strict";a.a={data:function(){return{graphCoolIcon:'\n        <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>\n      '}}}},"bo/D":function(t,a,e){"use strict";var l=e("1YKY"),s=e("ntB3"),n=e("VU/8"),i=n(l.a,s.a,null,null,null);a.a=i.exports},kQIn:function(t,a,e){"use strict";var l=e("miKX"),s=e("mIlK"),n=e("VU/8"),i=n(l.a,s.a,null,null,null);a.a=i.exports},mIlK:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap xl-2 xl-center xl-ffscp xl-co-gray-500 xl-pt24 xl-pb24 lg-1"},[e("div",{staticClass:"col lg-hidden"}),e("div",{staticClass:"col xl-fs14 xl-tar lg-tac"},[e("a",{staticClass:"xl-di xl-co-gray-500",attrs:{href:"http://flexible.gs",target:"_blank"}},["tr"===t.$t("lang")?[e("span",{staticClass:"xl-di xl-vam xl-pr8"},[t._v("Flexible Grid System'i")]),e("span",{staticClass:"xl-co-red-300"},[e("span",{staticClass:"xl-dib xl-vam xl-lh0",domProps:{innerHTML:t._s(t.heartIcon)}}),e("span",{staticClass:"xl-di xl-vam xl-pl8"},[t._v("Seviyorum")])])]:t._e(),"en"===t.$t("lang")?[e("span",{staticClass:"xl-di xl-vam xl-pr8"},[t._v("I")]),e("span",{staticClass:"xl-co-red-300"},[e("span",{staticClass:"xl-dib xl-vam xl-lh0",domProps:{innerHTML:t._s(t.heartIcon)}}),e("span",{staticClass:"xl-di xl-vam xl-pl8"},[t._v("Love")])]),e("span",{staticClass:"xl-di xl-vam xl-pl8"},[t._v("Flexible Grid System")])]:t._e()],2)])])},s=[],n={render:l,staticRenderFns:s};a.a=n},miKX:function(t,a,e){"use strict";a.a={data:function(){return{heartIcon:'\n        <svg fill="#F72848" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n          <path d="M0 0h24v24H0z" fill="none"/>\n          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>\n        </svg>\n      '}}}},ntB3:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"xl-p16 xl-mb16 xl-br8 xl-ba-white xl-bw2 xl-bo-blue-300"},[e("div",{staticClass:"wrap xl-table xl-center xl-middle xl-gutter-16"},[e("div",{staticClass:"col xl-width-72"},[e("div",{domProps:{innerHTML:t._s(t.humansChatbotIcon)}})]),t._m(0)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col xl-tal"},[e("div",{staticClass:"xl-fs14 xl-lh24 xl-co-blue-300"},[t._v("Tüm sohbetleri "),e("a",{staticClass:"xl-fw700 xl-tdu xl-co-blue-300",attrs:{href:"http://blog.yavuzz.com",target:"_blank"}},[t._v("Yavuz Kömeçoğlu")]),t._v(" tarafından hazırlanan "),e("a",{staticClass:"xl-fw700 xl-tdu xl-co-blue-300",attrs:{href:"https://m.me/825654834274575",target:"_blank"}},[t._v("Humans Chatbot")]),t._v("'u kullanarak görüntüleyin.")])])}],n={render:l,staticRenderFns:s};a.a=n},qXLa:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"wrap xl-mb16",attrs:{action:"//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&id="+t.$t("mailchimp.id"),method:"post",name:"mc-embedded-subscribe-form",target:"_blank"}},[e("div",{staticClass:"col xl-7-12"},[e("input",{staticClass:"xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-brr0 xl-pl16 pl-co-gray-300 xl-fs16",attrs:{type:"email",name:"email",placeholder:t.$t("mailchimp.emailAddress")}}),e("div",{staticStyle:{position:"absolute",left:"-5000px"}},[e("input",{attrs:{type:"text",name:t.$t("mailchimp.name"),tabindex:"-1"}})])]),e("div",{staticClass:"col xl-5-12"},[e("input",{staticClass:"xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-fs18 xl-brl0",attrs:{type:"submit",name:"subscribe"},domProps:{value:t.$t("mailchimp.subscribe")}})])])},s=[],n={render:l,staticRenderFns:s};a.a=n},rIFx:function(t,a,e){var l=e("wklD");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);e("rjj0")("311f9f63",l,!0)},wklD:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".avatar--human{width:100px;height:100px;background-repeat:no-repeat;background-position:50%;background-size:cover}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;background:#000}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.active,.active:hover{background-color:#1094f6;color:#fff}.youtube{position:absolute;right:8px;bottom:0}",""])}});
//# sourceMappingURL=_username.ab15c57d111a32be3302.js.map