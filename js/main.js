const isMain = str => (/^#{1,2}(?!#)/).test(str)
const isSub = str => (/^#{3}(?!#)/).test(str)

function convert(raw) {
    let arr = raw.split(/\n(?=\s*#)/).filter(s => s != "").map(s => s.trim())

    let html = ''
    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1] !== undefined) {
            if (isMain(arr[i]) && isMain(arr[i + 1])) {
                html += `
                        <section data-markdown>
                        <textarea data-template>
                        ${arr[i]}
                        </textarea>
                        </section>
                    `
            } else if (isMain(arr[i]) && isSub(arr[i + 1])) {
                html += `
                        <section>
                        <section data-markdown>
                        <textarea data-template>
                        ${arr[i]}
                        </textarea>
                        </section>
                    `
            } else if (isSub(arr[i]) && isSub(arr[i + 1])) {
                html += `
                        <section data-markdown>
                        <textarea data-template>
                        ${arr[i]}
                        </textarea>
                        </section>
                    `
            } else if (isSub(arr[i]) && isMain(arr[i + 1])) {
                html += `
                        <section data-markdown>
                        <textarea data-template>
                        ${arr[i]}
                        </textarea>
                        </section>
                        </section>
                    `
            }

        } else {
            if (isMain(arr[i])) {
                html += `
                        <section data-markdown>
                        <textarea data-template>
                        ${arr[i]}
                        </textarea>
                        </section>
                    `
            } else if (isSub(arr[i])) {
                html += `
                        <section data-markdown>
                        <textarea data-template>
                        ${arr[i]}
                        </textarea>
                        </section>
                        </section>
                    `
            }
        }

    }
    return html
} // // 把 markdown 变成符合要求的 HTML

function loadMarkdown(raw) {
    localStorage.markdown = raw
    location.reload()
} // 把用户输入的 raw 存进 localStorage 并刷新页面

function start() {
    const TPL = `# One Slide`
    let html = convert(localStorage.markdown || TPL)
    document.querySelector('.slides').innerHTML = html
    Reveal.initialize({
        controls: true,
        progress: true,
        center: true,
        hash: true,

        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
    })
}
// 看有没有 localStorage，将 localStorage/TPL 赋值给 html ，
// 然后把 html 放进 .slides 里面，然后渲染页面。

start() // 每次进来都会先运行 start() 函数

// 用户进来先会触发 start() ，此时没有 localStorage 所以页面上
// 只有 TPL，然后用户开始写 markdown，用户写好点击保存，会触发
// loadMarkdown，loadMarkdown 将用户的 markdown 保存进
// localStorage.markdown ，然后重新刷新页面，又会再执行一次 start() ，
// 这次触发 start() ，页面上就会显示由用户刚保存的 markdown 生成的页面。

