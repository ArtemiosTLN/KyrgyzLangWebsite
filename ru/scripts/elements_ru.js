class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
            <h1 class="site_name"><a href="/"><img src="/logo.png" class="logo"></img>KyrgyzEasy</a></h1>
            <ul class="header_menu">
                <li style="position: relative;">
                    <a href="/ru/lesson_1/overview" class="menu_main_button" id="lesson1">1</a>
                    <ul class="submenu">
                        <li><a href="/ru/lesson_1/overview" class="menu_sub_button">Обзор</a></li>
                        <li><a href="/ru/lesson_1/grammar" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="/ru/lesson_1/reading" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="/ru/lesson_1/exercises" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="/ru/lesson_2/overview" class="menu_main_button" id="lesson2">2</a>
                    <ul class="submenu">
                        <li><a href="/ru/lesson_2/overview" class="menu_sub_button">Обзор</a></li>
                        <li><a href="/ru/lesson_2/grammar" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="/ru/lesson_2/reading" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="/ru/lesson_2/exercises" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="/ru/lesson_3/overview" class="menu_main_button" id="lesson3">3</a>
                    <ul class="submenu">
                        <li><a href="/ru/lesson_3/overview" class="menu_sub_button">Обзор</a></li>
                        <li><a href="/ru/lesson_3/grammar" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="/ru/lesson_3/reading" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="/ru/lesson_3/exercises" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="/ru/lesson_4/overview" class="menu_main_button" id="lesson4">4</a>
                    <ul class="submenu">
                        <li><a href="/ru/lesson_4/overview" class="menu_sub_button">Обзор</a></li>
                        <li><a href="/ru/lesson_4/grammar" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="/ru/lesson_4/reading" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="/ru/lesson_4/exercises" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="language_menu">
                <p>Русский ▼</p>
                <ul class="language_submenu">
                    <li><a href="#">Кыргызча (WIP)</a></li>
                    <li><a href="#">English (WIP)</a></li>
                </ul>
            </ul>
        </nav>
      </header>
    `;
    this.querySelectorAll('nav ul > li').forEach(function(li) {
      li.addEventListener('mouseenter', function() {
          var submenu = li.querySelector('.submenu');
          if(submenu) submenu.style.display = 'block';
      });
      li.addEventListener('mouseleave', function() {
          var submenu = li.querySelector('.submenu');
          if(submenu) submenu.style.display = 'none';
      });
    });
    this.querySelectorAll('.language_menu > p').forEach(function(p) {
      p.addEventListener('click', function(e) {
          e.stopPropagation();

          var submenu = p.nextElementSibling;
          var isOpen = submenu && submenu.style.display === 'block';

          if (submenu && !isOpen) {
              submenu.style.display = 'block';
          } else submenu.style.display = 'none';
      });
    });
  }
}
customElements.define("site-header", SiteHeader);

class FooterSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <nav class="footer_menu">
          <ul>
              <li><a href="/ru/contacts">Контакты</a></li>
              <li><a href="/ru/about">О нас</a></li>
          </ul>
      </nav>
      <p>2025 KyrgyzEasy</p>
    </footer>`;
  }
}
customElements.define("site-footer", FooterSection);
