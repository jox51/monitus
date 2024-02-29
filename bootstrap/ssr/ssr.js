import { unref, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head, Link, useForm, createInertiaApp } from "@inertiajs/vue3";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import { useToast } from "vue-toastification";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$5 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "About Us" }, null, _parent));
      _push(` About <!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Paginate",
  __ssrInlineRender: true,
  props: ["next", "prev", "current", "last", "from", "to", "total"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" }, _attrs))}><div class="flex flex-1 justify-between sm:hidden">`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.prev,
        class: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Previous`);
          } else {
            return [
              createTextVNode("Previous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: __props.next,
        class: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next`);
          } else {
            return [
              createTextVNode("Next")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700"> Showing ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(__props.from)}</span> ${ssrInterpolate(" ")} to ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(__props.to)}</span> ${ssrInterpolate(" ")} of ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(__props.total)}</span> ${ssrInterpolate(" ")} results </p></div><div><nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.prev,
        class: ["relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0", __props.prev === null ? "text-gray-200 cursor-default" : "text-gray-500 cursor-pointed hover:border-gray-300 hover:text-gray-700"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Previous</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeftIcon), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Previous"),
              createVNode(unref(ChevronLeftIcon), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.last, (num) => {
        _push(`<a${ssrRenderAttr("href", __props.next)} aria-current="page" class="${ssrRenderClass(__props.current === num ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0")}">${ssrInterpolate(num)}</a>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.next,
        class: ["relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0", __props.next === null ? "text-gray-200 cursor-default" : "text-gray-500 cursor-pointed hover:border-gray-300 hover:text-gray-700"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Next</span>`);
            _push2(ssrRenderComponent(unref(ChevronRightIcon), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Next"),
              createVNode(unref(ChevronRightIcon), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Paginate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "MonitorList",
  __ssrInlineRender: true,
  props: ["monitors"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="py-8 flex justify-between"><div class="flex flex-col mb-2"><h1 class="text-2xl font-semibold">Sites</h1><p class="mt-2 text-sm text-gray-500"> A list of all the sites in your account including their name, title, email and role. </p></div><div class="py-4"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mb-4 bg-indigo-600 text-white"> Add Sites </button></div></div></div><div class="flex flex-col"><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th><th scope="col" class="relative px-6 py-3"><span class="sr-only">Edit</span></th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
      ssrRenderList(__props.monitors.data, (monitor) => {
        _push(`<tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${ssrInterpolate(monitor.site_name)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(monitor.site_url)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(monitor.status)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(monitor.role)}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        next: __props.monitors.next_page_url,
        prev: __props.monitors.prev_page_url,
        current: __props.monitors.current_page,
        last: __props.monitors.last_page,
        from: __props.monitors.from,
        to: __props.monitors.to,
        total: __props.monitors.total,
        class: "mt-4"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/home/MonitorList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Home",
  __ssrInlineRender: true,
  props: ["monitors"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ monitors: __props.monitors }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const form = useForm({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm"><img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"><h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2></div><div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="#" method="POST"><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label><div class="mt-2"><input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${ssrRenderAttr("value", unref(form).email)}></div>`);
      if (unref(form).errors.email) {
        _push(`<small class="text-red-500">${ssrInterpolate(unref(form).errors.email)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><div class="flex items-center justify-between"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label></div><div class="mt-2"><input id="password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${ssrRenderAttr("value", unref(form).password)}></div>`);
      if (unref(form).errors.password) {
        _push(`<small class="text-red-500">${ssrInterpolate(unref(form).errors.password)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>Sign in</button></div></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Create Site</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Site/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/Home.vue": __vite_glob_0_1, "./Pages/Login.vue": __vite_glob_0_2, "./Pages/Site/Create.vue": __vite_glob_0_3 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
