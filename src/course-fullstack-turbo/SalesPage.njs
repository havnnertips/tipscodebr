import Nullstack from 'nullstack';

import Hero from './Hero';
import CourseDetails from './CourseDetails';
import WhatLearn from './WhatLearn';
import MoreDetails from './MoreDetails';
import Bonus from './Bonus';
import Testimonials from './Testimonials';
import Projects from './Projects';
import CallToAction from './CallToAction';
import Teacher from './Teacher';
import Faq from './Faq';
import Footer from '../layout/Footer';
import FacePixelFullStack from './FacePixelFullStack';
import Contact from '../layout/Contact';
import Whatsapp from '../layout/Whatsapp';
import Workshop from './Workshop';

class SalesPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso Desenvolvedor FullStack Turbo`;
    page.description = `${project.name} Você no próximo nível`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png'
  }


  render({ router }) {
    return (
      <div class="bg-tips-dark">
        <div>
           <FacePixelFullStack id="294337825339805" />
        </div>
        <Hero />
        <Whatsapp linkWhats="https://api.whatsapp.com/send?phone=5588981259565&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Curso%20Full%20Stack%20Turbo%20" />
        <CourseDetails />
        <WhatLearn />
        <Workshop />
        <MoreDetails />
        <Bonus />
        <Testimonials />
        <Projects />
        <CallToAction />
        <Teacher />
        <Faq classe="bg-tips-dark" />
        <Contact numWhats="https://api.whatsapp.com/send?phone=5588981259565&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Curso%20Full%20Stack%20Turbo%20" />
         <Footer
          class={
           {
             footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10',
             p: 'text-center sm:text-center w-full',
           }
         }
          src="/TipsCodelogo.png"
          light
        />
      </div>
    );
  }

}

export default SalesPage;