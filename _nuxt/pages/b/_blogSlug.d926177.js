(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{305:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAGHRSTlMAJIPH3/+/exgEi/v3c6OTMJvj50CrDNeNoElnAAAApUlEQVR4Ae3YSQ6DMBBE0QJczGOA5P43zcbbdiTcihCqd4G//5A7EpGirAIvCnXTIq3rB2YZJ6R0NbPNSFjoYIJppYexhWWjiwaWQBc1LPQRfgZwEaMnBxRQgNE/AwoooIACjBRQQAEF7hxgpIACCiigwCMDWgkKKJDvBctOFxUsM12UsBz0MBQwnXTQw/b+MFvdIVU4mWnpkHbMOy8L2woRkRv6AmBMNapnyjOHAAAAAElFTkSuQmCC"},326:function(t,e,c){var content=c(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(14).default)("4cd64653",content,!0,{sourceMap:!1})},381:function(t,e,c){"use strict";var r=c(326);c.n(r).a},382:function(t,e,c){(e=c(13)(!1)).push([t.i,".custom-channel-common-card[data-v-2adc8c07]{border:none!important;cursor:pointer;background-color:#fafafa;margin-bottom:30px}.custom-card-text-date[data-v-2adc8c07]{margin-top:10px;font-weight:400;font-size:15px;text-transform:uppercase;margin-bottom:0!important}.get-bytton[data-v-2adc8c07]{color:#eee!important}.tags[data-v-2adc8c07]{font-size:20px;cursor:pointer}.more-button[data-v-2adc8c07]{border:1px solid #dadce0;box-sizing:border-box;cursor:pointer;display:inline-block;height:36px;line-height:20px;padding:7px 11px;position:relative;text-align:center;width:100px;border-radius:18px;background:#fff;box-shadow:0 5px .9rem -.8rem rgba(0,0,0,.8),0 0 0 1px rgba(0,0,0,.05)}.more-button[data-v-2adc8c07],.related-date-channel[data-v-2adc8c07]{font-size:14px}.rate-section[data-v-2adc8c07]{font-size:1.125rem;color:#333745;line-height:1.7}.more-button-icon[data-v-2adc8c07]{left:12px;margin-top:0;height:20px;width:20px;align-self:center}a[data-v-2adc8c07]{color:#000!important;text-decoration:none}.paragraph[data-v-2adc8c07],.paragraph .first .second[data-v-2adc8c07],p[data-v-2adc8c07]{display:inline}.noselect[data-v-2adc8c07]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.premimum-details[data-v-2adc8c07]{opacity:.3}.details[data-v-2adc8c07],.premimum-details[data-v-2adc8c07]{font-size:1.125rem;color:#333745;line-height:1.7}.details-bg[data-v-2adc8c07]{background:-webkit-linear-gradient(#e0dfdf,#eee);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:1.125rem;color:#1b1e21;line-height:1.7}.custom-card-text-title[data-v-2adc8c07]{margin-top:0!important;color:#1b1e21;font-weight:400;font-size:18px;line-height:1.4;letter-spacing:-.5px}.custom-latest-image[data-v-2adc8c07]{width:100px;height:64px;margin-left:2px;border-radius:5px}.custom-list-item[data-v-2adc8c07]{border:none!important;margin-bottom:5px;cursor:pointer}.related-card-title[data-v-2adc8c07]{color:#1b1e21;font-weight:400;font-size:18px;line-height:1.4;letter-spacing:-.5px}.all-under-line[data-v-2adc8c07]{width:51px}.all-under-line[data-v-2adc8c07],.top-under-line[data-v-2adc8c07]{height:3px;background-color:#000}.top-under-line[data-v-2adc8c07]{width:60px;margin-left:49px}.high-rated-under-line[data-v-2adc8c07]{height:3px;width:114px;background-color:#000;margin-left:107px}.line[data-v-2adc8c07]{margin-top:0;padding-top:0}",""]),t.exports=e},424:function(t,e,c){"use strict";c.r(e);c(1),c(47);var r=c(16),o={layout:"detail",components:{},data:function(){return{rating:0,loadedRecommended:!0,rated:!0,DetailArticle:{},RelatedArticles:[],RecommendedArticles:[],recommendedNextData:"",active2:!1}},head:function(){return{title:this.DetailArticle.SeoTitle,meta:[{hid:"description",name:"description",content:this.DetailArticle.SeoMetaDes},{hid:"keywords",name:"keywords",content:this.DetailArticle.SeoMetaDes},{hid:"twitter:card",name:"twitter:card",content:this.DetailArticle.SeoTitle},{hid:"twitter:description",name:"twitter:description",content:this.DetailArticle.SeoMetaDes},{hid:"og:title",property:"og:title",content:this.DetailArticle.SeoTitle},{hid:"og:type",property:"og:type",content:"article.text"},{hid:"og:url",property:"og:url",content:""},{hid:"og:description",name:"og:description",content:this.DetailArticle.SeoMetaDes},{hid:"og:image",name:"og:image",content:this.DetailArticle.photo}]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t,e.next=3,c.$axios.$get("http://cdn.resultonlinebd.com"+"/blog/api/v1/details/".concat(c.$route.params.blogSlug)).then((function(t){return c.DetailArticle=t}));case 3:return e.next=5,c.$axios.$get("http://cdn.resultonlinebd.com/blog/api/v1/cover").then((function(t){return c.RelatedArticles=t.results}));case 5:return e.next=7,c.$axios.$get("http://cdn.resultonlinebd.com/blog/api/v1/recommended").then((function(t){c.RecommendedArticles=t})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 7:case"end":return e.stop()}}),e)})))()},methods:{loadDataRecommended:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.recommendedNextData){e.next=8;break}return t.loadedRecommended=!1,c=t,e.next=5,c.$axios.$get("http://cdn.resultonlinebd.com").then((function(t){t.results.forEach((function(element){c.RecommendedArticles.push(element)})),c.recommendedNextData=t.next})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 5:c.loadedRecommended=!0,e.next=8;break;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;(adsbygoogle=window.adsbygoogle||[]).push({}),this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1e3)}))}},n=(c(381),c(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-detail"},[r("div",{staticClass:"add-top mb-2  pt-1"},[r("b-card",{attrs:{"no-body":""}},[r("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3003235812345626","data-ad-slot":"9798864203","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1),t._v(" "),r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{cols:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[t.$fetchState.pending?r("VclDetailCard"):t.$fetchState.error?r("h4",[t._v("\n        Error while fetching posts: "+t._s(t.$fetchState.error.message)+"\n      ")]):r("div",[t.DetailArticle.is_active?r("div",[r("b-card",{staticClass:"mb-2 mr-2",attrs:{"no-body":"","img-src":t.DetailArticle.photo,"img-alt":"card Image","text-variant":"white","img-height":"375"}}),t._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"text-muted",staticStyle:{"font-size":"18px"}},[t._v("\n              "+t._s(t.DetailArticle.catagry_select.cat_name)+" |\n              "+t._s(t.DetailArticle.created_at)+"\n            ")]),t._v(" "),r("div",{staticClass:"ml-auto mr-2"},[r("b-icon",{staticClass:"h4",staticStyle:{cursor:"pointer"},attrs:{icon:"reply"},on:{click:function(e){t.active2=!t.active2}}})],1)]),t._v(" "),r("b-card-text",{staticClass:"mt-4",attrs:{"text-tag":"h4"}},[t._v(t._s(t.DetailArticle.title))]),t._v(" "),r("div",{staticClass:"mt-3 details",domProps:{innerHTML:t._s(t.DetailArticle.details)}})],1):t._e()])],1),t._v(" "),r("b-col",{staticClass:"order-md-last order-lg-last order-xl-last",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}}),t._v(" "),r("b-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("div",{staticClass:"ml-2 latest-home-card"},[t.$fetchState.pending?r("VclRelatedCard"):r("b-list-group",{staticStyle:{"background-color":"white"}},t._l(t.RelatedArticles,(function(i,e){return r("b-list-group-item",{key:e,staticClass:"custom-list-item"},[i.is_active?r("div",[r("nuxt-link",{attrs:{prefetch:"",to:"/b/"+i.slug}},[r("div",{staticClass:"d-flex"},[r("div",[r("b-img-lazy",{staticClass:"custom-latest-image",attrs:{"blank-color":"#bbb",src:i.photo}})],1),t._v(" "),r("div",{staticClass:"ml-2"},[r("h5",{staticClass:"related-card-title"},[t._v("\n                      "+t._s(i.title.length>30?i.title.slice(0,26)+"..":i.title)+"\n                    ")]),t._v(" "),r("div",{staticClass:"mt-2 related-date-channel"},[r("span",[t._v(t._s(i.catagry_select.cat_name)+" |")]),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(i.created_at))])])])])]),t._v(" "),e<3?r("hr",{staticClass:"p-0 m-0"}):t._e()],1):t._e()])})),1)],1)])],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"recommended"},[r("div",{staticClass:"d-flex mb-3"},[r("b-img",{staticClass:"rounded",staticStyle:{"background-color":"#343a40",padding:"5px"},attrs:{height:"42",width:"42",src:c(305)}}),t._v(" "),t._m(0)],1),t._v(" "),t.$fetchState.pending?r("VclChannelCommonCard"):t.$fetchState.error?r("h4",[t._v("\n      Error while fetching posts: "+t._s(t.$fetchState.error.message)+"\n    ")]):r("div",[r("b-row",t._l(t.RecommendedArticles,(function(article,e){return r("b-col",{key:e,attrs:{cols:"12",sm:"6",md:"3",lg:"3",xl:"3"}},[article.is_active?r("div",[r("nuxt-link",{attrs:{prefetch:"",to:"/b/"+article.slug}},[r("div",{staticClass:"channel-common-card"},[r("b-card",{staticClass:"custom-channel-common-card",attrs:{"no-body":""}},[r("b-card-img-lazy",{staticStyle:{"border-radius":"10px"},attrs:{"blank-color":"#bbb",src:article.photo,top:"",height:"165"}}),t._v(" "),r("b-card-text",{staticClass:"text-muted custom-card-text-date",attrs:{"text-tag":"p"}},[t._v(t._s(article.created_at))]),t._v(" "),r("b-card-text",{staticClass:"custom-card-text-title",attrs:{"text-tag":"h6"}},[t._v(t._s(article.title))])],1)],1)])],1):t._e()])})),1)],1)],1),t._v(" "),r("vs-dialog",{attrs:{width:"470px","not-center":""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h6",{staticClass:"pt-3"},[t._v("Share this article")])]},proxy:!0}]),model:{value:t.active2,callback:function(e){t.active2=e},expression:"active2"}},[t._v(" "),r("ShareModal",{attrs:{pathUrl:"/b/"+this.$route.params.blogSlug}})],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"ml-2 mt-2",staticStyle:{color:"#222"}},[e("strong",[this._v("Recommended")])])}],!1,null,"2adc8c07",null);e.default=component.exports}}]);