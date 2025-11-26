class SideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="side_menu">
            <ul>
                <button class="back_button" onclick="window.history.back()">← Назад</button>
                <li>
                    <p class="side_menu_button" id="writing">Письменность</p>
                    <ul class="side_submenu">
                        <li id="alphabet"><a href="/ru/writing/alphabet">Алфавит</a></li>
                        <li id="vowels"><a href="/ru/writing/vowels">Гласные</a></li>
                        <li id="consonants"><a href="/ru/writing/consonants">Согласные</a></li>
                    </ul>
                </li>
                <li>
                    <p class="side_menu_button" id="parts_of_speech">Части речи</p>
                    <ul class="side_submenu">
                        <li id="nouns"><a href="/ru/parts_of_speech/nouns">Существительные</a></li>
                        <li id="verbs"><a href="#">Глаголы (WIP)</a></li>
                        <li id="adjectives"><a href="#">Прилагательные (WIP)</a></li>
                        <li id="numerals"><a href="/ru/parts_of_speech/numerals">Числительные</a></li>
                        <li id="personal_pronouns"><a href="/ru/parts_of_speech/personal_pronouns">Личные местоимения</a></li>
                        <li id="demontratives"><a href="#">Указательные местоимения (WIP)</a></li>
                    </ul>
                </li>
                <li>
                    <p class="side_menu_button" id="grammar">Грамматика (WIP)</p>
                    <ul class="side_submenu">
                        <li><a href="#">Подраздел 3.1 (WIP)</a></li>
                        <li><a href="#">Подраздел 3.2 (WIP)</a></li>
                    </ul>
                </li>
                <li>
                    <p class="side_menu_button" id="songs">Песни (WIP)</p>
                    <ul class="side_submenu">
                        <li><a href="#">Подраздел (WIP)</a></li>
                        <li><a href="#">Подраздел (WIP)</a></li>
                    </ul>
                </li>
                <li>
                    <p class="side_menu_button" id="listening">Слушание (WIP)</p>
                    <ul class="side_submenu">
                        <li><a href="#">Подраздел (WIP)</a></li>
                        <li><a href="#">Подраздел (WIP)</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        `;
    }
}
customElements.define("side-menu", SideMenu);

const pageName = window.location.pathname.split('/').reverse()[0];
const group = window.location.pathname.split('/').reverse()[1];
const lesson1SideMenuHTML = `
    <ul>
        <button onclick="window.history.back()">← Назад</button>
        <li>
            <a href="/ru/lesson_1/overview" id="overview">Обзор</a>
        </li>
        <li>
            <a href="/ru/lesson_1/grammar" id="grammar">Грамматика</a>
        </li>
        <li>
            <a href="/ru/lesson_1/reading" id="reading">Чтение</a>
        </li>
        <li>
            <a href="/ru/lesson_1/exercises" id="exercises">Упражнения</a>
        </li>
    </ul>
`;
const lesson2SideMenuHTML = `
    <ul>
        <button onclick="window.history.back()">← Назад</button>
        <li>
            <a href="/ru/lesson_2/overview" id="overview">Обзор</a>
        </li>
        <li>
            <a href="/ru/lesson_2/grammar" id="grammar">Грамматика</a>
        </li>
        <li>
            <a href="/ru/lesson_2/reading" id="reading">Чтение</a>
        </li>
        <li>
            <a href="/ru/lesson_2/exercises" id="exercises">Упражнения</a>
        </li>
    </ul>
`;
const lesson3SideMenuHTML = `
    <ul>
        <button onclick="window.history.back()">← Назад</button>
        <li>
            <a href="/ru/lesson_3/overview" id="overview">Обзор</a>
        </li>
        <li>
            <a href="/ru/lesson_3/grammar" id="grammar">Грамматика</a>
        </li>
        <li>
            <a href="/ru/lesson_3/reading" id="reading">Чтение</a>
        </li>
        <li>
            <a href="/ru/lesson_3/exercises" id="exercises">Упражнения</a>
        </li>
    </ul>
`;
const lesson4SideMenuHTML = `
    <ul>
        <button onclick="window.history.back()">← Назад</button>
        <li>
            <a href="/ru/lesson_4/overview" id="overview">Обзор</a>
        </li>
        <li>
            <a href="/ru/lesson_4/grammar" id="grammar">Грамматика</a>
        </li>
        <li>
            <a href="/ru/lesson_4/reading" id="reading">Чтение</a>
        </li>
        <li>
            <a href="/ru/lesson_4/exercises" id="exercises">Упражнения</a>
        </li>
    </ul>
`;

switch (group) {
    case "ru":
        break;
    case "writing":
        document.querySelector('#writing').style = "background-color: #fdab13; padding: 8px 12px;";
        break;
    case "parts_of_speech":
        document.querySelector('#parts_of_speech').style = "background-color: #fdab13; padding: 8px 12px;";
        break;
    case "grammar":
        document.querySelector('#grammar').style = "background-color: #fdab13; padding: 8px 12px;";
        break;
    case "songs":
        document.querySelector('#songs').style = "background-color: #fdab13; padding: 8px 12px;";
        break;
    case "listening":
        document.querySelector('#listening').style = "background-color: #fdab13; padding: 8px 12px;";
        break;
    case "lesson_1":
        document.querySelector('.side_menu').innerHTML = lesson1SideMenuHTML;
        document.querySelector('#lesson1').style = "background-color: #fdab13;";
        break;
    case "lesson_2":
        document.querySelector('.side_menu').innerHTML = lesson2SideMenuHTML;
        document.querySelector('#lesson2').style = "background-color: #fdab13;";
        break;
    case "lesson_3":
        document.querySelector('.side_menu').innerHTML = lesson3SideMenuHTML;
        document.querySelector('#lesson3').style = "background-color: #fdab13;";
        break;
    case "lesson_4":
        document.querySelector('.side_menu').innerHTML = lesson4SideMenuHTML;
        document.querySelector('#lesson4').style = "background-color: #fdab13;";
        break;
}
switch (pageName) {
    case "alphabet":
        document.querySelector('#alphabet').style = "background-color: #fdab13;";
        document.querySelector('#alphabet > a').style = "color: #000000ff;";
        break;
    case "vowels":
        document.querySelector('#vowels').style = "background-color: #fdab13;";
        document.querySelector('#vowels > a').style = "color: #000000ff;";
        break;
    case "consonants":
        document.querySelector('#consonants').style = "background-color: #fdab13;";
        document.querySelector('#consonants > a').style = "color: #000000ff;";
        break;
    case "nouns":
        document.querySelector('#nouns').style = "background-color: #fdab13;";
        document.querySelector('#nouns > a').style = "color: #000000ff;";
        break;
    case "verbs":
        document.querySelector('#verbs').style = "background-color: #fdab13;";
        document.querySelector('#verbs > a').style = "color: #000000ff;";
        break;
    case "adjectives":
        document.querySelector('#adjectives').style = "background-color: #fdab13;";
        document.querySelector('#adjectives > a').style = "color: #000000ff;";
        break;
    case "numerals":
        document.querySelector('#numerals').style = "background-color: #fdab13;";
        document.querySelector('#numerals > a').style = "color: #000000ff;";
        break;
    case "personal_pronouns":
        document.querySelector('#personal_pronouns').style = "background-color: #fdab13;";
        document.querySelector('#personal_pronouns > a').style = "color: #000000ff;";
        break;
    case "demontratives":
        document.querySelector('#demontratives').style = "background-color: #fdab13;";
        document.querySelector('#demontratives > a').style = "color: #000000ff;";
        break;
    case "overview":
        document.querySelector('#overview').style = "background-color: #fdab13;";
        break;
    case "grammar":
        document.querySelector('#grammar').style = "background-color: #fdab13;";
        break;
    case "reading":
        document.querySelector('#reading').style = "background-color: #fdab13;";
        break;
    case "exercises":
        document.querySelector('#exercises').style = "background-color: #fdab13;";
        break
}

document.querySelectorAll('.side_menu ul > li').forEach(function(li) {
    li.addEventListener('click', function(e) {
        e.stopPropagation();

        var submenu = li.querySelector('.side_submenu');
        var isOpen = submenu && submenu.style.display === 'block';

        document.querySelectorAll('.side_submenu').forEach(function(sub) {
            sub.style.display = 'none';
        });

        if (submenu && !isOpen) {
            submenu.style.display = 'block';
        }
    });
});