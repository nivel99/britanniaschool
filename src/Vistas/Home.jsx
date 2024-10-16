import React, { useState, useEffect } from "react";
import "./App.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 por la resolución deseada
    };

    // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a la función para verificar el tamaño inicial

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div className="Separadora"></div>
      <Menu></Menu>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
        <div>
          <img
            src="https://britanniaschool.co.com/imagenes/Britannia1.png"
            className="imagenPortada"
          />
        </div>
        <div>
          <img
            src="https://britanniaschool.co.com/imagenes/2021/07/img4-1536x800.png"
            className="imagenPortada"
          />
        </div>
        <div>
          <img
            src="https://britanniaschool.co.com/imagenes/2022/10/df075e43-109b-4c36-a4c6-4b4fcd4daaf2.jpg"
            className="imagenPortada"
          />
        </div>
        <div>
          <img
            src="https://britanniaschool.co.com/imagenes/2022/10/d38fc904-1a13-4296-b9e9-0999b555a86c-3.jpg"
            className="imagenPortada"
          />
        </div>
        <div>
          <img
            src="https://britanniaschool.co.com/imagenes/2021/07/img3-1024x533.png"
            className="imagenPortada"
          />
        </div>
        <div>
          <img
            src="https://britanniaschool.co.com/imagenes/2021/07/img2-1536x800.png"
            className="imagenPortada"
          />
        </div>
      </Carousel>

      <div className="container">
        <div className="item">
          <img
            src="https://britanniaschool.co.com/imagenes/icon3-150x150.png"
            className="imagenColores"
          />
          <div className="item-content">
            <p>Instalaciones</p>
            <a href="#/Visitanos">
              <button>Visitanos</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img
            src="https://britanniaschool.co.com/imagenes/icon1-150x150.png"
            className="imagenColores"
          />
          <div className="item-content">
            <p>Convenios</p>
            <a href="#/Convenios">
              <button>Leer más</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img
            src="https://britanniaschool.co.com/imagenes/icon2-150x150.png"
            className="imagenColores"
          />
          <div className="item-content">
            <p className="plan">Plan académico</p>
            <a href="#/PlanAcademico">
              <button>Conocer</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img
            className="icono imagenColores"
            src="https://britanniaschool.co.com/imagenes/Iconos-01.png"
          />
          <div className="item-content">
            <p className="nombrecolor">Kidergarten</p>
            <a href="#/Kindergarten">
              <button className="botoncolor">Conocer</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img
            className="icono imagenColores"
            src="https://britanniaschool.co.com/imagenes/Iconos-02.png"
          />
          <div className="item-content">
            <p className="nombrecolor">Primary school</p>
            <a href="#/PrimarySchool">
              <button className="botoncolor">Conocer</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img
            className="icono imagenColores"
            src="https://britanniaschool.co.com/imagenes/Iconos-03.png"
          />
          <div className="item-content">
            <p className="plan">Secondary school</p>
            <a href="#/SecundarySchool">
              <button>Conocer</button>
            </a>
          </div>
        </div>
      </div>

      {isMobile ? (
        <div>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div class="content contentMobile">
              <div class="image-container">
                <img
                  src="https://britanniaschool.co.com/imagenes/imagenHome1.png"
                  className="estudiantesPortada"
                />
              </div>
              <div class="text-container">
                <h2>Salud mental positiva</h2>
                <p>
                  Britannia School promueve la salud mental positiva en los
                  estudiantes, buscando que se sientan en un estado de bienestar
                  social y emocional en donde puedan dar lo mejor de sí mismos.
                  Donde sean capaces de darse cuenta de sus habilidades,
                  participar en su mejor aprendizaje, hacer frente a las
                  tensiones normales de la vida y contribuir positivamente a
                  nuestra comunidad.
                </p>
              </div>
            </div>
            <div class="content content1 contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome6.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Educación personalizada</h2>
                  <p>
                    Ofrecemos un entorno de aprendizaje vivo e inspirado,
                    diseñado para fortalecer el desarrollo intelectual,
                    emocional y físico de nuestros estudiantes para que puedan
                    desempeñarse en un mundo real. Siempre reconociendo que cada
                    uno tienen diferentes habilidades, intereses y metas.
                    Nuestro plan de estudios académicos es exigente, pero lo
                    suficientemente flexible para permitir diferentes ritmos de
                    desarrollo y aprendizaje. Nuestro objetivo es que cada
                    estudiante alcance su máximo potencial.
                  </p>
                </div>
              </div>
              <div class="content contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome3.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Investigación</h2>
                  <p>
                    En el Britannia School el área de investigación tiene como
                    objetivo que los estudiantes comprendan la importancia de
                    nuestra diversidad y se apersone de las problemáticas
                    ambientales, sociales y de innovación, implementando
                    posibles soluciones, esto se lleva a cabo en actividades
                    didácticas como el día verde, la feria de la ciencia, soy
                    científico y el proyectos de investigación donde los
                    estudiantes aprendan a diseñar, desarrollar e implementar
                    proyectos aplicables en la comunidad educativa.
                  </p>
                </div>
              </div>
              <div class="content content1 contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome1.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Sentirse seguros</h2>
                  <p>
                    Britannia School busca que sus estudiantes se sientan
                    seguros, ya que es fundamental para su salud y el bienestar.
                    Qué tan seguro se sientan puede influir en sus hábitos
                    sociales y sentimientos de libertad. Cuando nuestros alumnos
                    se sienten seguros, pueden relajarse más fácilmente,
                    recuperarse del estrés y enfocar su necesidad en el estudio
                    y aprendizaje.
                  </p>
                </div>
              </div>
              <div class="content contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome2.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Profesores calificados</h2>
                  <p>
                    Nuestros maestros a parte de su preparación académica y
                    experiencia, cuentan con fuertes habilidades en
                    comunicación, trabajo en equipo, administración del tiempo,
                    resolución de problemas y organización.
                  </p>
                </div>
              </div>
              <div class="content content1 contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/Colegiocampestre.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Colegio campestre</h2>
                  <p>
                    El espacio y la belleza natural de nuestro colegio brindan
                    el mejor entorno de aprendizaje posible para nuestros
                    estudiantes. Hay espacio para crecer, explorar, ser
                    creativo, activo e inspirado.
                  </p>
                </div>
              </div>
              <div class="content contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome4.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Ser inclusivos</h2>
                  <p>
                    Ser inclusivos y admitir la diversidad significa aceptar
                    abiertamente a los demás y sus opiniones, independientemente
                    del sexo, la raza, la sexualidad, la capacidad o el origen
                    socioeconómico. Se ha demostrado que ser inclusivos en un
                    entorno escolar reduce la incidencia de agresiones motivadas
                    por; prejuicios, racismo, discriminación e intolerancia en
                    la comunidad en general.
                  </p>
                </div>
              </div>
              <div class="content content1 contentMobile">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome5.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Examen Internacional</h2>
                  <p>
                    Los alumnos del colegio Britannia School, podrán obtener un
                    certificado internacional de dominio del idioma inglés, tras
                    presentar un exámenes internacional el cual abarca las
                    habilidades desarrolladas y aprendidas durante todo el
                    proceso académico, desde las primeras etapas de preescolar
                    hasta los últimos grados de secundaria. Una certificación de
                    inglés formal, aumenta las habilidades de comunicación y,
                    la confianza para relacionarse con diferentes personas,
                    conocer otras culturas y conocimientos, además de grandes
                    oportunidades académicas para el futuro.
                  </p>
                </div>
              </div>
          </Carousel>
        </div>
      ) : (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <div class="main-container">
              <div class="content">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome1.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Salud mental positiva</h2>
                  <p>
                    Britannia School promueve la salud mental positiva en los
                    estudiantes, buscando que se sientan en un estado de
                    bienestar social y emocional en donde puedan dar lo mejor de
                    sí mismos. Donde sean capaces de darse cuenta de sus
                    habilidades, participar en su mejor aprendizaje, hacer
                    frente a las tensiones normales de la vida y contribuir
                    positivamente a nuestra comunidad.
                  </p>
                  {/* <button>Ver más</button> */}
                </div>
              </div>
              <div class="content content1">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome6.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Educación personalizada</h2>
                  <p>
                    Ofrecemos un entorno de aprendizaje vivo e inspirado,
                    diseñado para fortalecer el desarrollo intelectual,
                    emocional y físico de nuestros estudiantes para que puedan
                    desempeñarse en un mundo real. Siempre reconociendo que cada
                    uno tienen diferentes habilidades, intereses y metas.
                    Nuestro plan de estudios académicos es exigente, pero lo
                    suficientemente flexible para permitir diferentes ritmos de
                    desarrollo y aprendizaje. Nuestro objetivo es que cada
                    estudiante alcance su máximo potencial.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="main-container">
              <div class="content">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome3.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Investigación</h2>
                  <p>
                    En el Britannia School el área de investigación tiene como
                    objetivo que los estudiantes comprendan la importancia de
                    nuestra diversidad y se apersone de las problemáticas
                    ambientales, sociales y de innovación, implementando
                    posibles soluciones, esto se lleva a cabo en actividades
                    didácticas como el día verde, la feria de la ciencia, soy
                    científico y el proyectos de investigación donde los
                    estudiantes aprendan a diseñar, desarrollar e implementar
                    proyectos aplicables en la comunidad educativa.
                  </p>
                </div>
              </div>
              <div class="content content1">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome1.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Sentirse seguros</h2>
                  <p>
                    Britannia School busca que sus estudiantes se sientan
                    seguros, ya que es fundamental para su salud y el bienestar.
                    Qué tan seguro se sientan puede influir en sus hábitos
                    sociales y sentimientos de libertad. Cuando nuestros alumnos
                    se sienten seguros, pueden relajarse más fácilmente,
                    recuperarse del estrés y enfocar su necesidad en el estudio
                    y aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="main-container">
              <div class="content">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome2.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Profesores calificados</h2>
                  <p>
                    Nuestros maestros a parte de su preparación académica y
                    experiencia, cuentan con fuertes habilidades en
                    comunicación, trabajo en equipo, administración del tiempo,
                    resolución de problemas y organización.
                  </p>
                </div>
              </div>
              <div class="content content1">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/Colegiocampestre.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Colegio campestre</h2>
                  <p>
                    El espacio y la belleza natural de nuestro colegio brindan
                    el mejor entorno de aprendizaje posible para nuestros
                    estudiantes. Hay espacio para crecer, explorar, ser
                    creativo, activo e inspirado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="main-container">
              <div class="content">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome4.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Ser inclusivos</h2>
                  <p>
                    Ser inclusivos y admitir la diversidad significa aceptar
                    abiertamente a los demás y sus opiniones, independientemente
                    del sexo, la raza, la sexualidad, la capacidad o el origen
                    socioeconómico. Se ha demostrado que ser inclusivos en un
                    entorno escolar reduce la incidencia de agresiones motivadas
                    por; prejuicios, racismo, discriminación e intolerancia en
                    la comunidad en general.
                  </p>
                </div>
              </div>
              <div class="content content1">
                <div class="image-container">
                  <img
                    src="https://britanniaschool.co.com/imagenes/imagenHome5.png"
                    className="estudiantesPortada"
                  />
                </div>
                <div class="text-container">
                  <h2>Examen Internacional</h2>
                  <p>
                    Los alumnos del colegio Britannia School, podrán obtener un
                    certificado internacional de dominio del idioma inglés, tras
                    presentar un exámenes internacional el cual abarca las
                    habilidades desarrolladas y aprendidas durante todo el
                    proceso académico, desde las primeras etapas de preescolar
                    hasta los últimos grados de secundaria. Una certificación de
                    inglés formal, aumenta las habilidades de comunicación y,
                    la confianza para relacionarse con diferentes personas,
                    conocer otras culturas y conocimientos, además de grandes
                    oportunidades académicas para el futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      )}

      <Footer></Footer>
    </div>
  );
}

export default Home;
