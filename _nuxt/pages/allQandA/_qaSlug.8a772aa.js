(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(t,e,n){var content=n(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2fe39dcc",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";var r=n(324);n.n(r).a},378:function(t,e,n){(e=n(13)(!1)).push([t.i,".channel-cover-title[data-v-0d9c57be]{text-align:center!important;color:#000!important;font-size:25px}a[data-v-0d9c57be]{color:#000!important;text-decoration:none!important}.card-body[data-v-0d9c57be]{border-radius:8px}.latest-home-card[data-v-0d9c57be]{background:#fff;box-shadow:0 5px .9rem -.8rem rgba(0,0,0,.8),0 0 0 1px rgba(0,0,0,.05);border-radius:5px;height:80px}",""]),t.exports=e},422:function(t,e,n){"use strict";n.r(e);n(1),n(47);var r=n(16),c={layout:"default",data:function(){return{data:[],next:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$axios.$get("http://cdn.resultonlinebd.com"+"/q&a/api/v1/channel/".concat(n.$route.params.qaSlug)).then((function(t){n.data=t.results,n.next=t.next})).catch((function(t){console.log(t)})).finally((function(){}));case 3:case"end":return e.stop()}}),e)})))()},methods:{loadData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.next){e.next=6;break}return n=t,e.next=4,n.$axios.$get(n.next).then((function(t){t.results.List.forEach((function(element){n.data.List.push(element)})),n.next=t.next})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 4:e.next=6;break;case 6:case"end":return e.stop()}}),e)})))()},setView:function(view,t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$axios.$put("http://cdn.resultonlinebd.com"+"/q&a/api/v1/dtls/".concat(t),{view:view+1}).then((function(t){})).catch((function(t){console.log(t)}));case 1:case"end":return n.stop()}}),n)})))()}}},o=(n(377),n(9)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.data.is_active?n("div",{staticClass:"cover mt-2 mb-3"},[n("b-card",{staticClass:"latest-home-card"},[n("b-card-text",{staticClass:"channel-cover-title",attrs:{"text-tag":"h2"}},[t._v("\n        "+t._s(t.data.publisher))])],1)],1):t._e(),t._v(" "),n("b-row",t._l(t.data.List,(function(e,r){return n("b-col",{key:r,staticClass:"mb-3",attrs:{cols:"12",sm:"6",md:"3",lg:"3",xl:"3"}},[e.is_active?n("div",[n("nuxt-link",{attrs:{prefetch:"",to:"/q/"+e.slug}},[n("b-card",{staticClass:"card-body",attrs:{"no-body":""}},[n("div",[n("h6",[n("strong",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n                "+t._s(e.created_at)+"\n                "),n("b-icon",{staticClass:"ml-1",attrs:{icon:"clock-fill"}})],1),t._v(" "),n("p",[t._v("\n                "+t._s(e.details.slice(0,40)+"..")+"\n              ")])])])],1)],1):t._e()])})),1),t._v(" "),n("div",{staticClass:"myPagination"},[n("div",{staticClass:"text-center mt-5 mb-3"},[n("b-button",{attrs:{variant:"dark"},on:{click:t.loadData}},[t._v("Load More")])],1)])],1)}),[],!1,null,"0d9c57be",null);e.default=component.exports}}]);