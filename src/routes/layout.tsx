import { component$, Slot } from '@builder.io/qwik';
// import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        {/* <Header /> */}
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://hiroy.io" target="_blank">
          Made with ♡ by RoyBoy789 using Qwik
        </a>
        <a href="https://github.com/royboy789/is-today-bens-birthday" target={`_blank`}>
          GitHub Repo
        </a>
      </footer>
    </>
  );
});
