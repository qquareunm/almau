import express from "express";
import service from "../service.js";

const router = new express.Router();

const videos = {
    "videos": [
        {
            "id": "lesson1",
            "lesson": "Урок 1",
            "video": "_R5a-Kc0pRc?si=eO2zu88uInexCLc-",
            "questions": [
                {
                    "question": "1. Какой файл обычно является основным файлом для отображения сайта?",
                    "options": ["a) index.html", "b) main.css", "c) script.js", "d) homepage.html"],
                    "correctAnswer": "a) index.html"
                },
                {
                    "question": "2. Какой тег используется для определения содержимого ТМ-страницы?",
                    "options": ["a) <body>", "b) <head>", "c) <title>", "d) <html>"],
                    "correctAnswer": "d) <html>"
                },
                {
                    "question": "3. Какой тег указывает на начало HTML-документа и содержит все его содержимое, за исключением заголовков и скриптов?",
                    "options": ["a) <head>", "b) <title>", "c) <body>", "d) <html>"],
                    "correctAnswer": "d) <html>"
                },
                {
                    "question": "4. Что должно содержаться в теге <title> в файле index.html?",
                    "options": ["a) Заголовок страницы", "b) Список ключевых слов", "c) Стили CSS", "d) Скрипты JavaScript"],
                    "correctAnswer": "a) Заголовок страницы"
                },
                {
                    "question": "5. Какой из следующих тегов обычно содержит ссылки на внешние ресурсы, такие как CSS-стили и JavaScript?",
                    "options": ["a) <body>", "b) <head>", "c) <footer>", "d) <nav>"],
                    "correctAnswer": "b) <head>"
                }
            ]
        },
        {
            "id": "lesson2",
            "lesson": "Урок 2",
            "video": "YzYkebeN7mg?si=dP12PXIuyiXEdQfr",
            "questions": [
                {
                    "question": "1. Какой язык программирования используется для создания структуры и содержимого веб-страниц?",
                    "options": ["a) HTML", "b) Python", "c) Java", "d) C++"],
                    "correctAnswer": "a) HTML"
                },
                {
                    "question": "2. Какие файлы обычно присутствуют в основе веб-проекта?",
                    "options": ["a) HTML, CSS, JavaScript", "b) XML, PHP, Ruby", "c) Java, C#, Swit", "d) JSON, SQL, TyreScript"],
                    "correctAnswer": "a) HTML, CSS, JavaScript"
                },
                {
                    "question": "3. Какой файл содержит структуру и содержимое веб-страницы?",
                    "options": ["a) HTML", "b) CSS", "c) JavaScript", "d) PHP"],
                    "correctAnswer": "a) HTML"
                },
                {
                    "question": "4. Какие технологии используются для стилизации веб-страниц?",
                    "options": ["a) CSS", "b) HTML", "c) JavaScript", "d) XML"],
                    "correctAnswer": "a) CSS"
                },
                {
                    "question": "5. Как добавить интерактивность на веб-страницу?",
                    "options": ["a) Используя JavaScript", "b) Используя CSS", "c) Используя HTML", "d) Используя SQL"],
                    "correctAnswer": "a) Используя JavaScript"
                }
            ]
        },
        {
            "id": "lesson3",
            "lesson": "Урок 3",
            "video": "6RoXrWu2EuM?si=xmHT0Q7qpjROAICy",
            "questions": [
                {
                    "question": "1. Как создать комментарий в HTML коде?",
                    "options": ["a) <!-- Это комментарий -->", "b) // Это комментарий", "d) /* Это комментарий */", "c) <!DOCTYPE html>"],
                    "correctAnswer": "a) <!-- Это комментарий -->"
                },
                {
                    "question": "2. Зачем обычно используются комментарии в HTML коде?",
                    "options": ["а) Для оформления текста", "b) Для определения заголовка страницы", "c) Для добавления скриптов", "d) Для пояснек у кода разработчикам"],
                    "correctAnswer": "d) Для пояснек у кода разработчикам"
                },
                {
                    "question": "3. Какой символ обычно используется для обозначения начала комментария в HTML?",
                    "options": ["a) //", "b) #", "c) /*", "d) <!--"],
                    "correctAnswer": "d) <!--"
                },
                {
                    "question": "4. Какой из следующих тегов HTML обычно используется для определения метаданных страницы?",
                    "options": ["a) <meta>", "b) <title>", "c) <header>", "d) <link>"],
                    "correctAnswer": "a) <meta>"
                },
                {
                    "question": "5. Для чего используется тег <meta> в HTML?",
                    "options": ["a) Для создания заголовка страницы", "b) Для подключения внешних файлов стилей", "c) Для определения метаданных страницы, таких как описание, ключевые слова и кодировка символов", "d) Для создания ссылок на другие веб-страницы"],
                    "correctAnswer": "c) Для определения метаданных страницы, таких как описание, ключевые слова и кодировка символов"
                }
            ]
        },
        {
            "id": "lesson4",
            "lesson": "Урок 4",
            "video": "ow3LCjZTbsY?si=2VHtJne3-WMLtNYP",
            "questions": [
                {
                    "question": "1. Какой тег используется для создания заголовка на веб-странице?",
                    "options": ["a) <hi>", "b) <p>", "c) <header>", "d) <title>"],
                    "correctAnswer": "d) <title>"
                },
                {
                    "question": "2. Какой тег используется для создания абзаца текста?",
                    "options": ["a) <p>", "b) <br>", "c) <div>", "d) <a>"],
                    "correctAnswer": "a) <p>"
                },
                {
                    "question": "3. Какой тег обычно используется для выделения текста жирным?",
                    "options": ["a) <bold>", "b) <strong>", "c) <b>", "d) <em>"],
                    "correctAnswer": "c) <b>"
                },
                {
                    "question": "4. Какой тег используется для создания списков с нумерованными пунктами?",
                    "options": ["a) <ul>", "b) <ol>", "c) <li>", "d) <list>"],
                    "correctAnswer": "b) <ol>"
                },
                {
                    "question": "5. Какой тег используется для создания списка с маркированными пунктами?",
                    "options": ["a) <ol>", "b) <ul>", "c) <li>", "d) <list>"],
                    "correctAnswer": "b) <ul>"
                }
            ]
        },
        {
            "id": "lesson5",
            "lesson": "Урок 5",
            "video": "hft4XYApT44?si=QFalQQnjW1KWqhhJ",
            "questions": [
                {
                    "question": "1. Для чего нужен css?",
                    "options": ["a) Для создания интерактивных элементов на веб-странице", "b)  Для программирования бэкэнда веб-приложений", "c)  Для структурирования и оформления веб-страниц", "d) d) Для обработки данных на клиентской стороне"],
                    "correctAnswer": "c)  Для структурирования и оформления веб-страниц"
                }
            ]
        },
        {
            "id": "lesson6",
            "lesson": "Урок 6",
            "video": "DX9ITfNVM7I?si=JXz2yWY9pIqTcZDB",
            "questions": [
                {
                    "question": "1. Какой тег используется для подключения внешних стилей в HTML?",
                    "options": ["a) <script>", "b) <link>", "c) <style>", "d) <css>"],
                    "correctAnswer": "b) <link>"
                },
                {
                    "question": "2. Какой из следующих атрибутов используется в теге <link> для указания пути к файлу со стилями?",
                    "options": ["a) href", "b) src", "c) url", "d) link"],
                    "correctAnswer": "a) href"
                },
                {
                    "question": "3. Какой из форматов представляет внешний файл стилей в CSS?",
                    "options": ["a) .html", "b) .js", "c) .css", "d) .txt"],
                    "correctAnswer": "c) .css"
                },
                {
                    "question": "4. Какой способ подключения стилей предпочтительнее для больших проектов или повторно используемых стилей?",
                    "options": ["a) Встроенные стили", "b) Внешние стили", "c) Стили в теге <head>", "d) Стили в теге <body>"],
                    "correctAnswer": "b) Внешние стили"
                },
                {
                    "question": "5. Какое преимущество предоставляет подключение внешних стилей при использовании нескольких страниц веб-сайта?",
                    "options": ["a) Увеличивает размер HTML-файлов", "b) Ускоряет загрузку страниц", "c) Затрудняет управление стилями", "d) Нет преимуществ"],
                    "correctAnswer": "b) Ускоряет загрузку страниц"
                },
                {
                    "question": "6. В каком разделе HTML-документа обычно размещается тег <link> для подключения внешних стилей?",
                    "options": ["a) Внутри тега <body>", "b) Внутри тега <footer>", "c) Внутри тега <head>", "d) Внутри тега <title>"],
                    "correctAnswer": "c) Внутри тега <head>"
                }
            ]
        },
        {
            "id": "lesson7",
            "lesson": "Урок 7",
            "video": "LQxx5Z9XEdM?si=VW3X59kX9dZDZikc",
            "questions": [
                {
                    "question": "1. Какой селектор выберет все элементы <div> на странице?",
                    "options": ["a) .div", "b) div", "c) #div", "d) div.class"],
                    "correctAnswer": "b) div"
                },
                {
                    "question": "2. Какой селектор выберет все элементы с классом 'example'?",
                    "options": ["a) .example", "b) #example", "c) *example", "d) example.class"],
                    "correctAnswer": "a) .example"
                },
                {
                    "question": "3. Какой селектор выберет элемент с id 'header'?",
                    "options": ["a) .header", "b) header", "c) #header", "d) id(header)"],
                    "correctAnswer": "c) #header"
                },
                {
                    "question": "4. Какой селектор выберет все элементы с классом 'nav' внутри элемента с id 'menu'?",
                    "options": ["a) #menu .nav", "b) .menu .nav", "c) #menu.nav", "d) .menu > .nav"],
                    "correctAnswer": "a) #menu .nav"
                },
                {
                    "question": "5. Какой селектор выберет все элементы с классом 'btn', являющиеся потомками элемента с классом 'container'?",
                    "options": ["a) .container btn", "b) .container > .btn", "c) .container + .btn", "d) .container .btn"],
                    "correctAnswer": "d) .container .btn"
                },
                {
                    "question": "6. Какой селектор выберет элемент <p>, который является первым потомком своего родительского элемента?",
                    "options": ["a) p:first-child", "b) p:first-of-type", "c) p:nth-child(1)", "d) p:first-descendant"],
                    "correctAnswer": "a) p:first-child"
                },
                {
                    "question": "7. Какой селектор выберет каждый второй элемент с классом 'item'?",
                    "options": ["a) .item:nth-child(2)", "b) .item:nth-of-type(2)", "c) .item:nth-child(even)", "d) .item:nth-child(odd)"],
                    "correctAnswer": "c) .item:nth-child(even)"
                },
                {
                    "question": "8. Какой селектор выберет все элементы <input> с атрибутом type='text'?",
                    "options": ["a) input[type=text]", "b) input(type='text')", "c) input:attribute(text)", "d) input:text[type=text]"],
                    "correctAnswer": "a) input[type=text]"
                }
            ]
        },
        {
            "id": "lesson8",
            "lesson": "Урок 8",
            "video": "nZHrCDJEnw4?si=zQrMrk-I5R4jDqWs",
            "questions": [
                {
                    "question": "1. Что такое псевдокласс в CSS?",
                    "options": ["a) Это селектор, который выбирает элементы на основе их состояния или положения в структуре документа.", "b) Это специальный тег, который используется для создания дополнительных стилей для элементов.", "c) Это атрибут, который добавляется к элементам для изменения их внешнего вида."],
                    "correctAnswer": "a) Это селектор, который выбирает элементы на основе их состояния или положения в структуре документа."
                },
                {
                    "question": "2. Какой псевдокласс используется для стилизации ссылок при наведении на них курсора?",
                    "options": ["a) :hover", "b) :active", "c) :visited"],
                    "correctAnswer": "a) :hover"
                },
                {
                    "question": "3. Для чего используется псевдоэлемент ::before в CSS?",
                    "options": ["a) Для добавления контента перед содержимым выбранного элемента.", "b) Для добавления контента после содержимого выбранного элемента.", "c) Для выбора элементов, которые являются первыми дочерними элементами своих родительских элементов."],
                    "correctAnswer": "a) Для добавления контента перед содержимым выбранного элемента."
                },
                {
                    "question": "4. Какой селектор используется для стилизации первой буквы абзаца?",
                    "options": ["a) :first-letter", "b) :first-line", "c) :first-child"],
                    "correctAnswer": "a) :first-letter"
                },
                {
                    "question": "5. Какой псевдоэлемент используется для стилизации последнего элемента в списке?",
                    "options": ["a) :last-child", "b) :nth-child", "c) :last-of-type"],
                    "correctAnswer": "c) :last-of-type"
                },
                {
                    "question": "6. Какой псевдокласс применяется к ссылке после того, как пользователь перешел по ней?",
                    "options": ["a) :active", "b) :visited", "c) :hover"],
                    "correctAnswer": "b) :visited"
                },
                {
                    "question": "7. Для чего используется псевдоэлемент ::after в CSS?",
                    "options": ["a) Для добавления контента после содержимого выбранного элемента.", "b) Для добавления контента перед содержимым выбранного элемента.", "c) Для выбора элементов, которые являются последними дочерними элементами своих родительских элементов."],
                    "correctAnswer": "a) Для добавления контента после содержимого выбранного элемента."
                },
                {
                    "question": "8. Какой псевдокласс применяется к ссылке, когда она находится в активном состоянии (кликнута)?",
                    "options": ["a) :visited", "b) :hover", "c) :active"],
                    "correctAnswer": "c) :active"
                }
            ]
        },
        {
            "id": "lesson9",
            "lesson": "Урок 9",
            "video": "k2XTkIW9Y0I?si=u7kUZl-0U9uH52XD",
            "questions": [
                {
                    "question": "1. Какой CSS свойство используется для установки фоновой картинки?",
                    "options": ["a) background-image", "b) image-source", "c) background-url", "d) img-background"],
                    "correctAnswer": "a) background-image"
                },
                {
                    "question": "2. Как установить повторение фоновой картинки по горизонтали?",
                    "options": ["a) background-repeat: horizontal;", "b) background-repeat: repeat-x;", "c) background-style: horizontal-repeat;", "d) repeat-x: background;"],
                    "correctAnswer": "b) background-repeat: repeat-x;"
                },
                {
                    "question": "3. Какие значения может принимать свойство background-size для масштабирования фоновой картинки?",
                    "options": ["a) cover и contain", "b) stretch и fit", "c) full и expand", "d) resize и scale"],
                    "correctAnswer": "a) cover и contain"
                },
                {
                    "question": "4. Как можно сделать так, чтобы фоновая картинка не повторялась вообще?",
                    "options": ["a) background-repeat: no-repeat;", "b) background: no-repeat;", "c) no-repeat: background;", "d) repeat-none: background;"],
                    "correctAnswer": "a) background-repeat: no-repeat;"
                }
            ]
        },
        {
            "id": "lesson10",
            "lesson": "Урок 10",
            "video": "B4x380VocnQ?si=3rKcEO4IVmv--SUA",
            "questions": [
                {
                    "question": "1. Какое свойство CSS используется для изменения цвета текста?",
                    "options": ["a) font-color", "b) text-color", "c) color", "d) font-style"],
                    "correctAnswer": "c) color"
                },
                {
                    "question": "2. Как добавить тень к тексту в CSS?",
                    "options": ["a) text-shadow", "b) shadow", "c) font-shadow", "d) text-effect"],
                    "correctAnswer": "a) text-shadow"
                },
                {
                    "question": "3. Какое свойство CSS позволяет установить жирность текста?",
                    "options": ["a) font-bold", "b) text-weight", "c) font-weight", "d) text-bold"],
                    "correctAnswer": "c) font-weight"
                },
                {
                    "question": "4. Для создания подчеркнутого текста в CSS используется свойство:",
                    "options": ["a) text-decoration", "b) underline", "c) text-style", "d) text-underline"],
                    "correctAnswer": "a) text-decoration"
                },
                {
                    "question": "5. Какое значение свойства text-align используется для выравнивания текста по правому краю?",
                    "options": ["a) right", "b) center", "c) left", "d) justify"],
                    "correctAnswer": "a) right"
                },
                {
                    "question": "6. Как установить курсивное начертание текста в CSS?",
                    "options": ["a) text-italic: true", "b) font-style: italic", "c) text-style: italic", "d) font-italic: true"],
                    "correctAnswer": "b) font-style: italic"
                },
                {
                    "question": "7. Какой CSS-свойство используется для задания межбуквенного интервала?",
                    "options": ["a) letter-spacing", "b) font-spacing", "c) text-spacing", "d) spacing-letter"],
                    "correctAnswer": "a) letter-spacing"
                },
                {
                    "question": "8. Для установки размера текста в CSS используется свойство:",
                    "options": ["a) font-size", "b) text-size", "c) size", "d) font-height"],
                    "correctAnswer": "a) font-size"
                },
                {
                    "question": "9. Какой из вариантов задает текст заглавными буквами?",
                    "options": ["a) text-transform: uppercase", "b) text-style: capital", "c) font-transform: uppercase", "d) font-style: capital"],
                    "correctAnswer": "a) text-transform: uppercase"
                },
                {
                    "question": "10. Как изменить интервал между строками текста в CSS?",
                    "options": ["a) line-height", "b) text-spacing", "c) font-spacing", "d) spacing-line"],
                    "correctAnswer": "a) line-height"
                }
            ]
        }, {
            "id": "lesson11",
            "lesson": "Урок 11",
            "video": "EjCTUncWviU?si=S3VZpG__WjHK9Mgi",
            "questions": [
                {
                    "question": "1. Какое свойство CSS можно использовать для задания ширины блока?",
                    "options": ["a) width", "b) size", "c) length", "d) dimension"],
                    "correctAnswer": "a) width"
                },
                {
                    "question": "2. Какое значение свойства 'display' применяется для создания блочного элемента?",
                    "options": ["a) block", "b) inline", "c) inline-block", "d) flex"],
                    "correctAnswer": "a) block"
                },
                {
                    "question": "3. Какое свойство CSS используется для задания внутренних отступов у блока?",
                    "options": ["a) padding", "b) margin", "c) space", "d) inset"],
                    "correctAnswer": "a) padding"
                },
                {
                    "question": "4. Какое значение свойства 'position' делает элемент позиционируемым относительно своего первого блочного родителя?",
                    "options": ["a) absolute", "b) relative", "c) fixed", "d) static"],
                    "correctAnswer": "b) relative"
                },
                {
                    "question": "5. Какое свойство CSS позволяет задать цвет фона для блока?",
                    "options": ["a) background-color", "b) color", "c) background", "d) fill"],
                    "correctAnswer": "a) background-color"
                },
                {
                    "question": "6. Какие значения свойства 'float' могут быть использованы для выравнивания блока по левому краю?",
                    "options": ["a) left", "b) right", "c) both", "d) none"],
                    "correctAnswer": "a) left"
                },
                {
                    "question": "7. Какой единицей измерения можно использовать для задания высоты блока?",
                    "options": ["a) px", "b) em", "c) %", "d) rem"],
                    "correctAnswer": "c) %"
                },
                {
                    "question": "8. Какое свойство CSS позволяет скрывать элемент из потока документа?",
                    "options": ["a) display", "b) visibility", "c) opacity", "d) z-index"],
                    "correctAnswer": "a) display"
                }
            ]
        },
        {
            "id": "lesson12",
            "lesson": "Урок 12",
            "video": "cVeFNl3Jz8I?si=V8S9ww_FrBRxPfcH",
            "questions": [
                {
                    "question": "1. Какие значения свойства position могут использоваться для позиционирования элементов в CSS?",
                    "options": ["a) static", "b) relative", "c) absolute", "d) fixed", "e) float"],
                    "correctAnswer": ["a) static", "b) relative", "c) absolute", "d) fixed"]
                },
                {
                    "question": "2. Какое свойство указывает, как элемент должен позиционироваться относительно своего родительского элемента?",
                    "options": ["a) top", "b) left", "c) position", "d) margin"],
                    "correctAnswer": "c) position"
                },
                {
                    "question": "3. Какие значения могут применяться к свойству z-index для управления позиционированием элементов?",
                    "options": ["a) positive integers", "b) negative integers", "c) auto", "d) only 0"],
                    "correctAnswer": ["a) positive integers", "b) negative integers", "d) only 0"]
                },
                {
                    "question": "4. Что происходит, когда у элемента установлено свойство position: absolute;?",
                    "options": ["a) Элемент занимает место в потоке документа и его позиция определяется относительно родительского элемента с позиционированием, отличным от static.",
                        "b) Элемент полностью убирается из потока документа и его позиция определяется относительно ближайшего родительского элемента с позиционированием, отличным от static.",
                        "c) Элемент занимает место в потоке документа и его позиция определяется относительно ближайшего родительского элемента с позиционированием, отличным от static."],
                    "correctAnswer": "b) Элемент полностью убирается из потока документа и его позиция определяется относительно ближайшего родительского элемента с позиционированием, отличным от static."
                },
                {
                    "question": "5. Какое свойство позволяет управлять расположением элемента по горизонтали?",
                    "options": ["a) top", "b) left", "c) right", "d) bottom"],
                    "correctAnswer": "b) left"
                }
            ]
        },
        {
            "id": "lesson13",
            "lesson": "Урок 13",
            "video": "fHl7UyRjOf0?si=hYAEl8o6DTMdJT6l",
            "questions": [
                {
                    "question": "Для чего нужен JavaScript?",
                    "options": [
                        "a) Для создания и оформления веб-страниц",
                        "b) Для программирования серверной части веб-приложений",
                        "c) Для создания динамического и интерактивного контента на веб-страницах",
                        "d) Для управления базами данных"
                    ],
                    "correctAnswer": "c) Для создания динамического и интерактивного контента на веб-страницах"
                }
            ]
        },
        {
            "id": "lesson14",
            "lesson": "Урок 13",
            "video": "WLsFBu_15Hw?si=UcBAPx728OrJEE63",
            "questions": [
                {
                    "question": "1. Какой метод JavaScript используется для вывода информации в консоль?",
                    "options": ["a) alert()", "b) console.log()", "c) print()", "d) output()", "e) display()"],
                    "correctAnswer": "b) console.log()"
                },
                {
                    "question": "2. Как выведется текст 'Hello, World!' в консоль с использованием console.log()?",
                    "options": ["a) console.write('Hello, World!');", "b) console.log('Hello, World!');", "c) console.print('Hello, World!');", "d) console.display('Hello, World!');", "e) console.output('Hello, World!');"],
                    "correctAnswer": "b) console.log('Hello, World!');"
                },
                {
                    "question": "3. Какая команда JavaScript используется для вывода значений переменных в консоль?",
                    "options": ["a) show()", "b) printVar()", "c) logVar()", "d) displayVar()", "e) console.log()"],
                    "correctAnswer": "e) console.log()"
                },
                {
                    "question": "4. Как можно вывести результат вычисления математического выражения в консоль?",
                    "options": ["a) console.log(calculate(2 + 2));", "b) console.log(calculate(2 * 3));", "c) console.log(calculate(10 / 2));", "d) console.log(calculate(5 - 3));", "e) console.log(calculate(7 % 2));"],
                    "correctAnswer": ["a) console.log(calculate(2 + 2));", "b) console.log(calculate(2 * 3));", "c) console.log(calculate(10 / 2));", "d) console.log(calculate(5 - 3));", "e) console.log(calculate(7 % 2));"]
                },
                {
                    "question": "5. Как можно вывести разные типы данных, такие как строки, числа и логические значения, в консоль?",
                    "options": ["a) console.print()", "b) console.display()", "c) console.log()", "d) console.write()", "e) console.output()"],
                    "correctAnswer": "c) console.log()"
                }
            ]
        },
        {
            "id": "lesson15",
            "lesson": "Урок 15",
            "video": "UHqnpHEXtII?si=F3TGY-w2JOxYYbHW",
            "questions": [
                {
                    "question": "1. Как объявить переменную в JavaScript?",
                    "options": ["a) var myVariable;", "b) let myVariable;", "c) const myVariable;", "d) var myVariable = 5;", "e) все вышеперечисленные варианты"],
                    "correctAnswer": "e) все вышеперечисленные варианты"
                },
                {
                    "question": "2. Какой оператор используется для присвоения значения переменной?",
                    "options": ["a) ==", "b) =", "c) :=", "d) ->", "e) +"],
                    "correctAnswer": "b) ="
                },
                {
                    "question": "3. Какой тип данных используется для хранения целочисленных значений в JavaScript?",
                    "options": ["a) integer", "b) char", "c) string", "d) number", "e) array"],
                    "correctAnswer": "d) number"
                },
                {
                    "question": "4. Как проверить тип данных переменной в JavaScript?",
                    "options": ["a) typeof myVariable;", "b) checkType(myVariable);", "c) myVariable.type();", "d) myVariable.getType();", "e) getTypeOf(myVariable);"],
                    "correctAnswer": "a) typeof myVariable;"
                },
                {
                    "question": "5. Какой тип данных будет у переменной, которой не присвоено значение?",
                    "options": ["a) undefined", "b) null", "c) void", "d) NaN", "e) empty"],
                    "correctAnswer": "a) undefined"
                }
            ]
        }, {
            "id": "lesson16",
            "lesson": "Урок 16",
            "video": "tPjVEiOvgwE?si=oS8vhj5DpxYT1EQw",
            "questions": [
                {
                    "question": "1. Что вернет оператор сложения +, если сложить число и строку в JavaScript?",
                    "options": ["a) Ошибка", "b) Число", "c) Строка", "d) Null", "e) Undefined"],
                    "correctAnswer": "c) Строка"
                },
                {
                    "question": "2. Какой результат вернет выражение 10 / '2'?",
                    "options": ["a) 5", "b) 10", "c) '5'", "d) Ошибка", "e) 20"],
                    "correctAnswer": "a) 5"
                },
                {
                    "question": "3. Какой оператор используется для возведения числа в степень в JavaScript?",
                    "options": ["a) ^", "b) **", "c) ^", "d) %", "e) /"],
                    "correctAnswer": "b) **"
                },
                {
                    "question": "4. Что вернет оператор инкремента ++ примененный к переменной x, если x равно 5?",
                    "options": ["a) 5", "b) 6", "c) 4", "d) 10", "e) Ошибка"],
                    "correctAnswer": "b) 6"
                },
                {
                    "question": "5. Какой метод JavaScript используется для получения целой части числа?",
                    "options": ["a) parseInt()", "b) toInt()", "c) floor()", "d) round()", "e) ceil()"],
                    "correctAnswer": "a) parseInt()"
                }
            ]
        }


    ]
};

router.get("/all", (req, res) => {
    res.json(videos);
});

router.get("/:id", (req, res) => {
    const videoId = req.params.id.split('?')[0];
    const video = videos.videos.find(video => video.id === videoId);
    if (video) {
        res.json(video);
    } else {
        res.status(404).json({ message: "Video not found" });
    }
});


router.post("/add-record", express.json(), (req, res, next) => {
    console.log(req.body, "req.body");
    try {
        const { email, testId, score } = req.body;
        const created_time = Date.now();
        service.addTestResult(email, testId, score, created_time);
        const newResults = { email, testId, score, created_time };
        res.status(201).json({ message: "Results recorded successfully", user: newResults });
    } catch (error) {
        next(error);
    }
});

export default router;