if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>a(e,r),f={module:{uri:r},exports:t,require:o};s[r]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(d(...e),t)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.4a830a5f.css",revision:"906f35a7849b858e6529f036e179bd91"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/14.77a42d1a.js",revision:"8914731f760eea5f7086eadb00d84c17"},{url:"assets/js/app.81e97059.js",revision:"55cc0032d2b96813434823eb64ddf545"},{url:"assets/js/layout-Blog.6f041565.js",revision:"ede9b18822680e31641b6194ba7e47bc"},{url:"assets/js/layout-Layout.0eb33d35.js",revision:"f166a5d6403193367c111604a102d4c5"},{url:"assets/js/layout-NotFound.483d27af.js",revision:"a6536c2412a54369a1f519ab72097b39"},{url:"assets/js/layout-Slide.2977614e.js",revision:"c4ff461f49a57348a8c45e45662e5ac4"},{url:"assets/js/page-Configuration.a25e5626.js",revision:"40e521320f9fcc327a62d467e23e740e"},{url:"assets/js/page-GettingStarted.2072a5ca.js",revision:"9001797b190817618ca60d53aaff9ffb"},{url:"assets/js/page-Home.1f0fca4e.js",revision:"b1f660f9e671cd0832fa39bcd0fea0ac"},{url:"assets/js/page-Installation.6167675e.js",revision:"5e7e3f0a9975b7ddf2b7d82702406a82"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4778a2d1.js",revision:"3e37a09dd0a21b8dc025da8bb2233139"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.4ef0b418.js",revision:"bfe03ef7114dba5cc7334aa556e7f36f"},{url:"assets/js/vendors~layout-Layout.56327c76.js",revision:"ba90bb4e53ce7e794a247a503db21f8e"},{url:"assets/js/vendors~photo-swipe.c3832eea.js",revision:"ba20a93959bf8bf6e1da212c2f16cc70"},{url:"404.html",revision:"e388482ae0a92ec680b86aa7f68ade6f"},{url:"get-started/configuration/index.html",revision:"dd5b0dd45d2ca3d41976321eec20cb05"},{url:"get-started/index.html",revision:"ae36d13451bd097a42feb3625c77bb69"},{url:"get-started/installation/index.html",revision:"f7bdc0c11c7b7128f9cb04c61c9de91e"},{url:"index.html",revision:"cd11a8256864e9eb2638db0f3f78d0d5"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
