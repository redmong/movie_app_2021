(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{55:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(28),i=n.n(c),r=n(8),o=n(2),l=n(17),j=n.n(l),u=n(29),m=n(11),d=n(12),b=n(14),p=n(13),v=n(30),h=n.n(v),O=(n(55),n(1));var x=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(O.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:n,title:s,summary:a,poster:c,genres:i}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:c,alt:s,title:s}),Object(O.jsxs)("div",{className:"movies_movie",children:[Object(O.jsx)("h3",{className:"movie_title",children:s}),Object(O.jsx)("h3",{className:"movie_year",children:n}),Object(O.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(O.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie_summary",children:[a.slice(0,140),"..."]})]})]})})},f=(n(65),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(j.a.mark((function t(){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,console.log(s),e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));n(66);var g=function(e){return console.log(e),Object(O.jsx)("span",{children:"About this page: I built it because I love movies."})};var y=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})},_=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component);n(67);var N=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:g}),Object(O.jsx)(o.a,{path:"/movie/:id",component:_})]})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3c7c91c3.chunk.js.map