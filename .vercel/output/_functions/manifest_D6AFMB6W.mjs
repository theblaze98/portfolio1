import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_BxOa3Z9M.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_bYya_UDS.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/makigawa/Documents/projects/portfolio1/","cacheDir":"file:///C:/Users/makigawa/Documents/projects/portfolio1/node_modules/.astro/","outDir":"file:///C:/Users/makigawa/Documents/projects/portfolio1/dist/","srcDir":"file:///C:/Users/makigawa/Documents/projects/portfolio1/src/","publicDir":"file:///C:/Users/makigawa/Documents/projects/portfolio1/public/","buildClientDir":"file:///C:/Users/makigawa/Documents/projects/portfolio1/dist/client/","buildServerDir":"file:///C:/Users/makigawa/Documents/projects/portfolio1/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.BlCM2xei.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/makigawa/Documents/projects/portfolio1/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/makigawa/Documents/projects/portfolio1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DNJ7CNEM.mjs","\u0000@astrojs-manifest":"manifest_D6AFMB6W.mjs","C:/Users/makigawa/Documents/projects/portfolio1/src/components/Header.tsx":"_astro/Header.BhjILEdx.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/Hero.tsx":"_astro/Hero.ClP9WEIA.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/TechStack.tsx":"_astro/TechStack.D-ii-ai7.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/Projects.tsx":"_astro/Projects.DKOE3mLs.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/Experience.tsx":"_astro/Experience.ChcqjaJC.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/About.tsx":"_astro/About.0u48hX1k.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/Contact.tsx":"_astro/Contact.X_YKQwZD.js","C:/Users/makigawa/Documents/projects/portfolio1/src/components/Footer.tsx":"_astro/Footer.BzVjmxmO.js","@astrojs/react/client.js":"_astro/client.D89mNqWF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/img.DAjffwNs.webp","/_astro/index.BlCM2xei.css","/favicon.jpeg","/image.webp","/images/modern-reloj.webp","/images/notes-app.webp","/images/stack-builder.webp","/_astro/About.0u48hX1k.js","/_astro/client.D89mNqWF.js","/_astro/Contact.X_YKQwZD.js","/_astro/createLucideIcon.BCvcBoMY.js","/_astro/Experience.ChcqjaJC.js","/_astro/Footer.BzVjmxmO.js","/_astro/github.fUzraqlI.js","/_astro/Header.BhjILEdx.js","/_astro/Hero.ClP9WEIA.js","/_astro/index.Dy6lLLXr.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/mail.DcRl8kRg.js","/_astro/Projects.DKOE3mLs.js","/_astro/proxy.DbN9s5xZ.js","/_astro/TechStack.D-ii-ai7.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Ooq87VuDgHTOaWTmgGTC/tvDXEtR9dz9eeOMLvxIg3E="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
