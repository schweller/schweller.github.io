(this.webpackJsonpschweller=this.webpackJsonpschweller||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=(n(12),n(3)),c=n(2),s=n(1),m=function(){var e=0,t=r.a.useRef,n=r.a.useEffect,a=r.a.useState,o=t(null),i=a(!0),c=Object(l.a)(i,2),m=c[0],u=c[1],d=t(null);return n((function(){var t,n=o.current.clientWidth,a=o.current.clientHeight,r=1,i=new s.f,l=new s.d(75,n/a,1,1e4);l.position.y=1e3,l.position.z=100;var c=function(e,t,n){for(var a=t*n,r=new Float32Array(3*a),o=new Float32Array(a),i=0,l=0,c=0;c<t;c++)for(var s=0;s<n;s++)r[i]=c*e-t*e/2,r[i+1]=0,r[i+2]=s*e-n*e/2,o[l]=1,i+=3,l++;return{positions:r,scales:o}}(100,300,200),m=c.positions,u=c.scales,h=new s.b;h.addAttribute("position",new s.a(m,3)),h.addAttribute("scale",new s.a(u,1));var p=new s.c("rgb(255,0,0)");p.lerp(new s.c("rgb(0,255,0)"),.5);var f=new s.g({uniforms:{color:{value:p}},vertexShader:" \nattribute float scale;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = scale * ( 500.0 / - mvPosition.z );\n    gl_Position = projectionMatrix * mvPosition;\n}\n",fragmentShader:"\nuniform vec3 color;\nvoid main() {\n    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;\n    gl_FragColor = vec4( color, 1.0 );\n}\n"}),v=new s.e(h,f),E=new s.h({antialias:!0});E.setPixelRatio(window.devicePixelRatio),i.add(v),E.setSize(n,a);var w=function(){l.position.x+=.05*(r-l.position.x),l.position.y+=.05*(-10*window.scrollY-l.position.y),l.position.y<1e3&&(l.position.y=1e3),l.position.z+=.05*(-10*window.scrollY-l.position.z),l.position.z<-12e3&&(l.position.z=-12e3),l.lookAt(i.position);for(var t=v.geometry.attributes.position.array,n=v.geometry.attributes.scale.array,a=0,o=0,c=0;c<300;c++)for(var s=0;s<200;s++)t[a+1]=50*Math.sin(.3*(c+e))+50*Math.sin(.5*(s+e)),n[o]=3*(Math.sin(.1*(c+e))+1)+3*(Math.sin(.1*(s+e))+1),a+=3,o++;v.geometry.attributes.position.needsUpdate=!0,v.geometry.attributes.scale.needsUpdate=!0,E.render(i,l),e+=.05},y=function(){n=o.current.clientWidth,a=o.current.clientHeight,E.setSize(n,a),l.aspect=n/a,l.updateProjectionMatrix(),w()},g=function e(){w(),t=window.requestAnimationFrame(e)},b=function(){t||(t=requestAnimationFrame(g))},N=function(){cancelAnimationFrame(t),t=null};return o.current.appendChild(E.domElement),window.addEventListener("resize",y),window.addEventListener("mousemove",(function(e){r=e.clientX-window.innerWidth/2})),window.addEventListener("touchstart",(function(e){1===e.touches.length&&(e.preventDefault(),r=e.touches[0].pageX-window.innerWidth/2)})),window.addEventListener("touchmove",(function(e){1===e.touches.length&&(e.preventDefault(),r=e.touches[0].pageX-window.innerWidth/2)})),b(),d.current={start:b,stop:N},function(){N(),window.removeEventListener("resize",y),o.current.removeChild(E.domElement),i.remove(v),h.dispose(),f.dispose()}}),[]),n((function(){m?d.current.start():d.current.stop()}),[m]),r.a.createElement("div",{className:"Particles",ref:o,onClick:function(){return u(!m)}})};var u=function(e){var t=e.entry;return r.a.createElement("div",{className:"Entry"},r.a.createElement("h4",{className:"rubik"},t.position," @ ",t.company),r.a.createElement("div",{className:"Entry-from"},r.a.createElement("h5",{className:"roboto-mono light"},t.from)))},d=[{position:"Senior Software Engineer",company:"Sonia",from:"June 2019 - Current"},{position:"Senior Software Engineer",company:"Fanatics",from:"September 2017 - April 2019"},{position:"Software Engineer",company:"Avenue Code",from:"June 2015 - July 2017"},{position:"Frontend Developer",company:"PSafe Tecnologia",from:"September 2014 - June 2015"},{position:"Frontend Developer",company:"Infoglobo",from:"February 2011 - September 2014"}];var h=function(){return r.a.createElement("div",{className:"PastExperience"},r.a.createElement("h3",{className:"roboto-mono light"},"work experience>"),d.map((function(e,t){return r.a.createElement(u,{key:t,entry:e})})))};var p=function(){return r.a.createElement("div",{className:"Skillset"},r.a.createElement("h3",{className:"roboto-mono light"},"core & technical skills>"),r.a.createElement("div",{className:"Entry"},r.a.createElement("h4",{className:"rubik"},"Front-end"),r.a.createElement("div",{className:"Entry-from"},r.a.createElement("h5",{className:"roboto-mono light"},"JavaScript, React, Vue, CSS, GraphQL, ThreeJS"))),r.a.createElement("div",{className:"Entry"},r.a.createElement("h4",{className:"rubik"},"Back-end"),r.a.createElement("div",{className:"Entry-from"},r.a.createElement("h5",{className:"roboto-mono light"},"NodeJS, MySQL, NoSQL, Redis"))),r.a.createElement("div",{className:"Entry"},r.a.createElement("h4",{className:"rubik"},"DevOps"),r.a.createElement("div",{className:"Entry-from"},r.a.createElement("h5",{className:"roboto-mono light"},"Docker, AWS, NGINX, Jenkins, CircleCI, Terraform"))),r.a.createElement("div",{className:"Entry"},r.a.createElement("h4",{className:"rubik"},"Apps"),r.a.createElement("div",{className:"Entry-from"},r.a.createElement("h5",{className:"roboto-mono light"},"React Native, Electron, Flutter"))))},f=[{href:"https://github.com/schweller",display:"Github"},{href:"https://codepen.io/schweller/",display:"Codepen"},{href:"https://thesunda.itch.io/",display:"My games"},{href:"https://www.linkedin.com/in/ischweller/",display:"LinkedIn"},{href:"https://stackoverflow.com/users/4957796/inacio-schweller",display:"Stack Overflow"},{href:"/inacio-schweller-resume.pdf",display:"Full Resum\xe9"}];function v(e){var t=e.link;return r.a.createElement("li",null,r.a.createElement("a",{className:"underline-wave",target:"_blank",rel:"noopener noreferrer",href:t.href},t.display))}var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You will find me @"),r.a.createElement("ul",null,f.map((function(e,t){return r.a.createElement(v,{key:t,link:e})}))),"What's next? Say ",r.a.createElement("a",{className:"underline-wave",href:"mailto:hi@inacio.dev"},"hi@inacio.dev"),"!")};function w(){var e=Object(c.b)({from:{dash:102},to:{dash:0}}).dash;return r.a.createElement(c.a.svg,{opacity:".5",height:"60",width:"60",strokeDasharray:100,strokeDashoffset:e},r.a.createElement("circle",{cx:"30",cy:"30",r:"20",pathLength:"100","stroke-width":"5",stroke:"red"}))}n(13);var y=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(c.b)({opacity:n?0:1}).opacity;return Object(a.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),800);return function(){return clearTimeout(e)}}),[]),n?r.a.createElement("div",{className:"loader"},r.a.createElement(w,null)):r.a.createElement(c.a.div,{className:"App",style:{opacity:i.interpolate((function(e){return 0+e}))}},r.a.createElement(m,null),r.a.createElement("div",{className:"Hero"},r.a.createElement("div",{className:"Row"},r.a.createElement("div",{className:"Hero-intro Column"},r.a.createElement("div",{className:"roboto-mono light align-left"},r.a.createElement("p",null,"Hello! I'm Inacio. I work and freelance as software engineer"),r.a.createElement("p",null,"I've proudly collaborated with awesome companies."))),r.a.createElement("div",{className:"Hero-contact Column"},r.a.createElement(E,null)))),r.a.createElement("div",{className:"Scroll"},r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement("div",{className:"Footer"},r.a.createElement("p",{className:"roboto-mono light"},"Made with React, ThreeJS and React-Spring by yours truly. \xa9 2019"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.16dd575e.chunk.js.map