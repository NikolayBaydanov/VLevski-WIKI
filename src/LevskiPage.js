// LevskiPage.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './LevskiPage.css';

function LevskiPage() {
  const { theme } = useContext(ThemeContext);

  // Define dynamic styles based on the theme:
  // - For light theme: white background with dark text.
  // - For dark theme: very dark background with white text.
  const containerStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
    color: theme === 'light' ? '#333333' : '#ffffff',
  };

  return (
    <div className="levski-page" style={containerStyle}>
      <header className="levski-header">
        <h1>Васил Левски</h1>
      </header>
      <article>
        <section>
          <p>
            Васил Иванов Кунчев, известен още като Васил Левски,[1] е български революционер и национален герой. Той е идеолог и организатор на българската национална революция, основател на Вътрешната революционна организация (ВРО). Известен е и като Апостола на свободата, заради организирането и разработването на революционна мрежа за освобождаване на България от османско владичество. Пътува по страната и създава частни революционни комитети, които да подготвят обща революция.[2]
          </p>
        </section>
        
        <section>
          <h2>Биография</h2>
          <h3>Образование и младежки години</h3>
          <p>
            Според повечето източници Васил Иванов Кунчев е роден на 18 юли 1837 г. в Карлово.[3] По-нови изследвания обаче сочат, че е роден на 18 юли 1840 г.[4][5] Син е на Иван Кунчев Иванов и Гина Василева Караиванова. Родителите му имат пет деца – Христо, Васил, Петър, Яна и Марийка.
          </p>
          <p>
            Дядото на Левски по бащина линия е син или племенник на Тудур Кръстилов, преписвач на „История славянобългарска“, който извежда родословието си от някой си Драгой, „спахия“ в Кочмаларе в началото на XVII век.[6] Бащата на Левски Иван Кунчев (1808 – 1851) е родом от село Кочмаларе (днес Отец Паисиево), като малък се премества със семейството си във Войнягово, а по-късно се установява в Карлово.[6]
          </p>
        </section>
        {/* Add additional sections and paragraphs as needed */}
      </article>
    </div>
  );
}

export default LevskiPage;
