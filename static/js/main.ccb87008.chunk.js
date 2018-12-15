(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(47)},,,,,,,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e){e.exports={}},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(14),r=n.n(i),l=(n(12),n(23),n(3)),c=n(4),s=n(7),u=n(5),d=n(6),f=n(1),m=n(8),y=n.n(m),p=(n(25),n(27),n(2)),v=n.n(p),h={};function b(e,t){var n=e,a=t;console.log("MAIN MAP GET NEW GEOJSON."),console.log(n),this.setState({geojson:n,geojson_key:a})}h.params={center:[63.43,10.4],zoomControl:!1,zoom:12,scrollwheel:!1,legends:!0,infoControl:!1,attributionControl:!0},h.tileLayer={uri:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",params:{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',id:"",accessToken:""}};var g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={map:null,tileLayer:null,geojsonLayer:null,geojson:null,geojson_key:null},n._mapNode=null,n.onEachFeature=n.onEachFeature.bind(Object(f.a)(Object(f.a)(n))),b=b.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.state.map||this.init(this._mapNode)}},{key:"componentDidUpdate",value:function(e,t){this.state.geojson!==t.geojson&&this.addGeoJSONLayer(this.state.geojson,this.state.geojson_key)}},{key:"componentWillUnmount",value:function(){this.state.map.remove()}},{key:"addGeoJSONLayer",value:function(e,t){var n=y.a.geoJson(e,{onEachFeature:this.onEachFeature});null!==this.state.geojson_key?n.setStyle({className:"map-path "+this.state.geojson_key}):n.setStyle({className:"map-path"}),n.addTo(this.state.map),this.setState({geojsonLayer:n})}},{key:"zoomToFeature",value:function(e){}},{key:"onEachFeature",value:function(e,t){if(e.properties&&e.properties.NAME){var n="<h3>".concat(e.properties.NAME,"</h3>");t.bindPopup(n)}}},{key:"init",value:function(e){if(!this.state.map){var t=y.a.map(e,h.params);y.a.control.zoom({position:"bottomleft"}).addTo(t),y.a.control.scale({position:"bottomleft"}).addTo(t);var n=y.a.tileLayer(h.tileLayer.uri,h.tileLayer.params).addTo(t);this.setState({map:t,tileLayer:n})}}},{key:"render",value:function(){var e=this;this.state.lat,this.state.lng;return o.a.createElement("div",{id:"mapUI"},o.a.createElement("div",{ref:function(t){return e._mapNode=t},id:"map"}))}}]),t}(a.Component),j=n(9),E=n(15),O=n.n(E);n(29),n(31);function _(e){this.setState({layer_list:e})}var k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={layer_list:[]},_=_.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=this.state.layer_list,n=[],a=0;a<t.length;a++)n.push({name:t[a][0],key:t[a][1]});var i=n.map(function(e){return o.a.createElement("option",{className:e.key,value:e.key},e.name.slice(0,30))});return o.a.createElement("div",null,o.a.createElement("p",null,"Select the 2 layers you want to unite."),o.a.createElement("select",{id:"union_select_geojson1"},i),o.a.createElement("select",{id:"union_select_geojson2"},i),o.a.createElement("button",{onClick:function(t){return e.executeUnion(t)}},"Apply"))}},{key:"executeUnion",value:function(){var e=document.getElementById("union_select_geojson1"),t=e.options[e.selectedIndex].value,n=document.getElementById("union_select_geojson2");G(t,n.options[n.selectedIndex].value)}}]),t}(a.Component);n(33);function N(e){this.setState({layer_list:e})}var w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={layer_list:[]},N=N.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=this.state.layer_list,n=[],a=0;a<t.length;a++)n.push({name:t[a][0],key:t[a][1]});var i=n.map(function(e){return o.a.createElement("option",{className:e.key,value:e.key},e.name.slice(0,30))});return o.a.createElement("div",null,o.a.createElement("p",null,"Select the 2 layers you want to intersect."),o.a.createElement("select",{id:"intersect_select_geojson1"},i),o.a.createElement("select",{id:"intersect_select_geojson2"},i),o.a.createElement("button",{onClick:function(t){return e.executeIntersect(t)}},"Apply"))}},{key:"executeIntersect",value:function(){var e=document.getElementById("intersect_select_geojson1"),t=e.options[e.selectedIndex].value,n=document.getElementById("intersect_select_geojson2");D(t,n.options[n.selectedIndex].value)}}]),t}(a.Component);n(35);function C(e){this.setState({layer_list:e})}var S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={layer_list:[]},C=C.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=this.state.layer_list,n=[],a=0;a<t.length;a++)n.push({name:t[a][0],key:t[a][1]});var i=n.map(function(e){return o.a.createElement("option",{className:e.key,value:e.key},e.name.slice(0,30))});return o.a.createElement("div",null,o.a.createElement("p",null,"Select the 2 layers you want to difference."),o.a.createElement("select",{id:"difference_select_geojson1"},i),o.a.createElement("select",{id:"difference_select_geojson2"},i),o.a.createElement("button",{onClick:function(t){return e.executeDifference(t)}},"Apply"))}},{key:"executeDifference",value:function(){var e=document.getElementById("difference_select_geojson1"),t=e.options[e.selectedIndex].value,n=document.getElementById("difference_select_geojson2");M(t,n.options[n.selectedIndex].value)}}]),t}(a.Component);function F(e,t,n){this.setState({layer_list:Object(j.a)(this.state.layer_list).concat([[e,t,n]])})}function x(){for(var e=document.getElementById("sortable_layers"),t=e.getElementsByClassName("layer"),n=0;n<t.length;n++)t[n].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0]&&(e[0].className=e[0].className.replace(" active","")),this.className+=" active"});O.a.create(e,{onEnd:function(e){!function(e){var t,n=document.getElementsByTagName("g");for(t=e.length;t>-1;t--){var a=document.getElementsByClassName(e[t]+" leaflet-interactive")[0];console.log(a),v()(a).appendTo(n)}}(function(){var e,t=[],n=document.getElementsByClassName("layer");for(e=0;e<n.length;e++){var a=n[e].className.split(" ");t.push(a[0])}return t}())}})}var B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={layer_list:[]},n.readGeoJSONFile=n.readGeoJSONFile.bind(Object(f.a)(Object(f.a)(n))),F=F.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.layer_list!==t.layer_list&&(Q(this.state.layer_list),_(this.state.layer_list),N(this.state.layer_list),C(this.state.layer_list)),x()}},{key:"componentDidMount",value:function(){x()}},{key:"render",value:function(){for(var e=this,t=this.state.layer_list,n=[],a=0;a<t.length;a++)n.push({name:t[a][0],key:t[a][1]});var i=n.map(function(e){return o.a.createElement("li",{className:"layer",id:e.key},e.name)});return o.a.createElement("div",{id:"layers"},o.a.createElement("p",{id:"subtitle"},"Layers"),o.a.createElement("button",{id:"delete",onClick:function(t){return e.deleteLayer(t)}},"[TRASH]"),o.a.createElement("p",{id:"sub_info"},"Click to select, drag to reorder."),o.a.createElement("div",null,o.a.createElement("ul",{id:"sortable_layers",className:"ui-sortable"},i)),o.a.createElement("div",null,o.a.createElement("p",{id:"subtitle"},"Add Layer"),o.a.createElement("div",null,o.a.createElement("input",{id:"fileid",type:"file",onChange:function(t){return e.readGeoJSONFile(t)},accept:".GeoJSON,.JSON",hidden:!0}),o.a.createElement("button",{id:"upload",onClick:function(t){return e.activateFileUpload(t)}},"Upload file")),o.a.createElement("p",{id:"sub_info"},"Click button and upload GeoJSON or JSON file.")))}},{key:"activateFileUpload",value:function(){console.log("Activate file upload call"),document.getElementById("fileid").click()}},{key:"deleteLayer",value:function(){P(v()("li.active").attr("id"))}},{key:"readGeoJSONFile",value:function(e){var t=e.target.files[0],n=Math.random().toString(36).substr(2,9),a=t.name;if(t){var o=new FileReader;o.onload=function(e){var t=JSON.parse(e.target.result);H(t,n),F(a,n,t)},o.readAsText(t)}else alert("Failed to load file")}}]),t}(a.Component),I=(n(37),n(39),n(41),n(46),n(13),function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{id:"tool_title"},"Distance:"),o.a.createElement("input",{id:"buffer_number",type:"number",placeholder:"Buffer in meters"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(t){return e.executeBuffer(t)}},"Apply"))}},{key:"executeBuffer",value:function(){T(document.getElementById("buffer_number").value,v()("li.active").attr("id"))}}]),t}(a.Component)),L=(n(42),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(t){return e.executeDissolve(t)}},"Apply"))}},{key:"executeDissolve",value:function(){J(v()("li.active").attr("id"))}}]),t}(a.Component)),A=n(13);function T(e,t){var n=W(t),a=z(n),o=this.state.layer_list[n][0],i=A.buffer(a,e,{units:"meters"}),r=R();b(i,r),F(o+" "+e+" m buffer",r,i)}function J(e){var t=W(e),n=z(t),a=this.state.layer_list[t][0],o=A.dissolve(n),i=R();b(o,i),F(a+" dissolved",i,o)}function G(e,t){var n=W(e),a=z(n),o=this.state.layer_list[n][0],i=W(t),r=z(i),l=this.state.layer_list[i][0],c={type:"FeatureCollection",features:Object(j.a)(a.features).concat(Object(j.a)(r.features))},s=R();b(c,s),F("union "+o+" & "+l,s,c)}function D(e,t){for(var n=W(e),a=z(n),o=this.state.layer_list[n][0],i=W(t),r=z(i),l=this.state.layer_list[i][0],c=a.features,s=r.features,u=[],d=0;d<c.length;d++)for(var f=c[d],m=0;m<s.length;m++){var p=s[m],v=A.intersect(f,p);null!=v&&u.push(v)}new y.a.LayerGroup;var h={type:"FeatureCollection",features:u};console.log(h),console.log(h.features);var g=R();b(h,g),F("intersect "+o+" & "+l,g,h)}function M(e,t){var n=W(e),a=z(n),o=this.state.layer_list[n][0],i=W(t),r=z(i),l=this.state.layer_list[i][0],c=U(a),s=U(r),u=function(e){for(var t=e.features,n=[],a=0;a<t.length;a++)if(console.log(t[a]),"Polygon"==t[a].geometry.type)n.push(t[a]);else if("MultiPolygon"==t[a].geometry.type)for(var o=0;o<t[a].geometry.coordinates.length;o++){var i={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:t[a].geometry.coordinates[o]}};n.push(i)}return{type:"FeatureCollection",features:n}}({type:"FeatureCollection",features:[A.difference(c.features[0],s.features[0])]}),d=R();b(u,d),F(o+" - "+l,d,u)}function U(e){for(var t=e.features,n=[],a=0;a<t.length;a++)"Polygon"==t[a].geometry.type&&n.push(t[a].geometry.coordinates);return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:n}}]}}function P(e){var t=W(e);this.state.layer_list[t][2];v()("#"+e).remove(),v()("."+e).remove()}function W(e){for(var t=0;t<this.state.layer_list.length;t++)if(e==this.state.layer_list[t][1])return t}function z(e){var t=this.state.layer_list[e][2];if("FeatureCollection"==t.type)return t;if("Polygon"==t.type){new y.a.LayerGroup;return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:t.coordinates}}]}}}function R(){return Math.random().toString(36).substr(2,9)}function H(e,t){b(e,t)}function Q(e){this.setState({layer_list:e})}var $=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={layer_list:[]},T=T.bind(Object(f.a)(Object(f.a)(n))),J=J.bind(Object(f.a)(Object(f.a)(n))),G=G.bind(Object(f.a)(Object(f.a)(n))),D=D.bind(Object(f.a)(Object(f.a)(n))),M=M.bind(Object(f.a)(Object(f.a)(n))),H=H.bind(Object(f.a)(Object(f.a)(n))),Q=Q.bind(Object(f.a)(Object(f.a)(n))),W=W.bind(Object(f.a)(Object(f.a)(n))),P=P.bind(Object(f.a)(Object(f.a)(n))),z=z.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return[o.a.createElement("div",{id:"sidebar_content"},o.a.createElement("div",{id:"sidebar_title_div"},o.a.createElement("h1",{id:"title"},"App name")),o.a.createElement("div",{id:"tools"},o.a.createElement("p",{id:"subtitle"},"Tools"),o.a.createElement("ul",{id:"tool_layer"},o.a.createElement("li",{className:"buffer"},"Buffer ",this.state.buffer_radius),o.a.createElement("li",{hidden:!0,className:"buffer_content"},o.a.createElement(I,null)),o.a.createElement("li",{className:"dissolve"},"Dissolve"),o.a.createElement("li",{hidden:!0,className:"dissolve_content"},o.a.createElement(L,null)),o.a.createElement("li",{className:"union"},"Union"),o.a.createElement("li",{hidden:!0,className:"union_content"},o.a.createElement(k,null)),o.a.createElement("li",{className:"intersect"},"Intersect"),o.a.createElement("li",{hidden:!0,className:"intersect_content"},o.a.createElement(w,null)),o.a.createElement("li",{className:"difference"},"Difference"),o.a.createElement("li",{hidden:!0,className:"difference_content"},o.a.createElement(S,null)),o.a.createElement("li",{className:"extract"},"Extract Feature"),o.a.createElement("li",{hidden:!0,className:"extract_content"}))),o.a.createElement("div",{id:"Layers"},o.a.createElement(B,null)))]}}]),t}(a.Component),q=(n(44),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return[o.a.createElement("div",{id:"page_content"},o.a.createElement(g,{key:"mainmap_key"}),o.a.createElement("div",{id:"sidebar"},o.a.createElement($,{key:"sidebar_key"})))]}}]),t}(a.Component)),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/TBA4251",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/TBA4251","/service-worker.js");K?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):V(e)})}}(),v()(".buffer").click(function(){v()(".buffer_content").toggle()}),v()(".dissolve").click(function(){v()(".dissolve_content").toggle()}),v()(".intersection").click(function(){console.log("Intersect")}),v()(".union").click(function(){v()(".union_content").toggle()}),v()(".intersect").click(function(){v()(".intersect_content").toggle()}),v()(".difference").click(function(){v()(".difference_content").toggle()})}],[[16,2,1]]]);
//# sourceMappingURL=main.ccb87008.chunk.js.map