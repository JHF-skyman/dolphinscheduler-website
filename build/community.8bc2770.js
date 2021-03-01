webpackJsonp([0],{1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},411:function(e,t,n){e.exports=n(412)},412:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(2),f=r(s),d=n(11),m=r(d),p=n(13),h=r(p),y=n(17),g=r(y),b=n(29),v=r(b),E=n(34),_=r(E),w=n(413),O=r(w),k=n(415),j=r(k),N=n(416),C=r(N),M=n(417),P=r(M),L=n(241),S=r(L);n(418);var x=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.getLanguage(),t=S.default[e];return c.default.createElement("div",{className:"community-page"},c.default.createElement(h.default,{currentKey:"community",type:"normal",logo:"/img/hlogo_colorful.svg",language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement(v.default,{img:"/img/system/community.png",text:t.barText}),c.default.createElement("section",{className:"content-section"},c.default.createElement(_.default,{dataSource:t.sidemenu}),c.default.createElement("div",{className:"doc-content markdown-body"},c.default.createElement("section",{className:"events-section"},c.default.createElement("h3",null,t.events.title),c.default.createElement(O.default,null,t.events.list.map(function(e,t){return c.default.createElement(j.default,{event:e,key:t})}))),c.default.createElement("section",{className:"contact-section"},c.default.createElement("h3",null,t.contacts.title),c.default.createElement("p",null,t.contacts.desc),c.default.createElement("div",{className:"contact-list"},t.contacts.list.map(function(e,t){return c.default.createElement(C.default,{contact:e,key:t})}))),c.default.createElement("section",{className:"contributor-section"},c.default.createElement("h3",null,t.contributorGuide.title),c.default.createElement("p",null,t.contributorGuide.desc),c.default.createElement("div",{className:"contributor-list"},t.contributorGuide.list.map(function(e,t){return c.default.createElement(P.default,{contributor:e,key:t})}))))),c.default.createElement(g.default,{logo:"/img/ds_gray.svg",language:e}))}}]),t}(m.default);document.getElementById("root")&&f.default.render(c.default.createElement(x,null),document.getElementById("root")),t.default=x},413:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(2),d=r(f),m=n(12),p=n(4),h=r(p),y=n(6);n(414);var g=(0,m.autobind)(l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=null,n.state={screenIndex:0,visibleNum:1},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.throttleAdjust=(0,y.throttle)(function(){e.setState({visibleNum:e.getVisibleNum()})},200),window.addEventListener("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"getVisibleNum",value:function(){var e=1,t=this.container.getBoundingClientRect().width,n=this.sliderItemChild0.getBoundingClientRect?this.sliderItemChild0.getBoundingClientRect().width:d.default.findDOMNode(this.sliderItemChild0).getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1}},{key:"getListWidth",value:function(){var e=0,t=this.props.children,n=this.state.visibleNum,r=s.default.Children.count(t),o=Math.ceil(r/n);if(this.container){e=this.container.getBoundingClientRect().width*o}return e}},{key:"changeScreen",value:function(e){e!==this.state.screenIndex&&this.setState({screenIndex:e})}},{key:"renderSliderList",value:function(){for(var e=this,t=this.props.children,n=this.state,r=n.screenIndex,o=n.visibleNum,i=[],a=s.default.Children.count(t),l=Math.ceil(a/o),u=0;u<l;u++)i.push(Array.from(t).slice(u*o,(u+1)*o));return s.default.createElement("div",{className:"slider-list",style:{transform:"translateX(-"+r*(this.container&&this.container.getBoundingClientRect().width||0)+"px)",transition:"transform 500ms ease",width:this.getListWidth()}},i.map(function(t,n){return s.default.createElement("div",{className:"slider-screen",style:{width:e.container&&e.container.getBoundingClientRect().width||0},key:n,ref:function(t){e["sliderScreen"+n]=t}},t.map(function(t,r){return s.default.createElement("div",{className:"slider-item",key:r},s.default.cloneElement(t,{ref:function(t){e["sliderItemChild"+(n*o+r)]=t}}))}))}))}},{key:"renderControl",value:function(){for(var e=this.props.children,t=this.state,n=t.screenIndex,r=t.visibleNum,o=s.default.Children.count(e),i=Math.ceil(o/r),a=[],l=0;l<i;l++)a.push(s.default.createElement("span",{key:l,className:(0,h.default)({"slider-control-item":!0,"slider-control-item-active":l===n}),onClick:this.changeScreen.bind(this,l)}));return s.default.createElement("div",{className:"slider-control"},a)}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(s.default.Component))||l;t.default=g},414:function(e,t){},415:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(6),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.event;return u.default.createElement("div",{className:"event-card"},u.default.createElement("a",{href:(0,c.getLink)(e.link),target:e.target||"_self"},u.default.createElement("img",{src:(0,c.getLink)(e.img)})),u.default.createElement("div",{className:"event-introduction"},u.default.createElement("h4",null,e.title),u.default.createElement("p",null,e.content),u.default.createElement("a",{href:(0,c.getLink)(e.link),target:e.target||"_self"},e.dateStr,u.default.createElement("img",{className:"arrow",src:(0,c.getLink)("/img/system/arrow_right.png")}))))}}]),t}(u.default.Component);t.default=s},416:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=n(12),f=n(6),d=(0,s.autobind)(a=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={img:e.contact.img},n}return i(t,e),l(t,[{key:"onMouseOver",value:function(){this.setState({img:this.props.contact.imgHover})}},{key:"onMouseOut",value:function(){this.setState({img:this.props.contact.img})}},{key:"render",value:function(){var e=this.props.contact,t=this.state.img;return c.default.createElement("a",{className:"contact-item",href:(0,f.getLink)(e.link),target:e.target||"_self",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},c.default.createElement("img",{src:(0,f.getLink)(t)}),c.default.createElement("div",null,e.title))}}]),t}(c.default.Component))||a;t.default=d},417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(6),a=function(e){var t=e.contributor,n=t.img,r=t.title,a=t.content;return o.default.createElement("div",{className:"contributor-item"},o.default.createElement("img",{src:(0,i.getLink)(n)}),o.default.createElement("div",null,r),o.default.createElement("p",null,a))};t.default=a},418:function(e,t){}},[411]);