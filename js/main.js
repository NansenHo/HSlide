const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
const isMain = str => (/^#{1,2}(?!#)/).test(str)
const isSub = str => (/^#{3}(?!#)/).test(str)
const convert = raw => {
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

const Menu = { // menu 模块
    init(){
        console.log('menu init...')
        this.$settingIcon = $('.control .icon-setting')
        this.$menu = $('.menu')
        this.$closeIcon = $('.menu .icon-close')
        this.$$tabs = $$('.menu .tab')
        this.$$contents = $$('.menu .content')
        // 命名技巧：如果是 DOM 对象/NodeList，就用 $name/$$name 这种形式，以作区分。
        this.bind()
    },
    bind(){ // 绑定数据
        // let xxx = this // 不用箭头函数也可以一开始将 this 保存下来
        this.$settingIcon.onclick = () => {
            this.$menu.classList.add('open') // xxx.$menu.classList.add('open')
            // 能用 class 来切换的样式变化，尽量用 class 来做。这也方便后期修改样式。
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

const Editor = {
    init(){ // 初始化
        console.log('editor init...')
        this.$editInput = $('.editor textarea')
        this.$saveBtn = $('.editor .btn-save')
        this.$slideContainer = $('.slides')
        let defaultNote = `
# One Slide
开始使用，请将鼠标放至页面左上角

## 本产品需要用 markdown 来编辑
该[教程](https://www.jianshu.com/p/191d1e21f7ed)可以让您在 10 分钟内轻松掌握 Markdown 

### 第三页

`
        this.markdown = localStorage.markdown || defaultNote // 预加载
        this.bind()
        this.start() // 解析 markdown 并启动
    },
    bind(){
        this.$saveBtn.onclick = () => {
            localStorage.markdown = this.$editInput.value
            location.reload()
        }
    },
    start(){
        this.$editInput.value = this.markdown
        this.$slideContainer.innerHTML = convert(this.markdown)
        Reveal.initialize({
            controls: true,
            progress: true,
            center: true,
            hash: true,
            transition:  localStorage.transition || 'slide',
            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
        })
    }
}

const Theme = {
    init(){
        this.$$figures = $$('.themes figure')
        this.$transition = $('.transition')
        this.bind()
        this.loadTheme()
    },
    bind(){
        this.$$figures.forEach($figure => $figure.onclick = () => {
            this.$$figures.forEach($item => $item.classList.remove('select'))
            $figure.classList.add('select')
            this.setTheme($figure.dataset.theme)
        })
        this.$transition.onchange = function(){
            localStorage.transition = this.value
            location.reload()
        }
    },
    setTheme(theme){
        localStorage.theme = theme
        location.reload()
    },
    loadTheme(){
        let theme = localStorage.theme || 'blood'
        let $link = document.createElement('link')
        $link.rel = 'stylesheet'
        $link.href = `dist/theme/${theme}.css`
        $link.id = "theme"
        document.head.appendChild($link);
        $(`.themes figure[data-theme = ${theme}]`).classList.add('select')
        // [...this.$$figures].find($figure => $figure.dataset.theme === theme).classList.add('select')
        this.localStorage.value = localStorage.value || 'slide'
    }
}

const App = { // App 模块
    init(){
        [...arguments].forEach(Module => Module.init())
    }
}

App.init(Menu, Editor, Theme) // 初始化 App 的时候也初始化 menu


