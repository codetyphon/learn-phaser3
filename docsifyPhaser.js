/*!
 * docsify-phaser
 * v0.1
 * https://github.com/codetyphon/docsify-phaser
 * (c) 2020-2021 codetyphon <codetyphon@outlook.com>
 * MIT license
 */
!
  function () {
    "use strict";
    window.DocsifyCopyCodePlugin = {
      init: function () {
        return function (o, e) {
          o.ready(function () {
            console.warn("phaser")
          })
        }
      }
    },
      window.$docsify = window.$docsify || {},
      window.$docsify.plugins = [function (hook, vm) {
        hook.doneEach(function () {
          const codes = Array.apply(null, document.querySelectorAll('pre[data-lang="phaser"]'))
          console.log(codes)
          let index = 0
          for (const key in codes) {
            index++
            const code = codes[key];
            const js = code.innerText
            const iframe = document.createElement("iframe")
            iframe.setAttribute("id", `iframe_${index}`)
            iframe.setAttribute("border", 0)
            code.innerText = ""
            code.appendChild(iframe)
            const canvas = document.createElement("canvas")
            canvas.setAttribute("id", "canvas")

            const iframeDom = document.getElementById(`iframe_${index}`)
            iframeDom.contentDocument.body.appendChild(canvas)

            const scriptPhaser = document.createElement("script")
            scriptPhaser.setAttribute("src", "https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js")
            iframeDom.contentDocument.body.appendChild(scriptPhaser)

            const scriptGame = document.createElement("script");
            scriptGame.innerHTML = js

            setTimeout(() => {
              iframeDom.contentDocument.body.appendChild(scriptGame)
              const canvas = iframeDom.contentWindow.document.getElementById("canvas")
              const w = canvas.getAttribute("width")
              const h = canvas.getAttribute("height")
              iframeDom.setAttribute("width", w)
              iframeDom.setAttribute("height", h)
            }, 200);
          }
        });
      }].concat(window.$docsify.plugins || [])
  }();
