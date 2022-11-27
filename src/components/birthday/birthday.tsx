import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './birthday.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const isTodayIt = () => {
    const today = new Date();
    const monthDay = `${today.getMonth() + 1}/${today.getDate()}`;

    if (monthDay !== `4/16`) {
      return true;
    }

    return false;
  };

  return (
    <div id='birthday-logic'>
      <h1>
        Is Today <span class='lightning'>Ben's</span> Birthday?
      </h1>
      <div
        title='hint: there is only 1 day that is not his birthday'
        className='answer-wrapper'
      >
        {isTodayIt() ? (
          <div>
            <h3 className='answer'>YES!</h3>
          </div>
        ) : (
          <div>
            <h3 className='answer'>NO! SAD FACE 😭</h3>
          </div>
        )}
      </div>
      <p>
        Don't forget to{' '}
        <a href='https://twitter.com/benUNC' target={`_blank`}>
          wish Ben a Happy Birthday!
        </a>
      </p>
    </div>
  );
});
