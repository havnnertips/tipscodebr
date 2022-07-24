import './Application.scss';
import Nullstack from 'nullstack';
import SalesPage from './course-fullstack-turbo/SalesPage';


class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main class="bg-tips-light">

        <Head />
        <SalesPage route="/" />

    

      </main>
    );
  }

}

export default Application;