import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import Cronometro from '../layout/Cronometro';
import './Hero.scss'

class Hero extends Nullstack {


  render() {
    
    return (
      <>
        <div class="leading-normal tracking-normal text-white bg-gradient-radial">

          <MenuSales />

          <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">

            <div class="sm:flex md:flex md:justify-around">

              <div class="sm:w-full sm:mx-auto">

                <div class="sm:w-full sm:mx-auto">
                      <div class="embed">
                        <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                      </div>
                </div>
              </div>

              <div class="z-10 ml-4">
                <div class="text-end px-3 lg:px-0 pb-10">
                      <h2 class="leading-normal sm:text-lg md:text-3xl mb-8">Aprenda, passo a passo, a sair do ZERO e Se tornar 
                            um <spa class="bg-red-900">Profissional na programação</spa> Com um dos maiores salários do setor​ </h2>

                            <p class="md:text-1xl">Aprenda com projetos reais que vão além da teoria e te colocam
                            frente a frente com os códigos já nas primeiras aulas! <br /><br />

                            Vá do básico ao profissional <spa class="bg-red-900">sem perda de tempo</spa> e esteja dentro
                            de uma das áreas mais promissoras para o futuro, a programação!</p>
                  </div>
              </div>
            </div>


          </div>


       

         
          <div class="relative m-0 p-0 w-full">
            <img class="w-full block absolute bottom-0" src="/sales-page-img/hero/Waves.png" alt="waves" loading="lazy" width="1786" height="628" />
          </div>
         
        </div>
      </>
    );
  }

}

export default Hero;