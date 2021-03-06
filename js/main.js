const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
const isMain = str => (/^#{1,2}(?!#)/).test(str)
const isSub = str => (/^#{3}(?!#)/).test(str)
const convert = raw => {
    let arr = raw.split(/\n(?=\s*#{1,3}[^#])/).filter(s => s != "").map(s => s.trim())

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
} // // ??? markdown ????????????????????? HTML

const Menu = { // menu ??????
    init() {
        this.$settingIcon = $('.control')
        this.$menu = $('.menu')
        this.$closeIcon = $('.menu .icon-close')
        this.$$tabs = $$('.menu .tab')
        this.$$contents = $$('.menu .content')
        // ???????????????????????? DOM ??????/NodeList????????? $name/$$name ??????????????????????????????
        this.bind()
    },
    bind() { // ????????????
        // let xxx = this // ??????????????????????????????????????? this ????????????
        this.$settingIcon.onclick = () => {
            this.$menu.classList.add('open') // xxx.$menu.classList.add('open')
            // ?????? class ???????????????????????????????????? class ??????????????????????????????????????????
        }
        this.$closeIcon.onclick = () => {
            this.$menu.classList.remove('open')
        }
        this.$$tabs.forEach($tab => $tab.onclick = () => {
            this.$$tabs.forEach($tab => $tab.classList.remove('active'))
            $tab.classList.add('active')
            let index = [...this.$$tabs].indexOf($tab)
            this.$$contents.forEach($node => $node.classList.remove('active'))
            this.$$contents[index].classList.add('active')
        })
    }
}

const ImgUpload = {
    init() {
        this.$fileInput = $('#img-uploader')
        this.$textarea = $('.editor textarea')
        AV.init({
            appId: "UqBaAsQMqOQB3rLwNGLTKtOF-gzGzoHsz",
            appKey: "uv9EyQmkgX7UjUt4TeVUBhVa",
            serverURLs: "https://uqbaasqm.lc-cn-n1-shared.com"
        });
        this.bind()
    },
    bind() {
        let $this = this
        this.$fileInput.onchange = function () {
            if (this.files.length > 0) {
                let localFile = this.files[0]
                if (localFile.size / 1048576 > 2) {
                    alert('??????????????????2M')
                    return
                }
                $this.insertText(`![??????????????????0%]()`)
                let avFile = new AV.File(encodeURI(localFile.name), localFile)
                avFile.save({
                    keepFileName: true,
                    onprogress(progress) {
                        console.log(progress.percent)
                        $this.insertText(`![??????????????????${progress.percent}%]()`)
                    }
                }).then(file => {
                    console.log('??????????????????')
                    console.log(file)
                    let text = `![${file.attributes.name}](${file.attributes.url}?imageView2/0/w/800/h/600)`
                    $this.insertText(text)
                }).catch(err => console.log(err))
            }
        }
    },
    insertText(text = '') {
        let start = this.$textarea.selectionStart
        let end = this.$textarea.selectionEnd
        let oldText = this.$textarea.value

        this.$textarea.value = `${oldText.substring(0, start)}${text} ${oldText.substring(end)}`
        this.$textarea.focus()
        this.$textarea.setSelectionRange(start, start + text.length)
    }
}

const Editor = {
    init() { // ?????????
        this.$editInput = $('.editor textarea')
        this.$saveBtn = $('.editor .btn-save')
        this.$slideContainer = $('.slides')
        let defaultNote = `# HSlide
????????????????????????????????????????????????

## ?????????????????? markdown ?????????
???[??????](https://www.jianshu.com/p/191d1e21f7ed)??????????????? 10 ????????????????????? Markdown 
`
        this.markdown = localStorage.markdown || defaultNote // ?????????
        this.bind()
        this.start() // ?????? markdown ?????????
    },
    bind() {
        this.$saveBtn.onclick = () => {
            localStorage.markdown = this.$editInput.value
            location.reload()
        }
    },
    start() {
        this.$editInput.value = this.markdown
        this.$slideContainer.innerHTML = convert(this.markdown)
        Reveal.initialize({
            controls: true,
            progress: true,
            center: localStorage.align !== "left-top",
            hash: true,
            transition: localStorage.transition || 'slide',
            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
        })
    }
}

const Theme = {
    init() {
        this.$$figures = $$('.themes figure')
        this.$transition = $('.transition')
        this.$align = $('.theme .align')
        this.$reveal = $('.reveal')
        this.bind()
        this.loadTheme()
    },
    bind() {
        this.$$figures.forEach($figure => $figure.onclick = () => {
            this.$$figures.forEach($item => $item.classList.remove('select'))
            $figure.classList.add('select')
            this.setTheme($figure.dataset.theme)
        })
        this.$transition.onchange = function () {
            localStorage.transition = this.value
            location.reload()
        }
        this.$align.onchange = function () {
            localStorage.align = this.value
            location.reload()
        }
    },
    setTheme(theme) {
        localStorage.theme = theme
        location.reload()
    },
    loadTheme() {
        let theme = localStorage.theme || 'blood'
        let $link = document.createElement('link')
        $link.rel = 'stylesheet'
        $link.href = `dist/theme/${theme}.css`
        $link.id = "theme"
        document.head.appendChild($link);
        $(`.themes figure[data-theme = ${theme}]`).classList.add('select')
        // [...this.$$figures].find($figure => $figure.dataset.theme === theme).classList.add('select')
        this.$transition.value = localStorage.transition || 'slide'
        this.$align.value = localStorage.align || 'center'
        this.$reveal.classList.add(this.$align.value)
    }
}

const Print = {
    init() {
        this.$download = $('.download')
        this.bind()
        this.start()
    },
    bind() {
        this.$download.addEventListener('click', () => {
            let $link = document.createElement('a')
            $link.setAttribute('target', '_blank')
            if (location.href.includes('#/')) {
                $link.setAttribute('href', location.href.replace(/#\/.+/, '?print-pdf'))
            } else {
                $link.setAttribute('href', location.href + '?print-pdf')
            }
            $link.click()
        })
    },
    start() {
        let link = document.createElement('link')
        link.rel = 'stylesheet'
        link.type = 'text/css'
        if (window.location.search.match(/print-pdf/gi)) {
            link.href = 'css/print/pdf.css'
            setTimeout(()=>{
                window.print()
            }, 2000)
        } else {
            link.href = 'css/print/paper.scss'
        }
        document.head.appendChild(link)
    }
}

const App = { // App ??????
    init() {
        [...arguments].forEach(Module => Module.init())
    }
}

App.init(Menu, Editor, Theme, Print, ImgUpload) // ????????? App ????????????????????? menu

