import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Components
import Birthday from './../components/birthday/birthday';

export default component$(() => {
  return (
    <div>
      <Birthday />
    </div>
    
  );      
});

export const head: DocumentHead = {
  title: 'Is Today Ben\'s Birthday',
  meta: [
    {
      name: 'description',
      content: 'IS today Ben\'s birthday? Find out now!',
    },
  ],
};
