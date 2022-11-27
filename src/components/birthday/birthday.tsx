import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './birthday.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div id="birthday-logic">
      <h1>
        Is Today <span class="lightning">Ben's</span> Birthday?
      </h1>
      <span className="answer">Birthday Logic</span>
    </div>
  );
});
