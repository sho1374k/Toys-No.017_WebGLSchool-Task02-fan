(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Mi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function td(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},Jc,Yt,At,Gn=1e8,ht=1/Gn,pc=Math.PI*2,cm=pc/4,hm=0,nd=Math.sqrt,um=Math.cos,fm=Math.sin,Ut=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Zc=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},pn=function(e){return e!==!1},id=function(){return typeof window<"u"},ja=function(e){return yt(e)||Ut(e)},rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kt=Array.isArray,mc=/(?:-?\.?\d|\.)+/gi,sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,od=/[^,'"\[\]\s]+/gi,dm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,Fn,gc,$c,Rn={},Vo={},ld,cd=function(e){return(Vo=Pr(e,Rn))&&Dn},eh=function(e,t){},Wo=function(e,t){return!t&&void 0},hd=function(e,t){return e&&(Rn[e]=t)&&Vo&&(Vo[e]=t)||Rn},Ta=function(){return 0},pm={suppressEvents:!0,isStart:!0,kill:!1},Po={suppressEvents:!0,kill:!1},mm={suppressEvents:!0},th={},Qi=[],_c={},ud,Sn={},bl={},Fh=30,Lo=[],nh="",ih=function(e){var t=e[0],n,i;if(di(t)||yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Lo.length;i--&&!Lo[i].targetTest(t););n=Lo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Id(e[i],n)))||e.splice(i,1);return e},vr=function(e){return e._gsap||ih(Hn(e))[0]._gsap},fd=function(e,t,n){return(n=e[t])&&yt(n)?e[t]():Zc(n)&&e.getAttribute&&e.getAttribute(t)||n},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},jo=function(){var e=Qi.length,t=Qi.slice(0),n,i;for(_c={},Qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},dd=function(e,t,n,i){Qi.length&&!Yt&&jo(),e.render(t,n,i||Yt&&t<0&&(e._initted||e._startAt)),Qi.length&&!Yt&&jo()},pd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(od).length<2?t:Ut(e)?e.trim():e},md=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_m=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Pr=function(e,t){for(var n in t)e[n]=t[n];return e},Nh=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},qo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ua=function(e){var t=e.parent||_t,n=e.keyframes?_m(Kt(e.keyframes)):qn;if(pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},bm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},gd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},rl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bc=function(e,t,n,i){return e._startAt&&(Yt?e._startAt.revert(Po):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},vm=function o(e){return!e||e._ts&&o(e.parent)},zh=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sl=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},al=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sl(e),n._dirty||yr(n,e)),e},_d=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Xo(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},ci=function(e,t,n,i){return t.parent&&er(t),t._start=Ht((Ri(n)?n:n||e!==_t?On(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gd(e,t,"_first","_last",e._sort?"_start":0),xc(t)||(e._recent=t),i||_d(e,t),e._ts<0&&al(e,e._tTime),e},bd=function(e,t){return(Rn.ScrollTrigger||eh("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},xd=function(e,t,n,i,r){if(sh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ud!==Tn.frame)return Qi.push(e),e._lazy=[r,i],1},ym=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},xc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Mm=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&ym(e)&&!(!e._initted&&xc(e))||(e._ts<0||e._dp._ts<0)&&!xc(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Ua(0,e._tDur,t),h=ys(l,a),e._yoyo&&h&1&&(s=1-s),h!==ys(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Yt||i||e._zTime===ht||!t&&e._zTime){if(!e._initted&&xd(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!u),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&bc(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&er(e,1),!n&&!Yt&&(Vn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ms=function(e,t,n,i){var r=e._repeat,s=Ht(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Ht(s*(r+1)+e._rDelay*r):s,a>0&&!i&&al(e,e._tTime=e._tDur*a),e.parent&&sl(e),n||yr(e.parent,e),e},Uh=function(e){return e instanceof dn?yr(e):Ms(e,e._dur)},Sm={_start:0,endTime:Ta,totalDuration:Ta},On=function o(e,t,n){var i=e.labels,r=e._recent||Sm,s=e.duration()>=Gn?r.endTime(!1):e._dur,a,l,c;return Ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Kt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},fa=function(e,t,n){var i=Ri(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;s.immediateRender=pn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Lt(t[0],s,t[r+1])},sr=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Ut(e)||!(t=dm.exec(e))?"":t[1]},Tm=function(e,t,n){return sr(n,function(i){return Ua(e,t,i)})},vc=[].slice,vd=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==Fn},Em=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ut(i)&&!t||vd(i,1)?(r=n).push.apply(r,Hn(i)):n.push(i)})||n},Hn=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Ut(e)&&!n&&(gc||!ws())?vc.call((t||$c).querySelectorAll(e),0):Kt(e)?Em(e,n):vd(e)?vc.call(e,0):e?[e]:[]},yc=function(e){return e=Hn(e)[0]||Wo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hn(t,n.querySelectorAll?n:n===e?Wo("Invalid scope")||$c.createElement("div"):e)}},yd=function(e){return e.sort(function(){return .5-Math.random()})},Md=function(e){if(yt(e))return e;var t=di(e)?e:{each:e},n=Mr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return Ut(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var p=(g||t).length,m=s[p],_,v,b,y,M,E,A,x,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!S){for(A=-Gn;A<(A=g[S++].getBoundingClientRect().left)&&S<p;);S--}for(m=s[p]=[],_=l?Math.min(S,p)*h-.5:i%S,v=S===Gn?0:l?p*u/S-.5:i/S|0,A=0,x=Gn,E=0;E<p;E++)b=E%S-_,y=v-(E/S|0),m[E]=M=c?Math.abs(c==="y"?y:b):nd(b*b+y*y),M>A&&(A=M),M<x&&(x=M);i==="random"&&yd(m),m.max=A-x,m.min=x,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(S>p?p-1:c?c==="y"?p/S:S:Math.max(S,p/S))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=Xt(t.amount||t.each)||0,n=n&&p<0?Ld(n):n}return p=(m[f]-m.min)/m.max||0,Ht(m.b+(n?n(p):p)*m.v)+m.u}},Mc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:Xt(n))}},wd=function(e,t){var n=Kt(e),i,r;return!n&&di(e)&&(i=n=e.radius||Gn,e.values?(e=Hn(e.values),(r=!Ri(e[0]))&&(i*=i)):e=Mc(e.increment)),sr(t,n?yt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Gn,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:s,r||h===s||Ri(s)?h:h+Xt(s)}:Mc(e))},Sd=function(e,t,n,i){return sr(Kt(e)?!t:n===!0?!!(n=0):!i,function(){return Kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Am=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},Cm=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},Pm=function(e,t,n){return Ed(e,t,0,1,n)},Td=function(e,t,n){return sr(n,function(i){return e[~~t(i)]})},Lm=function o(e,t,n){var i=t-e;return Kt(e)?Td(e,o(0,e.length),t):sr(n,function(r){return(i+(r-e)%i)%i+e})},Rm=function o(e,t,n){var i=t-e,r=i*2;return Kt(e)?Td(e,o(0,e.length-1),t):sr(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Ea=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?od:mc),n+=e.substr(t,i-t)+Sd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Ed=function(e,t,n,i,r){var s=t-e,a=i-n;return sr(r,function(l){return n+((l-e)/s*a||0)})},Dm=function o(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Ut(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Kt(e)&&!Kt(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(o(e[c-1],e[c]));u--,r=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},n=t}else i||(e=Pr(Kt(e)?[]:{},e));if(!h){for(l in t)rh.call(a,e,l,"get",t[l]);r=function(g){return lh(g,a)||(s?e.p:e)}}}return sr(n,r)},Bh=function(e,t,n){var i=e.labels,r=Gn,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},Vn=function(e,t,n){var i=e.vars,r=i[t],s=At,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Qi.length&&jo(),a&&(At=a),h=l?r.apply(c,l):r.call(c),At=s,h},ra=function(e){return er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Vn(e,"onInterrupt"),e},os,Im=function(e){e=!e.name&&e.default||e;var t=e.name,n=yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ta,render:lh,add:rh,kill:Km,modifier:Ym,rawVars:0},s={targetTest:0,get:0,getSetter:oh,aliases:{},register:0};if(ws(),e!==i){if(Sn[t])return;qn(i,qn(qo(e,r),s)),Pr(i.prototype,Pr(r,qo(e,s))),Sn[i.prop=t]=i,e.targetTest&&(Lo.push(i),th[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hd(t,i),e.register&&e.register(Dn,i,gn)},lt=255,sa={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},xl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Ad=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&lt,e&lt]:0:sa.black,r,s,a,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])i=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(mc),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,s=h<=.5?h*(c+1):h+c-h*c,r=h*2-s,i.length>3&&(i[3]*=1),i[0]=xl(l+1/3,r,s),i[1]=xl(l,r,s),i[2]=xl(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(sd),n&&i.length<4&&(i[3]=1),i}else i=e.match(mc)||sa.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/lt,s=i[1]/lt,a=i[2]/lt,u=Math.max(r,s,a),f=Math.min(r,s,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(s-a)/d+(s<a?6:0):u===s?(a-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Cd=function(e){var t=[],n=[],i=-1;return e.split(Ji).forEach(function(r){var s=r.match(as)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Gh=function(e,t,n){var i="",r=(e+i).match(Ji),s=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Ad(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Cd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ji,"1").split(as),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Ji),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Ji=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),km=/hsl[a]?\(/,Pd=function(e){var t=e.join(" "),n;if(Ji.lastIndex=0,Ji.test(t))return n=km.test(t),e[1]=Gh(e[1],n),e[0]=Gh(e[0],n,Cd(e[1])),!0},Aa,Tn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,h,u,f,d,g=function p(m){var _=o()-i,v=m===!0,b,y,M,E;if(_>e&&(n+=_-t),i+=_,M=i-n,b=M-s,(b>0||v)&&(E=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,s+=b+(b>=r?4:r-b),y=1),v||(l=c(p)),y)for(d=0;d<a.length;d++)a[d](M,f,E,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ld&&(!gc&&id()&&(Fn=gc=window,$c=Fn.document||{},Rn.gsap=Dn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(Dn.version),cd(Vo||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),h=Fn.requestAnimationFrame),l&&u.sleep(),c=h||function(m){return setTimeout(m,s-u.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(h?Fn.cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ta},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),s=u.time*1e3+r},add:function(m,_,v){var b=_?function(y,M,E,A){m(y,M,E,A),u.remove(b)}:m;return u.remove(m),a[v?"unshift":"push"](b),ws(),b},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},u}(),ws=function(){return!Aa&&Tn.wake()},$e={},Om=/^[\d.\-M][\d.\-,\s]/,Fm=/["']/g,Nm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Fm,"").trim():+c,i=l.substr(a+1).trim();return t},zm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Um=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Nm(t[1])]:zm(e).split(",").map(pd)):$e._CE&&Om.test(e)?$e._CE("",e):n},Ld=function(e){return function(t){return 1-e(1-t)}},Rd=function o(e,t){for(var n=e._first,i;n;)n instanceof dn?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Mr=function(e,t){return e&&(yt(e)?e:$e[e]||Um(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return mn(e,function(a){$e[a]=Rn[a]=r,$e[s=a.toLowerCase()]=n;for(var l in r)$e[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=r[l]}),r},Dd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vl=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/pc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*fm((h-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Dd(a);return r=pc/r,l.config=function(c,h){return o(e,c,h)},l},yl=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Dd(n);return i.config=function(r){return o(e,r)},i};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Nr(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Nr("Elastic",vl("in"),vl("out"),vl());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Nr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Nr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Nr("Circ",function(o){return-(nd(1-o*o)-1)});Nr("Sine",function(o){return o===1?1:-um(o*cm)+1});Nr("Back",yl("in"),yl("out"),yl());$e.SteppedEase=$e.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-ht;return function(a){return((i*Ua(0,s,a)|0)+r)*n}}};vs.ease=$e["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return nh+=o+","+o+"Params,"});var Id=function(e,t){this.id=hm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fd,this.set=t?t.getSetter:oh},Ss=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ms(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Aa||Tn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(al(this,n),!r._dp||r.parent||_d(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ht||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ys(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Xo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(Ua(-this._delay,this._tDur,i),!0),sl(this),xm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mm);var i=Yt;return Yt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Uh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Uh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(On(this,n),pn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,pn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ht)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=yt(n)?n:md,a=function(){var c=i.then;i.then=null,yt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ra(this)},o}();qn(Ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var dn=function(o){td(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=pn(n.sortChildren),_t&&ci(n.parent||_t,Mi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&bd(Mi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return fa(0,arguments,this),this},t.from=function(i,r,s){return fa(1,arguments,this),this},t.fromTo=function(i,r,s,a){return fa(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,ua(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Lt(i,r,On(this,s),1),this},t.call=function(i,r,s){return ci(this,Lt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,h){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=h,s.parent=this,new Lt(i,s,On(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,h){return s.runBackwards=1,ua(s).immediateRender=pn(s.immediateRender),this.staggerTo(i,r,s,a,l,c,h)},t.staggerFromTo=function(i,r,s,a,l,c,h,u){return a.startAt=s,ua(a).immediateRender=pn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ht(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,m,_,v,b,y,M,E,A;if(this!==_t&&h>l&&i>=0&&(h=l),h!==this._tTime||s||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,b=this._ts,_=!b,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=Ht(h%m),h===l?(p=this._repeat,f=c):(p=~~(h/m),p&&p===h/m&&(f=c,p--),f>c&&(f=c)),M=ys(this._tTime,m),!a&&this._tTime&&M!==p&&(M=p),E&&p&1&&(f=c-f,A=1),p!==M&&!this._lock){var x=E&&M&1,S=x===(E&&p&1);if(p<M&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(A?0:Ht(p*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Rd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=wm(this,Ht(a),Ht(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&(Vn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!_){v=0,g&&(h+=this._zTime=-ht);break}}d=g}else{d=this._last;for(var L=i<0?i:f;d;){if(g=d._prev,(d._act||L<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(L-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(L-d._start)*d._ts,r,s||Yt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){v=0,g&&(h+=this._zTime=L?-ht:ht);break}}d=g}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-ht)._zTime=f>=a?1:-1,this._ts))return this._start=y,sl(this),this.render(i,r,s);this._onUpdate&&!r&&Vn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&er(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Vn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Ri(r)||(r=On(this,r,i)),!(i instanceof Ss)){if(Kt(i))return i.forEach(function(a){return s.add(a,r)}),this;if(Ut(i))return this.addLabel(i,r);if(yt(i))i=Lt.delayedCall(0,i);else return this}return this!==i?ci(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-Gn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Lt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Ut(i)?this.removeLabel(i):yt(i)?this.killTweensOf(i):(rl(this,i),i===this._recent&&(this._recent=this._last),yr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(Tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=On(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=Lt.delayedCall(0,r||Ta,s);return a.data="isPause",this._hasPause=1,ci(this,a,On(this,i))},t.removePause=function(i){var r=this._first;for(i=On(this,i);r;)r._start===i&&r.data==="isPause"&&er(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Hi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=Hn(i),l=this._first,c=Ri(r),h;l;)l instanceof Lt?gm(l._targets,a)&&(c?(!Hi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(h=l.getTweensOf(a,r)).length&&s.push.apply(s,h),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=On(s,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Lt.to(s,qn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||ht,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&Ms(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,qn({startAt:{time:On(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bh(this,On(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bh(this,On(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return yr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yr(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=Gn,c,h,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(u=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,ci(s,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=h/s._ts,s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ms(s,s===_t&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(_t._ts&&(dd(_t,Xo(i,_t)),ud=Tn.frame),Tn.frame>=Fh){Fh+=Ln.autoSleep||120;var r=_t._first;if((!r||!r._ts)&&Ln.autoSleep&&Tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Tn.sleep()}}},e}(Ss);qn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bm=function(e,t,n,i,r,s,a){var l=new gn(this._pt,e,t,0,1,Ud,null,r),c=0,h=0,u,f,d,g,p,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ea(i)),s&&(v=[n,i],s(v,e,t),n=v[0],i=v[1]),f=n.match(_l)||[];u=_l.exec(i);)g=u[0],p=i.substring(c,u.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:m,c:g.charAt(1)==="="?fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=_l.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ad.test(i)||_)&&(l.e=0),this._pt=l,l},rh=function(e,t,n,i,r,s,a,l,c,h){yt(i)&&(i=i(r||0,e,s));var u=e[t],f=n!=="get"?n:yt(u)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=yt(u)?c?jm:Nd:ah,g;if(Ut(i)&&(~i.indexOf("random(")&&(i=Ea(i)),i.charAt(1)==="="&&(g=fs(f,i)+(Xt(f)||0),(g||g===0)&&(i=g))),!h||f!==i||wc)return!isNaN(f*i)&&i!==""?(g=new gn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?Xm:zd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&eh(t,i),Bm.call(this,e,t,f,i,d,l||Ln.stringFilter,c))},Gm=function(e,t,n,i,r){if(yt(e)&&(e=da(e,r,t,n,i)),!di(e)||e.style&&e.nodeType||Kt(e)||rd(e))return Ut(e)?da(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=da(e[a],r,t,n,i);return s},kd=function(e,t,n,i,r,s){var a,l,c,h;if(Sn[e]&&(a=new Sn[e]).init(r,a.rawVars?t[e]:Gm(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new gn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==os))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hi,wc,sh=function o(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,p=i.autoRevert,m=e._dur,_=e._startAt,v=e._targets,b=e.parent,y=b&&b.data==="nested"?b.vars.targets:v,M=e._overwrite==="auto"&&!Jc,E=e.timeline,A,x,S,L,O,B,I,R,z,V,Q,U,$;if(E&&(!g||!r)&&(r="none"),e._ease=Mr(r,vs.ease),e._yEase=d?Ld(Mr(d===!0?r:d,vs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(R=v[0]?vr(v[0]).harness:0,U=R&&i[R.prop],A=qo(i,th),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!p?_.render(-1,!0):_.revert(f&&m?Po:pm),_._lazy=0),s){if(er(e._startAt=Lt.set(v,qn({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!_&&pn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!p)&&e._startAt.revert(Po),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),S=qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&pn(l),immediateRender:a,stagger:0,parent:b},A),U&&(S[R.prop]=U),er(e._startAt=Lt.set(v,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(Po):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&pn(l)||l&&!m,x=0;x<v.length;x++){if(O=v[x],I=O._gsap||ih(v)[x]._gsap,e._ptLookup[x]=V={},_c[I.id]&&Qi.length&&jo(),Q=y===v?x:y.indexOf(O),R&&(z=new R).init(O,U||A,e,Q,y)!==!1&&(e._pt=L=new gn(e._pt,O,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(P){V[P]=L}),z.priority&&(B=1)),!R||U)for(S in A)Sn[S]&&(z=kd(S,A,e,Q,O,y))?z.priority&&(B=1):V[S]=L=rh.call(e,O,S,"get",A[S],Q,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(O,e._op[x]),M&&e._pt&&(Hi=e,_t.killTweensOf(O,V,e.globalTime(t)),$=!e.parent,Hi=0),e._pt&&l&&(_c[I.id]=1)}B&&Bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,g&&t<=0&&E.render(Gn,!0,!0)},Hm=function(e,t,n,i,r,s,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(c=u[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return wc=1,e.vars[t]="+=0",sh(e,a),wc=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,h.e&&(h.e=wt(n)+Xt(h.e)),h.b&&(h.b=c.s+Xt(h.b))},Vm=function(e,t){var n=e[0]?vr(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=Pr({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},Wm=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(Kt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},da=function(e,t,n,i,r){return yt(e)?e.call(t,n,i,r):Ut(e)&&~e.indexOf("random(")?Ea(e):e},Od=nh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fd={};mn(Od+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Fd[o]=1});var Lt=function(o){td(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:ua(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=i.parent||_t,b=(Kt(n)||rd(n)?Ri(n[0]):"length"in i)?[n]:Hn(n),y,M,E,A,x,S,L,O;if(a._targets=b.length?ih(b):Wo("GSAP target "+n+" not found. https://greensock.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||ja(c)||ja(h)){if(i=a.vars,y=a.timeline=new dn({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:b}),y.kill(),y.parent=y._dp=Mi(a),y._start=0,f||ja(c)||ja(h)){if(A=b.length,L=f&&Md(f),di(f))for(x in f)~Od.indexOf(x)&&(O||(O={}),O[x]=f[x]);for(M=0;M<A;M++)E=qo(i,Fd),E.stagger=0,_&&(E.yoyoEase=_),O&&Pr(E,O),S=b[M],E.duration=+da(c,Mi(a),M,S,b),E.delay=(+da(h,Mi(a),M,S,b)||0)-a._delay,!f&&A===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(S,E,L?L(M,S,b):0),y._ease=$e.none;y.duration()?c=h=0:a.timeline=0}else if(g){ua(qn(y.vars.defaults,{ease:"none"})),y._ease=Mr(g.ease||i.ease||"none");var B=0,I,R,z;if(Kt(g))g.forEach(function(V){return y.to(b,V,">")}),y.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||Wm(x,g[x],E,g.easeEach);for(x in E)for(I=E[x].sort(function(V,Q){return V.t-Q.t}),B=0,M=0;M<I.length;M++)R=I[M],z={ease:R.e,duration:(R.t-(M?I[M-1].t:0))/100*c},z[x]=R.v,y.to(b,z,B),B+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Jc&&(Hi=Mi(a),_t.killTweensOf(b),Hi=0),ci(v,Mi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Ht(v._time)&&pn(u)&&vm(Mi(a))&&v.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-h)||0)),m&&bd(Mi(a),m),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ht&&!h?l:i<ht?0:i,f,d,g,p,m,_,v,b,y;if(!c)Mm(this,i,r,s);else if(u!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,b=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,r,s);if(f=Ht(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=ys(this._tTime,p),f===a&&!s&&this._initted)return this._tTime=u,this;g!==m&&(b&&this._yEase&&Rd(b,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Ht(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(xd(this,h?i:f,s,r,u))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!a&&!r&&(Vn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;b&&b.render(i<0?i:!f&&_?-ht:b._dur*b._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&bc(this,i,r,s),Vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Vn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&bc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&er(this,1),!r&&!(h&&!a)&&(u||a||_)&&(Vn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,a){Aa||Tn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||sh(this,l),c=this._ease(l/this._dur),Hm(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(al(this,0),this.parent||gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hi&&Hi.vars.overwrite!==!0)._first||ra(this),this.parent&&s!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Hn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,p,m,_;if((!r||r==="all")&&bm(a,l))return r==="all"&&(this._pt=0),ra(this);for(u=this._op=this._op||[],r!=="all"&&(Ut(r)&&(p={},mn(r,function(v){return p[v]=1}),r=p),r=Vm(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(u[_]=r,g=f,d={}):(d=u[_]=u[_]||{},g=r);for(p in g)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&rl(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&ra(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return fa(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return fa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return _t.killTweensOf(i,r,s)},e}(Ss);qn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(o){Lt[o]=function(){var e=new dn,t=vc.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var ah=function(e,t,n){return e[t]=n},Nd=function(e,t,n){return e[t](n)},jm=function(e,t,n,i){return e[t](i.fp,n)},qm=function(e,t,n){return e.setAttribute(t,n)},oh=function(e,t){return yt(e[t])?Nd:Zc(e[t])&&e.setAttribute?qm:ah},zd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ud=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},lh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ym=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},Km=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?rl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Qm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bd=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},gn=function(){function o(t,n,i,r,s,a,l,c,h){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||zd,this.d=l||this,this.set=c||ah,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Qm,this.m=n,this.mt=r,this.tween=i},o}();mn(nh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return th[o]=1});Rn.TweenMax=Rn.TweenLite=Lt;Rn.TimelineLite=Rn.TimelineMax=dn;_t=new dn({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=Pd;var Ts=[],Ro={},Jm=[],Hh=0,Ml=function(e){return(Ro[e]||Jm).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-Hh>2&&(Ml("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=Fn.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Ml("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Hh=e,Ml("matchMedia"))},Gd=function(){function o(t,n){this.selector=n&&yc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){yt(n)&&(r=i,i=n,n=yt);var s=this,a=function(){var c=At,h=s.selector,u;return c&&c!==s&&c.data.push(s),r&&(s.selector=yc(r)),At=s,u=i.apply(s,arguments),yt(u)&&s._r.push(u),At=c,s.selector=h,s.isReverted=!1,u};return s.last=a,n===yt?a(s):n?s[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ss)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=Ts.indexOf(this);~a&&Ts.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),Zm=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){di(n)||(n={matches:n});var s=new Gd(0,r||this.scope),a=s.conditions={},l,c,h;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?h=1:(l=Fn.matchMedia(n[c]),l&&(Ts.indexOf(s)<0&&Ts.push(s),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return h&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Im(i)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ut(e)&&(e=Hn(e)[0]);var r=vr(e||{}).get,s=n?md:pd;return n==="native"&&(n=""),e&&(t?s((Sn[t]&&Sn[t].get||r)(e,t,n,i)):function(a,l,c){return s((Sn[a]&&Sn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Hn(e),e.length>1){var i=e.map(function(h){return Dn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var s=Sn[t],a=vr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(h){var u=new s;os._pt=0,u.init(e,n?h+n:h,os,0,[e]),u.render(1,u),os._pt&&lh(1,os)}:a.set(e,l);return s?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Dn.to(e,Pr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,h){return r.resetTo(t,l,c,h)};return s.tween=r,s},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mr(e.ease,vs.ease)),Nh(vs,e||{})},config:function(e){return Nh(Ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Sn[a]&&!Rn[a]&&Wo(t+" effect requires "+a+" plugin.")}),bl[t]=function(a,l,c){return n(Hn(a),qn(l||{},r),c)},s&&(dn.prototype[t]=function(a,l,c){return this.add(bl[t](a,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=Mr(t)},parseEase:function(e,t){return arguments.length?Mr(e,t):$e},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dn(e),i,r;for(n.smoothChildTiming=pn(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,i=_t._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&ci(n,i,i._start-i._delay),i=r;return ci(_t,n,0),n},context:function(e,t){return e?new Gd(e,t):At},matchMedia:function(e){return new Zm(e)},matchMediaRefresh:function(){return Ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=Ro[e]||(Ro[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ro[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Lm,wrapYoyo:Rm,distribute:Md,random:Sd,snap:wd,normalize:Pm,getUnit:Xt,clamp:Tm,splitColor:Ad,toArray:Hn,selector:yc,mapRange:Ed,pipe:Am,unitize:Cm,interpolate:Dm,shuffle:yd},install:cd,effects:bl,ticker:Tn,updateRoot:dn.updateRoot,plugins:Sn,globalTimeline:_t,core:{PropTween:gn,globals:hd,Tween:Lt,Timeline:dn,Animation:Ss,getCache:vr,_removeLinkedListItem:rl,reverting:function(){return Yt},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Jc=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Yo[o]=Lt[o]});Tn.add(dn.updateRoot);os=Yo.to({},{duration:0});var $m=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},eg=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=$m(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},wl=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(Ut(r)&&(l={},mn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}eg(a,r)}}}},Dn=Yo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wl("roundProps",Mc),wl("modifiers"),wl("snap",wd))||Yo;Lt.version=dn.version=Dn.version="3.11.4";ld=1;id()&&ws();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vh,Vi,ds,ch,_r,Wh,hh,tg=function(){return typeof window<"u"},Di={},dr=180/Math.PI,ps=Math.PI/180,Ur=Math.atan2,jh=1e8,uh=/([A-Z])/g,ng=/(left|right|width|margin|padding|x)/i,ig=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ag=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Hd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},og=function(e,t,n){return e.style[t]=n},lg=function(e,t,n){return e.style.setProperty(t,n)},cg=function(e,t,n){return e._gsap[t]=n},hg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ug=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},fg=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},bt="transform",ni=bt+"Origin",dg=function(e,t){var n=this,i=this.target,r=i.style;if(e in Di){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=wi(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:wi(i,e)),this.props.indexOf(bt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ni,t,"")),e=bt}(r||t)&&this.props.push(e,t,r[e])},Wd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(uh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=hh(),r&&!r.isStart&&!n[bt]&&(Wd(n),i.uncache=1)}},jd=function(e,t){var n={target:e,props:[],revert:pg,save:dg};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},qd,Ec=function(e,t){var n=Vi.createElementNS?Vi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vi.createElement(e);return n.style?n:Vi.createElement(e)},hi=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(uh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Es(t)||t,1)||""},qh="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var i=t||_r,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(qh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?qh[s]:"")+e},Ac=function(){tg()&&window.document&&(Vh=window,Vi=Vh.document,ds=Vi.documentElement,_r=Ec("div")||{style:{}},Ec("div"),bt=Es(bt),ni=bt+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qd=!!Es("perspective"),hh=Dn.core.reverting,ch=1)},Sl=function o(e){var t=Ec("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(ds.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ds.removeChild(t),this.style.cssText=r,s},Xh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xd=function(e){var t;try{t=e.getBBox()}catch{t=Sl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sl||(t=Sl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Xh(e,["x","cx","x1"])||0,y:+Xh(e,["y","cy","y1"])||0,width:0,height:0}:t},Yd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xd(e))},Ca=function(e,t){if(t){var n=e.style;t in Di&&t!==ni&&(t=bt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(uh,"-$1").toLowerCase())):n.removeAttribute(t)}},Wi=function(e,t,n,i,r,s){var a=new gn(e._pt,t,n,0,1,s?Vd:Hd);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Yh={deg:1,rad:1,turn:1},mg={grid:1,flex:1},tr=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=_r.style,l=ng.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,p,m,_;return i===s||!r||Yh[i]||Yh[s]?r:(s!=="px"&&!f&&(r=o(e,t,n,"px")),_=e.getCTM&&Yd(e),(d||s==="%")&&(Di[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[h],wt(d?r/g*u:r/100*g)):(a[l?"width":"height"]=u+(f?s:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Vi||!p.appendChild)&&(p=Vi.body),m=p._gsap,m&&d&&m.width&&l&&m.time===Tn.time&&!m.uncache?wt(r/m.width*u):((d||s==="%")&&!mg[hi(p,"display")]&&(a.position=hi(e,"position")),p===e&&(a.position="static"),p.appendChild(_r),g=_r[h],p.removeChild(_r),a.position="absolute",l&&d&&(m=vr(p),m.time=Tn.time,m.width=p[h]),wt(f?g*r/u:g&&r?u/g*r:0))))},wi=function(e,t,n,i){var r;return ch||Ac(),t in Ei&&t!=="transform"&&(t=Ei[t],~t.indexOf(",")&&(t=t.split(",")[0])),Di[t]&&t!=="transform"?(r=La(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Qo(hi(e,ni))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ko[t]&&Ko[t](e,t,n)||hi(e,t)||fd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?tr(e,t,r,n)+n:r},gg=function(e,t,n,i){if(!n||n==="none"){var r=Es(t,e,1),s=r&&hi(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var a=new gn(this._pt,e.style,t,0,1,Ud),l=0,c=0,h,u,f,d,g,p,m,_,v,b,y,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=hi(e,t)||i,e.style[t]=n),h=[n,i],Pd(h),n=h[0],i=h[1],f=n.match(as)||[],M=i.match(as)||[],M.length){for(;u=as.exec(i);)m=u[0],v=i.substring(l,u.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,y=p.substr((d+"").length),m.charAt(1)==="="&&(m=fs(d,m)+y),_=parseFloat(m),b=m.substr((_+"").length),l=as.lastIndex-b.length,b||(b=b||Ln.units[t]||y,l===i.length&&(i+=b,a.e+=b)),y!==b&&(d=tr(e,t,p,b)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Vd:Hd;return ad.test(i)&&(a.e=0),this._pt=a,a},Kh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_g=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kh[n]||n,t[1]=Kh[i]||i,t.join(" ")},bg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Di[a]&&(l=1,a=a==="transformOrigin"?ni:bt),Ca(n,a);l&&(Ca(n,bt),s&&(s.svg&&n.removeAttribute("transform"),La(n,1),s.uncache=1,Wd(i)))}},Ko={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new gn(e._pt,t,n,0,0,bg);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Pa=[1,0,0,1,0,0],Kd={},Qd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qh=function(e){var t=hi(e,bt);return Qd(t)?Pa:t.substr(7).match(sd).map(wt)},fh=function(e,t){var n=e._gsap||vr(e),i=e.style,r=Qh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Pa:r):(r===Pa&&!e.offsetParent&&e!==ds&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ds.appendChild(e)),r=Qh(e),l?i.display=l:Ca(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):ds.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Cc=function(e,t,n,i,r,s){var a=e._gsap,l=r||fh(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],v=l[5],b=t.split(" "),y=parseFloat(b[0])||0,M=parseFloat(b[1])||0,E,A,x,S;n?l!==Pa&&(A=d*m-g*p)&&(x=y*(m/A)+M*(-p/A)+(p*v-m*_)/A,S=y*(-g/A)+M*(d/A)-(d*v-g*_)/A,y=x,M=S):(E=Xd(e),y=E.x+(~b[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(b[1]||b[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&a.smooth?(_=y-c,v=M-h,a.xOffset=u+(_*d+v*p)-_,a.yOffset=f+(_*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ni]="0px 0px",s&&(Wi(s,a,"xOrigin",c,y),Wi(s,a,"yOrigin",h,M),Wi(s,a,"xOffset",u,a.xOffset),Wi(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},La=function(e,t){var n=e._gsap||new Id(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=hi(e,ni)||"0",h,u,f,d,g,p,m,_,v,b,y,M,E,A,x,S,L,O,B,I,R,z,V,Q,U,$,P,H,Y,ne,ie,ae;return h=u=f=p=m=_=v=b=y=0,d=g=1,n.svg=!!(e.getCTM&&Yd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),A=fh(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),Cc(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Pa&&(O=A[0],B=A[1],I=A[2],R=A[3],h=z=A[4],u=V=A[5],A.length===6?(d=Math.sqrt(O*O+B*B),g=Math.sqrt(R*R+I*I),p=O||B?Ur(B,O)*dr:0,v=I||R?Ur(I,R)*dr+p:0,v&&(g*=Math.abs(Math.cos(v*ps))),n.svg&&(h-=M-(M*O+E*I),u-=E-(M*B+E*R))):(ae=A[6],ne=A[7],P=A[8],H=A[9],Y=A[10],ie=A[11],h=A[12],u=A[13],f=A[14],x=Ur(ae,Y),m=x*dr,x&&(S=Math.cos(-x),L=Math.sin(-x),Q=z*S+P*L,U=V*S+H*L,$=ae*S+Y*L,P=z*-L+P*S,H=V*-L+H*S,Y=ae*-L+Y*S,ie=ne*-L+ie*S,z=Q,V=U,ae=$),x=Ur(-I,Y),_=x*dr,x&&(S=Math.cos(-x),L=Math.sin(-x),Q=O*S-P*L,U=B*S-H*L,$=I*S-Y*L,ie=R*L+ie*S,O=Q,B=U,I=$),x=Ur(B,O),p=x*dr,x&&(S=Math.cos(x),L=Math.sin(x),Q=O*S+B*L,U=z*S+V*L,B=B*S-O*L,V=V*S-z*L,O=Q,z=U),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),d=wt(Math.sqrt(O*O+B*B+I*I)),g=wt(Math.sqrt(V*V+ae*ae)),x=Ur(z,V),v=Math.abs(x)>2e-4?x*dr:0,y=ie?1/(ie<0?-ie:ie):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qd(hi(e,bt)),Q&&e.setAttribute("transform",Q))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=wt(d),n.scaleY=wt(g),n.rotation=wt(p)+a,n.rotationX=wt(m)+a,n.rotationY=wt(_)+a,n.skewX=v+a,n.skewY=b+a,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ni]=Qo(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?vg:qd?Jd:xg,n.uncache=0,n},Qo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tl=function(e,t,n){var i=Xt(t);return wt(parseFloat(t)+parseFloat(tr(e,"x",n+"px",i)))+i},xg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jd(e,t)},lr="0deg",Ws="0px",cr=") ",Jd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,b=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(b&&(u!==lr||h!==lr)){var E=parseFloat(h)*ps,A=Math.sin(E),x=Math.cos(E),S;E=parseFloat(u)*ps,S=Math.cos(E),s=Tl(v,s,A*S*-b),a=Tl(v,a,-Math.sin(E)*-b),l=Tl(v,l,x*S*-b+b)}m!==Ws&&(y+="perspective("+m+cr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||s!==Ws||a!==Ws||l!==Ws)&&(y+=l!==Ws||M?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+cr),c!==lr&&(y+="rotate("+c+cr),h!==lr&&(y+="rotateY("+h+cr),u!==lr&&(y+="rotateX("+u+cr),(f!==lr||d!==lr)&&(y+="skew("+f+", "+d+cr),(g!==1||p!==1)&&(y+="scale("+g+", "+p+cr),v.style[bt]=y||"translate(0, 0)"},vg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,b=parseFloat(s),y=parseFloat(a),M,E,A,x,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ps,c*=ps,M=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=ps,S=Math.tan(c-h),S=Math.sqrt(1+S*S),A*=S,x*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),M*=S,E*=S)),M=wt(M),E=wt(E),A=wt(A),x=wt(x)):(M=u,x=f,E=A=0),(b&&!~(s+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=tr(d,"x",s,"px"),y=tr(d,"y",a,"px")),(g||p||m||_)&&(b=wt(b+g-(g*M+p*A)+m),y=wt(y+p-(g*E+p*x)+_)),(i||r)&&(S=d.getBBox(),b=wt(b+i/100*S.width),y=wt(y+r/100*S.height)),S="matrix("+M+","+E+","+A+","+x+","+b+","+y+")",d.setAttribute("transform",S),v&&(d.style[bt]=S)},yg=function(e,t,n,i,r){var s=360,a=Ut(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?dr:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),u==="cw"&&c<0?c=(c+s*jh)%s-~~(c/s)*s:u==="ccw"&&c>0&&(c=(c-s*jh)%s-~~(c/s)*s)),e._pt=f=new gn(e._pt,t,n,i,c,rg),f.e=h,f.u="deg",e._props.push(n),f},Jh=function(e,t){for(var n in t)e[n]=t[n];return e},Mg=function(e,t,n){var i=Jh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[bt]=t,a=La(n,1),Ca(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],s[bt]=t,a=La(n,1),s[bt]=c);for(l in Di)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=Xt(c),g=Xt(h),u=d!==g?tr(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new gn(e._pt,a,l,u,f-u,Tc),e._pt.u=g||0,e._props.push(l));Jh(a,i)};mn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});Ko[e>1?"border"+o:o]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=s.map(function(g){return wi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},s.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,u)}});var Zd={name:"css",register:Ac,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,g,p,m,_,v,b,y,M,E,A,x;ch||Ac(),this.styles=this.styles||jd(e),x=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(Sn[p]&&kd(p,t,n,i,e,r)))){if(d=typeof h,g=Ko[p],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ea(h)),g)g(this,e,p,h,n)&&(A=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",Ji.lastIndex=0,Ji.test(c)||(m=Xt(c),_=Xt(h)),_?m!==_&&(c=tr(e,p,c,_)+_):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,p),s.push(p),x.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],Ut(c)&&~c.indexOf("random(")&&(c=Ea(c)),Xt(c+"")||(c+=Ln.units[p]||Xt(wi(e,p))||""),(c+"").charAt(1)==="="&&(c=wi(e,p))):c=wi(e,p),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),p in Ei&&(p==="autoAlpha"&&(f===1&&wi(e,"visibility")==="hidden"&&u&&(f=0),x.push("visibility",0,a.visibility),Wi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=Ei[p],~p.indexOf(",")&&(p=p.split(",")[0]))),b=p in Di,b){if(this.styles.save(p),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||La(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new gn(this._pt,a,bt,0,1,M.renderTransform,M,0,-1),y.dep=1),p==="scale")this._pt=new gn(this._pt,M,"scaleY",M.scaleY,(v?fs(M.scaleY,v+u):u)-M.scaleY||0,Tc),this._pt.u=0,s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){x.push(ni,0,a[ni]),h=_g(h),M.svg?Cc(e,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==M.zOrigin&&Wi(this,M,"zOrigin",M.zOrigin,_),Wi(this,a,p,Qo(c),Qo(h)));continue}else if(p==="svgOrigin"){Cc(e,h,1,E,0,this);continue}else if(p in Kd){yg(this,M,p,f,v?fs(f,v+h):h);continue}else if(p==="smoothOrigin"){Wi(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){Mg(this,h,e);continue}}else p in a||(p=Es(p)||p);if(b||(u||u===0)&&(f||f===0)&&!ig.test(h)&&p in a)m=(c+"").substr((f+"").length),u||(u=0),_=Xt(h)||(p in Ln.units?Ln.units[p]:m),m!==_&&(f=tr(e,p,c,_)),this._pt=new gn(this._pt,b?M:a,p,f,(v?fs(f,v+u):u)-f,!b&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?ag:Tc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=sg);else if(p in a)gg.call(this,e,p,c,v?v+h:h);else if(p in e)this.add(e,p,c||e[p],v?v+h:h,i,r);else if(p!=="parseTransform"){eh(p,h);continue}b||(p in a?x.push(p,0,a[p]):x.push(p,1,c||e[p])),s.push(p)}}A&&Bd(this)},render:function(e,t){if(t.tween._time||!hh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:Ei,getSetter:function(e,t,n){var i=Ei[t];return i&&i.indexOf(",")<0&&(t=i),t in Di&&t!==ni&&(e._gsap.x||wi(e,"x"))?n&&Wh===n?t==="scale"?hg:cg:(Wh=n||{})&&(t==="scale"?ug:fg):e.style&&!Zc(e.style[t])?og:~t.indexOf("-")?lg:oh(e,t)},core:{_removeProperty:Ca,_getMatrix:fh}};Dn.utils.checkPrefix=Es;Dn.core.getStyleSaver=jd;(function(o,e,t,n){var i=mn(o+","+e+","+t,function(r){Di[r]=1});mn(e,function(r){Ln.units[r]="deg",Kd[r]=1}),Ei[i[13]]=o+","+e,mn(n,function(r){var s=r.split(":");Ei[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ln.units[o]="px"});Dn.registerPlugin(Zd);var dh=Dn.registerPlugin(Zd)||Dn;dh.core.Tween;function Zh(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function wg(o,e,t){return e&&Zh(o.prototype,e),t&&Zh(o,t),o}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt,Pc,En,ji,qi,ms,$d,pr,pa,ep,Ai,Jn,tp,np=function(){return Vt||typeof window<"u"&&(Vt=window.gsap)&&Vt.registerPlugin&&Vt},ip=1,ls=[],Ke=[],ui=[],ma=Date.now,Lc=function(e,t){return t},Sg=function(){var e=pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ke),i.push.apply(i,ui),Ke=n,ui=i,Lc=function(s,a){return t[s](a)}},Zi=function(e,t){return~ui.indexOf(e)&&ui[ui.indexOf(e)+1][t]},ga=function(e){return!!~ep.indexOf(e)},hn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa="scrollLeft",Xa="scrollTop",Rc=function(){return Ai&&Ai.isPressed||Ke.cache++},Jo=function(e,t){var n=function i(r){if(r||r===0){ip&&(En.history.scrollRestoration="manual");var s=Ai&&Ai.isPressed;r=i.v=Math.round(r)||(Ai&&Ai.iOS?1:0),e(r),i.cacheID=Ke.cache,s&&Lc("ss",r)}else(t||Ke.cache!==i.cacheID||Lc("ref"))&&(i.cacheID=Ke.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},on={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jo(function(o){return arguments.length?En.scrollTo(o,Rt.sc()):En.pageXOffset||ji[qa]||qi[qa]||ms[qa]||0})},Rt={s:Xa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:on,sc:Jo(function(o){return arguments.length?En.scrollTo(on.sc(),o):En.pageYOffset||ji[Xa]||qi[Xa]||ms[Xa]||0})},un=function(e){return Vt.utils.toArray(e)[0]||(typeof e=="string"&&Vt.config().nullTargetWarn!==!1?void 0:null)},nr=function(e,t){var n=t.s,i=t.sc;ga(e)&&(e=ji.scrollingElement||qi);var r=Ke.indexOf(e),s=i===Rt.sc?1:2;!~r&&(r=Ke.push(e)-1),Ke[r+s]||e.addEventListener("scroll",Rc);var a=Ke[r+s],l=a||(Ke[r+s]=Jo(Zi(e,n),!0)||(ga(e)?i:Jo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Vt.getProperty(e,"scrollBehavior")==="smooth"),l},Dc=function(e,t,n){var i=e,r=e,s=ma(),a=s,l=t||50,c=Math.max(500,l*3),h=function(g,p){var m=ma();p||m-s>l?(r=i,i=g,a=s,s=m):n?i+=g:i=r+(g-r)/(m-a)*(s-a)},u=function(){r=i=n?0:i,a=s=0},f=function(g){var p=a,m=r,_=ma();return(g||g===0)&&g!==i&&h(g),s===a||_-a>c?0:(i+(n?m:-m))/((n?_:s)-p)*1e3};return{update:h,reset:u,getVelocity:f}},js=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},$h=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},rp=function(){pa=Vt.core.globals().ScrollTrigger,pa&&pa.core&&Sg()},sp=function(e){return Vt=e||np(),Vt&&typeof document<"u"&&document.body&&(En=window,ji=document,qi=ji.documentElement,ms=ji.body,ep=[En,ji,qi,ms],Vt.utils.clamp,tp=Vt.core.context||function(){},pr="onpointerenter"in ms?"pointer":"mouse",$d=Ct.isTouch=En.matchMedia&&En.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in En||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jn=Ct.eventTypes=("ontouchstart"in qi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in qi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ip=0},500),rp(),Pc=1),Pc};on.op=Rt;Ke.cache=0;var Ct=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Pc||sp(Vt),pa||rp();var i=n.tolerance,r=n.dragMinimum,s=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,b=n.onPress,y=n.onRelease,M=n.onRight,E=n.onLeft,A=n.onUp,x=n.onDown,S=n.onChangeX,L=n.onChangeY,O=n.onChange,B=n.onToggleX,I=n.onToggleY,R=n.onHover,z=n.onHoverEnd,V=n.onMove,Q=n.ignoreCheck,U=n.isNormalizer,$=n.onGestureStart,P=n.onGestureEnd,H=n.onWheel,Y=n.onEnable,ne=n.onDisable,ie=n.onClick,ae=n.scrollSpeed,W=n.capture,Ie=n.allowClicks,fe=n.lockAxis,ke=n.onLockAxis;this.target=a=un(a)||qi,this.vars=n,d&&(d=Vt.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,ae=ae||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(En.getComputedStyle(ms).lineHeight)||22);var ue,He,pe,ve,it,ft,tt,q=this,rt=0,De=0,kt=nr(a,on),St=nr(a,Rt),C=kt(),w=St(),Z=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Jn[0]==="pointerdown",re=ga(a),ee=a.ownerDocument||ji,oe=[0,0,0],Se=[0,0,0],de=0,J=function(){return de=ma()},Me=function(le,se){return(q.event=le)&&d&&~d.indexOf(le.target)||se&&Z&&le.pointerType!=="touch"||Q&&Q(le,se)},Le=function(){q._vx.reset(),q._vy.reset(),He.pause(),u&&u(q)},me=function(){var le=q.deltaX=$h(oe),se=q.deltaY=$h(Se),be=Math.abs(le)>=i,Re=Math.abs(se)>=i;O&&(be||Re)&&O(q,le,se,oe,Se),be&&(M&&q.deltaX>0&&M(q),E&&q.deltaX<0&&E(q),S&&S(q),B&&q.deltaX<0!=rt<0&&B(q),rt=q.deltaX,oe[0]=oe[1]=oe[2]=0),Re&&(x&&q.deltaY>0&&x(q),A&&q.deltaY<0&&A(q),L&&L(q),I&&q.deltaY<0!=De<0&&I(q),De=q.deltaY,Se[0]=Se[1]=Se[2]=0),(ve||pe)&&(V&&V(q),pe&&(v(q),pe=!1),ve=!1),ft&&!(ft=!1)&&ke&&ke(q),it&&(H(q),it=!1),ue=0},Ae=function(le,se,be){oe[be]+=le,Se[be]+=se,q._vx.update(le),q._vy.update(se),c?ue||(ue=requestAnimationFrame(me)):me()},we=function(le,se){fe&&!tt&&(q.axis=tt=Math.abs(le)>Math.abs(se)?"x":"y",ft=!0),tt!=="y"&&(oe[2]+=le,q._vx.update(le,!0)),tt!=="x"&&(Se[2]+=se,q._vy.update(se,!0)),c?ue||(ue=requestAnimationFrame(me)):me()},Ve=function(le){if(!Me(le,1)){le=js(le,h);var se=le.clientX,be=le.clientY,Re=se-q.x,Ne=be-q.y,Tt=q.isDragging;q.x=se,q.y=be,(Tt||Math.abs(q.startX-se)>=r||Math.abs(q.startY-be)>=r)&&(v&&(pe=!0),Tt||(q.isDragging=!0),we(Re,Ne),Tt||m&&m(q))}},Ee=q.onPress=function(Be){Me(Be,1)||(q.axis=tt=null,He.pause(),q.isPressed=!0,Be=js(Be),rt=De=0,q.startX=q.x=Be.clientX,q.startY=q.y=Be.clientY,q._vx.reset(),q._vy.reset(),hn(U?a:ee,Jn[1],Ve,h,!0),q.deltaX=q.deltaY=0,b&&b(q))},at=function(le){if(!Me(le,1)){Zt(U?a:ee,Jn[1],Ve,!0);var se=!isNaN(q.y-q.startY),be=q.isDragging&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Re=js(le);!be&&se&&(q._vx.reset(),q._vy.reset(),h&&Ie&&Vt.delayedCall(.08,function(){if(ma()-de>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(ee.createEvent){var Ne=ee.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,En,1,Re.screenX,Re.screenY,Re.clientX,Re.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(Ne)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,u&&!U&&He.restart(!0),_&&be&&_(q),y&&y(q,be)}},k=function(le){return le.touches&&le.touches.length>1&&(q.isGesturing=!0)&&$(le,q.isDragging)},X=function(){return(q.isGesturing=!1)||P(q)},te=function(le){if(!Me(le)){var se=kt(),be=St();Ae((se-C)*ae,(be-w)*ae,1),C=se,w=be,u&&He.restart(!0)}},ce=function(le){if(!Me(le)){le=js(le,h),H&&(it=!0);var se=(le.deltaMode===1?l:le.deltaMode===2?En.innerHeight:1)*g;Ae(le.deltaX*se,le.deltaY*se,0),u&&!U&&He.restart(!0)}},_e=function(le){if(!Me(le)){var se=le.clientX,be=le.clientY,Re=se-q.x,Ne=be-q.y;q.x=se,q.y=be,ve=!0,(Re||Ne)&&we(Re,Ne)}},Ye=function(le){q.event=le,R(q)},ot=function(le){q.event=le,z(q)},xt=function(le){return Me(le)||js(le,h)&&ie(q)};He=q._dc=Vt.delayedCall(f||.25,Le).pause(),q.deltaX=q.deltaY=0,q._vx=Dc(0,50,!0),q._vy=Dc(0,50,!0),q.scrollX=kt,q.scrollY=St,q.isDragging=q.isGesturing=q.isPressed=!1,tp(this),q.enable=function(Be){return q.isEnabled||(hn(re?ee:a,"scroll",Rc),s.indexOf("scroll")>=0&&hn(re?ee:a,"scroll",te,h,W),s.indexOf("wheel")>=0&&hn(a,"wheel",ce,h,W),(s.indexOf("touch")>=0&&$d||s.indexOf("pointer")>=0)&&(hn(a,Jn[0],Ee,h,W),hn(ee,Jn[2],at),hn(ee,Jn[3],at),Ie&&hn(a,"click",J,!1,!0),ie&&hn(a,"click",xt),$&&hn(ee,"gesturestart",k),P&&hn(ee,"gestureend",X),R&&hn(a,pr+"enter",Ye),z&&hn(a,pr+"leave",ot),V&&hn(a,pr+"move",_e)),q.isEnabled=!0,Be&&Be.type&&Ee(Be),Y&&Y(q)),q},q.disable=function(){q.isEnabled&&(ls.filter(function(Be){return Be!==q&&ga(Be.target)}).length||Zt(re?ee:a,"scroll",Rc),q.isPressed&&(q._vx.reset(),q._vy.reset(),Zt(U?a:ee,Jn[1],Ve,!0)),Zt(re?ee:a,"scroll",te,W),Zt(a,"wheel",ce,W),Zt(a,Jn[0],Ee,W),Zt(ee,Jn[2],at),Zt(ee,Jn[3],at),Zt(a,"click",J,!0),Zt(a,"click",xt),Zt(ee,"gesturestart",k),Zt(ee,"gestureend",X),Zt(a,pr+"enter",Ye),Zt(a,pr+"leave",ot),Zt(a,pr+"move",_e),q.isEnabled=q.isPressed=q.isDragging=!1,ne&&ne(q))},q.kill=q.revert=function(){q.disable();var Be=ls.indexOf(q);Be>=0&&ls.splice(Be,1),Ai===q&&(Ai=0)},ls.push(q),U&&ga(a)&&(Ai=q),q.enable(p)},wg(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();Ct.version="3.11.4";Ct.create=function(o){return new Ct(o)};Ct.register=sp;Ct.getAll=function(){return ls.slice()};Ct.getById=function(o){return ls.filter(function(e){return e.vars.id===o})[0]};np()&&Vt.registerPlugin(Ct);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,is,Ze,pt,ei,vt,ap,Zo,$o,cs,Do,Ya,qt,ol,Ic,nn,eu,tu,rs,op,El,lp,Mn,cp,hp,up,Bi,kc,ph,Al,Ka=1,rn=Date.now,Cl=rn(),Wn=0,Qa=0,nu=function(){return ol=1},iu=function(){return ol=0},ai=function(e){return e},aa=function(e){return Math.round(e*1e5)/1e5||0},fp=function(){return typeof window<"u"},dp=function(){return Ce||fp()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Lr=function(e){return!!~ap.indexOf(e)},pp=function(e){return Zi(e,"getBoundingClientRect")||(Lr(e)?function(){return zo.width=Ze.innerWidth,zo.height=Ze.innerHeight,zo}:function(){return Si(e)})},Tg=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=Zi(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Ze["inner"+r]:e["client"+r])||0}},Eg=function(e,t){return!t||~ui.indexOf(e)?pp(e):function(){return zo}},Xi=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return(n="scroll"+i)&&(s=Zi(e,n))?s()-pp(e)()[r]:Lr(e)?(ei[n]||vt[n])-(Ze["inner"+i]||ei["client"+i]||vt["client"+i]):e[n]-e["offset"+i]},Ja=function(e,t){for(var n=0;n<rs.length;n+=3)(!t||~t.indexOf(rs[n+1]))&&e(rs[n],rs[n+1],rs[n+2])},Zn=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},oa=function(e){return typeof e=="number"},Io=function(e){return typeof e=="object"},qs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Pl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Br=Math.abs,mp="left",gp="top",mh="right",gh="bottom",wr="width",Sr="height",_a="Right",ba="Left",xa="Top",va="Bottom",Mt="padding",zn="margin",As="Width",_h="Height",Bt="px",ti=function(e){return Ze.getComputedStyle(e)},Ag=function(e){var t=ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ru=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Si=function(e,t){var n=t&&ti(e)[Ic]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Oc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},_p=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Cg=function(e){return function(t){return Ce.utils.snap(_p(e),t)}},bh=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var a;if(!r)return t(i);if(r>0){for(i-=s,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=s;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var a=t(i);return!r||Math.abs(a-i)<s||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Pg=function(e){return function(t,n){return bh(_p(e))(t,n.direction)}},Za=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Gt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Nt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$a=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},su={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},eo={toggleActions:"play",anticipatePin:0},el={top:0,left:0,center:.5,bottom:1,right:1},ko=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in el?el[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},to=function(e,t,n,i,r,s,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,f=r.indent,d=r.fontWeight,g=pt.createElement("div"),p=Lr(n)||Zi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?vt:n,v=e.indexOf("start")!==-1,b=v?c:h,y="border-color:"+b+";font-size:"+u+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(y+=(i===Rt?mh:gh)+":"+(s+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Oo(g,0,i,v),g},Oo=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+As]=1,r["border"+a+As]=0,r[n.p]=t+"px",Ce.set(e,r)},Xe=[],Fc={},Ra,au=function(){return rn()-Wn>34&&(Ra||(Ra=requestAnimationFrame(ir)))},Gr=function(){(!Mn||!Mn.isPressed||Mn.startX>vt.clientWidth)&&(Ke.cache++,Mn?Ra||(Ra=requestAnimationFrame(ir)):ir(),Wn||Dr("scrollStart"),Wn=rn())},Ll=function(){up=Ze.innerWidth,hp=Ze.innerHeight},la=function(){Ke.cache++,!qt&&!lp&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!cp||up!==Ze.innerWidth||Math.abs(Ze.innerHeight-hp)>Ze.innerHeight*.25)&&Zo.restart(!0)},Rr={},Lg=[],bp=function o(){return Nt(Je,"scrollEnd",o)||br(!0)},Dr=function(e){return Rr[e]&&Rr[e].map(function(t){return t()})||Lg},wn=[],xp=function(e){for(var t=0;t<wn.length;t+=5)(!e||wn[t+4]&&wn[t+4].query===e)&&(wn[t].style.cssText=wn[t+1],wn[t].getBBox&&wn[t].setAttribute("transform",wn[t+2]||""),wn[t+3].uncache=1)},xh=function(e,t){var n;for(nn=0;nn<Xe.length;nn++)n=Xe[nn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&xp(t),t||Dr("revert")},vp=function(e,t){Ke.cache++,(t||!$n)&&Ke.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(Ze.history.scrollRestoration=ph=e)},$n,Tr=0,ou,Rg=function(){if(ou!==Tr){var e=ou=Tr;requestAnimationFrame(function(){return e===Tr&&br(!0)})}},br=function(e,t){if(Wn&&!e){Gt(Je,"scrollEnd",bp);return}$n=Je.isRefreshing=!0,Ke.forEach(function(i){return ln(i)&&i.cacheID++&&(i.rec=i())});var n=Dr("refreshInit");op&&Je.sort(),t||xh(),Ke.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Xe.slice(0).forEach(function(i){return i.refresh()}),Xe.forEach(function(i,r){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.revert(!1,1)}}),Xe.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Xi(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ke.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),vp(ph,1),Zo.pause(),Tr++,ir(2),Xe.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=Je.isRefreshing=!1,Dr("refresh")},lu=0,Fo=1,ya,ir=function(e){if(!$n||e===2){Je.isUpdating=!0,ya&&ya.update(0);var t=Xe.length,n=rn(),i=n-Cl>=50,r=t&&Xe[0].scroll();if(Fo=lu>r?-1:1,lu=r,i&&(Wn&&!ol&&n-Wn>200&&(Wn=0,Dr("scrollEnd")),Do=Cl,Cl=n),Fo<0){for(nn=t;nn-- >0;)Xe[nn]&&Xe[nn].update(0,i);Fo=1}else for(nn=0;nn<t;nn++)Xe[nn]&&Xe[nn].update(0,i);Je.isUpdating=!1}Ra=0},Nc=[mp,gp,gh,mh,zn+va,zn+_a,zn+xa,zn+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],No=Nc.concat([wr,Sr,"boxSizing","max"+As,"max"+_h,"position",zn,Mt,Mt+xa,Mt+_a,Mt+va,Mt+ba]),Dg=function(e,t,n){gs(n);var i=e._gsap;if(i.spacerIsNative)gs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Rl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Nc.length,s=t.style,a=e.style,l;r--;)l=Nc[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),a[gh]=a[mh]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[wr]=Oc(e,on)+Bt,s[Sr]=Oc(e,Rt)+Bt,s[Mt]=a[zn]=a[gp]=a[mp]="0",gs(i),a[wr]=a["max"+As]=n[wr],a[Sr]=a["max"+_h]=n[Sr],a[Mt]=n[Mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ig=/([A-Z])/g,gs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(Ig,"-$1").toLowerCase())}},no=function(e){for(var t=No.length,n=e.style,i=[],r=0;r<t;r++)i.push(No[r],n[No[r]]);return i.t=e,i},kg=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,a;s<r;s+=2)a=e[s],i.push(a,a in t?t[a]:e[s+1]);return i.t=e.t,i},zo={left:0,top:0},cu=function(e,t,n,i,r,s,a,l,c,h,u,f,d){ln(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ko("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,_;if(d&&d.seek(0),oa(e))a&&Oo(a,n,i,!0);else{ln(t)&&(t=t(l));var v=(e||"0").split(" "),b,y,M,E;_=un(t)||vt,b=Si(_)||{},(!b||!b.left&&!b.top)&&ti(_).display==="none"&&(E=_.style.display,_.style.display="block",b=Si(_),E?_.style.display=E:_.style.removeProperty("display")),y=ko(v[0],b[i.d]),M=ko(v[1]||"0",n),e=b[i.p]-c[i.p]-h+y+r-M,a&&Oo(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(s){var A=e+n,x=s._isStart;p="scroll"+i.d2,Oo(s,A,i,x&&A>20||!x&&(u?Math.max(vt[p],ei[p]):s.parentNode[p])<=A+1),u&&(c=Si(a),u&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+Bt))}return d&&_&&(p=Si(_),d.seek(f),m=Si(_),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Og=/(webkit|moz|length|cssText|inset)/i,hu=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,a;if(t===vt){e._stOrig=r.cssText,a=ti(e);for(s in a)!+s&&!Og.test(s)&&a[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=a[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},uu=function(e,t){var n=nr(e,t),i="_scroll"+t.p2,r,s,a=function l(c,h,u,f,d){var g=l.tween,p=h.onComplete,m={};return u=u||n(),d=f&&d||0,f=f||c-u,g&&g.kill(),r=Math.round(u),h[i]=c,h.modifiers=m,m[i]=function(_){return _=Math.round(n()),_!==r&&_!==s&&Math.abs(_-r)>3&&Math.abs(_-s)>3?(g.kill(),l.tween=0):_=u+f*g.ratio+d*g.ratio*g.ratio,s=r,r=Math.round(_)},h.onUpdate=function(){Ke.cache++,ir()},h.onComplete=function(){l.tween=0,p&&p.call(g)},g=l.tween=Ce.to(e,h),g};return e[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Gt(e,"wheel",n.wheelHandler),a},Je=function(){function o(t,n){is||o.register(Ce),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qa){this.update=this.refresh=this.kill=ai;return}n=ru(Zn(n)||oa(n)||n.nodeType?{trigger:n}:n,eo);var r=n,s=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,b=r.once,y=r.snap,M=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,x=r.fastScrollEnd,S=r.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?on:Rt,O=!u&&u!==0,B=un(n.scroller||Ze),I=Ce.core.getCache(B),R=Lr(B),z=("pinType"in n?n.pinType:Zi(B,"pinType")||R&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=O&&n.toggleActions.split(" "),U="markers"in n?n.markers:eo.markers,$=R?0:parseFloat(ti(B)["border"+L.p2+As])||0,P=this,H=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Y=Tg(B,R,L),ne=Eg(B,R),ie=0,ae=0,W=nr(B,L),Ie,fe,ke,ue,He,pe,ve,it,ft,tt,q,rt,De,kt,St,C,w,Z,re,ee,oe,Se,de,J,Me,Le,me,Ae,we,Ve,Ee,at,k,X,te,ce,_e,Ye,ot;if(kc(P),P._dir=L,m*=45,P.scroller=B,P.scroll=A?A.time.bind(A):W,ue=W(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(op=1,n.refreshPriority===-9999&&(ya=P)),I.tweenScroll=I.tweenScroll||{top:uu(B,Rt),left:uu(B,on)},P.tweenTo=Ie=I.tweenScroll[L.p],P.scrubDuration=function(se){at=oa(se)&&se,at?Ee?Ee.duration(se):Ee=Ce.to(i,{ease:"expo",totalProgress:"+=0.001",duration:at,paused:!0,onComplete:function(){return _&&_(P)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(u),we=0,l||(l=i.vars.id)),Xe.push(P),y&&((!Io(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&Ce.set(R?[vt,ei]:B,{scrollBehavior:"auto"}),Ke.forEach(function(se){return ln(se)&&se.target===(R?pt.scrollingElement||ei:B)&&(se.smooth=!1)}),ke=ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?Cg(i):y.snapTo==="labelsDirectional"?Pg(i):y.directional!==!1?function(se,be){return bh(y.snapTo)(se,rn()-ae<500?0:be.direction)}:Ce.utils.snap(y.snapTo),k=y.duration||{min:.1,max:2},k=Io(k)?cs(k.min,k.max):cs(k,k),X=Ce.delayedCall(y.delay||at/2||.1,function(){var se=W(),be=rn()-ae<500,Re=Ie.tween;if((be||Math.abs(P.getVelocity())<10)&&!Re&&!ol&&ie!==se){var Ne=(se-pe)/De,Tt=i&&!O?i.totalProgress():Ne,We=be?0:(Tt-Ve)/(rn()-Do)*1e3||0,T=Ce.utils.clamp(-Ne,1-Ne,Br(We/2)*We/.185),N=Ne+(y.inertia===!1?0:T),K=cs(0,1,ke(N,P)),D=Math.round(pe+K*De),j=y,xe=j.onStart,ge=j.onInterrupt,ye=j.onComplete;if(se<=ve&&se>=pe&&D!==se){if(Re&&!Re._initted&&Re.data<=Br(D-se))return;y.inertia===!1&&(T=K-Ne),Ie(D,{duration:k(Br(Math.max(Br(N-Tt),Br(K-Tt))*.185/We/.05||0)),ease:y.ease||"power3",data:Br(D-se),onInterrupt:function(){return X.restart(!0)&&ge&&ge(P)},onComplete:function(){P.update(),ie=W(),we=Ve=i&&!O?i.totalProgress():P.progress,v&&v(P),ye&&ye(P)}},se,T*De,D-se-T*De),xe&&xe(P,Ie.tween)}}else P.isActive&&ie!==se&&X.restart(!0)}).pause()),l&&(Fc[l]=P),f=P.trigger=un(f||d),ot=f&&f._gsap&&f._gsap.stRevert,ot&&(ot=ot(P)),d=d===!0?f:un(d),Zn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===zn||(g=!g&&d.parentNode&&d.parentNode.style&&ti(d.parentNode).display==="flex"?!1:Mt),P.pin=d,fe=Ce.core.getCache(d),fe.spacer?kt=fe.pinState:(E&&(E=un(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),fe.spacerIsNative=!!E,E&&(fe.spacerState=no(E))),fe.spacer=w=E||pt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),fe.pinState=kt=no(d)),n.force3D!==!1&&Ce.set(d,{force3D:!0}),P.spacer=w=fe.spacer,Ae=ti(d),de=Ae[g+L.os2],re=Ce.getProperty(d),ee=Ce.quickSetter(d,L.a,Bt),Rl(d,w,Ae),C=no(d)),U){rt=Io(U)?ru(U,su):su,tt=to("scroller-start",l,B,L,rt,0),q=to("scroller-end",l,B,L,rt,0,tt),Z=tt["offset"+L.op.d2];var xt=un(Zi(B,"content")||B);it=this.markerStart=to("start",l,xt,L,rt,Z,0,A),ft=this.markerEnd=to("end",l,xt,L,rt,Z,0,A),A&&(Ye=Ce.quickSetter([it,ft],L.a,Bt)),!z&&!(ui.length&&Zi(B,"fixedMarkers")===!0)&&(Ag(R?vt:B),Ce.set([tt,q],{force3D:!0}),Me=Ce.quickSetter(tt,L.a,Bt),me=Ce.quickSetter(q,L.a,Bt))}if(A){var Be=A.vars.onUpdate,le=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),Be&&Be.apply(le||[])})}P.previous=function(){return Xe[Xe.indexOf(P)-1]},P.next=function(){return Xe[Xe.indexOf(P)+1]},P.revert=function(se,be){if(!be)return P.kill(!0);var Re=se!==!1||!P.enabled,Ne=qt;Re!==P.isReverted&&(Re&&(ce=Math.max(W(),P.scroll.rec||0),te=P.progress,_e=i&&i.progress()),it&&[it,ft,tt,q].forEach(function(Tt){return Tt.style.display=Re?"none":"block"}),Re&&(qt=1,P.update(Re)),d&&(!M||!P.isActive)&&(Re?Dg(d,w,kt):Rl(d,w,ti(d),J)),Re||P.update(Re),qt=Ne,P.isReverted=Re)},P.refresh=function(se,be){if(!((qt||!P.enabled)&&!be)){if(d&&se&&Wn){Gt(o,"scrollEnd",bp);return}!$n&&H&&H(P),qt=1,ae=rn(),Ie.tween&&(Ie.tween.kill(),Ie.tween=0),Ee&&Ee.pause(),p&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;for(var Re=Y(),Ne=ne(),Tt=A?A.duration():Xi(B,L),We=0,T=0,N=n.end,K=n.endTrigger||f,D=n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),j=P.pinnedContainer=n.pinnedContainer&&un(n.pinnedContainer),xe=f&&Math.max(0,Xe.indexOf(P))||0,ge=xe,ye,Te,je,Ge,Pe,Ue,gt,bn,si,dt,Fe;ge--;)Ue=Xe[ge],Ue.end||Ue.refresh(0,1)||(qt=1),gt=Ue.pin,gt&&(gt===f||gt===d)&&!Ue.isReverted&&(dt||(dt=[]),dt.unshift(Ue),Ue.revert(!0,!0)),Ue!==Xe[ge]&&(xe--,ge--);for(ln(D)&&(D=D(P)),pe=cu(D,f,Re,L,W(),it,tt,P,Ne,$,z,Tt,A)||(d?-.001:0),ln(N)&&(N=N(P)),Zn(N)&&!N.indexOf("+=")&&(~N.indexOf(" ")?N=(Zn(D)?D.split(" ")[0]:"")+N:(We=ko(N.substr(2),Re),N=Zn(D)?D:pe+We,K=f)),ve=Math.max(pe,cu(N||(K?"100% 0":Tt),K,Re,L,W()+We,ft,q,P,Ne,$,z,Tt,A))||-.001,De=ve-pe||(pe-=.01)&&.001,We=0,ge=xe;ge--;)Ue=Xe[ge],gt=Ue.pin,gt&&Ue.start-Ue._pinPush<=pe&&!A&&Ue.end>0&&(ye=Ue.end-Ue.start,(gt===f&&Ue.start-Ue._pinPush<pe||gt===j)&&!oa(D)&&(We+=ye*(1-Ue.progress)),gt===d&&(T+=ye));if(pe+=We,ve+=We,P._pinPush=T,it&&We&&(ye={},ye[L.a]="+="+We,j&&(ye[L.p]="-="+W()),Ce.set([it,ft],ye)),d)ye=ti(d),Ge=L===Rt,je=W(),oe=parseFloat(re(L.a))+T,!Tt&&ve>1&&(Fe=(R?pt.scrollingElement||ei:B).style,Fe={style:Fe,value:Fe["overflow"+L.a.toUpperCase()]},Fe["overflow"+L.a.toUpperCase()]="scroll"),Rl(d,w,ye),C=no(d),Te=Si(d,!0),bn=z&&nr(B,Ge?on:Rt)(),g&&(J=[g+L.os2,De+T+Bt],J.t=w,ge=g===Mt?Oc(d,L)+De+T:0,ge&&J.push(L.d,ge+Bt),gs(J),j&&Xe.forEach(function(mi){mi.pin===j&&mi.vars.pinSpacing!==!1&&(mi._subPinOffset=!0)}),z&&W(ce)),z&&(Pe={top:Te.top+(Ge?je-pe:bn)+Bt,left:Te.left+(Ge?bn:je-pe)+Bt,boxSizing:"border-box",position:"fixed"},Pe[wr]=Pe["max"+As]=Math.ceil(Te.width)+Bt,Pe[Sr]=Pe["max"+_h]=Math.ceil(Te.height)+Bt,Pe[zn]=Pe[zn+xa]=Pe[zn+_a]=Pe[zn+va]=Pe[zn+ba]="0",Pe[Mt]=ye[Mt],Pe[Mt+xa]=ye[Mt+xa],Pe[Mt+_a]=ye[Mt+_a],Pe[Mt+va]=ye[Mt+va],Pe[Mt+ba]=ye[Mt+ba],St=kg(kt,Pe,M),$n&&W(0)),i?(si=i._initted,El(1),i.render(i.duration(),!0,!0),Se=re(L.a)-oe+De+T,Le=Math.abs(De-Se)>1,z&&Le&&St.splice(St.length-2,2),i.render(0,!0,!0),si||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),El(0)):Se=De,Fe&&(Fe.value?Fe.style["overflow"+L.a.toUpperCase()]=Fe.value:Fe.style.removeProperty("overflow-"+L.a));else if(f&&W()&&!A)for(Te=f.parentNode;Te&&Te!==vt;)Te._pinOffset&&(pe-=Te._pinOffset,ve-=Te._pinOffset),Te=Te.parentNode;dt&&dt.forEach(function(mi){return mi.revert(!1,!0)}),P.start=pe,P.end=ve,ue=He=$n?ce:W(),!A&&!$n&&(ue<ce&&W(ce),P.scroll.rec=0),P.revert(!1,!0),X&&(ie=-1,P.isActive&&W(pe+De*te),X.restart(!0)),qt=0,i&&O&&(i._initted||_e)&&i.progress()!==_e&&i.progress(_e,!0).render(i.time(),!0,!0),(te!==P.progress||A)&&(i&&!O&&i.totalProgress(te,!0),P.progress=(ue-pe)/De===te?0:te),d&&g&&(w._pinOffset=Math.round(P.progress*Se)),h&&!$n&&h(P)}},P.getVelocity=function(){return(W()-He)/(rn()-Do)*1e3||0},P.endAnimation=function(){qs(P.callbackAnimation),i&&(Ee?Ee.progress(1):i.paused()?O||qs(i,P.direction<0,1):qs(i,i.reversed()))},P.labelToScroll=function(se){return i&&i.labels&&(pe||P.refresh()||pe)+i.labels[se]/i.duration()*De||0},P.getTrailing=function(se){var be=Xe.indexOf(P),Re=P.direction>0?Xe.slice(0,be).reverse():Xe.slice(be+1);return(Zn(se)?Re.filter(function(Ne){return Ne.vars.preventOverlaps===se}):Re).filter(function(Ne){return P.direction>0?Ne.end<=pe:Ne.start>=ve})},P.update=function(se,be,Re){if(!(A&&!Re&&!se)){var Ne=$n?ce:P.scroll(),Tt=se?0:(Ne-pe)/De,We=Tt<0?0:Tt>1?1:Tt||0,T=P.progress,N,K,D,j,xe,ge,ye,Te;if(be&&(He=ue,ue=A?W():Ne,y&&(Ve=we,we=i&&!O?i.totalProgress():We)),m&&!We&&d&&!qt&&!Ka&&Wn&&pe<Ne+(Ne-He)/(rn()-Do)*m&&(We=1e-4),We!==T&&P.enabled){if(N=P.isActive=!!We&&We<1,K=!!T&&T<1,ge=N!==K,xe=ge||!!We!=!!T,P.direction=We>T?1:-1,P.progress=We,xe&&!qt&&(D=We&&!T?0:We===1?1:T===1?2:3,O&&(j=!ge&&Q[D+1]!=="none"&&Q[D+1]||Q[D],Te=i&&(j==="complete"||j==="reset"||j in i))),S&&(ge||Te)&&(Te||u||!i)&&(ln(S)?S(P):P.getTrailing(S).forEach(function(Ue){return Ue.endAnimation()})),O||(Ee&&!qt&&!Ka?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo("totalProgress",We,i._tTime/i._tDur):(Ee.vars.totalProgress=We,Ee.invalidate().restart())):i&&i.totalProgress(We,!!qt)),d){if(se&&g&&(w.style[g+L.os2]=de),!z)ee(aa(oe+Se*We));else if(xe){if(ye=!se&&We>T&&ve+1>Ne&&Ne+1>=Xi(B,L),M)if(!se&&(N||ye)){var je=Si(d,!0),Ge=Ne-pe;hu(d,vt,je.top+(L===Rt?Ge:0)+Bt,je.left+(L===Rt?0:Ge)+Bt)}else hu(d,w);gs(N||ye?St:C),Le&&We<1&&N||ee(oe+(We===1&&!ye?Se:0))}}y&&!Ie.tween&&!qt&&!Ka&&X.restart(!0),a&&(ge||b&&We&&(We<1||!Al))&&$o(a.targets).forEach(function(Ue){return Ue.classList[N||b?"add":"remove"](a.className)}),s&&!O&&!se&&s(P),xe&&!qt?(O&&(Te&&(j==="complete"?i.pause().totalProgress(1):j==="reset"?i.restart(!0).pause():j==="restart"?i.restart(!0):i[j]()),s&&s(P)),(ge||!Al)&&(c&&ge&&Pl(P,c),V[D]&&Pl(P,V[D]),b&&(We===1?P.kill(!1,1):V[D]=0),ge||(D=We===1?1:3,V[D]&&Pl(P,V[D]))),x&&!N&&Math.abs(P.getVelocity())>(oa(x)?x:2500)&&(qs(P.callbackAnimation),Ee?Ee.progress(1):qs(i,j==="reverse"?1:!We,1))):O&&s&&!qt&&s(P)}if(me){var Pe=A?Ne/A.duration()*(A._caScrollDist||0):Ne;Me(Pe+(tt._isFlipped?1:0)),me(Pe)}Ye&&Ye(-Ne/A.duration()*(A._caScrollDist||0))}},P.enable=function(se,be){P.enabled||(P.enabled=!0,Gt(B,"resize",la),Gt(R?pt:B,"scroll",Gr),H&&Gt(o,"refreshInit",H),se!==!1&&(P.progress=te=0,ue=He=ie=W()),be!==!1&&P.refresh())},P.getTween=function(se){return se&&Ie?Ie.tween:Ee},P.setPositions=function(se,be){d&&(oe+=se-pe,Se+=be-se-De,g===Mt&&P.adjustPinSpacing(be-se-De)),P.start=pe=se,P.end=ve=be,De=be-se,P.update()},P.adjustPinSpacing=function(se){if(J){var be=J.indexOf(L.d)+1;J[be]=parseFloat(J[be])+se+Bt,J[1]=parseFloat(J[1])+se+Bt,gs(J)}},P.disable=function(se,be){if(P.enabled&&(se!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,be||Ee&&Ee.pause(),ce=0,fe&&(fe.uncache=1),H&&Nt(o,"refreshInit",H),X&&(X.pause(),Ie.tween&&Ie.tween.kill()&&(Ie.tween=0)),!R)){for(var Re=Xe.length;Re--;)if(Xe[Re].scroller===B&&Xe[Re]!==P)return;Nt(B,"resize",la),Nt(B,"scroll",Gr)}},P.kill=function(se,be){P.disable(se,be),Ee&&!be&&Ee.kill(),l&&delete Fc[l];var Re=Xe.indexOf(P);Re>=0&&Xe.splice(Re,1),Re===nn&&Fo>0&&nn--,Re=0,Xe.forEach(function(Ne){return Ne.scroller===P.scroller&&(Re=1)}),Re||$n||(P.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),be||i.kill()),it&&[it,ft,tt,q].forEach(function(Ne){return Ne.parentNode&&Ne.parentNode.removeChild(Ne)}),ya===P&&(ya=0),d&&(fe&&(fe.uncache=1),Re=0,Xe.forEach(function(Ne){return Ne.pin===d&&Re++}),Re||(fe.spacer=0)),n.onKill&&n.onKill(P)},P.enable(!1,!1),ot&&ot(P),!i||!i.add||De?P.refresh():Ce.delayedCall(.01,function(){return pe||ve||P.refresh()})&&(De=.01)&&(pe=ve=0),d&&Rg()},o.register=function(n){return is||(Ce=n||dp(),fp()&&window.document&&o.enable(),is=Qa),is},o.defaults=function(n){if(n)for(var i in n)eo[i]=n[i];return eo},o.disable=function(n,i){Qa=0,Xe.forEach(function(s){return s[i?"kill":"disable"](n)}),Nt(Ze,"wheel",Gr),Nt(pt,"scroll",Gr),clearInterval(Ya),Nt(pt,"touchcancel",ai),Nt(vt,"touchstart",ai),Za(Nt,pt,"pointerdown,touchstart,mousedown",nu),Za(Nt,pt,"pointerup,touchend,mouseup",iu),Zo.kill(),Ja(Nt);for(var r=0;r<Ke.length;r+=3)$a(Nt,Ke[r],Ke[r+1]),$a(Nt,Ke[r],Ke[r+2])},o.enable=function(){if(Ze=window,pt=document,ei=pt.documentElement,vt=pt.body,Ce&&($o=Ce.utils.toArray,cs=Ce.utils.clamp,kc=Ce.core.context||ai,El=Ce.core.suppressOverwrites||ai,ph=Ze.history.scrollRestoration||"auto",Ce.core.globals("ScrollTrigger",o),vt)){Qa=1,Ct.register(Ce),o.isTouch=Ct.isTouch,Bi=Ct.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gt(Ze,"wheel",Gr),ap=[Ze,pt,ei,vt],Ce.matchMedia&&(o.matchMedia=function(l){var c=Ce.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Ce.addEventListener("matchMediaInit",function(){return xh()}),Ce.addEventListener("matchMediaRevert",function(){return xp()}),Ce.addEventListener("matchMedia",function(){br(0,1),Dr("matchMedia")}),Ce.matchMedia("(orientation: portrait)",function(){return Ll(),Ll})),Ll(),Gt(pt,"scroll",Gr);var n=vt.style,i=n.borderTopStyle,r=Ce.core.Animation.prototype,s,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Si(vt),Rt.m=Math.round(s.top+Rt.sc())||0,on.m=Math.round(s.left+on.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ya=setInterval(au,250),Ce.delayedCall(.5,function(){return Ka=0}),Gt(pt,"touchcancel",ai),Gt(vt,"touchstart",ai),Za(Gt,pt,"pointerdown,touchstart,mousedown",nu),Za(Gt,pt,"pointerup,touchend,mouseup",iu),Ic=Ce.utils.checkPrefix("transform"),No.push(Ic),is=rn(),Zo=Ce.delayedCall(.2,br).pause(),rs=[pt,"visibilitychange",function(){var l=Ze.innerWidth,c=Ze.innerHeight;pt.hidden?(eu=l,tu=c):(eu!==l||tu!==c)&&la()},pt,"DOMContentLoaded",br,Ze,"load",br,Ze,"resize",la],Ja(Gt),Xe.forEach(function(l){return l.enable(0,1)}),a=0;a<Ke.length;a+=3)$a(Nt,Ke[a],Ke[a+1]),$a(Nt,Ke[a],Ke[a+2])}},o.config=function(n){"limitCallbacks"in n&&(Al=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ya)||(Ya=i)&&setInterval(au,i),"ignoreMobileResize"in n&&(cp=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ja(Nt)||Ja(Gt,n.autoRefreshEvents||"none"),lp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=un(n),s=Ke.indexOf(r),a=Lr(r);~s&&Ke.splice(s,a?6:2),i&&(a?ui.unshift(Ze,i,vt,i,ei,i):ui.unshift(r,i))},o.clearMatchMedia=function(n){Xe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var s=(Zn(n)?un(n):n).getBoundingClientRect(),a=s[r?wr:Sr]*i||0;return r?s.right-a>0&&s.left+a<Ze.innerWidth:s.bottom-a>0&&s.top+a<Ze.innerHeight},o.positionInViewport=function(n,i,r){Zn(n)&&(n=un(n));var s=n.getBoundingClientRect(),a=s[r?wr:Sr],l=i==null?a/2:i in el?el[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(s.left+l)/Ze.innerWidth:(s.top+l)/Ze.innerHeight},o.killAll=function(n){if(Xe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Rr.killAll||[];Rr={},i.forEach(function(r){return r()})}},o}();Je.version="3.11.4";Je.saveStyles=function(o){return o?$o(o).forEach(function(e){if(e&&e.style){var t=wn.indexOf(e);t>=0&&wn.splice(t,5),wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),kc())}}):wn};Je.revert=function(o,e){return xh(!o,e)};Je.create=function(o,e){return new Je(o,e)};Je.refresh=function(o){return o?la():(is||Je.register())&&br(!0)};Je.update=function(o){return++Ke.cache&&ir(o===!0?2:0)};Je.clearScrollMemory=vp;Je.maxScroll=function(o,e){return Xi(o,e?on:Rt)};Je.getScrollFunc=function(o,e){return nr(un(o),e?on:Rt)};Je.getById=function(o){return Fc[o]};Je.getAll=function(){return Xe.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Wn};Je.snapDirectional=bh;Je.addEventListener=function(o,e){var t=Rr[o]||(Rr[o]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(o,e){var t=Rr[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,h){var u=[],f=[],d=Ce.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(g){u.length||d.restart(!0),u.push(g.trigger),f.push(g),r<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&ln(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return ln(r)&&(r=r(),Gt(Je,"refresh",function(){return r=e.batchMax()})),$o(o).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var fu=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Dl=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ct.isTouch?" pinch-zoom":""):"none",e===ei&&o(vt,t)},io={auto:1,scroll:1},Fg=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||Ce.core.getCache(r),a=rn(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;r&&r!==vt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(io[(l=ti(r)).overflowY]||io[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!Lr(r)&&(io[(l=ti(r)).overflowY]||io[l.overflowX]),s._isScrollT=a}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},yp=function(e,t,n,i){return Ct.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Fg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Gt(pt,Ct.eventTypes[0],pu,!1,!0)},onDisable:function(){return Nt(pt,Ct.eventTypes[0],pu,!0)}})},Ng=/(input|label|select|textarea)/i,du,pu=function(e){var t=Ng.test(e.target.tagName);(t||du)&&(e._gsapAllow=!0,du=t)},zg=function(e){Io(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s,a,l=un(e.target)||ei,c=Ce.core.globals().ScrollSmoother,h=c&&c.get(),u=Bi&&(e.content&&un(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=nr(l,Rt),d=nr(l,on),g=1,p=(Ct.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,m=0,_=ln(i)?function(){return i(s)}:function(){return i||2.8},v,b,y=yp(l,e.type,!0,r),M=function(){return b=!1},E=ai,A=ai,x=function(){a=Xi(l,Rt),A=cs(Bi?1:0,a),n&&(E=cs(0,Xi(l,on))),v=Tr},S=function(){u._gsap.y=aa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(b){requestAnimationFrame(M);var Q=aa(s.deltaY/2),U=A(f.v-Q);if(u&&U!==f.v+f.offset){f.offset=U-f.v;var $=aa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+$+", 0, 1)",u._gsap.y=$+"px",f.cacheID=Ke.cache,ir()}return!0}f.offset&&S(),b=!0},O,B,I,R,z=function(){x(),O.isActive()&&O.vars.scrollY>a&&(f()>a?O.progress(1)&&f(a):O.resetTo("scrollY",a))};return u&&Ce.set(u,{y:"+=0"}),e.ignoreCheck=function(V){return Bi&&V.type==="touchmove"&&L()||g>1.05&&V.type!=="touchstart"||s.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){var V=g;g=aa((Ze.visualViewport&&Ze.visualViewport.scale||1)/p),O.pause(),V!==g&&Dl(l,g>1.01?!0:n?!1:"x"),B=d(),I=f(),x(),v=Tr},e.onRelease=e.onGestureStart=function(V,Q){if(f.offset&&S(),!Q)R.restart(!0);else{Ke.cache++;var U=_(),$,P;n&&($=d(),P=$+U*.05*-V.velocityX/.227,U*=fu(d,$,P,Xi(l,on)),O.vars.scrollX=E(P)),$=f(),P=$+U*.05*-V.velocityY/.227,U*=fu(f,$,P,Xi(l,Rt)),O.vars.scrollY=A(P),O.invalidate().duration(U).play(.01),(Bi&&O.vars.scrollY>=a||$>=a-1)&&Ce.to({},{onUpdate:z,duration:U})}},e.onWheel=function(){O._ts&&O.pause(),rn()-m>1e3&&(v=0,m=rn())},e.onChange=function(V,Q,U,$,P){if(Tr!==v&&x(),Q&&n&&d(E($[2]===Q?B+(V.startX-V.x):d()+Q-$[1])),U){f.offset&&S();var H=P[2]===U,Y=H?I+V.startY-V.y:f()+U-P[1],ne=A(Y);H&&Y!==ne&&(I+=ne-Y),f(ne)}(U||Q)&&ir()},e.onEnable=function(){Dl(l,n?!1:"x"),Je.addEventListener("refresh",z),Gt(Ze,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=d.smooth=!1),y.enable()},e.onDisable=function(){Dl(l,!0),Nt(Ze,"resize",z),Je.removeEventListener("refresh",z),y.kill()},e.lockAxis=e.lockAxis!==!1,s=new Ct(e),s.iOS=Bi,Bi&&!f()&&f(1),Bi&&Ce.ticker.add(ai),R=s._dc,O=Ce.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:R.vars.onComplete}),s};Je.sort=function(o){return Xe.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(o){return new Ct(o)};Je.normalizeScroll=function(o){if(typeof o>"u")return Mn;if(o===!0&&Mn)return Mn.enable();if(o===!1)return Mn&&Mn.kill();var e=o instanceof Ct?o:zg(o);return Mn&&Mn.target===e.target&&Mn.kill(),Lr(e.target)&&(Mn=e),e};Je.core={_getVelocityProp:Dc,_inputObserver:yp,_scrollers:Ke,_proxies:ui,bridge:{ss:function(){Wn||Dr("scrollStart"),Wn=rn()},ref:function(){return qt}}};dp()&&Ce.registerPlugin(Je);class Ug{lerp(e,t,n){return e*(1-n)+t*n}clamp(e,t,n){return t>e?t:n<e?n:e}hoop(e,t,n){const i=n-t+1;let r=(e-t)%i;return 0>r&&(r=i+r),r+t}delay(e){return new Promise(t=>{setTimeout(()=>{t()},e)})}getParameter(e){e=e.replace(/[\[\]]/g,"\\$&");let t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=t.exec(window.location.href);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}}class Bg{constructor(e){this.body=e,this.bodyClassList=this.body.classList,this.ua=window.navigator.userAgent.toLowerCase(),this.data={browser:"",os:"",device:"",iphone:""},this.checkBrowser(),this.checkOs(),this.checkDevice(),this.checkiPhone()}checkBrowser(){this.ua.indexOf("edge")!==-1||this.ua.indexOf("edga")!==-1||this.ua.indexOf("edgios")!==-1?this.data.browser="edge":this.ua.indexOf("opera")!==-1||this.ua.indexOf("opr")!==-1?this.data.browser="opera":this.ua.indexOf("samsungbrowser")!==-1?this.data.browser="samsung":this.ua.indexOf("ucbrowser")!==-1?this.data.browser="uc":this.ua.indexOf("chrome")!==-1||this.ua.indexOf("crios")!==-1?this.data.browser="chrome":this.ua.indexOf("firefox")!==-1||this.ua.indexOf("fxios")!==-1?this.data.browser="firefox":this.ua.indexOf("safari")!==-1?this.data.browser="safari":this.ua.indexOf("msie")!==-1||this.ua.indexOf("trident")!==-1?(this.data.browser="ie",alert("このブラウザは現在サポートされておりません。")):this.data.browser="",this.data.browser!=""&&this.bodyClassList.add(this.data.browser)}checkOs(){this.ua.indexOf("windows nt")!==-1?this.data.os="windows":this.ua.indexOf("android")!==-1?this.data.os="android":this.ua.indexOf("iphone")!==-1||this.ua.indexOf("ipad")!==-1?this.data.os="ios":this.ua.indexOf("mac os x")!==-1?this.data.os="macos":this.data.os="",this.data.os!=""&&this.bodyClassList.add(this.data.os)}checkDevice(){this.ua.indexOf("iphone")!==-1||this.ua.indexOf("android")!==-1&&this.ua.indexOf("Mobile")>0?this.data.device="mobile":this.ua.indexOf("ipad")!==-1||this.ua.indexOf("android")!==-1?this.data.device="tablet":this.ua.indexOf("ipad")>-1||this.ua.indexOf("macintosh")>-1&&"ontouchend"in document?this.data.device="tablet":this.data.device="pc",this.data.device!=""&&this.bodyClassList.add(this.data.device)}checkiPhone(){this.ua.indexOf("iphone")!==-1?this.data.iphone="iphone":this.data.iphone="",this.data.iphone!=""&&this.bodyClassList.add(this.data.iphone)}}function mu(o,e){const t=e*.01,n=o>e?o:e,i=o>e?e:o;document.documentElement.style.setProperty("--vh",t+"px"),document.documentElement.style.setProperty("--longer",n+"px"),document.documentElement.style.setProperty("--shorter",i+"px")}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="148",Gg=0,gu=1,Hg=2,Mp=1,wp=2,ca=3,rr=0,jn=1,ll=2,ro=3,$i=0,_s=1,zc=2,_u=3,bu=4,Vg=5,ss=100,Wg=101,jg=102,xu=103,vu=104,qg=200,Xg=201,Yg=202,Kg=203,Sp=204,Tp=205,Qg=206,Jg=207,Zg=208,$g=209,e_=210,t_=0,n_=1,i_=2,Uc=3,r_=4,s_=5,a_=6,o_=7,Ep=0,l_=1,c_=2,Li=0,h_=1,u_=2,Ap=3,f_=4,d_=5,Cp=300,Cs=301,Ps=302,Bc=303,Gc=304,cl=306,Ls=1e3,Un=1001,tl=1002,zt=1003,Hc=1004,Uo=1005,fn=1006,Pp=1007,Ir=1008,kr=1009,p_=1010,m_=1011,Lp=1012,g_=1013,xr=1014,Yi=1015,Da=1016,__=1017,b_=1018,bs=1020,x_=1021,v_=1022,Bn=1023,y_=1024,M_=1025,Er=1026,Rs=1027,w_=1028,S_=1029,T_=1030,E_=1031,A_=1033,Il=33776,kl=33777,Ol=33778,Fl=33779,yu=35840,Mu=35841,wu=35842,Su=35843,C_=36196,Tu=37492,Eu=37496,Au=37808,Cu=37809,Pu=37810,Lu=37811,Ru=37812,Du=37813,Iu=37814,ku=37815,Ou=37816,Fu=37817,Nu=37818,zu=37819,Uu=37820,Bu=37821,Gu=36492,Ia=2300,Ds=2301,Nl=2302,Hu=2400,Vu=2401,Wu=2402,P_=2500,L_=1,Rp=2,Or=3e3,nt=3001,R_=3200,D_=3201,Dp=0,I_=1,oi="srgb",ka="srgb-linear",zl=7680,k_=519,Vc=35044,ju="300 es",Wc=1035;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const Ma=Math.PI/180,Oa=180/Math.PI;function ii(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[o&255]+jt[o>>8&255]+jt[o>>16&255]+jt[o>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function sn(o,e,t){return Math.max(e,Math.min(t,o))}function yh(o,e){return(o%e+e)%e}function O_(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function F_(o,e,t){return o!==e?(t-o)/(e-o):0}function wa(o,e,t){return(1-t)*o+t*e}function N_(o,e,t,n){return wa(o,e,1-Math.exp(-t*n))}function z_(o,e=1){return e-Math.abs(yh(o,e*2)-e)}function U_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function B_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function G_(o,e){return o+Math.floor(Math.random()*(e-o+1))}function H_(o,e){return o+Math.random()*(e-o)}function V_(o){return o*(.5-Math.random())}function W_(o){o!==void 0&&(qu=o);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j_(o){return o*Ma}function q_(o){return o*Oa}function jc(o){return(o&o-1)===0&&o!==0}function Ip(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function nl(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function X_(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),h=s((e+n)/2),u=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*f,a*c);break;case"YZY":o.set(l*f,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*f,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*d,a*c);break;case"YXY":o.set(l*d,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*d,a*h,a*c);break;default:}}function Ci(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ct(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Bo=Object.freeze({__proto__:null,DEG2RAD:Ma,RAD2DEG:Oa,generateUUID:ii,clamp:sn,euclideanModulo:yh,mapLinear:O_,inverseLerp:F_,lerp:wa,damp:N_,pingpong:z_,smoothstep:U_,smootherstep:B_,randInt:G_,randFloat:H_,randFloatSpread:V_,seededRandom:W_,degToRad:j_,radToDeg:q_,isPowerOfTwo:jc,ceilPowerOfTwo:Ip,floorPowerOfTwo:nl,setQuaternionFromProperEuler:X_,normalize:ct,denormalize:Ci});class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(){An.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],v=i[1],b=i[4],y=i[7],M=i[2],E=i[5],A=i[8];return r[0]=s*p+a*v+l*M,r[3]=s*m+a*b+l*E,r[6]=s*_+a*y+l*A,r[1]=c*p+h*v+u*M,r[4]=c*m+h*b+u*E,r[7]=c*_+h*y+u*A,r[2]=f*p+d*v+g*M,r[5]=f*m+d*b+g*E,r[8]=f*_+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-n*r*h+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*s-a*c,f=a*l-h*r,d=c*r-s*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*s)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(s*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new An;function kp(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ar(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Go(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Bl={[oi]:{[ka]:Ar},[ka]:{[oi]:Go}},$t={legacyMode:!0,get workingColorSpace(){return ka},set workingColorSpace(o){},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Bl[e]&&Bl[e][t]!==void 0){const n=Bl[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={r:0,g:0,b:0},Xn={h:0,s:0,l:0},so={h:0,s:0,l:0};function Gl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function ao(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}let Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$t.workingColorSpace){if(e=yh(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Gl(s,r,e+1/3),this.g=Gl(s,r,e),this.b=Gl(s,r,e-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(e,t=oi){function n(r){r!==void 0&&parseFloat(r)<1}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,$t.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,$t.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,$t.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,$t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=oi){const n=Op[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return $t.fromWorkingColorSpace(ao(this,Pt),e),sn(Pt.r*255,0,255)<<16^sn(Pt.g*255,0,255)<<8^sn(Pt.b*255,0,255)<<0}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.fromWorkingColorSpace(ao(this,Pt),t);const n=Pt.r,i=Pt.g,r=Pt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$t.workingColorSpace){return $t.fromWorkingColorSpace(ao(this,Pt),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=oi){return $t.fromWorkingColorSpace(ao(this,Pt),e),e!==oi?`color(${e} ${Pt.r} ${Pt.g} ${Pt.b})`:`rgb(${Pt.r*255|0},${Pt.g*255|0},${Pt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(so);const n=wa(Xn.h,so.h,t),i=wa(Xn.s,so.s,t),r=wa(Xn.l,so.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Oe.NAMES=Op;let Hr;class Fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=Fa("canvas")),Hr.width=e.width,Hr.height=e.height;const n=Hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Ar(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ar(t[n]/255)*255):t[n]=Ar(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}class Np{constructor(e=null){this.isSource=!0,this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Hl(i[s].image)):r.push(Hl(i[s]))}else r=Hl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hl(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fp.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:{}}let Y_=0;class Wt extends Fs{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Un,i=Un,r=fn,s=Ir,a=Bn,l=kr,c=Wt.DEFAULT_ANISOTROPY,h=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ii(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new An,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Cp;Wt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,M=(_+1)/2,E=(h+f)/4,A=(u+p)/4,x=(g+m)/4;return b>y&&b>M?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=A/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=x/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-p)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ri extends Fs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Np(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zp extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[s+0],d=r[s+1],g=r[s+2],p=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==g){let m=1-a;const _=l*f+c*d+h*g+u*p,v=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const M=Math.sqrt(b),E=Math.atan2(M,_*v);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const y=a*v;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+p*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[s],f=r[s+1],d=r[s+2],g=r[s+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*a+i*c-r*l,this._y=i*h+s*l+r*a-n*c,this._z=r*h+s*c+n*l-i*a,this._w=s*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,h=l*n+a*t-r*i,u=l*i+r*n-s*t,f=-r*t-s*n-a*i;return this.x=c*l+f*-r+h*-a-u*-s,this.y=h*l+f*-s+u*-r-c*-a,this.z=u*l+f*-a+c*-s-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new F,Xu=new Ii;class Ns{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>r&&(r=h),u>s&&(s=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>r&&(r=h),u>s&&(s=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)hr.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(hr)}else n.boundingBox===null&&n.computeBoundingBox(),Wl.copy(n.boundingBox),Wl.applyMatrix4(e.matrixWorld),this.union(Wl);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hr),hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),oo.subVectors(this.max,Xs),Vr.subVectors(e.a,Xs),Wr.subVectors(e.b,Xs),jr.subVectors(e.c,Xs),ki.subVectors(Wr,Vr),Oi.subVectors(jr,Wr),ur.subVectors(Vr,jr);let t=[0,-ki.z,ki.y,0,-Oi.z,Oi.y,0,-ur.z,ur.y,ki.z,0,-ki.x,Oi.z,0,-Oi.x,ur.z,0,-ur.x,-ki.y,ki.x,0,-Oi.y,Oi.x,0,-ur.y,ur.x,0];return!jl(t,Vr,Wr,jr,oo)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Vr,Wr,jr,oo))?!1:(lo.crossVectors(ki,Oi),t=[lo.x,lo.y,lo.z],jl(t,Vr,Wr,jr,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return hr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(hr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new F,new F,new F,new F,new F,new F,new F,new F],hr=new F,Wl=new Ns,Vr=new F,Wr=new F,jr=new F,ki=new F,Oi=new F,ur=new F,Xs=new F,oo=new F,lo=new F,fr=new F;function jl(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){fr.fromArray(o,r);const a=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Q_=new Ns,Ys=new F,ql=new F;class zs{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Q_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(ql)),this.expandByPoint(Ys.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new F,Xl=new F,co=new F,Fi=new F,Yl=new F,ho=new F,Kl=new F;class Mh{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.direction).multiplyScalar(t).add(this.origin),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xl.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Xl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(co),a=Fi.dot(this.direction),l=-Fi.dot(co),c=Fi.lengthSq(),h=Math.abs(1-s*s);let u,f,d,g;if(h>0)if(u=s*l-a,f=s*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const p=1/h;u*=p,f*=p,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=r,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-s*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(s*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=s>0?-r:r,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(co).multiplyScalar(f).add(Xl),d}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,r){Yl.subVectors(t,e),ho.subVectors(n,e),Kl.crossVectors(Yl,ho);let s=this.direction.dot(Kl),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(ho.crossVectors(Fi,ho));if(l<0)return null;const c=a*this.direction.dot(Yl.cross(Fi));if(c<0||l+c>s)return null;const h=-a*Fi.dot(Kl);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,h,u,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),s=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=s*h,d=s*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f+p*a,t[4]=g*a-d,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f-p*a,t[4]=-s*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=s*h,t[9]=p-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,d=s*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-f*u,t[8]=g*u+d,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-p*u}else if(e.order==="XZY"){const f=s*l,d=s*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+p,t[5]=s*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,Z_)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ni.crossVectors(n,vn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ni.crossVectors(n,vn)),Ni.normalize(),uo.crossVectors(vn,Ni),i[0]=Ni.x,i[4]=uo.x,i[8]=vn.x,i[1]=Ni.y,i[5]=uo.y,i[9]=vn.y,i[2]=Ni.z,i[6]=uo.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],v=n[3],b=n[7],y=n[11],M=n[15],E=i[0],A=i[4],x=i[8],S=i[12],L=i[1],O=i[5],B=i[9],I=i[13],R=i[2],z=i[6],V=i[10],Q=i[14],U=i[3],$=i[7],P=i[11],H=i[15];return r[0]=s*E+a*L+l*R+c*U,r[4]=s*A+a*O+l*z+c*$,r[8]=s*x+a*B+l*V+c*P,r[12]=s*S+a*I+l*Q+c*H,r[1]=h*E+u*L+f*R+d*U,r[5]=h*A+u*O+f*z+d*$,r[9]=h*x+u*B+f*V+d*P,r[13]=h*S+u*I+f*Q+d*H,r[2]=g*E+p*L+m*R+_*U,r[6]=g*A+p*O+m*z+_*$,r[10]=g*x+p*B+m*V+_*P,r[14]=g*S+p*I+m*Q+_*H,r[3]=v*E+b*L+y*R+M*U,r[7]=v*A+b*O+y*z+M*$,r[11]=v*x+b*B+y*V+M*P,r[15]=v*S+b*I+y*Q+M*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+p*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*s*u+n*s*d+r*a*h-n*c*h)+_*(-i*a*h-t*l*u+t*a*f+i*s*u-n*s*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],v=u*m*c-p*f*c+p*l*d-a*m*d-u*l*_+a*f*_,b=g*f*c-h*m*c-g*l*d+s*m*d+h*l*_-s*f*_,y=h*p*c-g*u*c+g*a*d-s*p*d-h*a*_+s*u*_,M=g*u*l-h*p*l-g*a*f+s*p*f+h*a*m-s*u*m,E=t*v+n*b+i*y+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(p*f*r-u*m*r-p*i*d+n*m*d+u*i*_-n*f*_)*A,e[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*_+n*l*_)*A,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=b*A,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*_+t*f*_)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*A,e[7]=(s*f*r-h*l*r+h*i*c-t*f*c-s*i*d+t*l*d)*A,e[8]=y*A,e[9]=(g*u*r-h*p*r-g*n*d+t*p*d+h*n*_-t*u*_)*A,e[10]=(s*p*r-g*a*r+g*n*c-t*p*c-s*n*_+t*a*_)*A,e[11]=(h*a*r-s*u*r-h*n*c+t*u*c+s*n*d-t*a*d)*A,e[12]=M*A,e[13]=(h*p*i-g*u*i+g*n*f-t*p*f-h*n*m+t*u*m)*A,e[14]=(g*a*i-s*p*i-g*n*l+t*p*l+s*n*m-t*a*m)*A,e[15]=(s*u*i-h*a*i+h*n*l-t*u*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,h=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*s,0,c*l-i*a,h*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,h=s+s,u=a+a,f=r*c,d=r*h,g=r*u,p=s*h,m=s*u,_=a*u,v=l*c,b=l*h,y=l*u,M=n.x,E=n.y,A=n.z;return i[0]=(1-(p+_))*M,i[1]=(d+y)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+b)*A,i[9]=(m-v)*A,i[10]=(1-(f+p))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qr.set(i[0],i[1],i[2]).length();const s=qr.set(i[4],i[5],i[6]).length(),a=qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/r,h=1/s,u=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(s-r),u=(t+e)*l,f=(n+i)*c,d=(s+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new F,Yn=new Qe,J_=new F(0,0,0),Z_=new F(1,1,1),Ni=new F,uo=new F,vn=new F,Yu=new Qe,Ku=new Ii;class Us{constructor(e=0,t=0,n=0,i=Us.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){}}Us.DefaultOrder="XYZ";Us.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $_=0;const Qu=new F,Xr=new Ii,bi=new Qe,fo=new F,Ks=new F,eb=new F,tb=new Ii,Ju=new F(1,0,0),Zu=new F(0,1,0),$u=new F(0,0,1),nb={type:"added"},ef={type:"removed"};class mt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new F,t=new Us,n=new Ii,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new An}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DefaultMatrixWorldAutoUpdate,this.layers=new Up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ks,fo,this.up):bi.lookAt(fo,Ks,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(bi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nb)),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ef)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DefaultUp=new F(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.DefaultMatrixWorldAutoUpdate=!0;const Kn=new F,xi=new F,Ql=new F,vi=new F,Yr=new F,Kr=new F,tf=new F,Jl=new F,Zl=new F,$l=new F;class Ti{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kn.subVectors(i,t),xi.subVectors(n,t),Ql.subVectors(e,t);const s=Kn.dot(Kn),a=Kn.dot(xi),l=Kn.dot(Ql),c=xi.dot(xi),h=xi.dot(Ql),u=s*c-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,d=(c*l-a*h)*f,g=(s*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi),vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,vi),l.set(0,0),l.addScaledVector(r,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(a,vi.z),l}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),xi.subVectors(e,t),Kn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Kn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ti.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Yr.subVectors(i,n),Kr.subVectors(r,n),Jl.subVectors(e,n);const l=Yr.dot(Jl),c=Kr.dot(Jl);if(l<=0&&c<=0)return t.copy(n);Zl.subVectors(e,i);const h=Yr.dot(Zl),u=Kr.dot(Zl);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(Yr,s);$l.subVectors(e,r);const d=Yr.dot($l),g=Kr.dot($l);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Kr,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return tf.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(tf,a);const _=1/(m+p+f);return s=p*_,a=f*_,t.copy(n).addScaledVector(Yr,s).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ib=0;class fi extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=_s,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sp,this.blendDst=Tp,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==rr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ki extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new F,po=new ze;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){}copyVector2sArray(){}copyVector3sArray(){}copyVector4sArray(){}}class Bp extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gp extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rb=0;const In=new Qe,ec=new mt,Qr=new F,yn=new Ns,Qs=new Ns,Ft=new F;class _n extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?Gp:Bp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new An().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(yn.min,Qs.min),yn.expandByPoint(Ft),Ft.addVectors(yn.max,Qs.max),yn.expandByPoint(Ft)):(yn.expandByPoint(Qs.min),yn.expandByPoint(Qs.max))}yn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),Ft.add(Qr)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<a;L++)c[L]=new F,h[L]=new F;const u=new F,f=new F,d=new F,g=new ze,p=new ze,m=new ze,_=new F,v=new F;function b(L,O,B){u.fromArray(i,L*3),f.fromArray(i,O*3),d.fromArray(i,B*3),g.fromArray(s,L*2),p.fromArray(s,O*2),m.fromArray(s,B*2),f.sub(u),d.sub(u),p.sub(g),m.sub(g);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(I),v.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(I),c[L].add(_),c[O].add(_),c[B].add(_),h[L].add(v),h[O].add(v),h[B].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,O=y.length;L<O;++L){const B=y[L],I=B.start,R=B.count;for(let z=I,V=I+R;z<V;z+=3)b(n[z+0],n[z+1],n[z+2])}const M=new F,E=new F,A=new F,x=new F;function S(L){A.fromArray(r,L*3),x.copy(A);const O=c[L];M.copy(O),M.sub(A.multiplyScalar(A.dot(O))).normalize(),E.crossVectors(x,O);const I=E.dot(h[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=I}for(let L=0,O=y.length;L<O;++L){const B=y[L],I=B.start,R=B.count;for(let z=I,V=I+R;z<V;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,s=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*h;for(let _=0;_<h;_++)f[g++]=c[d++]}return new cn(f,h,u)}if(this.index===null)return this;const t=new _n,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new Qe,Jr=new Mh,tc=new zs,Js=new F,Zs=new F,$s=new F,nc=new F,mo=new F,go=new ze,_o=new ze,bo=new ze,ic=new F,xo=new F;let Cn=class extends mt{constructor(e=new _n,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(nc.fromBufferAttribute(u,e),s?mo.addScaledVector(nc,h):mo.addScaledVector(nc.sub(t),h))}t.add(mo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(r),e.ray.intersectsSphere(tc)===!1)||(nf.copy(r).invert(),Jr.copy(e.ray).applyMatrix4(nf),n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){const p=u[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,y=v;b<y;b+=3){const M=a.getX(b),E=a.getX(b+1),A=a.getX(b+2);s=vo(this,m,e,Jr,c,h,M,E,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=vo(this,i,e,Jr,c,h,_,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){const p=u[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,y=v;b<y;b+=3){const M=b,E=b+1,A=b+2;s=vo(this,m,e,Jr,c,h,M,E,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,v=p+1,b=p+2;s=vo(this,i,e,Jr,c,h,_,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function sb(o,e,t,n,i,r,s,a){let l;if(e.side===jn?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side===rr,a),l===null)return null;xo.copy(a),xo.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:o}}function vo(o,e,t,n,i,r,s,a,l){o.getVertexPosition(s,Js),o.getVertexPosition(a,Zs),o.getVertexPosition(l,$s);const c=sb(o,e,t,n,Js,Zs,$s,ic);if(c){i&&(go.fromBufferAttribute(i,s),_o.fromBufferAttribute(i,a),bo.fromBufferAttribute(i,l),c.uv=Ti.getUV(ic,Js,Zs,$s,go,_o,bo,new ze)),r&&(go.fromBufferAttribute(r,s),_o.fromBufferAttribute(r,a),bo.fromBufferAttribute(r,l),c.uv2=Ti.getUV(ic,Js,Zs,$s,go,_o,bo,new ze));const h={a:s,b:a,c:l,normal:new F,materialIndex:0};Ti.getNormal(Js,Zs,$s,h.normal),c.face=h}return c}class Ba extends _n{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(p,m,_,v,b,y,M,E,A,x,S){const L=y/A,O=M/x,B=y/2,I=M/2,R=E/2,z=A+1,V=x+1;let Q=0,U=0;const $=new F;for(let P=0;P<V;P++){const H=P*O-I;for(let Y=0;Y<z;Y++){const ne=Y*L-B;$[p]=ne*v,$[m]=H*b,$[_]=R,c.push($.x,$.y,$.z),$[p]=0,$[m]=0,$[_]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(Y/A),u.push(1-P/x),Q+=1}}for(let P=0;P<x;P++)for(let H=0;H<A;H++){const Y=f+H+z*P,ne=f+H+z*(P+1),ie=f+(H+1)+z*(P+1),ae=f+(H+1)+z*P;l.push(Y,ne,ae),l.push(ne,ie,ae),U+=6}a.addGroup(d,U,S),d+=U,f+=Q}}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(o){const e={};for(let t=0;t<o.length;t++){const n=Is(o[t]);for(const i in n)e[i]=n[i]}return e}function ab(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Hp(o){return o.getRenderTarget()===null&&o.outputEncoding===nt?oi:ka}const il={clone:Is,merge:tn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=ab(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vp extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends Vp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,$r=1;class cb extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new an(Zr,$r,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new an(Zr,$r,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new an(Zr,$r,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new an(Zr,$r,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new an(Zr,$r,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new an(Zr,$r,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Li,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Wp extends Wt{constructor(e,t,n,i,r,s,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,i,r,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hb extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ba(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:$i});r.uniforms.tEquirect.value=t;const s=new Cn(i,r),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=fn),new cb(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const rc=new F,ub=new F,fb=new An;class mr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rc.subVectors(n,t).cross(ub.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fb.getNormalMatrix(e),i=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new zs,yo=new F;class wh{constructor(e=new mr,t=new mr,n=new mr,i=new mr,r=new mr,s=new mr){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],v=n[14],b=n[15];return t[0].setComponents(a-i,u-l,p-f,b-m).normalize(),t[1].setComponents(a+i,u+l,p+f,b+m).normalize(),t[2].setComponents(a+r,u+c,p+d,b+_).normalize(),t[3].setComponents(a-r,u-c,p-d,b-_).normalize(),t[4].setComponents(a-s,u-h,p-g,b-v).normalize(),t[5].setComponents(a+s,u+h,p+g,b+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yo.x=i.normal.x>0?e.max.x:e.min.x,yo.y=i.normal.y>0?e.max.y:e.min.y,yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jp(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function db(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=o.createBuffer();o.bindBuffer(h,d),o.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,d=h.updateRange;o.bindBuffer(u,c),d.count===-1?o.bufferSubData(u,0,f):(t?o.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):o.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:s,remove:a,update:l}}class Sh extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const v=_*f-s;for(let b=0;b<c;b++){const y=b*u-r;g.push(y,-v,0),p.push(0,0,1),m.push(b/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const b=v+c*_,y=v+c*(_+1),M=v+1+c*(_+1),E=v+1+c*_;d.push(b,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2))}static fromJSON(e){return new Sh(e.width,e.height,e.widthSegments,e.heightSegments)}}var pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb="vec3 transformed = vec3( position );",yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,wb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,kb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,c0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,T0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,C0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ax=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ox=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,lx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,cx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:pb,alphamap_pars_fragment:mb,alphatest_fragment:gb,alphatest_pars_fragment:_b,aomap_fragment:bb,aomap_pars_fragment:xb,begin_vertex:vb,beginnormal_vertex:yb,bsdfs:Mb,iridescence_fragment:wb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Cb,color_fragment:Pb,color_pars_fragment:Lb,color_pars_vertex:Rb,color_vertex:Db,common:Ib,cube_uv_reflection_fragment:kb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Fb,displacementmap_vertex:Nb,emissivemap_fragment:zb,emissivemap_pars_fragment:Ub,encodings_fragment:Bb,encodings_pars_fragment:Gb,envmap_fragment:Hb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:Wb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:i0,envmap_vertex:qb,fog_vertex:Xb,fog_pars_vertex:Yb,fog_fragment:Kb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Jb,lightmap_fragment:Zb,lightmap_pars_fragment:$b,lights_lambert_fragment:e0,lights_lambert_pars_fragment:t0,lights_pars_begin:n0,lights_toon_fragment:r0,lights_toon_pars_fragment:s0,lights_phong_fragment:a0,lights_phong_pars_fragment:o0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:h0,lights_fragment_maps:u0,lights_fragment_end:f0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:_0,map_pars_fragment:b0,map_particle_fragment:x0,map_particle_pars_fragment:v0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:M0,morphcolor_vertex:w0,morphnormal_vertex:S0,morphtarget_pars_vertex:T0,morphtarget_vertex:E0,normal_fragment_begin:A0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:L0,normal_vertex:R0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:F0,output_fragment:N0,packing:z0,premultiplied_alpha_fragment:U0,project_vertex:B0,dithering_fragment:G0,dithering_pars_fragment:H0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:q0,shadowmap_vertex:X0,shadowmask_pars_fragment:Y0,skinbase_vertex:K0,skinning_pars_vertex:Q0,skinning_vertex:J0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:ex,tonemapping_fragment:tx,tonemapping_pars_fragment:nx,transmission_fragment:ix,transmission_pars_fragment:rx,uv_pars_fragment:sx,uv_pars_vertex:ax,uv_vertex:ox,uv2_pars_fragment:lx,uv2_pars_vertex:cx,uv2_vertex:hx,worldpos_vertex:ux,background_vert:fx,background_frag:dx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:_x,depth_vert:bx,depth_frag:xx,distanceRGBA_vert:vx,distanceRGBA_frag:yx,equirect_vert:Mx,equirect_frag:wx,linedashed_vert:Sx,linedashed_frag:Tx,meshbasic_vert:Ex,meshbasic_frag:Ax,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Rx,meshnormal_vert:Dx,meshnormal_frag:Ix,meshphong_vert:kx,meshphong_frag:Ox,meshphysical_vert:Fx,meshphysical_frag:Nx,meshtoon_vert:zx,meshtoon_frag:Ux,points_vert:Bx,points_frag:Gx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Wx,sprite_frag:jx},he={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new An},uv2Transform:{value:new An},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}}},li={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Oe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Oe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new An},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};li.physical={uniforms:tn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Mo={r:0,b:0,g:0};function qx(o,e,t,n,i,r,s){const a=new Oe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,_){let v=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b));const y=o.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(b=null),b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),b&&(b.isCubeTexture||b.mapping===cl)?(h===void 0&&(h=new Cn(new Ba(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Is(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=b.encoding!==nt,(u!==b||f!==b.version||d!==o.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Cn(new Sh(2,2),new Pn({name:"BackgroundMaterial",uniforms:Is(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=b.encoding!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Mo,Hp(o)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function Xx(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(R,z,V,Q,U){let $=!1;if(s){const P=p(Q,V,z);c!==P&&(c=P,d(c.object)),$=_(R,Q,V,U),$&&v(R,Q,V,U)}else{const P=z.wireframe===!0;(c.geometry!==Q.id||c.program!==V.id||c.wireframe!==P)&&(c.geometry=Q.id,c.program=V.id,c.wireframe=P,$=!0)}U!==null&&t.update(U,34963),($||h)&&(h=!1,x(R,z,V,Q),U!==null&&o.bindBuffer(34963,t.get(U).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function d(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,z,V){const Q=V.wireframe===!0;let U=a[R.id];U===void 0&&(U={},a[R.id]=U);let $=U[z.id];$===void 0&&($={},U[z.id]=$);let P=$[Q];return P===void 0&&(P=m(f()),$[Q]=P),P}function m(R){const z=[],V=[],Q=[];for(let U=0;U<i;U++)z[U]=0,V[U]=0,Q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:Q,object:R,attributes:{},index:null}}function _(R,z,V,Q){const U=c.attributes,$=z.attributes;let P=0;const H=V.getAttributes();for(const Y in H)if(H[Y].location>=0){const ie=U[Y];let ae=$[Y];if(ae===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;P++}return c.attributesNum!==P||c.index!==Q}function v(R,z,V,Q){const U={},$=z.attributes;let P=0;const H=V.getAttributes();for(const Y in H)if(H[Y].location>=0){let ie=$[Y];ie===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),U[Y]=ae,P++}c.attributes=U,c.attributesNum=P,c.index=Q}function b(){const R=c.newAttributes;for(let z=0,V=R.length;z<V;z++)R[z]=0}function y(R){M(R,0)}function M(R,z){const V=c.newAttributes,Q=c.enabledAttributes,U=c.attributeDivisors;V[R]=1,Q[R]===0&&(o.enableVertexAttribArray(R),Q[R]=1),U[R]!==z&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,z),U[R]=z)}function E(){const R=c.newAttributes,z=c.enabledAttributes;for(let V=0,Q=z.length;V<Q;V++)z[V]!==R[V]&&(o.disableVertexAttribArray(V),z[V]=0)}function A(R,z,V,Q,U,$){n.isWebGL2===!0&&(V===5124||V===5125)?o.vertexAttribIPointer(R,z,V,U,$):o.vertexAttribPointer(R,z,V,Q,U,$)}function x(R,z,V,Q){if(n.isWebGL2===!1&&(R.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const U=Q.attributes,$=V.getAttributes(),P=z.defaultAttributeValues;for(const H in $){const Y=$[H];if(Y.location>=0){let ne=U[H];if(ne===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const ie=ne.normalized,ae=ne.itemSize,W=t.get(ne);if(W===void 0)continue;const Ie=W.buffer,fe=W.type,ke=W.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ue=ne.data,He=ue.stride,pe=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)M(Y.location+ve,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<Y.locationSize;ve++)y(Y.location+ve);o.bindBuffer(34962,Ie);for(let ve=0;ve<Y.locationSize;ve++)A(Y.location+ve,ae/Y.locationSize,fe,ie,He*ke,(pe+ae/Y.locationSize*ve)*ke)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)M(Y.location+ue,ne.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<Y.locationSize;ue++)y(Y.location+ue);o.bindBuffer(34962,Ie);for(let ue=0;ue<Y.locationSize;ue++)A(Y.location+ue,ae/Y.locationSize,fe,ie,ae*ke,ae/Y.locationSize*ue*ke)}}else if(P!==void 0){const ie=P[H];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(Y.location,ie);break;case 3:o.vertexAttrib3fv(Y.location,ie);break;case 4:o.vertexAttrib4fv(Y.location,ie);break;default:o.vertexAttrib1fv(Y.location,ie)}}}}E()}function S(){B();for(const R in a){const z=a[R];for(const V in z){const Q=z[V];for(const U in Q)g(Q[U].object),delete Q[U];delete z[V]}delete a[R]}}function L(R){if(a[R.id]===void 0)return;const z=a[R.id];for(const V in z){const Q=z[V];for(const U in Q)g(Q[U].object),delete Q[U];delete z[V]}delete a[R.id]}function O(R){for(const z in a){const V=a[z];if(V[R.id]===void 0)continue;const Q=V[R.id];for(const U in Q)g(Q[U].object),delete Q[U];delete V[R.id]}}function B(){I(),h=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:y,disableUnusedAttributes:E}}function Yx(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,h){o.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,d;if(i)f=o,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null)return;f[d](r,c,h,u),t.update(h,r,u)}this.setMode=s,this.render=a,this.renderInstances=l}function Kx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(a=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),f=o.getParameter(35660),d=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),m=o.getParameter(36347),_=o.getParameter(36348),v=o.getParameter(36349),b=f>0,y=s||e.has("OES_texture_float"),M=b&&y,E=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function Qx(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new mr,a=new An,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){const g=u.length!==0||f||n!==0||i;return i=f,t=h(u,d,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,d){const g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,_=o.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,b=v*4;let y=_.clippingState||null;l.value=y,y=h(g,f,b,d);for(let M=0;M!==b;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const p=u!==null?u.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let b=0,y=d;b!==p;++b,y+=4)s.copy(u[b]).applyMatrix4(v,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Jx(o){let e=new WeakMap;function t(s,a){return a===Bc?s.mapping=Cs:a===Gc&&(s.mapping=Ps),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Bc||a===Gc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new hb(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hl extends Vp{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,rf=[.125,.215,.35,.446,.526,.582],us=20,sc=new hl,sf=new Oe;let ac=null;const gr=(1+Math.sqrt(5))/2,ts=1/gr,af=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,gr,ts),new F(0,gr,-ts),new F(ts,0,gr),new F(-ts,0,gr),new F(gr,ts,0),new F(-gr,ts,0)];class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ac=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Da,format:Bn,encoding:Or,depthBuffer:!1},i=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zx(r)),this._blurMaterial=$x(r,e,t)}return i}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,i){const a=new an(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sf),h.toneMapping=Li,h.autoClear=!1;const d=new Ki({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),g=new Cn(new Ba,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(sf),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const b=this._cubeSize;wo(i,v*b,_>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Cn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=af[(i-1)%af.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial,h=3,u=new Cn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*us-1),p=r/g,m=isFinite(r)?1+Math.floor(h*p):us;m>us;const _=[];let v=0;for(let A=0;A<us;++A){const x=A/p,S=Math.exp(-x*x/2);_.push(S),A===0?v+=S:A<m&&(v+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[i],M=3*y*(i>b-hs?i-b+hs:0),E=4*(this._cubeSize-y);wo(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(u,sc)}}function Zx(o){const e=[],t=[],n=[];let i=o;const r=o-hs+1+rf.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-hs?l=rf[s-o+hs-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,p=3,m=2,_=1,v=new Float32Array(p*g*d),b=new Float32Array(m*g*d),y=new Float32Array(_*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,x=E>2?0:-1,S=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(S,p*g*E),b.set(f,m*g*E);const L=[E,E,E,E,E,E];y.set(L,_*g*E)}const M=new _n;M.setAttribute("position",new cn(v,p)),M.setAttribute("uv",new cn(b,m)),M.setAttribute("faceIndex",new cn(y,_)),e.push(M),i>hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lf(o,e,t){const n=new ri(o,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function $x(o,e,t){const n=new Float32Array(us),i=new F(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function cf(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function hf(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bc||l===Gc,h=l===Cs||l===Ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new of(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new of(o));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function tv(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i}}}function nv(o,e,t,n){const i={},r=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const d=u.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let p=0;if(d!==null){const v=d.array;p=d.version;for(let b=0,y=v.length;b<y;b+=3){const M=v[b+0],E=v[b+1],A=v[b+2];f.push(M,E,E,A,A,M)}}else{const v=g.array;p=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const M=b+0,E=b+1,A=b+2;f.push(M,E,E,A,A,M)}}const m=new(kp(f)?Gp:Bp)(f,1);m.version=p;const _=r.get(u);_&&e.remove(_),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function iv(o,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,d){o.drawElements(r,d,a,f*l),t.update(d,r,1)}function u(f,d,g){if(g===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null)return;p[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function rv(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sv(o,e){return o[0]-e[0]}function av(o,e){return Math.abs(e[1])-Math.abs(o[1])}function ov(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let V=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var g=V;_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let L=0;y===!0&&(L=1),M===!0&&(L=2),E===!0&&(L=3);let O=h.attributes.position.count*L,B=1;O>e.maxTextureSize&&(B=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*B*4*m),R=new zp(I,O,B,m);R.type=Yi,R.needsUpdate=!0;const z=L*4;for(let Q=0;Q<m;Q++){const U=A[Q],$=x[Q],P=S[Q],H=O*B*4*Q;for(let Y=0;Y<U.count;Y++){const ne=Y*z;y===!0&&(s.fromBufferAttribute(U,Y),I[H+ne+0]=s.x,I[H+ne+1]=s.y,I[H+ne+2]=s.z,I[H+ne+3]=0),M===!0&&(s.fromBufferAttribute($,Y),I[H+ne+4]=s.x,I[H+ne+5]=s.y,I[H+ne+6]=s.z,I[H+ne+7]=0),E===!0&&(s.fromBufferAttribute(P,Y),I[H+ne+8]=s.x,I[H+ne+9]=s.y,I[H+ne+10]=s.z,I[H+ne+11]=P.itemSize===4?s.w:1)}}_={count:m,texture:R,size:new ze(O,B)},r.set(h,_),h.addEventListener("dispose",V)}let v=0;for(let y=0;y<d.length;y++)v+=d[y];const b=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",d),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];n[h.id]=m}for(let M=0;M<p;M++){const E=m[M];E[0]=M,E[1]=d[M]}m.sort(av);for(let M=0;M<8;M++)M<p&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(sv);const _=h.morphAttributes.position,v=h.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const E=a[M],A=E[0],x=E[1];A!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+M)!==_[A]&&h.setAttribute("morphTarget"+M,_[A]),v&&h.getAttribute("morphNormal"+M)!==v[A]&&h.setAttribute("morphNormal"+M,v[A]),i[M]=x,b+=x):(_&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),v&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const y=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function lv(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const qp=new Wt,Xp=new zp,Yp=new K_,Kp=new Wp,uf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Bs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=uf[i];if(r===void 0&&(r=new Float32Array(i),uf[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Dt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function It(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ul(o,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function cv(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function hv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;o.uniform2fv(this.addr,e),It(t,e)}}function uv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;o.uniform3fv(this.addr,e),It(t,e)}}function fv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;o.uniform4fv(this.addr,e),It(t,e)}}function dv(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;mf.set(n),o.uniformMatrix2fv(this.addr,!1,mf),It(t,n)}}function pv(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;pf.set(n),o.uniformMatrix3fv(this.addr,!1,pf),It(t,n)}}function mv(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;df.set(n),o.uniformMatrix4fv(this.addr,!1,df),It(t,n)}}function gv(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function _v(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;o.uniform2iv(this.addr,e),It(t,e)}}function bv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;o.uniform3iv(this.addr,e),It(t,e)}}function xv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;o.uniform4iv(this.addr,e),It(t,e)}}function vv(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function yv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;o.uniform2uiv(this.addr,e),It(t,e)}}function Mv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;o.uniform3uiv(this.addr,e),It(t,e)}}function wv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;o.uniform4uiv(this.addr,e),It(t,e)}}function Sv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||qp,i)}function Tv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yp,i)}function Ev(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kp,i)}function Av(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function Cv(o){switch(o){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return _v;case 35668:case 35672:return bv;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}function Pv(o,e){o.uniform1fv(this.addr,e)}function Lv(o,e){const t=Bs(e,this.size,2);o.uniform2fv(this.addr,t)}function Rv(o,e){const t=Bs(e,this.size,3);o.uniform3fv(this.addr,t)}function Dv(o,e){const t=Bs(e,this.size,4);o.uniform4fv(this.addr,t)}function Iv(o,e){const t=Bs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function kv(o,e){const t=Bs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Ov(o,e){const t=Bs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Fv(o,e){o.uniform1iv(this.addr,e)}function Nv(o,e){o.uniform2iv(this.addr,e)}function zv(o,e){o.uniform3iv(this.addr,e)}function Uv(o,e){o.uniform4iv(this.addr,e)}function Bv(o,e){o.uniform1uiv(this.addr,e)}function Gv(o,e){o.uniform2uiv(this.addr,e)}function Hv(o,e){o.uniform3uiv(this.addr,e)}function Vv(o,e){o.uniform4uiv(this.addr,e)}function Wv(o,e,t){const n=this.cache,i=e.length,r=ul(t,i);Dt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||qp,r[s])}function jv(o,e,t){const n=this.cache,i=e.length,r=ul(t,i);Dt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Yp,r[s])}function qv(o,e,t){const n=this.cache,i=e.length,r=ul(t,i);Dt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Kp,r[s])}function Xv(o,e,t){const n=this.cache,i=e.length,r=ul(t,i);Dt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Xp,r[s])}function Yv(o){switch(o){case 5126:return Pv;case 35664:return Lv;case 35665:return Rv;case 35666:return Dv;case 35674:return Iv;case 35675:return kv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return Nv;case 35668:case 35672:return zv;case 35669:case 35673:return Uv;case 5125:return Bv;case 36294:return Gv;case 36295:return Hv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Xv}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Cv(t.type)}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yv(t.type)}}class Jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function gf(o,e){o.seq.push(e),o.map[e.id]=e}function Zv(o,e,t){const n=o.name,i=n.length;for(oc.lastIndex=0;;){const r=oc.exec(n),s=oc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){gf(t,c===void 0?new Kv(a,o,e):new Qv(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Jv(a),gf(t,u)),t=u}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Zv(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function _f(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let $v=0;function ey(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function ty(o){switch(o){case Or:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return["Linear","( value )"]}}function bf(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ey(o.getShaderSource(e),s)}else return i}function ny(o,e){const t=ty(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function iy(o,e){let t;switch(e){case h_:t="Linear";break;case u_:t="Reinhard";break;case Ap:t="OptimizedCineon";break;case f_:t="ACESFilmic";break;case d_:t="Custom";break;default:t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ry(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ha).join(`
`)}function sy(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ay(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function ha(o){return o!==""}function xf(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vf(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(o){return o.replace(oy,ly)}function ly(o,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qc(t)}const cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(o){return o.replace(cy,hy)}function hy(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mf(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uy(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===wp?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function fy(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dy(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function py(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ep:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function my(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gy(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=uy(t),c=fy(t),h=dy(t),u=py(t),f=my(t),d=t.isWebGL2?"":ry(t),g=sy(r),p=i.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ha).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(ha).join(`
`),_.length>0&&(_+=`
`)):(m=[Mf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),_=[d,Mf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?qe.tonemapping_pars_fragment:"",t.toneMapping!==Li?iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,ny("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),s=qc(s),s=xf(s,t),s=vf(s,t),a=qc(a),a=xf(a,t),a=vf(a,t),s=yf(s),a=yf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=v+m+s,y=v+_+a,M=_f(i,35633,b),E=_f(i,35632,y);if(i.attachShader(p,M),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(E).trim();let B=!0,I=!0;if(i.getProgramParameter(p,35714)===!1){B=!1;const R=bf(i,M,"vertex"),z=bf(i,E,"fragment")}else S!==""||(L===""||O==="")&&(I=!1);I&&(this.diagnostics={runnable:B,programLog:S,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Ho(i,p)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=ay(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let _y=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xy(e),t.set(e,n)),n}}class xy{constructor(e){this.id=_y++,this.code=e,this.usedTimes=0}}function vy(o,e,t,n,i,r,s){const a=new Up,l=new by,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,S,L,O,B){const I=O.fog,R=B.geometry,z=x.isMeshStandardMaterial?O.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),Q=V&&V.mapping===cl?V.image.height:null,U=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),x.precision);const $=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,P=$!==void 0?$.length:0;let H=0;R.morphAttributes.position!==void 0&&(H=1),R.morphAttributes.normal!==void 0&&(H=2),R.morphAttributes.color!==void 0&&(H=3);let Y,ne,ie,ae;if(U){const He=li[U];Y=He.vertexShader,ne=He.fragmentShader}else Y=x.vertexShader,ne=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);const W=o.getRenderTarget(),Ie=x.alphaTest>0,fe=x.clearcoat>0,ke=x.iridescence>0;return{isWebGL2:h,shaderID:U,shaderName:x.type,vertexShader:Y,fragmentShader:ne,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Or,map:!!x.map,matcap:!!x.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Q,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===I_,tangentSpaceNormalMap:x.normalMapType===Dp,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===nt,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:ke,iridescenceMap:ke&&!!x.iridescenceMap,iridescenceThicknessMap:ke&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===_s,alphaMap:!!x.alphaMap,alphaTest:Ie,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Li,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ll,flipSided:x.side===jn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(S,x),v(S,x),S.push(o.outputEncoding)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputEncoding),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.combine),x.push(S.vertexUvs),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),x.push(a.mask)}function b(x){const S=g[x.type];let L;if(S){const O=li[S];L=il.clone(O.uniforms)}else L=x.uniforms;return L}function y(x,S){let L;for(let O=0,B=c.length;O<B;O++){const I=c[O];if(I.cacheKey===S){L=I,++L.usedTimes;break}}return L===void 0&&(L=new gy(o,S,x,r),c.push(L)),L}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function yy(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function My(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function wf(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sf(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(u,f,d,g,p,m){let _=o[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},o[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=m),e++,_}function a(u,f,d,g,p,m){const _=s(u,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(u,f,d,g,p,m){const _=s(u,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,f){t.length>1&&t.sort(u||My),n.length>1&&n.sort(f||wf),i.length>1&&i.sort(f||wf)}function h(){for(let u=e,f=o.length;u<f;u++){const d=o[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function wy(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new Sf,o.set(n,[s])):i>=r.length?(s=new Sf,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function Sy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return o[e.id]=t,t}}}function Ty(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Ey=0;function Ay(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Cy(o,e){const t=new Sy,n=Ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new F);const r=new F,s=new Qe,a=new Qe;function l(h,u){let f=0,d=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,m=0,_=0,v=0,b=0,y=0,M=0,E=0,A=0,x=0;h.sort(Ay);const S=u!==!0?Math.PI:1;for(let O=0,B=h.length;O<B;O++){const I=h[O],R=I.color,z=I.intensity,V=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*z*S,d+=R.g*z*S,g+=R.b*z*S;else if(I.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],z);else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const $=I.shadow,P=n.get(I);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=U,p++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(R).multiplyScalar(z*S),U.distance=V,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[_]=U;const $=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,$.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=$.matrix,I.castShadow){const P=n.get(I);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=Q,E++}_++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(R).multiplyScalar(z),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=U,v++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*S),U.distance=I.distance,U.decay=I.decay,I.castShadow){const $=I.shadow,P=n.get(I);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,i.pointShadow[m]=P,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=U,m++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(z*S),U.groundColor.copy(I.groundColor).multiplyScalar(z*S),i.hemi[b]=U,b++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0&&(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==v||L.hemiLength!==b||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==E||L.numSpotMaps!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=m,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-x,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=x,L.directionalLength=p,L.pointLength=m,L.spotLength=_,L.rectAreaLength=v,L.hemiLength=b,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=E,L.numSpotMaps=A,i.version=Ey++)}function c(h,u){let f=0,d=0,g=0,p=0,m=0;const _=u.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){const y=h[v];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),s.copy(y.matrixWorld),s.premultiply(_),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Tf(o,e){const t=new Cy(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Py(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Tf(o,e),t.set(r,[l])):s>=a.length?(l=new Tf(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ly extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ry extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ky(o,e,t){let n=new wh;const i=new ze,r=new ze,s=new ut,a=new Ly({depthPacking:D_}),l=new Ry,c={},h=t.maxTextureSize,u={0:jn,1:rr,2:ll},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Dy,fragmentShader:Iy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Cn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp,this.render=function(y,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=o.getRenderTarget(),x=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),L=o.state;L.setBlending($i),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let O=0,B=y.length;O<B;O++){const I=y[O],R=I.shadow;if(R===void 0||R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const z=R.getFrameExtents();if(i.multiply(z),r.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,R.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,R.mapSize.y=r.y)),R.map===null){const Q=this.type!==ca?{minFilter:zt,magFilter:zt}:{};R.map=new ri(i.x,i.y,Q),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const V=R.getViewportCount();for(let Q=0;Q<V;Q++){const U=R.getViewport(Q);s.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),L.viewport(s),R.updateMatrices(I,Q),n=R.getFrustum(),b(M,E,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===ca&&_(R,E),R.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(A,x,S)};function _(y,M){const E=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ri(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,E,f,p,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,E,d,p,null)}function v(y,M,E,A,x,S){let L=null;const O=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(O!==void 0)L=O;else if(L=E.isPointLight===!0?l:a,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const B=L.uuid,I=M.uuid;let R=c[B];R===void 0&&(R={},c[B]=R);let z=R[I];z===void 0&&(z=L.clone(),R[I]=z),L=z}return L.visible=M.visible,L.wireframe=M.wireframe,S===ca?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:u[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=A,L.farDistance=x),L}function b(y,M,E,A,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===ca)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const O=e.update(y),B=y.material;if(Array.isArray(B)){const I=O.groups;for(let R=0,z=I.length;R<z;R++){const V=I[R],Q=B[V.materialIndex];if(Q&&Q.visible){const U=v(y,Q,A,E.near,E.far,x);o.renderBufferDirect(E,null,O,U,y,V)}}}else if(B.visible){const I=v(y,B,A,E.near,E.far,x);o.renderBufferDirect(E,null,O,I,y,null)}}const L=y.children;for(let O=0,B=L.length;O<B;O++)b(L[O],M,E,A,x)}}function Oy(o,e,t){const n=t.isWebGL2;function i(){let k=!1;const X=new ut;let te=null;const ce=new ut(0,0,0,0);return{setMask:function(_e){te!==_e&&!k&&(o.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){k=_e},setClear:function(_e,Ye,ot,xt,Be){Be===!0&&(_e*=xt,Ye*=xt,ot*=xt),X.set(_e,Ye,ot,xt),ce.equals(X)===!1&&(o.clearColor(_e,Ye,ot,xt),ce.copy(X))},reset:function(){k=!1,te=null,ce.set(-1,0,0,0)}}}function r(){let k=!1,X=null,te=null,ce=null;return{setTest:function(_e){_e?Ie(2929):fe(2929)},setMask:function(_e){X!==_e&&!k&&(o.depthMask(_e),X=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case t_:o.depthFunc(512);break;case n_:o.depthFunc(519);break;case i_:o.depthFunc(513);break;case Uc:o.depthFunc(515);break;case r_:o.depthFunc(514);break;case s_:o.depthFunc(518);break;case a_:o.depthFunc(516);break;case o_:o.depthFunc(517);break;default:o.depthFunc(515)}te=_e}},setLocked:function(_e){k=_e},setClear:function(_e){ce!==_e&&(o.clearDepth(_e),ce=_e)},reset:function(){k=!1,X=null,te=null,ce=null}}}function s(){let k=!1,X=null,te=null,ce=null,_e=null,Ye=null,ot=null,xt=null,Be=null;return{setTest:function(le){k||(le?Ie(2960):fe(2960))},setMask:function(le){X!==le&&!k&&(o.stencilMask(le),X=le)},setFunc:function(le,se,be){(te!==le||ce!==se||_e!==be)&&(o.stencilFunc(le,se,be),te=le,ce=se,_e=be)},setOp:function(le,se,be){(Ye!==le||ot!==se||xt!==be)&&(o.stencilOp(le,se,be),Ye=le,ot=se,xt=be)},setLocked:function(le){k=le},setClear:function(le){Be!==le&&(o.clearStencil(le),Be=le)},reset:function(){k=!1,X=null,te=null,ce=null,_e=null,Ye=null,ot=null,xt=null,Be=null}}}const a=new i,l=new r,c=new s,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,v=null,b=null,y=null,M=null,E=null,A=null,x=null,S=!1,L=null,O=null,B=null,I=null,R=null;const z=o.getParameter(35661);let V=!1,Q=0;const U=o.getParameter(7938);U.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=Q>=1):U.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=Q>=2);let $=null,P={};const H=o.getParameter(3088),Y=o.getParameter(2978),ne=new ut().fromArray(H),ie=new ut().fromArray(Y);function ae(k,X,te){const ce=new Uint8Array(4),_e=o.createTexture();o.bindTexture(k,_e),o.texParameteri(k,10241,9728),o.texParameteri(k,10240,9728);for(let Ye=0;Ye<te;Ye++)o.texImage2D(X+Ye,0,6408,1,1,0,6408,5121,ce);return _e}const W={};W[3553]=ae(3553,3553,1),W[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(2929),l.setFunc(Uc),tt(!1),q(gu),Ie(2884),it($i);function Ie(k){f[k]!==!0&&(o.enable(k),f[k]=!0)}function fe(k){f[k]!==!1&&(o.disable(k),f[k]=!1)}function ke(k,X){return d[k]!==X?(o.bindFramebuffer(k,X),d[k]=X,n&&(k===36009&&(d[36160]=X),k===36160&&(d[36009]=X)),!0):!1}function ue(k,X){let te=p,ce=!1;if(k)if(te=g.get(X),te===void 0&&(te=[],g.set(X,te)),k.isWebGLMultipleRenderTargets){const _e=k.texture;if(te.length!==_e.length||te[0]!==36064){for(let Ye=0,ot=_e.length;Ye<ot;Ye++)te[Ye]=36064+Ye;te.length=_e.length,ce=!0}}else te[0]!==36064&&(te[0]=36064,ce=!0);else te[0]!==1029&&(te[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function He(k){return m!==k?(o.useProgram(k),m=k,!0):!1}const pe={[ss]:32774,[Wg]:32778,[jg]:32779};if(n)pe[xu]=32775,pe[vu]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(pe[xu]=k.MIN_EXT,pe[vu]=k.MAX_EXT)}const ve={[qg]:0,[Xg]:1,[Yg]:768,[Sp]:770,[e_]:776,[Zg]:774,[Qg]:772,[Kg]:769,[Tp]:771,[$g]:775,[Jg]:773};function it(k,X,te,ce,_e,Ye,ot,xt){if(k===$i){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Ie(3042),_=!0),k!==Vg){if(k!==v||xt!==S){if((b!==ss||E!==ss)&&(o.blendEquation(32774),b=ss,E=ss),xt)switch(k){case _s:o.blendFuncSeparate(1,771,1,771);break;case zc:o.blendFunc(1,1);break;case _u:o.blendFuncSeparate(0,769,0,1);break;case bu:o.blendFuncSeparate(0,768,0,770);break;default:break}else switch(k){case _s:o.blendFuncSeparate(770,771,1,771);break;case zc:o.blendFunc(770,1);break;case _u:o.blendFuncSeparate(0,769,0,1);break;case bu:o.blendFunc(0,768);break;default:break}y=null,M=null,A=null,x=null,v=k,S=xt}return}_e=_e||X,Ye=Ye||te,ot=ot||ce,(X!==b||_e!==E)&&(o.blendEquationSeparate(pe[X],pe[_e]),b=X,E=_e),(te!==y||ce!==M||Ye!==A||ot!==x)&&(o.blendFuncSeparate(ve[te],ve[ce],ve[Ye],ve[ot]),y=te,M=ce,A=Ye,x=ot),v=k,S=!1}function ft(k,X){k.side===ll?fe(2884):Ie(2884);let te=k.side===jn;X&&(te=!te),tt(te),k.blending===_s&&k.transparent===!1?it($i):it(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const ce=k.stencilWrite;c.setTest(ce),ce&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ie(32926):fe(32926)}function tt(k){L!==k&&(k?o.frontFace(2304):o.frontFace(2305),L=k)}function q(k){k!==Gg?(Ie(2884),k!==O&&(k===gu?o.cullFace(1029):k===Hg?o.cullFace(1028):o.cullFace(1032))):fe(2884),O=k}function rt(k){k!==B&&(V&&o.lineWidth(k),B=k)}function De(k,X,te){k?(Ie(32823),(I!==X||R!==te)&&(o.polygonOffset(X,te),I=X,R=te)):fe(32823)}function kt(k){k?Ie(3089):fe(3089)}function St(k){k===void 0&&(k=33984+z-1),$!==k&&(o.activeTexture(k),$=k)}function C(k,X,te){te===void 0&&($===null?te=33984+z-1:te=$);let ce=P[te];ce===void 0&&(ce={type:void 0,texture:void 0},P[te]=ce),(ce.type!==k||ce.texture!==X)&&($!==te&&(o.activeTexture(te),$=te),o.bindTexture(k,X||W[k]),ce.type=k,ce.texture=X)}function w(){const k=P[$];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch{}}function re(){try{o.compressedTexImage3D.apply(o,arguments)}catch{}}function ee(){try{o.texSubImage2D.apply(o,arguments)}catch{}}function oe(){try{o.texSubImage3D.apply(o,arguments)}catch{}}function Se(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch{}}function de(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch{}}function J(){try{o.texStorage2D.apply(o,arguments)}catch{}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch{}}function Le(){try{o.texImage2D.apply(o,arguments)}catch{}}function me(){try{o.texImage3D.apply(o,arguments)}catch{}}function Ae(k){ne.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),ne.copy(k))}function we(k){ie.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),ie.copy(k))}function Ve(k,X){let te=u.get(X);te===void 0&&(te=new WeakMap,u.set(X,te));let ce=te.get(k);ce===void 0&&(ce=o.getUniformBlockIndex(X,k.name),te.set(k,ce))}function Ee(k,X){const ce=u.get(X).get(k);h.get(X)!==ce&&(o.uniformBlockBinding(X,ce,k.__bindingPointIndex),h.set(X,ce))}function at(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},$=null,P={},d={},g=new WeakMap,p=[],m=null,_=!1,v=null,b=null,y=null,M=null,E=null,A=null,x=null,S=!1,L=null,O=null,B=null,I=null,R=null,ne.set(0,0,o.canvas.width,o.canvas.height),ie.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:fe,bindFramebuffer:ke,drawBuffers:ue,useProgram:He,setBlending:it,setMaterial:ft,setFlipSided:tt,setCullFace:q,setLineWidth:rt,setPolygonOffset:De,setScissorTest:kt,activeTexture:St,bindTexture:C,unbindTexture:w,compressedTexImage2D:Z,compressedTexImage3D:re,texImage2D:Le,texImage3D:me,updateUBOMapping:Ve,uniformBlockBinding:Ee,texStorage2D:J,texStorage3D:Me,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:Se,compressedTexSubImage3D:de,scissor:Ae,viewport:we,reset:at}}function Fy(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return _?new OffscreenCanvas(C,w):Fa("canvas")}function b(C,w,Z,re){let ee=1;if((C.width>re||C.height>re)&&(ee=re/Math.max(C.width,C.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=w?nl:Math.floor,Se=oe(ee*C.width),de=oe(ee*C.height);p===void 0&&(p=v(Se,de));const J=Z?v(Se,de):p;return J.width=Se,J.height=de,J.getContext("2d").drawImage(C,0,0,Se,de),J}else return"data"in C,C;return C}function y(C){return jc(C.width)&&jc(C.height)}function M(C){return a?!1:C.wrapS!==Un||C.wrapT!==Un||C.minFilter!==zt&&C.minFilter!==fn}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==zt&&C.minFilter!==fn}function A(C){o.generateMipmap(C)}function x(C,w,Z,re,ee=!1){if(a===!1)return w;if(C!==null&&o[C]!==void 0)return o[C];let oe=w;return w===6403&&(Z===5126&&(oe=33326),Z===5131&&(oe=33325),Z===5121&&(oe=33321)),w===33319&&(Z===5126&&(oe=33328),Z===5131&&(oe=33327),Z===5121&&(oe=33323)),w===6408&&(Z===5126&&(oe=34836),Z===5131&&(oe=34842),Z===5121&&(oe=re===nt&&ee===!1?35907:32856),Z===32819&&(oe=32854),Z===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function S(C,w,Z){return E(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==fn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){return C===zt||C===Hc||C===Uo?9728:9729}function O(C){const w=C.target;w.removeEventListener("dispose",O),I(w),w.isVideoTexture&&g.delete(w)}function B(C){const w=C.target;w.removeEventListener("dispose",B),z(w)}function I(C){const w=n.get(C);if(w.__webglInit===void 0)return;const Z=C.source,re=m.get(Z);if(re){const ee=re[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(re).length===0&&m.delete(Z)}n.remove(C)}function R(C){const w=n.get(C);o.deleteTexture(w.__webglTexture);const Z=C.source,re=m.get(Z);delete re[w.__cacheKey],s.memory.textures--}function z(C){const w=C.texture,Z=n.get(C),re=n.get(w);if(re.__webglTexture!==void 0&&(o.deleteTexture(re.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)o.deleteFramebuffer(Z.__webglFramebuffer[ee]),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[ee]);else{if(o.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ee=0;ee<Z.__webglColorRenderbuffer.length;ee++)Z.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[ee]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,oe=w.length;ee<oe;ee++){const Se=n.get(w[ee]);Se.__webglTexture&&(o.deleteTexture(Se.__webglTexture),s.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(C)}let V=0;function Q(){V=0}function U(){const C=V;return C>=l,V+=1,C}function $(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function P(C,w){const Z=n.get(C);if(C.isVideoTexture&&kt(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const re=C.image;if(re!==null){if(re.complete!==!1){fe(Z,C,w);return}}}t.bindTexture(3553,Z.__webglTexture,33984+w)}function H(C,w){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){fe(Z,C,w);return}t.bindTexture(35866,Z.__webglTexture,33984+w)}function Y(C,w){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){fe(Z,C,w);return}t.bindTexture(32879,Z.__webglTexture,33984+w)}function ne(C,w){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ke(Z,C,w);return}t.bindTexture(34067,Z.__webglTexture,33984+w)}const ie={[Ls]:10497,[Un]:33071,[tl]:33648},ae={[zt]:9728,[Hc]:9984,[Uo]:9986,[fn]:9729,[Pp]:9985,[Ir]:9987};function W(C,w,Z){if(Z?(o.texParameteri(C,10242,ie[w.wrapS]),o.texParameteri(C,10243,ie[w.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ie[w.wrapR]),o.texParameteri(C,10240,ae[w.magFilter]),o.texParameteri(C,10241,ae[w.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),w.wrapS!==Un||w.wrapT,o.texParameteri(C,10240,L(w.magFilter)),o.texParameteri(C,10241,L(w.minFilter)),w.minFilter!==zt&&w.minFilter),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===zt||w.minFilter!==Uo&&w.minFilter!==Ir||w.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ie(C,w){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",O));const re=w.source;let ee=m.get(re);ee===void 0&&(ee={},m.set(re,ee));const oe=$(w);if(oe!==C.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),ee[oe].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&R(w)),C.__cacheKey=oe,C.__webglTexture=ee[oe].texture}return Z}function fe(C,w,Z){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const ee=Ie(C,w),oe=w.source;t.bindTexture(re,C.__webglTexture,33984+Z);const Se=n.get(oe);if(oe.version!==Se.__version||ee===!0){t.activeTexture(33984+Z),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const de=M(w)&&y(w.image)===!1;let J=b(w.image,de,!1,h);J=St(w,J);const Me=y(J)||a,Le=r.convert(w.format,w.encoding);let me=r.convert(w.type),Ae=x(w.internalFormat,Le,me,w.encoding,w.isVideoTexture);W(re,w,Me);let we;const Ve=w.mipmaps,Ee=a&&w.isVideoTexture!==!0,at=Se.__version===void 0||ee===!0,k=S(w,J,Me);if(w.isDepthTexture)Ae=6402,a?w.type===Yi?Ae=36012:w.type===xr?Ae=33190:w.type===bs?Ae=35056:Ae=33189:w.type,w.format===Er&&Ae===6402&&w.type!==Lp&&w.type!==xr&&(w.type=xr,me=r.convert(w.type)),w.format===Rs&&Ae===6402&&(Ae=34041,w.type!==bs&&(w.type=bs,me=r.convert(w.type))),at&&(Ee?t.texStorage2D(3553,1,Ae,J.width,J.height):t.texImage2D(3553,0,Ae,J.width,J.height,0,Le,me,null));else if(w.isDataTexture)if(Ve.length>0&&Me){Ee&&at&&t.texStorage2D(3553,k,Ae,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)we=Ve[X],Ee?t.texSubImage2D(3553,X,0,0,we.width,we.height,Le,me,we.data):t.texImage2D(3553,X,Ae,we.width,we.height,0,Le,me,we.data);w.generateMipmaps=!1}else Ee?(at&&t.texStorage2D(3553,k,Ae,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Le,me,J.data)):t.texImage2D(3553,0,Ae,J.width,J.height,0,Le,me,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ee&&at&&t.texStorage3D(35866,k,Ae,Ve[0].width,Ve[0].height,J.depth);for(let X=0,te=Ve.length;X<te;X++)we=Ve[X],w.format!==Bn?Le!==null&&(Ee?t.compressedTexSubImage3D(35866,X,0,0,0,we.width,we.height,J.depth,Le,we.data,0,0):t.compressedTexImage3D(35866,X,Ae,we.width,we.height,J.depth,0,we.data,0,0)):Ee?t.texSubImage3D(35866,X,0,0,0,we.width,we.height,J.depth,Le,me,we.data):t.texImage3D(35866,X,Ae,we.width,we.height,J.depth,0,Le,me,we.data)}else{Ee&&at&&t.texStorage2D(3553,k,Ae,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)we=Ve[X],w.format!==Bn?Le!==null&&(Ee?t.compressedTexSubImage2D(3553,X,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(3553,X,Ae,we.width,we.height,0,we.data)):Ee?t.texSubImage2D(3553,X,0,0,we.width,we.height,Le,me,we.data):t.texImage2D(3553,X,Ae,we.width,we.height,0,Le,me,we.data)}else if(w.isDataArrayTexture)Ee?(at&&t.texStorage3D(35866,k,Ae,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Le,me,J.data)):t.texImage3D(35866,0,Ae,J.width,J.height,J.depth,0,Le,me,J.data);else if(w.isData3DTexture)Ee?(at&&t.texStorage3D(32879,k,Ae,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Le,me,J.data)):t.texImage3D(32879,0,Ae,J.width,J.height,J.depth,0,Le,me,J.data);else if(w.isFramebufferTexture){if(at)if(Ee)t.texStorage2D(3553,k,Ae,J.width,J.height);else{let X=J.width,te=J.height;for(let ce=0;ce<k;ce++)t.texImage2D(3553,ce,Ae,X,te,0,Le,me,null),X>>=1,te>>=1}}else if(Ve.length>0&&Me){Ee&&at&&t.texStorage2D(3553,k,Ae,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)we=Ve[X],Ee?t.texSubImage2D(3553,X,0,0,Le,me,we):t.texImage2D(3553,X,Ae,Le,me,we);w.generateMipmaps=!1}else Ee?(at&&t.texStorage2D(3553,k,Ae,J.width,J.height),t.texSubImage2D(3553,0,0,0,Le,me,J)):t.texImage2D(3553,0,Ae,Le,me,J);E(w,Me)&&A(re),Se.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ke(C,w,Z){if(w.image.length!==6)return;const re=Ie(C,w),ee=w.source;t.bindTexture(34067,C.__webglTexture,33984+Z);const oe=n.get(ee);if(ee.version!==oe.__version||re===!0){t.activeTexture(33984+Z),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const Se=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,J=[];for(let X=0;X<6;X++)!Se&&!de?J[X]=b(w.image[X],!1,!0,c):J[X]=de?w.image[X].image:w.image[X],J[X]=St(w,J[X]);const Me=J[0],Le=y(Me)||a,me=r.convert(w.format,w.encoding),Ae=r.convert(w.type),we=x(w.internalFormat,me,Ae,w.encoding),Ve=a&&w.isVideoTexture!==!0,Ee=oe.__version===void 0||re===!0;let at=S(w,Me,Le);W(34067,w,Le);let k;if(Se){Ve&&Ee&&t.texStorage2D(34067,at,we,Me.width,Me.height);for(let X=0;X<6;X++){k=J[X].mipmaps;for(let te=0;te<k.length;te++){const ce=k[te];w.format!==Bn?me!==null&&(Ve?t.compressedTexSubImage2D(34069+X,te,0,0,ce.width,ce.height,me,ce.data):t.compressedTexImage2D(34069+X,te,we,ce.width,ce.height,0,ce.data)):Ve?t.texSubImage2D(34069+X,te,0,0,ce.width,ce.height,me,Ae,ce.data):t.texImage2D(34069+X,te,we,ce.width,ce.height,0,me,Ae,ce.data)}}}else{k=w.mipmaps,Ve&&Ee&&(k.length>0&&at++,t.texStorage2D(34067,at,we,J[0].width,J[0].height));for(let X=0;X<6;X++)if(de){Ve?t.texSubImage2D(34069+X,0,0,0,J[X].width,J[X].height,me,Ae,J[X].data):t.texImage2D(34069+X,0,we,J[X].width,J[X].height,0,me,Ae,J[X].data);for(let te=0;te<k.length;te++){const _e=k[te].image[X].image;Ve?t.texSubImage2D(34069+X,te+1,0,0,_e.width,_e.height,me,Ae,_e.data):t.texImage2D(34069+X,te+1,we,_e.width,_e.height,0,me,Ae,_e.data)}}else{Ve?t.texSubImage2D(34069+X,0,0,0,me,Ae,J[X]):t.texImage2D(34069+X,0,we,me,Ae,J[X]);for(let te=0;te<k.length;te++){const ce=k[te];Ve?t.texSubImage2D(34069+X,te+1,0,0,me,Ae,ce.image[X]):t.texImage2D(34069+X,te+1,we,me,Ae,ce.image[X])}}}E(w,Le)&&A(34067),oe.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ue(C,w,Z,re,ee){const oe=r.convert(Z.format,Z.encoding),Se=r.convert(Z.type),de=x(Z.internalFormat,oe,Se,Z.encoding);n.get(w).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,de,w.width,w.height,w.depth,0,oe,Se,null):t.texImage2D(ee,0,de,w.width,w.height,0,oe,Se,null)),t.bindFramebuffer(36160,C),De(w)?f.framebufferTexture2DMultisampleEXT(36160,re,ee,n.get(Z).__webglTexture,0,rt(w)):(ee===3553||ee>=34069&&ee<=34074)&&o.framebufferTexture2D(36160,re,ee,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(C,w,Z){if(o.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(Z||De(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Yi?re=36012:ee.type===xr&&(re=33190));const oe=rt(w);De(w)?f.renderbufferStorageMultisampleEXT(36161,oe,re,w.width,w.height):o.renderbufferStorageMultisample(36161,oe,re,w.width,w.height)}else o.renderbufferStorage(36161,re,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const re=rt(w);Z&&De(w)===!1?o.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):De(w)?f.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<re.length;ee++){const oe=re[ee],Se=r.convert(oe.format,oe.encoding),de=r.convert(oe.type),J=x(oe.internalFormat,Se,de,oe.encoding),Me=rt(w);Z&&De(w)===!1?o.renderbufferStorageMultisample(36161,Me,J,w.width,w.height):De(w)?f.renderbufferStorageMultisampleEXT(36161,Me,J,w.width,w.height):o.renderbufferStorage(36161,J,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function pe(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,ee=rt(w);if(w.depthTexture.format===Er)De(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ee):o.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===Rs)De(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ee):o.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function ve(C){const w=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,C)}else if(Z){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=o.createRenderbuffer(),He(w.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),He(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function it(C,w,Z){const re=n.get(C);w!==void 0&&ue(re.__webglFramebuffer,C,C.texture,36064,3553),Z!==void 0&&ve(C)}function ft(C){const w=C.texture,Z=n.get(C),re=n.get(w);C.addEventListener("dispose",B),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=w.version,s.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Se=y(C)||a;if(ee){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)Z.__webglFramebuffer[de]=o.createFramebuffer()}else{if(Z.__webglFramebuffer=o.createFramebuffer(),oe&&i.drawBuffers){const de=C.texture;for(let J=0,Me=de.length;J<Me;J++){const Le=n.get(de[J]);Le.__webglTexture===void 0&&(Le.__webglTexture=o.createTexture(),s.memory.textures++)}}if(a&&C.samples>0&&De(C)===!1){const de=oe?w:[w];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let J=0;J<de.length;J++){const Me=de[J];Z.__webglColorRenderbuffer[J]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[J]);const Le=r.convert(Me.format,Me.encoding),me=r.convert(Me.type),Ae=x(Me.internalFormat,Le,me,Me.encoding,C.isXRRenderTarget===!0),we=rt(C);o.renderbufferStorageMultisample(36161,we,Ae,C.width,C.height),o.framebufferRenderbuffer(36160,36064+J,36161,Z.__webglColorRenderbuffer[J])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),He(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,re.__webglTexture),W(34067,w,Se);for(let de=0;de<6;de++)ue(Z.__webglFramebuffer[de],C,w,36064,34069+de);E(w,Se)&&A(34067),t.unbindTexture()}else if(oe){const de=C.texture;for(let J=0,Me=de.length;J<Me;J++){const Le=de[J],me=n.get(Le);t.bindTexture(3553,me.__webglTexture),W(3553,Le,Se),ue(Z.__webglFramebuffer,C,Le,36064+J,3553),E(Le,Se)&&A(3553)}t.unbindTexture()}else{let de=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&a&&(de=C.isWebGL3DRenderTarget?32879:35866),t.bindTexture(de,re.__webglTexture),W(de,w,Se),ue(Z.__webglFramebuffer,C,w,36064,de),E(w,Se)&&A(de),t.unbindTexture()}C.depthBuffer&&ve(C)}function tt(C){const w=y(C)||a,Z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ee=Z.length;re<ee;re++){const oe=Z[re];if(E(oe,w)){const Se=C.isWebGLCubeRenderTarget?34067:3553,de=n.get(oe).__webglTexture;t.bindTexture(Se,de),A(Se),t.unbindTexture()}}}function q(C){if(a&&C.samples>0&&De(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Z=C.width,re=C.height;let ee=16384;const oe=[],Se=C.stencilBuffer?33306:36096,de=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){oe.push(36064+Me),C.depthBuffer&&oe.push(Se);const Le=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Le===!1&&(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024)),J&&o.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[Me]),Le===!0&&(o.invalidateFramebuffer(36008,[Se]),o.invalidateFramebuffer(36009,[Se])),J){const me=n.get(w[Me]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,me,0)}o.blitFramebuffer(0,0,Z,re,0,0,Z,re,ee,9728),d&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Me,36161,de.__webglColorRenderbuffer[Me]);const Le=n.get(w[Me]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Me,3553,Le,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function rt(C){return Math.min(u,C.samples)}function De(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function kt(C){const w=s.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function St(C,w){const Z=C.encoding,re=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Wc||Z!==Or&&Z===nt&&a===!1&&(e.has("EXT_sRGB")===!0&&re===Bn?(C.format=Wc,C.minFilter=fn,C.generateMipmaps=!1):w=Fp.sRGBToLinear(w)),w}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=P,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=ne,this.rebindTextures=it,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=De}function Ny(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===kr)return 5121;if(r===__)return 32819;if(r===b_)return 32820;if(r===p_)return 5120;if(r===m_)return 5122;if(r===Lp)return 5123;if(r===g_)return 5124;if(r===xr)return 5125;if(r===Yi)return 5126;if(r===Da)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===x_)return 6406;if(r===Bn)return 6408;if(r===y_)return 6409;if(r===M_)return 6410;if(r===Er)return 6402;if(r===Rs)return 34041;if(r===v_)return 6408;if(r===Wc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===w_)return 6403;if(r===S_)return 36244;if(r===T_)return 33319;if(r===E_)return 33320;if(r===A_)return 36249;if(r===Il||r===kl||r===Ol||r===Fl)if(s===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Il)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Il)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yu||r===Mu||r===wu||r===Su)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Su)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===C_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tu||r===Eu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tu)return s===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Eu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Au||r===Cu||r===Pu||r===Lu||r===Ru||r===Du||r===Iu||r===ku||r===Ou||r===Fu||r===Nu||r===zu||r===Uu||r===Bu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Au)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ru)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Du)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Iu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ku)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ou)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bu)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Gu)return s===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===bs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class zy extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class By extends Wt{constructor(e,t,n,i,r,s,a,l,c,h){if(h=h!==void 0?h:Er,h!==Er&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Er&&(n=xr),n===void 0&&h===Rs&&(n=bs),super(null,i,r,s,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1}}class Gy extends Fs{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],v=[],b=new Set,y=new Map,M=new an;M.layers.enable(1),M.viewport=new ut;const E=new an;E.layers.enable(2),E.viewport=new ut;const A=[M,E],x=new zy;x.layers.enable(1),x.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=_[H];return Y===void 0&&(Y=new lc,_[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=_[H];return Y===void 0&&(Y=new lc,_[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=_[H];return Y===void 0&&(Y=new lc,_[H]=Y),Y.getHandSpace()};function O(H){const Y=v.indexOf(H.inputSource);if(Y===-1)return;const ne=_[Y];ne!==void 0&&ne.dispatchEvent({type:H.type,data:H.inputSource})}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",I);for(let H=0;H<_.length;H++){const Y=v[H];Y!==null&&(v[H]=null,_[H].disconnect(Y))}S=null,L=null,e.setRenderTarget(p),f=null,u=null,h=null,i=null,m=null,P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting},this.setReferenceSpaceType=function(H){a=H,n.isPresenting},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),m=new ri(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:kr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let Y=null,ne=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,Y=g.stencil?Rs:Er,ne=g.stencil?bs:xr);const ae={colorFormat:32856,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ae),i.updateRenderState({layers:[u]}),m=new ri(u.textureWidth,u.textureHeight,{format:Bn,type:kr,depthTexture:new By(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const W=e.properties.get(m);W.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(a),P.setContext(i),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(H){for(let Y=0;Y<H.removed.length;Y++){const ne=H.removed[Y],ie=v.indexOf(ne);ie>=0&&(v[ie]=null,_[ie].disconnect(ne))}for(let Y=0;Y<H.added.length;Y++){const ne=H.added[Y];let ie=v.indexOf(ne);if(ie===-1){for(let W=0;W<_.length;W++)if(W>=v.length){v.push(ne),ie=W;break}else if(v[W]===null){v[W]=ne,ie=W;break}if(ie===-1)break}const ae=_[ie];ae&&ae.connect(ne)}}const R=new F,z=new F;function V(H,Y,ne){R.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);const ie=R.distanceTo(z),ae=Y.projectionMatrix.elements,W=ne.projectionMatrix.elements,Ie=ae[14]/(ae[10]-1),fe=ae[14]/(ae[10]+1),ke=(ae[9]+1)/ae[5],ue=(ae[9]-1)/ae[5],He=(ae[8]-1)/ae[0],pe=(W[8]+1)/W[0],ve=Ie*He,it=Ie*pe,ft=ie/(-He+pe),tt=ft*-He;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(tt),H.translateZ(ft),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const q=Ie+ft,rt=fe+ft,De=ve-tt,kt=it+(ie-tt),St=ke*fe/rt*q,C=ue*fe/rt*q;H.projectionMatrix.makePerspective(De,kt,St,C,q,rt)}function Q(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;x.near=E.near=M.near=H.near,x.far=E.far=M.far=H.far,(S!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,L=x.far);const Y=H.parent,ne=x.cameras;Q(x,Y);for(let ae=0;ae<ne.length;ae++)Q(ne[ae],Y);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),H.matrix.copy(x.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ie=H.children;for(let ae=0,W=ie.length;ae<W;ae++)ie[ae].updateMatrixWorld(!0);ne.length===2?V(x,M,E):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(H){u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.getPlanes=function(){return b};let U=null;function $(H,Y){if(c=Y.getViewerPose(l||s),d=Y,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ie=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let ae=0;ae<ne.length;ae++){const W=ne[ae];let Ie=null;if(f!==null)Ie=f.getViewport(W);else{const ke=h.getViewSubImage(u,W);Ie=ke.viewport,ae===0&&(e.setRenderTargetTextures(m,ke.colorTexture,u.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(m))}let fe=A[ae];fe===void 0&&(fe=new an,fe.layers.enable(ae),fe.viewport=new ut,A[ae]=fe),fe.matrix.fromArray(W.transform.matrix),fe.projectionMatrix.fromArray(W.projectionMatrix),fe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ae===0&&x.matrix.copy(fe.matrix),ie===!0&&x.cameras.push(fe)}}for(let ne=0;ne<_.length;ne++){const ie=v[ne],ae=_[ne];ie!==null&&ae!==void 0&&ae.update(ie,Y,l||s)}if(U&&U(H,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let ne=null;for(const ie of b)Y.detectedPlanes.has(ie)||(ne===null&&(ne=[]),ne.push(ie));if(ne!==null)for(const ie of ne)b.delete(ie),y.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of Y.detectedPlanes)if(!b.has(ie))b.add(ie),y.set(ie,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const ae=y.get(ie);ie.lastChangedTime>ae&&(y.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}d=null}const P=new jp;P.setAnimationLoop($),this.setAnimationLoop=function(H){U=H},this.dispose=function(){}}}function Hy(o,e){function t(p,m){m.color.getRGB(p.fogColor.value,Hp(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?a(p,m,_,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===jn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===jn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let b;m.aoMap?b=m.aoMap:m.lightMap&&(b=m.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===jn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Vy(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(v,b){const y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const M=b.program;n.updateUBOMapping(v,M);const E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){const b=u();v.__bindingPointIndex=b;const y=o.createBuffer(),M=v.__size,E=v.usage;return o.bindBuffer(35345,y),o.bufferData(35345,M,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,y),y}function u(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return 0}function f(v){const b=i[v.id],y=v.uniforms,M=v.__cache;o.bindBuffer(35345,b);for(let E=0,A=y.length;E<A;E++){const x=y[E];if(d(x,E,M)===!0){const S=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let O=0;for(let B=0;B<L.length;B++){const I=L[B],R=p(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,S+O,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,O),O+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,x.__data)}}o.bindBuffer(35345,null)}function d(v,b,y){const M=v.value;if(y[b]===void 0){if(typeof M=="number")y[b]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let x=0;x<E.length;x++)A.push(E[x].clone());y[b]=A}return!0}else if(typeof M=="number"){if(y[b]!==M)return y[b]=M,!0}else{const E=Array.isArray(y[b])?y[b]:[y[b]],A=Array.isArray(M)?M:[M];for(let x=0;x<E.length;x++){const S=E[x];if(S.equals(A[x])===!1)return S.copy(A[x]),!0}}return!1}function g(v){const b=v.uniforms;let y=0;const M=16;let E=0;for(let A=0,x=b.length;A<x;A++){const S=b[A],L={boundary:0,storage:0},O=Array.isArray(S.value)?S.value:[S.value];for(let B=0,I=O.length;B<I;B++){const R=O[B],z=p(R);L.boundary+=z.boundary,L.storage+=z.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,A>0){E=y%M;const B=M-E;E!==0&&B-L.boundary<0&&(y+=M-E,S.__offset=y)}y+=L.storage}return E=y%M,E>0&&(y+=M-E),v.__size=y,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture,b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const y=s.indexOf(b.__bindingPointIndex);s.splice(y,1),o.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const v in i)o.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Wy(){const o=Fa("canvas");return o.style.display="block",o}function Qp(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Wy(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Or,this.physicallyCorrectLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const p=this;let m=!1,_=0,v=0,b=null,y=-1,M=null;const E=new ut,A=new ut;let x=null,S=e.width,L=e.height,O=1,B=null,I=null;const R=new ut(0,0,S,L),z=new ut(0,0,S,L);let V=!1;const Q=new wh;let U=!1,$=!1,P=null;const H=new Qe,Y=new ze,ne=new F,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return b===null?O:1}let W=t;function Ie(T,N){for(let K=0;K<T.length;K++){const D=T[K],j=e.getContext(D,N);if(j!==null)return j}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),W===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),W=Ie(N,T),W===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw T}let fe,ke,ue,He,pe,ve,it,ft,tt,q,rt,De,kt,St,C,w,Z,re,ee,oe,Se,de,J,Me;function Le(){fe=new tv(W),ke=new Kx(W,fe,o),fe.init(ke),de=new Ny(W,fe,ke),ue=new Oy(W,fe,ke),He=new rv,pe=new yy,ve=new Fy(W,fe,ue,pe,ke,de,He),it=new Jx(p),ft=new ev(p),tt=new db(W,ke),J=new Xx(W,fe,tt,ke),q=new nv(W,tt,He,J),rt=new lv(W,q,tt,He),ee=new ov(W,ke,ve),w=new Qx(pe),De=new vy(p,it,ft,fe,ke,J,w),kt=new Hy(p,pe),St=new wy,C=new Py(fe,ke),re=new qx(p,it,ft,ue,rt,h,s),Z=new ky(p,rt,ke),Me=new Vy(W,He,ke,ue),oe=new Yx(W,fe,He,ke),Se=new iv(W,fe,He,ke),He.programs=De.programs,p.capabilities=ke,p.extensions=fe,p.properties=pe,p.renderLists=St,p.shadowMap=Z,p.state=ue,p.info=He}Le();const me=new Gy(p,W);this.xr=me,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(S,L,!1))},this.getSize=function(T){return T.set(S,L)},this.setSize=function(T,N,K){me.isPresenting||(S=T,L=N,e.width=Math.floor(T*O),e.height=Math.floor(N*O),K!==!1&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N))},this.getDrawingBufferSize=function(T){return T.set(S*O,L*O).floor()},this.setDrawingBufferSize=function(T,N,K){S=T,L=N,O=K,e.width=Math.floor(T*K),e.height=Math.floor(N*K),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,N,K,D){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,N,K,D),ue.viewport(E.copy(R).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,N,K,D){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,N,K,D),ue.scissor(A.copy(z).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){ue.setScissorTest(V=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(T=!0,N=!0,K=!0){let D=0;T&&(D|=16384),N&&(D|=256),K&&(D|=1024),W.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),St.dispose(),C.dispose(),pe.dispose(),it.dispose(),ft.dispose(),rt.dispose(),J.dispose(),Me.dispose(),De.dispose(),me.dispose(),me.removeEventListener("sessionstart",ce),me.removeEventListener("sessionend",_e),P&&(P.dispose(),P=null),Ye.stop()};function Ae(T){T.preventDefault(),m=!0}function we(){m=!1;const T=He.autoReset,N=Z.enabled,K=Z.autoUpdate,D=Z.needsUpdate,j=Z.type;Le(),He.autoReset=T,Z.enabled=N,Z.autoUpdate=K,Z.needsUpdate=D,Z.type=j}function Ve(T){}function Ee(T){const N=T.target;N.removeEventListener("dispose",Ee),at(N)}function at(T){k(T),pe.remove(T)}function k(T){const N=pe.get(T).programs;N!==void 0&&(N.forEach(function(K){De.releaseProgram(K)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,K,D,j,xe){N===null&&(N=ie);const ge=j.isMesh&&j.matrixWorld.determinant()<0,ye=Ne(T,N,K,D,j);ue.setMaterial(D,ge);let Te=K.index,je=1;D.wireframe===!0&&(Te=q.getWireframeAttribute(K),je=2);const Ge=K.drawRange,Pe=K.attributes.position;let Ue=Ge.start*je,gt=(Ge.start+Ge.count)*je;xe!==null&&(Ue=Math.max(Ue,xe.start*je),gt=Math.min(gt,(xe.start+xe.count)*je)),Te!==null?(Ue=Math.max(Ue,0),gt=Math.min(gt,Te.count)):Pe!=null&&(Ue=Math.max(Ue,0),gt=Math.min(gt,Pe.count));const bn=gt-Ue;if(bn<0||bn===1/0)return;J.setup(j,D,ye,K,Te);let si,dt=oe;if(Te!==null&&(si=tt.get(Te),dt=Se,dt.setIndex(si)),j.isMesh)D.wireframe===!0?(ue.setLineWidth(D.wireframeLinewidth*ae()),dt.setMode(1)):dt.setMode(4);else if(j.isLine){let Fe=D.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*ae()),j.isLineSegments?dt.setMode(1):j.isLineLoop?dt.setMode(2):dt.setMode(3)}else j.isPoints?dt.setMode(0):j.isSprite&&dt.setMode(4);if(j.isInstancedMesh)dt.renderInstances(Ue,bn,j.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,mi=Math.min(K.instanceCount,Fe);dt.renderInstances(Ue,bn,mi)}else dt.render(Ue,bn)},this.compile=function(T,N){function K(D,j,xe){D.transparent===!0&&D.side===ro?(D.side=jn,D.needsUpdate=!0,be(D,j,xe),D.side=rr,D.needsUpdate=!0,be(D,j,xe),D.side=ro):be(D,j,xe)}f=C.get(T),f.init(),g.push(f),T.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(D){const j=D.material;if(j)if(Array.isArray(j))for(let xe=0;xe<j.length;xe++){const ge=j[xe];K(ge,T,D)}else K(j,T,D)}),g.pop(),f=null};let X=null;function te(T){X&&X(T)}function ce(){Ye.stop()}function _e(){Ye.start()}const Ye=new jp;Ye.setAnimationLoop(te),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(T){X=T,me.setAnimationLoop(T),T===null?Ye.stop():Ye.start()},me.addEventListener("sessionstart",ce),me.addEventListener("sessionend",_e),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0||m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,N,b),f=C.get(T,g.length),f.init(),g.push(f),H.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(H),$=this.localClippingEnabled,U=w.init(this.clippingPlanes,$,N),u=St.get(T,d.length),u.init(),d.push(u),ot(T,N,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(B,I),U===!0&&w.beginShadows();const K=f.state.shadowsArray;if(Z.render(K,T,N),U===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(u,T),f.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const D=N.cameras;for(let j=0,xe=D.length;j<xe;j++){const ge=D[j];xt(u,T,ge,ge.viewport)}}else xt(u,T,N);b!==null&&(ve.updateMultisampleRenderTarget(b),ve.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(p,T,N),J.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function ot(T,N,K,D){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){D&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const ge=rt.update(T),ye=T.material;ye.visible&&u.push(T,ge,ye,K,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==He.render.frame&&(T.skeleton.update(),T.skeleton.frame=He.render.frame),!T.frustumCulled||Q.intersectsObject(T))){D&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const ge=rt.update(T),ye=T.material;if(Array.isArray(ye)){const Te=ge.groups;for(let je=0,Ge=Te.length;je<Ge;je++){const Pe=Te[je],Ue=ye[Pe.materialIndex];Ue&&Ue.visible&&u.push(T,ge,Ue,K,ne.z,Pe)}}else ye.visible&&u.push(T,ge,ye,K,ne.z,null)}}const xe=T.children;for(let ge=0,ye=xe.length;ge<ye;ge++)ot(xe[ge],N,K,D)}function xt(T,N,K,D){const j=T.opaque,xe=T.transmissive,ge=T.transparent;f.setupLightsView(K),xe.length>0&&Be(j,N,K),D&&ue.viewport(E.copy(D)),j.length>0&&le(j,N,K),xe.length>0&&le(xe,N,K),ge.length>0&&le(ge,N,K),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Be(T,N,K){const D=ke.isWebGL2;P===null&&(P=new ri(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Da:kr,minFilter:Ir,samples:D&&r===!0?4:0})),p.getDrawingBufferSize(Y),D?P.setSize(Y.x,Y.y):P.setSize(nl(Y.x),nl(Y.y));const j=p.getRenderTarget();p.setRenderTarget(P),p.clear();const xe=p.toneMapping;p.toneMapping=Li,le(T,N,K),p.toneMapping=xe,ve.updateMultisampleRenderTarget(P),ve.updateRenderTargetMipmap(P),p.setRenderTarget(j)}function le(T,N,K){const D=N.isScene===!0?N.overrideMaterial:null;for(let j=0,xe=T.length;j<xe;j++){const ge=T[j],ye=ge.object,Te=ge.geometry,je=D===null?ge.material:D,Ge=ge.group;ye.layers.test(K.layers)&&se(ye,N,K,Te,je,Ge)}}function se(T,N,K,D,j,xe){T.onBeforeRender(p,N,K,D,j,xe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(p,N,K,D,T,xe),j.transparent===!0&&j.side===ro?(j.side=jn,j.needsUpdate=!0,p.renderBufferDirect(K,N,D,j,T,xe),j.side=rr,j.needsUpdate=!0,p.renderBufferDirect(K,N,D,j,T,xe),j.side=ro):p.renderBufferDirect(K,N,D,j,T,xe),T.onAfterRender(p,N,K,D,j,xe)}function be(T,N,K){N.isScene!==!0&&(N=ie);const D=pe.get(T),j=f.state.lights,xe=f.state.shadowsArray,ge=j.state.version,ye=De.getParameters(T,j.state,xe,N,K),Te=De.getProgramCacheKey(ye);let je=D.programs;D.environment=T.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(T.isMeshStandardMaterial?ft:it).get(T.envMap||D.environment),je===void 0&&(T.addEventListener("dispose",Ee),je=new Map,D.programs=je);let Ge=je.get(Te);if(Ge!==void 0){if(D.currentProgram===Ge&&D.lightsStateVersion===ge)return Re(T,ye),Ge}else ye.uniforms=De.getUniforms(T),T.onBuild(K,ye,p),T.onBeforeCompile(ye,p),Ge=De.acquireProgram(ye,Te),je.set(Te,Ge),D.uniforms=ye.uniforms;const Pe=D.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=w.uniform),Re(T,ye),D.needsLights=We(T),D.lightsStateVersion=ge,D.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ue=Ge.getUniforms(),gt=Ho.seqWithValue(Ue.seq,Pe);return D.currentProgram=Ge,D.uniformsList=gt,Ge}function Re(T,N){const K=pe.get(T);K.outputEncoding=N.outputEncoding,K.instancing=N.instancing,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function Ne(T,N,K,D,j){N.isScene!==!0&&(N=ie),ve.resetTextureUnits();const xe=N.fog,ge=D.isMeshStandardMaterial?N.environment:null,ye=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Or,Te=(D.isMeshStandardMaterial?ft:it).get(D.envMap||ge),je=D.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!D.normalMap&&!!K.attributes.tangent,Pe=!!K.morphAttributes.position,Ue=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color,bn=D.toneMapped?p.toneMapping:Li,si=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=si!==void 0?si.length:0,Fe=pe.get(D),mi=f.state.lights;if(U===!0&&($===!0||T!==M)){const xn=T===M&&D.id===y;w.setState(D,T,xn)}let Ot=!1;D.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==mi.state.version||Fe.outputEncoding!==ye||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Te||D.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==w.numPlanes||Fe.numIntersection!==w.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==Ge||Fe.morphTargets!==Pe||Fe.morphNormals!==Ue||Fe.morphColors!==gt||Fe.toneMapping!==bn||ke.isWebGL2===!0&&Fe.morphTargetsCount!==dt)&&(Ot=!0):(Ot=!0,Fe.__version=D.version);let ar=Fe.currentProgram;Ot===!0&&(ar=be(D,N,j));let kh=!1,Vs=!1,pl=!1;const Jt=ar.getUniforms(),or=Fe.uniforms;if(ue.useProgram(ar.program)&&(kh=!0,Vs=!0,pl=!0),D.id!==y&&(y=D.id,Vs=!0),kh||M!==T){if(Jt.setValue(W,"projectionMatrix",T.projectionMatrix),ke.logarithmicDepthBuffer&&Jt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Vs=!0,pl=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const xn=Jt.map.cameraPosition;xn!==void 0&&xn.setValue(W,ne.setFromMatrixPosition(T.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Jt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||j.isSkinnedMesh)&&Jt.setValue(W,"viewMatrix",T.matrixWorldInverse)}if(j.isSkinnedMesh){Jt.setOptional(W,j,"bindMatrix"),Jt.setOptional(W,j,"bindMatrixInverse");const xn=j.skeleton;xn&&ke.floatVertexTextures&&(xn.boneTexture===null&&xn.computeBoneTexture(),Jt.setValue(W,"boneTexture",xn.boneTexture,ve),Jt.setValue(W,"boneTextureSize",xn.boneTextureSize))}const ml=K.morphAttributes;if((ml.position!==void 0||ml.normal!==void 0||ml.color!==void 0&&ke.isWebGL2===!0)&&ee.update(j,K,D,ar),(Vs||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,Jt.setValue(W,"receiveShadow",j.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(or.envMap.value=Te,or.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Vs&&(Jt.setValue(W,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&Tt(or,pl),xe&&D.fog===!0&&kt.refreshFogUniforms(or,xe),kt.refreshMaterialUniforms(or,D,O,L,P),Ho.upload(W,Fe.uniformsList,or,ve)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ho.upload(W,Fe.uniformsList,or,ve),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Jt.setValue(W,"center",j.center),Jt.setValue(W,"modelViewMatrix",j.modelViewMatrix),Jt.setValue(W,"normalMatrix",j.normalMatrix),Jt.setValue(W,"modelMatrix",j.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const xn=D.uniformsGroups;for(let gl=0,lm=xn.length;gl<lm;gl++)if(ke.isWebGL2){const Oh=xn[gl];Me.update(Oh,ar),Me.bind(Oh,ar)}}return ar}function Tt(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function We(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,N,K){pe.get(T.texture).__webglTexture=N,pe.get(T.depthTexture).__webglTexture=K;const D=pe.get(T);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=K===void 0,D.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const K=pe.get(T);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,K=0){b=T,_=N,v=K;let D=!0,j=null,xe=!1,ge=!1;if(T){const Te=pe.get(T);Te.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),D=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(T):Te.__hasExternalTextures&&ve.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ge=!0);const Ge=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(j=Ge[N],xe=!0):ke.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?j=pe.get(T).__webglMultisampledFramebuffer:j=Ge,E.copy(T.viewport),A.copy(T.scissor),x=T.scissorTest}else E.copy(R).multiplyScalar(O).floor(),A.copy(z).multiplyScalar(O).floor(),x=V;if(ue.bindFramebuffer(36160,j)&&ke.drawBuffers&&D&&ue.drawBuffers(T,j),ue.viewport(E),ue.scissor(A),ue.setScissorTest(x),xe){const Te=pe.get(T.texture);W.framebufferTexture2D(36160,36064,34069+N,Te.__webglTexture,K)}else if(ge){const Te=pe.get(T.texture),je=N||0;W.framebufferTextureLayer(36160,36064,Te.__webglTexture,K||0,je)}y=-1},this.readRenderTargetPixels=function(T,N,K,D,j,xe,ge){if(!(T&&T.isWebGLRenderTarget))return;let ye=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){ue.bindFramebuffer(36160,ye);try{const Te=T.texture,je=Te.format,Ge=Te.type;if(je!==Bn&&de.convert(je)!==W.getParameter(35739))return;const Pe=Ge===Da&&(fe.has("EXT_color_buffer_half_float")||ke.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Ge!==kr&&de.convert(Ge)!==W.getParameter(35738)&&!(Ge===Yi&&(ke.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Pe)return;N>=0&&N<=T.width-D&&K>=0&&K<=T.height-j&&W.readPixels(N,K,D,j,de.convert(je),de.convert(Ge),xe)}finally{const Te=b!==null?pe.get(b).__webglFramebuffer:null;ue.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(T,N,K=0){const D=Math.pow(2,-K),j=Math.floor(N.image.width*D),xe=Math.floor(N.image.height*D);ve.setTexture2D(N,0),W.copyTexSubImage2D(3553,K,0,0,T.x,T.y,j,xe),ue.unbindTexture()},this.copyTextureToTexture=function(T,N,K,D=0){const j=N.image.width,xe=N.image.height,ge=de.convert(K.format),ye=de.convert(K.type);ve.setTexture2D(K,0),W.pixelStorei(37440,K.flipY),W.pixelStorei(37441,K.premultiplyAlpha),W.pixelStorei(3317,K.unpackAlignment),N.isDataTexture?W.texSubImage2D(3553,D,T.x,T.y,j,xe,ge,ye,N.image.data):N.isCompressedTexture?W.compressedTexSubImage2D(3553,D,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,ge,N.mipmaps[0].data):W.texSubImage2D(3553,D,T.x,T.y,ge,ye,N.image),D===0&&K.generateMipmaps&&W.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,N,K,D,j=0){if(p.isWebGL1Renderer)return;const xe=T.max.x-T.min.x+1,ge=T.max.y-T.min.y+1,ye=T.max.z-T.min.z+1,Te=de.convert(D.format),je=de.convert(D.type);let Ge;if(D.isData3DTexture)ve.setTexture3D(D,0),Ge=32879;else if(D.isDataArrayTexture)ve.setTexture2DArray(D,0),Ge=35866;else return;W.pixelStorei(37440,D.flipY),W.pixelStorei(37441,D.premultiplyAlpha),W.pixelStorei(3317,D.unpackAlignment);const Pe=W.getParameter(3314),Ue=W.getParameter(32878),gt=W.getParameter(3316),bn=W.getParameter(3315),si=W.getParameter(32877),dt=K.isCompressedTexture?K.mipmaps[0]:K.image;W.pixelStorei(3314,dt.width),W.pixelStorei(32878,dt.height),W.pixelStorei(3316,T.min.x),W.pixelStorei(3315,T.min.y),W.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?W.texSubImage3D(Ge,j,N.x,N.y,N.z,xe,ge,ye,Te,je,dt.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,j,N.x,N.y,N.z,xe,ge,ye,Te,dt.data):W.texSubImage3D(Ge,j,N.x,N.y,N.z,xe,ge,ye,Te,je,dt),W.pixelStorei(3314,Pe),W.pixelStorei(32878,Ue),W.pixelStorei(3316,gt),W.pixelStorei(3315,bn),W.pixelStorei(32877,si),j===0&&D.generateMipmaps&&W.generateMipmap(Ge),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){_=0,v=0,b=null,ue.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class jy extends Qp{}jy.prototype.isWebGL1Renderer=!0;class qy extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return this.matrixWorldAutoUpdate}set autoUpdate(e){this.matrixWorldAutoUpdate=e}}class Xy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new F;class Eh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ef=new F,Af=new ut,Cf=new ut,Yy=new F,Pf=new Qe;class Ky extends Cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"&&this.bindMatrixInverse.copy(this.bindMatrix).invert()}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Af.fromBufferAttribute(i.attributes.skinIndex,e),Cf.fromBufferAttribute(i.attributes.skinWeight,e),Ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Cf.getComponent(r);if(s!==0){const a=Af.getComponent(r);Pf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Yy.copy(Ef).applyMatrix4(Pf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jp extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qy extends Wt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=zt,h=zt,u,f){super(null,s,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lf=new Qe,Jy=new Qe;class Ah{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:Jy;Lf.multiplyMatrices(a,t[r]),Lf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ah(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ip(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qy(t,e,e,Bn,Yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(s=new Jp),this.bones.push(s),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rf extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Df=new Qe,If=new Qe,So=[],Zy=new Qe,ea=new Cn;class $y extends Cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Zy)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Df),If.multiplyMatrices(n,Df),ea.matrixWorld=If,ea.raycast(e,So);for(let s=0,a=So.length;s<a;s++){const l=So[s];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kf=new F,Of=new F,Ff=new Qe,cc=new Mh,To=new zs;class Ch extends mt{constructor(e=new _n,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)kf.fromBufferAttribute(t,i-1),Of.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kf.distanceTo(Of);e.setAttribute("lineDistance",new Qt(n,1))}return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Ff.copy(i).invert(),cc.copy(e.ray).applyMatrix4(Ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,u=new F,f=new F,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let b=_,y=v-1;b<y;b+=d){const M=g.getX(b),E=g.getX(b+1);if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,E),cc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let b=_,y=v-1;b<y;b+=d){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),cc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Nf=new F,zf=new F;class fl extends Ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nf.fromBufferAttribute(t,i),zf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nf.distanceTo(zf);e.setAttribute("lineDistance",new Qt(n,1))}return this}}class eM extends Ch{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zp extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uf=new Qe,Xc=new Mh,Eo=new zs,Ao=new F;class tM extends mt{constructor(e=new _n,t=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Uf.copy(i).invert(),Xc.copy(e.ray).applyMatrix4(Uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);Ao.fromBufferAttribute(u,m),Bf(Ao,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let g=f,p=d;g<p;g++)Ao.fromBufferAttribute(u,g),Bf(Ao,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bf(o,e,t,n,i,r,s){const a=Xc.distanceSqToPoint(o);if(a<t){const l=new F;Xc.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class Ph extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zr extends Ph{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function zi(o,e,t){return $p(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Co(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function $p(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function nM(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gf(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i}function em(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)}class Ha{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iM extends Ha{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hu,endingEnd:Hu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Vu:r=e,a=2*t-n;break;case Wu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vu:s=e,l=2*n-t;break;case Wu:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,v=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*p+.5*g,y=d*m-d*p;for(let M=0;M!==a;++M)r[M]=_*s[h+M]+v*s[c+M]+b*s[l+M]+y*s[u+M];return r}}class rM extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=s[c+f]*u+s[l+f]*h;return r}}class sM extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=zi(n,r,s),this.values=zi(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){e=!1;break}if(s!==null&&s>l){e=!1;break}s=l}if(i!==void 0&&$p(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){e=!1;break}}return e}optimize(){const e=zi(this.times),t=zi(this.values),n=this.getValueSize(),i=this.getInterpolation()===Nl,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const u=a*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=zi(e,0,s),this.values=zi(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=zi(this.times,0),t=zi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Ds;class Gs extends pi{}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ia;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class tm extends pi{}tm.prototype.ValueTypeName="color";class Na extends pi{}Na.prototype.ValueTypeName="number";class aM extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ii.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Fr extends pi{InterpolantFactoryMethodLinear(e){return new aM(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Ds;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends pi{}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Ia;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends pi{}za.prototype.ValueTypeName="vector";class oM{constructor(e,t=-1,n,i=P_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(cM(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(pi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=nM(l);l=Gf(l,1,h),c=Gf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Na(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return null;const n=function(u,f,d,g,p){if(d.length!==0){const m=[],_=[];em(d,m,_,g),m.length!==0&&p.push(new u(f,m,_))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let v=0;v!==f[g].morphTargets.length;++v){const b=f[g];m.push(b.time),_.push(b.morphTarget===p?1:0)}i.push(new Na(".morphTargetInfluence["+p+"]",m,_))}l=d.length*s}else{const d=".bones["+t[u].name+"]";n(za,d+".position",f,"pos",i),n(Fr,d+".quaternion",f,"rot",i),n(za,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lM(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Na;case"vector":case"vector2":case"vector3":case"vector4":return za;case"color":return tm;case"quaternion":return Fr;case"bool":case"boolean":return Gs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function cM(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lM(o.type);if(o.times===void 0){const t=[],n=[];em(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ks={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class hM{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,s,a),r=!0},this.itemEnd=function(h){s++,i.onProgress!==void 0&&i.onProgress(h,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const uM=new hM;class Va{constructor(e){this.manager=e!==void 0?e:uM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const yi={};class fM extends Error{constructor(e,t){super(e),this.response=t}}class nm extends Va{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ks.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:i});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status,typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yi[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){v();function v(){u.read().then(({done:b,value:y})=>{if(b)_.close();else{p+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let E=0,A=h.length;E<A;E++){const x=h[E];x.onProgress&&x.onProgress(M)}_.enqueue(y),v()}})}}});return new Response(m)}else throw new fM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ks.add(e,c);const h=yi[e];delete yi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=yi[e];if(h===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dM extends Va{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=ks.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=Fa("img");function l(){h(),ks.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class pM extends Va{constructor(e){super(e)}load(e,t,n,i){const r=new Wt,s=new dM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const hc=new Qe,Hf=new F,Vf=new F;class Lh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mM extends Lh{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Oa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yc extends dl{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new mM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wf=new Qe,ta=new F,uc=new F;class gM extends Lh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),uc.copy(n.position),uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uc),n.updateMatrixWorld(),i.makeTranslation(-ta.x,-ta.y,-ta.z),Wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf)}}class _M extends dl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bM extends Lh{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xM extends dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.shadow=new bM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vM extends dl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yM extends Va{constructor(e){super(e),this.isImageBitmapLoader=!0,this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=ks.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ks.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class MM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jf(){return(typeof performance>"u"?Date:performance).now()}const Rh="\\[\\]\\.:\\/",wM=new RegExp("["+Rh+"]","g"),Dh="[^"+Rh+"]",SM="[^"+Rh.replace("\\.","")+"]",TM=/((?:WC+[\/:])*)/.source.replace("WC",Dh),EM=/(WCOD+)?/.source.replace("WCOD",SM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),CM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),PM=new RegExp("^"+TM+EM+AM+CM+"$"),LM=["material","materials","bones","map"];class RM{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wM,"")}static parseTrackName(e){const t=PM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);LM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return;if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material||!e.material.materials)return;e=e.material.materials;break;case"bones":if(!e.skeleton)return;e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material||!e.material.map)return;e=e.material.map;break;default:if(e[n]===void 0)return;e=e[n]}if(c!==void 0){if(e[c]===void 0)return;e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry||!e.geometry.morphAttributes)return;e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=RM;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qf=new F;class Xf extends mt{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new _n,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,l=32;s<l;s++,a++){const c=s/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Qt(i,3));const r=new Ga({fog:!1,toneMapped:!1});this.cone=new fl(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),qf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(qf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class DM extends fl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Oe(n),i=new Oe(i);const r=t/2,s=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=s){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=f===r?n:i;p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3}const h=new _n;h.setAttribute("position",new Qt(l,3)),h.setAttribute("color",new Qt(c,3));const u=new Ga({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM extends fl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _n;i.setAttribute("position",new Qt(t,3)),i.setAttribute("color",new Qt(n,3));const r=new Ga({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Oe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=vh));class kM{constructor(e){}addGui(){const e=GUI.addFolder("controls");e.close(),e.add(this.controls,"enabled").onChange(t=>{this.controls.enabled=t})}disableDamping(){this.controls.enableDamping=!1}update(){this.controls!=null&&this.controls.update()}}var Sa=function(){var o=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++o%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";o=h}var i=(performance||Date).now(),r=i,s=0,a=t(new Sa.Panel("FPS","#0ff","#002")),l=t(new Sa.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Sa.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){s++;var h=(performance||Date).now();if(l.update(h-i,200),h>=r+1e3&&(a.update(s*1e3/(h-r),100),r=h,s=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};Sa.Panel=function(o,e,t){var n=1/0,i=0,r=Math.round,s=r(window.devicePixelRatio||1),a=80*s,l=48*s,c=3*s,h=2*s,u=3*s,f=15*s,d=74*s,g=30*s,p=document.createElement("canvas");p.width=a,p.height=l,p.style.cssText="width:80px;height:48px";var m=p.getContext("2d");return m.font="bold "+9*s+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(o,c,h),m.fillRect(u,f,d,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,f,d,g),{dom:p,update:function(_,v){n=Math.min(n,_),i=Math.max(i,_),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=e,m.fillText(r(_)+" "+o+" ("+r(n)+"-"+r(i)+")",c,h),m.drawImage(p,u+s,f,d-s,g,u,f,d-s,g),m.fillRect(u+d-s,f,s,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+d-s,f,s,r((1-_/v)*g))}}};const OM=Sa;class FM{constructor(e=document.body){if(this.body=e,this.stats=null,MODE){this.stats=new OM;const t=this.stats.domElement,n=t.style;n.position="fixed",n.top="0px",n.left="0px",n.right="initial",n.bottom="initial",n.zIndex="9999",this.body.appendChild(t)}}raf(){this.stats!=null&&this.stats.update()}}class NM{constructor(){this.gui=null,window.GUI=null}toOpen(){window.GUI!=null&&this.gui.open()}toClose(){window.GUI!=null&&this.gui.close()}}function zM(o){return{x:o.x-o.w*.5,y:o.h*.5-o.y}}class UM{constructor(e,t){this.params=e,this.bool=t,this.renderer=null,this.scene=null,this.camera=null,this.controls=null,this.stats=null,this.vector={x:{current:0,target:0},y:{current:0,target:0},ease:.1,coefficient:.2},this.init()}init(){this.setRenderer(),this.setScene(),this.setCamera(),this.bool.isMatchMediaHover&&window.addEventListener("mousemove",this.onMouseMove.bind(this),{passive:!0})}updateRenderer(){this.renderer.setSize(this.params.w,this.params.h),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio))}setRendererLight(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.type=wp,this.renderer.outputEncoding=nt,this.renderer.toneMapping=Ap,this.renderer.toneMappingExposure=1}setRenderer(){this.renderer=new Qp({antialias:!0,alpha:!0}),this.setRendererLight(),this.updateRenderer(),document.getElementById("world").appendChild(this.renderer.domElement)}setScene(){this.scene=new qy,this.scene.background=new Oe("#161616"),MODE&&(this.scene.add(new DM(1e3,100)),this.scene.add(new IM(100)))}updateCamera(){this.camera.aspect=this.params.aspect,this.camera.updateProjectionMatrix()}setCamera(){this.camera=new an(60,this.params.aspect,.1,100),this.camera.position.z=this.bool.isMatchMediaWidth?13:10,this.bool.isMatchMediaWidth&&(this.camera.rotation.y=Math.PI*-.01),this.updateCamera()}onMouseMove(e){const t={x:e.clientX,y:e.clientY,w:this.params.w,h:this.params.h},n=zM(t),i=this.vector.coefficient;this.vector.x.target=n.x/this.params.w*i,this.vector.y.target=n.y/this.params.h*i}raf(){this.vector.x.current=G.lerp(this.vector.x.current,this.vector.x.target,this.vector.ease),this.vector.y.current=G.lerp(this.vector.y.current,this.vector.y.target,this.vector.ease),this.camera.position.x=this.vector.x.current,this.camera.position.y=this.vector.y.current}resize(e){this.params.w=e.w,this.params.h=e.h,this.params.aspect=e.aspect,this.updateRenderer(),this.updateCamera()}}class BM extends Va{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new tw(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Cr.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new nm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Cr.decodeText(new Uint8Array(e,0,4))===im){try{s[et.KHR_BINARY_GLTF]=new nw(e)}catch(h){i&&i(h);return}r=JSON.parse(s[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(Cr.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new mw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);a[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const h=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:s[h]=new VM;break;case et.KHR_DRACO_MESH_COMPRESSION:s[h]=new iw(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:s[h]=new rw;break;case et.KHR_MESH_QUANTIZATION:s[h]=new sw;break;default:u.indexOf(h)>=0&&a[h]}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function GM(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HM{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Oe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xM(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _M(h),c.distance=u;break;case"spot":c=new Yc(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class VM{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Ki}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}}class WM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class XM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,nt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(a[0],a[1],a[2]),Promise.all(r)}}class QM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class JM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Oe(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,nt)),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class $M{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ew{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class tw{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const g of u){const p=new Qe,m=new F,_=new Ii,v=new F(1,1,1),b=new $y(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),b.setMatrixAt(y,p.compose(m,_,v));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);mt.prototype.copy.call(b,g),b.frustumCulled=!1,this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const im="glTF",na=12,Yf={JSON:1313821514,BIN:5130562};class nw{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,na);if(this.header={magic:Cr.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-na,i=new DataView(e,na);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Yf.JSON){const l=new Uint8Array(e,na+r,s);this.content=Cr.decodeText(l)}else if(a===Yf.BIN){const l=na+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const h in s){const u=Kc[h]||h.toLowerCase();a[u]=s[h]}for(const h in e.attributes){const u=Kc[h]||h.toLowerCase();if(s[h]!==void 0){const f=n.accessors[e.attributes[h]],d=xs[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}u(f)},a,c)})})}}class rw{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord,t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sw{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class rm extends Ha{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,p=g-c,m=-2*d+3*f,_=d-f,v=1-m,b=_-f+u;for(let y=0;y!==a;y++){const M=s[p+y+a],E=s[p+y+l]*h,A=s[g+y+a],x=s[g+y]*h;r[y]=v*M+b*E+m*A+_*x}return r}}const aw=new Ii;class ow extends rm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return aw.fromArray(r).normalize().toArray(r),r}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kf={9728:zt,9729:fn,9984:Hc,9985:Pp,9986:Uo,9987:Ir},Qf={33071:Un,33648:tl,10497:Ls},fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lw={CUBICSPLINE:void 0,LINEAR:Ds,STEP:Ia},dc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Ph({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rr})),o.DefaultMaterial}function ia(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(o,e){e.extras!==void 0&&typeof e.extras=="object"&&Object.assign(o.userData,e.extras)}function hw(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;s.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),r&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function uw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}}}function fw(o){const e=o.extensions&&o.extensions[et.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Jf(e.attributes):t=o.indices+":"+Jf(o.attributes)+":"+o.mode,t}function Jf(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Qc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const pw=new Qe;class mw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new pM(this.options.manager):this.textureLoader=new yM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};ia(r,a,i),Gi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,h]of s.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Cr.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=fc[i.type],a=xs[i.componentType],l=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new cn(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=fc[i.type],c=xs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==u){const _=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let b=t.cache.get(v);b||(p=new c(a,_*d,i.count*d/h),b=new Xy(p,d/h),t.cache.add(v,b)),m=new Eh(b,l,f%d/h,g)}else a===null?p=new c(i.count*l):p=new c(a,f,i.count*l),m=new cn(p,l,g);if(i.sparse!==void 0){const _=fc.SCALAR,v=xs[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new v(s[1],b,i.sparse.count*_),E=new c(s[2],y,i.sparse.count*l);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,x=M.length;A<x;A++){const S=M[A];if(m.setX(S,E[A*l]),l>=2&&m.setY(S,E[A*l+1]),l>=3&&m.setZ(S,E[A*l+2]),l>=4&&m.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||a.name||"";const f=(r.samplers||{})[s.sampler]||{};return h.magFilter=Kf[f.magFilter]||fn,h.minFilter=Kf[f.minFilter]||Ir,h.wrapS=Qf[f.wrapS]||Ls,h.wrapT=Qf[f.wrapT]||Ls,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:s.mimeType});return l=a.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Wt(p);m.needsUpdate=!0,f(m)}),t.load(Cr.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=s.mimeType||dw(s.uri),u}).catch(function(u){throw u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&(t==="aoMap"&&n.texCoord==1),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zp,fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ga,fi.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ph}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const u=i[et.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ll);const h=r.alphaMode||dc.OPAQUE;if(h===dc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===dc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Ki&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}return r.occlusionTexture!==void 0&&s!==Ki&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Ki&&(a.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Ki&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){const u=new s(a);return r.name&&(u.name=r.name),Gi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ia(i,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zf(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=fw(c),u=i[h];if(u)s.push(u.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Zf(new _n,c,t),i[h]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?cw(this.cache):this.getDependency("material",s[l].material);a.push(h)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const p=h[d],m=s[d];let _;const v=c[d];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new Ky(p,v):new Cn(p,v),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?_.geometry=$f(_.geometry,L_):m.mode===Nn.TRIANGLE_FAN&&(_.geometry=$f(_.geometry,Rp));else if(m.mode===Nn.LINES)_=new fl(p,v);else if(m.mode===Nn.LINE_STRIP)_=new Ch(p,v);else if(m.mode===Nn.LINE_LOOP)_=new eM(p,v);else if(m.mode===Nn.POINTS)_=new tM(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&uw(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Gi(_,r),m.extensions&&ia(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return u[0];const f=new Pi;t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(i)return n.type==="perspective"?t=new an(Bo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){a.push(u);const f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}}return new Ah(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],f=n.samplers[u.sampler],d=u.target,g=d.node,p=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),s.push(this.getDependency("accessor",m)),a.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let _=0,v=h.length;_<v;_++){const b=h[_],y=u[_],M=f[_],E=d[_],A=g[_];if(b===void 0)continue;b.updateMatrix();let x;switch(Ui[A.path]){case Ui.weights:x=Na;break;case Ui.rotation:x=Fr;break;case Ui.position:case Ui.scale:default:x=za;break}const S=b.name?b.name:b.uuid,L=E.interpolation!==void 0?lw[E.interpolation]:Ds,O=[];Ui[A.path]===Ui.weights?b.traverse(function(I){I.morphTargetInfluences&&O.push(I.name?I.name:I.uuid)}):O.push(S);let B=M.array;if(M.normalized){const I=Qc(B.constructor),R=new Float32Array(B.length);for(let z=0,V=B.length;z<V;z++)R[z]=B[z]*I;B=R}for(let I=0,R=O.length;I<R;I++){const z=new x(O[I]+"."+Ui[A.path],y.array,B,L);E.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(Q){const U=this instanceof Fr?ow:rm;return new U(this.times,this.values,this.getValueSize()/3,Q)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(z)}}const m=n.name?n.name:"animation_"+e;return new oM(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)});const c=[],h=r.children||[];for(let f=0,d=h.length;f<d;f++)c.push(i.getDependency("node",h[f]));const u=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(c),u])}().then(function(a){const l=a[0],c=a[1],h=a[2];let u;if(r.isBone===!0?u=new Jp:l.length>1?u=new Pi:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let f=0,d=l.length;f<d;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=s),Gi(u,r),r.extensions&&ia(n,u,r),r.matrix!==void 0){const f=new Qe;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,pw)});for(let f=0,d=c.length;f<d;f++)u.add(c[f]);return u})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pi;n.name&&(r.name=i.createUniqueName(n.name)),Gi(r,n),n.extensions&&ia(t,r,n);const s=n.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof fi||f instanceof Wt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}}function gw(o,e,t){const n=e.attributes,i=new Ns;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const h=Qc(xs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else return}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=Qc(xs[f.componentType]);l.multiplyScalar(p)}a.max(l)}}}i.expandByVector(a)}o.boundingBox=i;const s=new zs;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function Zf(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=Kc[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return Gi(o,e),gw(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hw(o,e.targets,t):o})}function $f(o,e){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return o}const n=t.count-2,i=[];if(e===Rp)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3;const r=o.clone();return r.setIndex(i),r}var _w=function(){var o="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:o,r,s=WebAssembly.instantiate(a(i),{}).then(function(_){r=_.instance,r.exports.__wasm_call_ctors()});function a(_){for(var v=new Uint8Array(_.length),b=0;b<_.length;++b){var y=_.charCodeAt(b);v[b]=y>96?y-97:y>64?y-39:y+4}for(var M=0,b=0;b<_.length;++b)v[M++]=v[b]<60?n[v[b]]:(v[b]-60)*64+v[++b];return v.buffer.slice(0,M)}function l(_,v,b,y,M,E){var A=r.exports.sbrk,x=b+3&-4,S=A(x*y),L=A(M.length),O=new Uint8Array(r.exports.memory.buffer);O.set(M,L);var B=_(S,b,y,L,M.length);if(B==0&&E&&E(S,x,y),v.set(O.subarray(S,S+b*y)),A(S-A(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(_){var v={object:new Worker(_),pending:0,requests:{}};return v.object.onmessage=function(b){var y=b.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function g(_){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),b=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(b),M=0;M<_;++M)u[M]=d(y);URL.revokeObjectURL(y)}function p(_,v,b,y,M){for(var E=u[0],A=1;A<u.length;++A)u[A].pending<E.pending&&(E=u[A]);return new Promise(function(x,S){var L=new Uint8Array(b),O=f++;E.pending+=_,E.requests[O]={resolve:x,reject:S},E.object.postMessage({id:O,count:_,size:v,source:L,mode:y,filter:M},[L.buffer])})}function m(_){s.then(function(){var v=_.data;try{var b=new Uint8Array(v.count*v.size);l(r.exports[v.mode],b,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:b},[b.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:s,supported:!0,useWorkers:function(_){g(_)},decodeVertexBuffer:function(_,v,b,y,M){l(r.exports.meshopt_decodeVertexBuffer,_,v,b,y,r.exports[c[M]])},decodeIndexBuffer:function(_,v,b,y){l(r.exports.meshopt_decodeIndexBuffer,_,v,b,y)},decodeIndexSequence:function(_,v,b,y){l(r.exports.meshopt_decodeIndexSequence,_,v,b,y)},decodeGltfBuffer:function(_,v,b,y,M,E){l(r.exports[h[M]],_,v,b,y,r.exports[c[E]])},decodeGltfBufferAsync:function(_,v,b,y,M){return u.length>0?p(_,v,b,h[y],c[M]):s.then(function(){var E=new Uint8Array(_*v);return l(r.exports[h[y]],E,_,v,b,r.exports[c[M]]),E})}}}();const sm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Wa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){}dispose(){}}const bw=new hl(-1,1,1,-1,0,1),Ih=new _n;Ih.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3));Ih.setAttribute("uv",new Qt([0,2,0,0,2,0],2));class am{constructor(e){this._mesh=new Cn(Ih,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class om extends Wa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=il.clone(e.uniforms),this.material=new Pn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new am(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ed extends Wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class xw extends Wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vw{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ze);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new om(sm),this.clock=new MM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ed!==void 0&&(s instanceof ed?n=!0:s instanceof xw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yw extends Wa{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}}const Mw={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Os extends Wa{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(r,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new ri(r,s);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new ri(r,s);d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),s=Math.round(s/2)}const a=Mw;this.highPassUniforms=il.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new ze(r,s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=sm;this.copyUniforms=il.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Pn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new Ki,this.fsQuad=new am(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new ze(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new Pn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Os.BlurDirectionX=new ze(1,0);Os.BlurDirectionY=new ze(0,1);var ww=`varying vec2 vUv;
varying float vTime;
uniform sampler2D uTexture;

float rand (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}
float anime(float f){
  float speed = 5.;
  return sin(f * 10. + vTime * speed) * .5;
}
float whiteNoise(vec2 uv){
  float o = anime(rand(vUv));
  return o;
}

void main( void ) {
  vec2 uv = vUv;

  float r = texture2D(uTexture, uv).r;
  float g = texture2D(uTexture, uv + 0.0025).g;
  float b = texture2D(uTexture, uv + 0.0025).b;
  vec4 t = vec4(r,g,b,1.0);

  float n = whiteNoise(uv) * .15;

  gl_FragColor = vec4(t.rgb + abs(vec3(n)), 1.0);
}`,Sw=`varying vec2 vUv;
varying float vTime;
uniform float uTime;

void main(){
  vUv = uv;
  vTime = uTime;

  float x = position.x;
  float y = position.y;
  float z = position.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x, y, z), 1.0);
}`;class Tw{constructor(e,t){this.stage=e,this.params=t,this.composer=null,this.customPass=null}setComposer(){if(this.renderPass=new yw(this.stage.scene,this.stage.camera),this.bloomPass=new Os(new ze(this.params.w,this.params.h),0,1,0),this.bloomPass.threshold=0,this.bloomPass.radius=3,this.bloomPass.strength=.25,GUI!=null){const t=GUI.addFolder("bloom");t.add(this.bloomPass,"enabled").name("enabled").onChange(n=>{this.bloomPass.enabled=n}),t.add(this.bloomPass,"threshold",0,5).name("threshold").onChange(n=>{this.bloomPass.bloomPass=n}),t.add(this.bloomPass,"radius",0,5).name("radius").onChange(n=>{this.bloomPass.radius=n}),t.add(this.bloomPass,"strength",0,5).name("strength").onChange(n=>{this.bloomPass.strength=n}),t.add(this.stage.renderer,"toneMappingExposure",0,5).name("exposuregth").onChange(n=>{this.stage.renderer.strentoneMappingExposuregth=n})}const e={uniforms:{uTexture:{type:"t",value:null},uTime:{type:"f",value:0}},fragmentShader:ww,vertexShader:Sw};this.customPass=new om(e,"uTexture"),this.composer=new vw(this.stage.renderer),this.composer.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.customPass)}raf(e){this.composer!=null?(this.composer.render(),this.customPass.material.uniforms.uTime.value=e):this.stage.renderer.render(this.stage.scene,this.stage.camera)}setEnterAnimation(){this.bloomPass.strength=5,this.stage.renderer.strentoneMappingExposuregth=5}toEnterAnimation(){GSAP.to(this.bloomPass,{duration:1,strength:.25}),GSAP.to(this.stage.renderer,{duration:1,strentoneMappingExposuregth:1})}init(){this.setComposer(),this.setEnterAnimation()}}function ns(o){return new Oe(o)}const Qn=Math.PI,kn=.2;class Ew{constructor(e,t,n,i){this.body=e,this.stage=i,this.params=t,this.bool=n,this.isPageEnter=!1,this.isOnced=!1,this.wingPower={value1:kn,value2:kn,value3:0},this.fanGroup=null,this.fanUpperGroup=null,this.fanBody=null,this.fanWing=null,this.fanFoundation=null,this.world=null,this.cushion1=null,this.cushion2=null,this.cushion3=null,this.kakejiku=null,this.pp=new Tw(this.stage,this.params),this.glbLoader=new BM,this.glbLoader.setMeshoptDecoder(_w),this.init()}getEuler2Quaternion(e=0,t=0,n=0){const i=new Ii;return i.setFromEuler(new Us(Bo.degToRad(e),Bo.degToRad(t),Bo.degToRad(n))),i}getLoadGlb(e){return this.glbLoader.loadAsync(e)}updateLoadingText(e){this.loadingText.innerHTML=e}async init(){this.loadingText=document.getElementById("js-loadingText"),this.setLight(),this.setFanGroup(),this.world=await this.getLoadGlb("assets/model/world-meshopt.glb"),this.setWorld(),this.updateLoadingText("Loading... 1/6"),this.fanBody=await this.getLoadGlb("assets/model/fan_body-meshopt.glb"),this.setFanBody(),this.updateLoadingText("Loading... 2/6"),this.fanWing=await this.getLoadGlb("assets/model/fan_wing-meshopt.glb"),this.setFanWing(),this.updateLoadingText("Loading... 3/6"),this.fanFoundation=await this.getLoadGlb("assets/model/fan_foot-meshopt.glb"),this.setFanFoundation(),this.updateLoadingText("Loading... 4/6"),this.setFanAnimation(),this.kakejiku=await this.getLoadGlb("assets/model/kakejiku-meshopt.glb"),this.setKakejiku(),this.updateLoadingText("Loading... 5/6"),this.cushion1=await this.getLoadGlb("assets/model/cushion-meshopt.glb"),this.setCushion(),this.updateLoadingText("Loading... 6/6"),this.pp.init(),this.setDom(),this.isPageEnter=!0}setDom(){this.powerCount=2,this.isPowerOn=!0,this.wingPowerPlusBtn=document.getElementById("js-wingPowerPlusBtn"),this.wingPowerPlusBtn.addEventListener("click",t=>{if(this.isPowerOn)switch(this.powerCount++,this.powerCount>3&&(this.powerCount=3),this.body.setAttribute("data-power",this.powerCount),this.powerCount){case 1:GSAP.to(this.wingPower,{duration:1,value1:kn});break;case 2:GSAP.to(this.wingPower,{duration:1,value2:kn});break;case 3:GSAP.to(this.wingPower,{duration:1,value3:kn});break}}),this.wingPowerMinusBtn=document.getElementById("js-wingPowerMinusBtn"),this.wingPowerMinusBtn.addEventListener("click",t=>{if(this.isPowerOn)switch(this.powerCount--,this.powerCount<1&&(this.powerCount=1),this.body.setAttribute("data-power",this.powerCount),this.powerCount){case 1:GSAP.to(this.wingPower,{duration:1,value1:kn});break;case 2:GSAP.to(this.wingPower,{duration:1,value2:0});break;case 3:GSAP.to(this.wingPower,{duration:1,value3:0});break}}),this.electricityPowerBtn=document.getElementById("js-electricityPowerBtn"),this.electricityPowerBtn.addEventListener("click",t=>{if(this.isPowerOn)this.isPowerOn=!1,GSAP.to(this.wingPower,{duration:3,value1:0,value2:0,value3:0}),this.fanWingTl.pause();else{switch(this.isPowerOn=!0,this.powerCount){case 1:GSAP.to(this.wingPower,{duration:1,value1:kn});break;case 2:GSAP.to(this.wingPower,{duration:1,value1:kn,value2:kn});break;case 3:GSAP.to(this.wingPower,{duration:1,value1:kn,value2:kn,value3:kn});break}this.fanWingTl.resume()}})}setWorld(){this.world.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.world.scene.rotation.y=Qn+Qn*.25,this.world.scene.position.y=-2,this.stage.scene.add(this.world.scene)}setFanGroup(){this.fanGroup=new Pi,this.fanGroup.position.set(-2,1,1),this.fanGroup.rotation.y=Qn+Qn*.25,this.fanGroup.scale.set(1.2,1.2,1.2),this.stage.scene.add(this.fanGroup),this.fanUpperGroup=new Pi,this.fanGroup.add(this.fanUpperGroup)}setFanBody(){this.fanBody.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.fanUpperGroup.add(this.fanBody.scene)}setFanWing(){this.fanWing.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.fanUpperGroup.add(this.fanWing.scene)}setFanFoundation(){this.fanFoundation.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.fanGroup.add(this.fanFoundation.scene)}setCushion(){this.cushion1.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.cushion1.scene.position.set(0,-1.75,-3),this.cushion2=this.cushion1.scene.clone(),this.cushion2.position.set(2.5,-1.75,-2.8),this.cushion2.rotation.y=Qn*.25,this.cushion3=this.cushion1.scene.clone(),this.cushion3.position.set(1,-1.6,-2),this.cushion3.rotation.y=Qn*.1,this.cushion3.rotation.x=Qn*.1,this.stage.scene.add(this.cushion1.scene),this.stage.scene.add(this.cushion2),this.stage.scene.add(this.cushion3)}setKakejiku(){this.kakejiku.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.kakejiku.scene.rotation.y=Qn+Qn*.25,this.kakejiku.scene.position.x=8,this.kakejiku.scene.position.y=3,this.kakejiku.scene.position.z=-16,this.stage.scene.add(this.kakejiku.scene)}setFanAnimation(){const e=this.getEuler2Quaternion(0,120,0),t=10,n="power1.inOut";GSAP.set(this.fanUpperGroup.rotation,{y:e.y*-1}),this.fanWingTl=GSAP.timeline({repeat:-1,yoyo:!0,repeatDelay:.5}),this.fanWingTl.to(this.fanUpperGroup.rotation,{duration:t,y:e.y,ease:n},"<").to(this.fanUpperGroup.rotation,{duration:t,y:e.y*-1,ease:n})}toFanAnimation(){this.fanWing!=null&&(this.fanWing.scene.rotation.z+=this.wingPower.value1+this.wingPower.value2+this.wingPower.value3)}setLight(){if(this.spotLight1=new Yc(ns("#a6ff80"),1),this.spotLight1.angle=Qn/6,this.spotLight1.penumbra=1,this.spotLight1.decay=2,this.spotLight1.castShadow=!0,this.spotLight1.shadow.mapSize.width=2048,this.spotLight1.shadow.mapSize.height=2048,this.spotLight1.shadow.camera.near=1,this.spotLight1.shadow.focus=1,this.spotLight1.shadow.bias=-1e-4,this.spotLight1.position.set(10,12.25,25),this.spotLight1.distance=160,this.spotLight1.shadow.camera.far=160,this.stage.scene.add(this.spotLight1),MODE){const t=new Xf(this.spotLight1);this.stage.scene.add(t)}if(this.spotLight2=new Yc(ns("#ff8a9b"),1),this.spotLight2.angle=Qn/-6,this.spotLight2.penumbra=1,this.spotLight2.decay=2,this.spotLight2.castShadow=!0,this.spotLight2.shadow.mapSize.width=2048,this.spotLight2.shadow.mapSize.height=2048,this.spotLight2.shadow.camera.near=1,this.spotLight2.shadow.focus=1,this.spotLight2.shadow.bias=-1e-4,this.spotLight2.position.set(20,15,35),this.spotLight2.distance=160,this.spotLight2.shadow.camera.far=160,this.stage.scene.add(this.spotLight2),MODE){const t=new Xf(this.spotLight2);this.stage.scene.add(t)}if(this.ambientLight=new vM(ns("#ff773d"),.2),this.stage.scene.add(this.ambientLight),GUI!=null){if(this.ambientLight){const t=GUI.addFolder("ambientlight");t.close(),t.addColor(this.ambientLight,"color").name("color").onChange(n=>{this.ambientLight.color=ns(n)}),t.add(this.ambientLight,"intensity",0,1).name("intensity").onChange(n=>{this.ambientLight.intensity=n})}if(this.spotLight1){const t=GUI.addFolder("spotligth");t.close(),t.addColor(this.spotLight1,"color").name("color").onChange(n=>{this.spotLight1.color=ns(n)}),t.add(this.spotLight1,"intensity",0,20).name("intensity").onChange(n=>{this.spotLight1.intensity=n}),t.add(this.spotLight1,"penumbra",0,10).name("penumbra").onChange(n=>{this.spotLight1.penumbra=n}),t.add(this.spotLight1,"decay",0,10).name("decay").onChange(n=>{this.spotLight1.decay=n}),t.add(this.spotLight1.shadow,"focus",0,10).name("focus").onChange(n=>{this.spotLight1.shadow.focus=n}),t.add(this.spotLight1,"distance",0,200).name("distance").onChange(n=>{this.spotLight1.distance=n}),t.add(this.spotLight1.shadow.camera,"far",0,200).name("far").onChange(n=>{this.spotLight1.shadow.camera.far=n}),t.add(this.spotLight1.position,"x",0,100).name("position.x").onChange(n=>{this.spotLight1.position.x=n}),t.add(this.spotLight1.position,"y",0,100).name("position.y").onChange(n=>{this.spotLight1.position.y=n}),t.add(this.spotLight1.position,"z",0,100).name("position.z").onChange(n=>{this.spotLight1.position.z=n})}if(this.spotLight2){const t=GUI.addFolder("spotlight2");t.close(),t.addColor(this.spotLight2,"color").name("color").onChange(n=>{this.spotLight2.color=ns(n)}),t.add(this.spotLight2,"intensity",0,20).name("intensity").onChange(n=>{this.spotLight2.intensity=n}),t.add(this.spotLight2,"penumbra",0,10).name("penumbra").onChange(n=>{this.spotLight2.penumbra=n}),t.add(this.spotLight2,"decay",0,10).name("decay").onChange(n=>{this.spotLight2.decay=n}),t.add(this.spotLight2.shadow,"focus",0,10).name("focus").onChange(n=>{this.spotLight2.shadow.focus=n}),t.add(this.spotLight2,"distance",0,200).name("distance").onChange(n=>{this.spotLight2.distance=n}),t.add(this.spotLight2.shadow.camera,"far",0,200).name("far").onChange(n=>{this.spotLight2.shadow.camera.far=n}),t.add(this.spotLight2.position,"x",-100,100).name("position.x").onChange(n=>{this.spotLight2.position.x=n}),t.add(this.spotLight2.position,"y",-100,100).name("position.y").onChange(n=>{this.spotLight2.position.y=n}),t.add(this.spotLight2.position,"z",-100,100).name("position.z").onChange(n=>{this.spotLight2.position.z=n})}}}resize(e){}raf(e){this.toFanAnimation(),this.pp.raf(e),this.isPageEnter&&!this.isOnced&&(this.isOnced=!0,(async()=>(await G.delay(300),this.body.setAttribute("data-status","enter"),await G.delay(0),this.pp!=null&&this.pp.toEnterAnimation()))())}}class Aw{constructor(e,t,n){this.body=e,this.params=t,this.bool=n,this.isInit=!1,this.gui=new NM,this.stats=new FM(e),this.stage=new UM(t,n),this.mesh=new Ew(e,t,n,this.stage),this.controls=new kM(this.stage)}raf(e){this.isInit&&(this.mesh.raf(e),this.stage.raf(),this.controls.update(),this.stats.raf())}resize(e){this.isInit&&(this.bool.isMatchMediaWidth=e.isMatchMediaWidth,this.params.w=e.w,this.params.h=e.h,this.params.aspect=e.aspect,this.params.shorter=e.shorter,this.params.longer=e.longer,this.mesh.resize(e),this.stage.resize(e))}init(){this.isInit=!0}}dh.registerPlugin(Je);window.MODE=!1;window.GSAP=dh;window.ScrollTrigger=Je;window.G=new Ug;window.addEventListener("DOMContentLoaded",o=>{const t=document.body,n=new Bg(t),i={w:window.innerWidth,h:window.innerHeight,beforeWidth:window.innerWidth,longer:0,shorter:0,aspect:0};i.aspect=i.w/i.h,i.longer=i.w>i.h?i.w:i.h,i.shorter=i.w<i.h?i.w:i.h;const r={isMatchMediaWidth:window.matchMedia("(max-width: 768px)").matches,isMatchMediaHover:window.matchMedia("(hover: hover)").matches,isPc:n.data.device==="pc",isIphone:n.data.iphone==="iphone",isDeve:MODE},s={resize:null,orientation:null};mu(i.w,i.h);const a=new Aw(t,i,r),l=()=>{const u=performance.now()/1e3;a.raf(u)},c=()=>{r.isMatchMediaWidth=window.matchMedia("(max-width: 768px)").matches,i.w=window.innerWidth,i.h=window.innerHeight,i.aspect=i.w/i.h,i.longer=i.w>i.h?i.w:i.h,i.shorter=i.w<i.h?i.w:i.h;const u={isMatchMediaWidth:r.isMatchMediaWidth,w:i.w,h:i.h,aspect:i.aspect,longer:i.longer,shorter:i.shorter};mu(i.w,i.h),a.resize(u),clearTimeout(s.resize),s.resize=setTimeout(()=>{(()=>{const d=window.innerWidth;d>768&&i.beforeWidth<769&&window.location.reload(),d<769&&i.beforeWidth>769&&window.location.reload(),i.beforeWidth=d})()},300)},h=()=>{window.orientation!=0&&i.w<i.h&&(clearTimeout(s.orientation),s.orientation=setTimeout(()=>{window.location.reload()},300))};document.fonts.ready.then(u=>{a.init(),GSAP.ticker.add(l),GSAP.ticker.fps(30),c(),window.addEventListener("resize",c,{passive:!0}),r.isPc||window.addEventListener("orientationchange",h)})});
