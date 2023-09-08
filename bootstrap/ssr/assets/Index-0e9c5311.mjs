import { mergeProps, unref, useSSRContext, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AuthenticatedLayout-35f73fd5.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./TextInput-295c00eb.mjs";
import Swal from "sweetalert2";
import "./ApplicationLogo-6bd635f3.mjs";
const _sfc_main$1 = {
  __name: "ModalSong",
  __ssrInlineRender: true,
  props: {
    song: { type: Object, default: () => ({}) },
    modal: String,
    title: String,
    op: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.song.id,
      title: props.song.title,
      autor: props.song.autor,
      album: props.song.album
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade",
        id: __props.modal,
        tabindex: "-1",
        "aria-hidden": "true"
      }, _attrs))}><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><label class="h5">${ssrInterpolate(__props.title)}</label><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><form>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "id" + __props.op,
        type: "hidden",
        name: "id",
        modelValue: unref(form).id,
        "onUpdate:modelValue": ($event) => unref(form).id = $event
      }, null, _parent));
      _push(`<div class="input-group mb-3"><span class="input-group-text"><i class="fa-solid fa-music"></i></span>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "title" + __props.op,
        class: "form-control",
        type: "text",
        name: "title",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        maxlength: "120",
        placeholder: "Canción",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(form).errors.title) {
        _push(`<div class="text-sm text-danger">${ssrInterpolate(unref(form).errors.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="input-group mb-3"><span class="input-group-text"><i class="fa-solid fa-user"></i></span>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "autor" + __props.op,
        class: "form-control",
        type: "text",
        name: "autor",
        modelValue: unref(form).autor,
        "onUpdate:modelValue": ($event) => unref(form).autor = $event,
        maxlength: "100",
        placeholder: "Autor",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(form).errors.autor) {
        _push(`<div class="text-sm text-danger">${ssrInterpolate(unref(form).errors.autor)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="input-group mb-3"><span class="input-group-text"><i class="fa-solid fa-compact-disc"></i></span>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "album" + __props.op,
        class: "form-control",
        type: "text",
        name: "album",
        modelValue: unref(form).album,
        "onUpdate:modelValue": ($event) => unref(form).album = $event,
        maxlength: "80",
        placeholder: "Album",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(form).errors.album) {
        _push(`<div class="text-sm text-danger">${ssrInterpolate(unref(form).errors.album)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-grid mx-auto"><button class="btn btn-success"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}><i class="fa-solid fa-floppy-disk"></i> Guardar </button></div></form></div><div class="modal-footer"><button class="btn btn-dark" type="submit"${ssrRenderAttr("id", "cerrar" + __props.op)} data-bs-dismiss="modal">Cerrar</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ModalSong.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    songs: { type: Object }
  },
  setup(__props) {
    const form = useForm({});
    const eliminar = (id, name) => {
      const swalWithBootstrapButtons = Swal.mixin({
        buttonsStyling: true
      });
      swalWithBootstrapButtons.fire({
        title: "Seguro de eliminar la canción " + name,
        text: "Se perderá la canción",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: '<i class = "fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText: '<i class = "fa-solid fa-ban"></i> Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          form.delete(route("song.destroy", id));
        }
      });
    };
    const openModal = (song) => {
      document.getElementById("id2").value = song.id;
      document.getElementById("title2").value = song.title;
      document.getElementById("autor2").value = song.autor;
      document.getElementById("album2").value = song.album;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Songs" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-fluid mt-3 bg-white"${_scopeId}><div class="row mt-3"${_scopeId}><div class="col-md-4 offset-md-4"${_scopeId}><div class="d-grid mx-auto"${_scopeId}><button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalCreate"${_scopeId}><i class="fa-solid fa-circle-plus"${_scopeId}></i>Añadir</button></div></div></div><div class="row mt-3"${_scopeId}><div class="col-md-10 offset-md-1"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-stripeted table-bordered"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>#</th><th${_scopeId}>NOMBRE</th><th${_scopeId}>ARTISTA</th><th${_scopeId}>ALBUM</th><th${_scopeId}></th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.songs, (song, i) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(i + 1)}</td><td${_scopeId}>${ssrInterpolate(song.title)}</td><td${_scopeId}>${ssrInterpolate(song.autor)}</td><td${_scopeId}>${ssrInterpolate(song.album)}</td><td${_scopeId}><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEdit"${_scopeId}><i class="fa-solid fa-edit"${_scopeId}></i></button></td><td${_scopeId}><button class="btn btn-danger"${_scopeId}><i class="fa-solid fa-trash"${_scopeId}></i></button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              modal: "modalCreate",
              title: "Añadir Canción",
              op: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              modal: "modalEdit",
              title: "Editar Canción",
              op: "2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "container-fluid mt-3 bg-white" }, [
                createVNode("div", { class: "row mt-3" }, [
                  createVNode("div", { class: "col-md-4 offset-md-4" }, [
                    createVNode("div", { class: "d-grid mx-auto" }, [
                      createVNode("button", {
                        class: "btn btn-dark",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#modalCreate"
                      }, [
                        createVNode("i", { class: "fa-solid fa-circle-plus" }),
                        createTextVNode("Añadir")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "row mt-3" }, [
                  createVNode("div", { class: "col-md-10 offset-md-1" }, [
                    createVNode("div", { class: "table-responsive" }, [
                      createVNode("table", { class: "table table-stripeted table-bordered" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "#"),
                            createVNode("th", null, "NOMBRE"),
                            createVNode("th", null, "ARTISTA"),
                            createVNode("th", null, "ALBUM"),
                            createVNode("th"),
                            createVNode("th")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.songs, (song, i) => {
                            return openBlock(), createBlock("tr", {
                              key: song.id
                            }, [
                              createVNode("td", null, toDisplayString(i + 1), 1),
                              createVNode("td", null, toDisplayString(song.title), 1),
                              createVNode("td", null, toDisplayString(song.autor), 1),
                              createVNode("td", null, toDisplayString(song.album), 1),
                              createVNode("td", null, [
                                createVNode("button", {
                                  class: "btn btn-warning",
                                  "data-bs-toggle": "modal",
                                  "data-bs-target": "#modalEdit",
                                  onClick: ($event) => openModal(song)
                                }, [
                                  createVNode("i", { class: "fa-solid fa-edit" })
                                ], 8, ["onClick"])
                              ]),
                              createVNode("td", null, [
                                createVNode("button", {
                                  class: "btn btn-danger",
                                  onClick: ($event) => eliminar(song.id, song.title)
                                }, [
                                  createVNode("i", { class: "fa-solid fa-trash" })
                                ], 8, ["onClick"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode(_sfc_main$1, {
                modal: "modalCreate",
                title: "Añadir Canción",
                op: "1"
              }),
              createVNode(_sfc_main$1, {
                modal: "modalEdit",
                title: "Editar Canción",
                op: "2"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Songs/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
