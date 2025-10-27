class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
            <h1 class="site_name"><a href="/">Кыргызский язык</a></h1>
            <ul class="header_menu">
                <li style="position: relative;">
                    <a href="/ru/lesson_1/overview.html" class="menu_main_button">1</a>
                    <ul class="submenu">
                        <li><a href="/ru/lesson_1/overview.html" class="menu_sub_button">Обзор</a></li>
                        <li><a href="/ru/lesson_1/reading.html" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="/ru/lesson_1/grammar.html" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="/ru/lesson_1/exercises.html" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="#" class="menu_main_button">2</a>
                    <ul class="submenu">
                        <li><a href="#" class="menu_sub_button">Обзор</a></li>
                        <li><a href="#" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="#" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="#" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="#" class="menu_main_button">3</a>
                    <ul class="submenu">
                        <li><a href="#" class="menu_sub_button">Обзор</a></li>
                        <li><a href="#" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="#" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="#" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="#" class="menu_main_button">4</a>
                    <ul class="submenu">
                        <li><a href="#" class="menu_sub_button">Обзор</a></li>
                        <li><a href="#" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="#" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="#" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
                <li style="position: relative;">
                    <a href="#" class="menu_main_button">5</a>
                    <ul class="submenu">
                        <li><a href="#" class="menu_sub_button">Обзор</a></li>
                        <li><a href="#" class="menu_sub_button">Чтение и словарный запас</a></li>
                        <li><a href="#" class="menu_sub_button">Грамматика</a></li>
                        <li><a href="#" class="menu_sub_button">Упражнения</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="language_menu">
                <p>Русский ▼</p>
                <ul class="language_submenu">
                    <li><a href="/kg/main.html">Кыргызча (WIP)</a></li>
                    <li><a href="/en/main.html">English (WIP)</a></li>
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
              <li><a href="#">Контакты</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Ваши предложения</a></li>
          </ul>
      </nav>
      <p>2025 Кыргызский язык с нуля</p>
    </footer>`;
  }
}
customElements.define("site-footer", FooterSection);
