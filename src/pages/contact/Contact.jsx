import Horarios from '../../components/sectionContact/Horarios';
import Sociales from '../../components/sectionContact/sociales';
import Title from '../../components/sectionContact/Title';
import './contact.scss';
function Contact() {
  return (
    <footer id="contact" className="section_contact">
      <div className="wrapper_horarios">
        <Title title={'Horarios de Atención'} />
        <div className="grid">
          <Horarios dias="Lunes" />
          <Horarios dias="Martes" />
          <Horarios dias="Miercoles" />
          <Horarios dias="Jueves" />
          <Horarios dias="Viernes" />
          <Horarios dias="Sabado" horas="8:00am - 12:00pm" />
        </div>
      </div>
      <div className="wrapper_social">
        <Title title="Redes Sociales" color="#F0F0F0" marginTop={'20px'} />
        <Sociales />
      </div>
    </footer>
  );
}

export default Contact;
