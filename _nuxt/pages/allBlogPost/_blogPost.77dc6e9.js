(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{323:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0ddb6d6b",content,!0,{sourceMap:!1})},375:function(t,e,n){"use strict";var o=n(323);n.n(o).a},376:function(t,e,n){(e=n(13)(!1)).push([t.i,"a[data-v-06e5d7d2]{text-decoration:none;color:#121416!important}.cover-card-two[data-v-06e5d7d2]{border:none}.card-image-bottom[data-v-06e5d7d2]{border-radius:10px!important}.card-title-small[data-v-06e5d7d2]{color:#121416;font-size:14px;font-family:ProximaNova-Bold,helvetica,Arial,sans-serif;margin:5px 0 0;line-height:1.29;font-weight:700}.des[data-v-06e5d7d2]{color:#4f4646!important;font-size:14px;line-height:18px;margin:0;padding-right:10px;font-weight:400!important}",""]),t.exports=e},421:function(t,e,n){"use strict";n.r(e);n(1),n(47);var o=n(16),r={layout:"default",data:function(){return{allBlogPost:[],nextDataLink:"",icon:""}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$axios.$get("http://cdn.resultonlinebd.com"+"/blog/api/v1/blog_channel/".concat(t.$route.params.blogPost)).then((function(t){n.allBlogPost=t.results,n.nextDataLink=t.next})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 3:case"end":return e.stop()}}),e)})))()},methods:{loadData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.nextDataLink){e.next=6;break}return n=t,e.next=4,n.$axios.$get(n.nextDataLink).then((function(t){t.results.List.forEach((function(element){n.allBlogPost.List.push(element)})),n.nextDataLink=t.next})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 4:e.next=6;break;case 6:case"end":return e.stop()}}),e)})))()}},computed:{}},c=(n(375),n(9)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$fetchState.pending?n("div",{staticClass:"pt-2"},[n("VclChannelCommonCard")],1):n("div",[n("h4",{staticClass:"pt-2 mb-3"},[n("b-img",{staticClass:"rounded mr-2",attrs:{height:"40",width:"40",src:"http://cdn.resultonlinebd.com/media/"+t.allBlogPost.cat_icon}}),t._v(t._s(t.allBlogPost.cat_name)+"\n    ")],1),t._v(" "),n("b-row",t._l(t.allBlogPost.List,(function(i,e){return n("b-col",{key:e,staticClass:"mb-2",attrs:{cols:"12",sm:"6",md:"4",lg:"4",xl:"4"}},[i.is_active?n("div",[n("nuxt-link",{attrs:{prefetch:"",to:"/b/"+i.slug}},[n("b-card",{staticClass:"cover-card-two",attrs:{"no-body":"","img-top":""}},[n("b-card-img",{staticClass:"card-image-bottom",attrs:{width:"436",height:"280",src:"http://cdn.resultonlinebd.com/media/"+i.photo}}),t._v(" "),n("b-card-text",{staticClass:"card-title-small mt-4",attrs:{"text-tag":"p"}},[t._v("\n                "+t._s(i.title)+"\n              ")]),t._v(" "),n("b-card-text",{staticClass:"des",attrs:{"text-tag":"p"}},[t._v("\n                "+t._s(i.details.slice(0,80))+"\n              ")])],1)],1)],1):t._e()])})),1),t._v(" "),n("div",{staticClass:"myPagination"},[n("div",{staticClass:"text-center mt-5 mb-3"},[n("b-button",{attrs:{variant:"dark"},on:{click:t.loadData}},[t._v("Load More")])],1)])],1)])}),[],!1,null,"06e5d7d2",null);e.default=component.exports}}]);