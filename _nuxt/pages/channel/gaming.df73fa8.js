(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{303:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzMuNDcgMTczLjQ3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y0ZjJlNjt9LmNscy0ye2ZpbGw6IzQxNDA0Mjt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6IzEwNWM2ZTt9LmNscy01e2ZpbGw6IzU4NTk1Yjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOC4wOSw5MEE4MS45LDgxLjksMCwwLDAsOTAsMTcxLjkxVjguMDlBODEuOTIsODEuOTIsMCwwLDAsOC4wOSw5MFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjI3IC0zLjI3KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkwLDE1LjU2VjMuMjdhODYuNzMsODYuNzMsMCwwLDAsMCwxNzMuNDZWMTY0LjQ0QTc0LjQ0LDc0LjQ0LDAsMCwxLDkwLDE1LjU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMjcgLTMuMjcpIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTY0LjQzLDkwQTc0LjUxLDc0LjUxLDAsMCwxLDkwLDE2NC40M1YxNS41N0E3NC41Miw3NC41MiwwLDAsMSwxNjQuNDMsOTBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4yNyAtMy4yNykiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMjksMTI2LjUxYTYuMTcsNi4xNywwLDAsMS0zLjc2LTEuMjhMODYuMjQsOTVhNi4xNSw2LjE1LDAsMCwxLTIuMzktNC44N1Y0MWE2LjE1LDYuMTUsMCwxLDEsMTIuMywwVjg3LjE2bDM2LjYyLDI4LjM0YTYuMTUsNi4xNSwwLDAsMS0zLjc3LDExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMjcgLTMuMjcpIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNOTAsMy4yN1YxNS41NmE3NC40NCw3NC40NCwwLDAsMSwwLDE0OC44OHYxMi4yOUE4Ni43Myw4Ni43MywwLDAsMCw5MCwzLjI3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMjcgLTMuMjcpIi8+PC9zdmc+"},304:function(t,e,n){t.exports=n.p+"img/about.0383f1c.svg"},317:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("126ec0cc",content,!0,{sourceMap:!1})},357:function(t,e,n){t.exports=n.p+"img/channel-cover-games.170444e.jpg"},358:function(t,e,n){"use strict";var o=n(317);n.n(o).a},359:function(t,e,n){(e=n(13)(!1)).push([t.i,"a[data-v-234fa787]{color:#000!important;text-decoration:none}",""]),t.exports=e},415:function(t,e,n){"use strict";n.r(e);n(1),n(47);var o=n(16),c=n(119),r=n.n(c),l=n(53),d={components:{vuescroll:r.a},layout:"default",head:function(){return{title:this.seoObject.Channel_title,meta:[{hid:"description",name:"description",content:this.seoObject.description},{hid:"keywords",name:"keywords",content:this.seoObject.meta_keyword},{hid:"twitter:card",name:"twitter:card",content:this.seoObject.Channel_title},{hid:"twitter:title",name:"twitter:title",content:this.seoObject.Channel_title},{hid:"twitter:description",name:"twitter:description",content:this.seoObject.description},{hid:"og:title",property:"og:title",content:this.seoObject.Channel_title},{hid:"og:type",property:"og:type",content:"article.text"},{hid:"og:url",property:"og:url",content:""},{hid:"og:description",name:"og:description",content:this.seoObject.description},{hid:"og:image",name:"og:image",content:this.seoObject.meta_image}]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$axios.$get("http://cdn.resultonlinebd.com/s/all/gaming").then((function(t){n.seoObject=t})).catch((function(t){console.log(t)}));case 3:return e.next=5,t.$axios.$get("http://cdn.resultonlinebd.com/tagmanager?search=gaming").then((function(t){n.mainTagList=t})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 5:return e.next=7,t.$axios.$get("http://cdn.resultonlinebd.com/channel_Dataapi?search=Gaming").then((function(e){return t.$store.dispatch("gaming/FetchGamingArticles",e.results)}));case 7:case"end":return e.stop()}}),e)})))()},computed:Object(l.b)({GamingArticles:function(t){return t.gaming.GamingArticles},TagArticlesNextLink:function(t){return t.gaming.TagArticlesNextLink},heightOfScreen:function(){return(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-145}}),data:function(){return{seoObject:{},mainTagList:[],subTagList:[],showLatestDiv:!0,showAboutDiv:!1,dataLoading:!0,subTagSelected:!1,mainTagSelected:!1,parentSelected:!0,loadMoreLoading:!1,ops:{vuescroll:{mode:"slide",zooming:!1},scrollPanel:{initialScrollY:0,initialScrollX:0,scrollingX:!0,scrollingY:!1,speed:200},rail:{keepShow:!1},bar:{keepShow:!1,disable:!0}}}},methods:{goLatest:function(){this.showLatestDiv=!0,this.showAboutDiv=!1},goAbout:function(){this.showLatestDiv=!1,this.showAboutDiv=!0},loadMoreMainTagListItem:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$axios.$get(t.mainTagList.next).then((function(t){t.results.forEach((function(element){n.mainTagList.results.push(element)})),n.mainTagList.next=t.next,n.mainTagList.previous=t.previous})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 3:case"end":return e.stop()}}),e)})))()},loadLessMainTagListItem:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$axios.$get(n.mainTagList.previous).then((function(t){n.mainTagList=t})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 3:case"end":return e.stop()}}),e)})))()},showMainTagPosts:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.dataLoading=!1,o=e,n.next=4,e.$axios.$get("http://cdn.resultonlinebd.com"+"/Listsub_Tag/".concat(t.query_slug)).then((function(t){o.subTagList=t.results.List})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 4:return n.next=6,e.$axios.$get("http://cdn.resultonlinebd.com"+"/channelpagetag/".concat(t.query_slug)).then((function(t){t.results.List.forEach((function(element){element.photo="http://cdn.resultonlinebd.com/media/"+element.photo})),o.$store.dispatch("gaming/FetchGamingArticles",t.results.List),o.$store.dispatch("gaming/SetTagNextDataLink",t.next)})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 6:e.dataLoading=!0,e.mainTagSelected=!0,e.parentSelected=!1;case 9:case"end":return n.stop()}}),n)})))()},showSubTagPosts:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.dataLoading=!1,o=e,n.next=4,e.$axios.$get("http://cdn.resultonlinebd.com/targetData/"+t.tag_creator__tagSlug).then((function(t){t.results.List.forEach((function(element){element.photo="http://cdn.resultonlinebd.com/media/"+element.photo})),o.$store.dispatch("gaming/FetchGamingArticles",t.results.List),o.$store.dispatch("gaming/SetTagNextDataLink",t.next)})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 4:e.dataLoading=!0,e.subTagSelected=!0,e.parentSelected=!1,e.mainTagSelected=!1;case 7:case"end":return n.stop()}}),n)})))()},loadData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loadMoreLoading=!0,!t.parentSelected){e.next=11;break}return e.prev=2,e.next=5,t.$store.dispatch("gaming/FetchMoreGamingArticles");case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:e.next=27;break;case 11:if(!t.mainTagSelected){e.next=20;break}if(null!=t.TagArticlesNextLink){e.next=15;break}e.next=18;break;case 15:return n=t,e.next=18,t.$axios.$get(n.TagArticlesNextLink).then((function(t){t.results.List.forEach((function(element){element.photo="http://cdn.resultonlinebd.com/media/"+element.photo,n.$store.dispatch("gaming/SetMoreTagArticles",element)})),n.$store.dispatch("gaming/SetTagNextDataLink",t.next)})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 18:e.next=27;break;case 20:if(!t.subTagSelected){e.next=27;break}if(null!=t.TagArticlesNextLink){e.next=24;break}e.next=27;break;case 24:return n=t,e.next=27,t.$axios.$get(n.TagArticlesNextLink).then((function(t){t.results.List.forEach((function(element){element.photo="http://cdn.resultonlinebd.com/media/"+element.photo,n.$store.dispatch("gaming/SetMoreTagArticles",element)})),n.$store.dispatch("gaming/SetTagNextDataLink",t.next)})).catch((function(t){console.log("No Net"+t)})).finally((function(){}));case 27:t.loadMoreLoading=!1;case 28:case"end":return e.stop()}}),e,null,[[2,7]])})))()}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1e3)}))}},h=(n(358),n(9)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gaming-post"},[o("b-row",{staticClass:"mobile-row",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"pr-2 hide-in-mobile",attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[o("FixedChannelSideBar"),t._v(" "),o("div",{staticClass:"mb-4 channel-side-bar-sticky"},[o("div",{staticClass:"d-flex channel-side-bar-title"},[o("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],staticClass:"ml-3 p-1 my-auto menu-logo",staticStyle:{cursor:"pointer"},attrs:{scale:"2",icon:"chevron-right"}}),t._v(" "),o("h5",{staticClass:"mx-auto my-auto"},[t._v("\n            Gaming\n          ")])],1),t._v(" "),o("b-list-group",{staticClass:"channel-side-bar channel-side-bar-list-group",style:{height:t.heightOfScreen+"px",overflowY:"scroll"}},t._l(t.mainTagList.results,(function(e,n){return o("button",{key:n,staticClass:"main-tag-button channel-side-bar-list-item btn btn-light",attrs:{type:"button"},on:{click:function(n){return t.showMainTagPosts(e)}}},[o("b-img",{staticClass:"shadow channel-side-bar-list-item-icon",attrs:{src:e.tag_icon,alt:e.tag_name}}),t._v("\n            "+t._s(e.tag_name)+"\n          ")],1)})),0),t._v(" "),o("div",{staticClass:"text-center py-3"},[null!=t.mainTagList.next?o("div",{staticClass:"more-button",on:{click:t.loadMoreMainTagListItem}},[o("b-icon",{staticClass:"more-button-icon",attrs:{icon:"chevron-down",variant:"dark"}})],1):null!=t.mainTagList.previous?o("div",{staticClass:"more-button",on:{click:t.loadLessMainTagListItem}},[o("b-icon",{staticClass:"more-button-icon",attrs:{icon:"chevron-up",variant:"dark"}})],1):t._e()])],1)],1),t._v(" "),o("b-col",{staticClass:"hide-in-dekstop mobile-colmun",attrs:{cols:"12"}},[o("FixedChannelSideBar"),t._v(" "),o("div",{staticClass:"mobile-channel-bar"},[o("div",{staticClass:"d-flex channel-side-bar-title"},[o("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],staticClass:"ml-3 p-1 my-auto menu-logo",staticStyle:{cursor:"pointer"},attrs:{scale:"2",icon:"chevron-right"}}),t._v(" "),o("h5",{staticClass:"mx-auto my-auto"},[t._v("\n            Gaming\n          ")])],1),t._v(" "),o("div",{staticClass:"pb-3"},[o("vuescroll",{attrs:{ops:t.ops}},[o("div",{staticClass:"d-flex"},t._l(t.mainTagList.results,(function(e,n){return o("div",{key:n,staticClass:"mx-3 py-2"},[o("b-img",{staticClass:"shadow channel-side-bar-list-item-icon",attrs:{alt:e.tag_name,src:e.tag_icon},on:{click:function(n){return t.showMainTagPosts(e)}}})],1)})),0)])],1)])],1),t._v(" "),o("b-col",{staticClass:"mobile-colmun",attrs:{cols:"12",sm:"12",md:"9",lg:"9",xl:"9"}},[o("div",{staticClass:"channel-cover hide-in-mobile"},[o("b-card",{attrs:{"img-alt":"Gaming cover",overlay:"","img-height":"80","img-src":n(357),"text-variant":"white"}},[o("b-card-text",{staticClass:"channel-cover-title",attrs:{"text-tag":"h2"}},[t._v("\n            Gaming")])],1)],1),t._v(" "),o("b-tabs",{staticClass:"pt-2",attrs:{"no-nav-style":!0,"content-class":"mt-0 mb-0"}},[o("b-tab",{attrs:{"title-link-class":"text-dark",active:""},on:{click:function(e){return t.goLatest()}},scopedSlots:t._u([{key:"title",fn:function(){return[o("b-img",{staticStyle:{height:"20px",width:"20px"},attrs:{alt:"Fresh Logo",src:n(303)}}),t._v("\n            Fresh\n          ")]},proxy:!0}])},[t._v(" "),o("div",{staticClass:"latest-under-line"})]),t._v(" "),o("b-tab",{attrs:{"title-link-class":"text-dark"},on:{click:function(e){return t.goAbout()}},scopedSlots:t._u([{key:"title",fn:function(){return[o("b-img",{staticStyle:{height:"22px",width:"22px"},attrs:{alt:"about logo",src:n(304)}}),t._v("\n            About\n          ")]},proxy:!0}])},[t._v(" "),o("div",{staticClass:"about-under-line"})]),t._v(" "),o("hr",{staticClass:"line"})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showLatestDiv,expression:"showLatestDiv"}]},[o("div",{staticClass:"d-flex justify-content-start flex-wrap mt-2 mb-4"},t._l(t.subTagList,(function(e,n){return o("vs-button",{key:n,staticClass:"sub-tag",attrs:{flat:"",color:e.tag_creator__tagNameBG},on:{click:function(n){return t.showSubTagPosts(e)}}},[t._v(t._s(e.tag_creator__tag_name)+"\n          ")])})),1),t._v(" "),t.$fetchState.pending?o("VclChannelCommonCard"):t.$fetchState.error?o("h4",[t._v("\n          Error while fetching posts: "+t._s(t.$fetchState.error.message)+"\n        ")]):o("b-row",{staticClass:"mobile-row"},[t.dataLoading?t._l(t.GamingArticles,(function(article,t){return o("b-col",{key:t,staticClass:"mobile-colmun",attrs:{md:"4",lg:"4",xs:"12",sm:"6",xl:"4"}},[o("ChannelCommonCard",{attrs:{article:article,"data-index":t}})],1)})):o("b-col",{staticClass:"text-center mobile-colmun",attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[o("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}})],1)],2),t._v(" "),o("div",{staticClass:"myPagination "},[o("div",{staticClass:"d-flex justify-content-center"},[o("vs-button",{attrs:{loading:t.loadMoreLoading,color:"#343a40",flat:""},on:{click:t.loadData}},[o("strong",[t._v("Load More")])])],1)])],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showAboutDiv,expression:"showAboutDiv"}]},[o("h3",[t._v("this is abour apge of gaming")]),t._v(" "),o("h5",{staticClass:"text-muted"},[t._v("Every body should know")])])],1)],1)],1)}),[],!1,null,"234fa787",null);e.default=component.exports}}]);