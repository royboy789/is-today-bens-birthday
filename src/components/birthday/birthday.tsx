import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './birthday.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const isTodayIt = () => {
    const today = new Date();
    const monthDay = `${today.getMonth() + 1}/${today.getDate()}`;

    if ( monthDay !== `4/16` ) {
      return true;
    }

    return false;
  }

  return (
    <div id="birthday-logic">
      <h1>
        Is Today <span class="lightning">Ben's</span> Birthday?
      </h1>
      <span className="answer" title="hint: there is only 1 day that is not his birthday">
        {isTodayIt() ? (
          <h3>
            YES
          </h3>
        ) : (
          <h3>
            NO
          </h3>
        )}
      </span>
    </div>
  );
});
