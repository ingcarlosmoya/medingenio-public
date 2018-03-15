import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: string;
  blog: string;
  img: string;
  facebook: string;
  twitter: string;
  linkedin: string;

  constructor(private route: ActivatedRoute, private router: Router, private Meta:Meta) {
    this.Meta.addTag({ property: 'og:url', content: 'https://www.medingenio.com/blog-detail/1' });
    this.Meta.addTag({ property: 'og:type', content: 'article' });
    this.Meta.addTag({ property: 'og:title', content: 'Visita de la Secretaria de Salud, ¿Una Lipo-Visita?' });
    this.Meta.addTag({ property: 'og:description', content: 'Es días pasados recibí la llamada de un amigo' });
    this.Meta.addTag({ property: 'og:image', content: 'https://www.medingenio.com/assets/img/blog/lipovisita.jpg' });

    this.Meta.addTag({ name: 'twitter:site', content: '@medingenio' });
    this.Meta.addTag({ name: 'twitter:title', content: 'Visita de la Secretaria de Salud, ¿Una Lipo-Visita?' });
    this.Meta.addTag({ name: 'twitter:description', content: 'Es días pasados recibí la llamada de un amigo' });
    this.Meta.addTag({ name: 'twitter:image', content: 'https://www.medingenio.com/assets/img/blog/lipovisita.jpg' });
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params.id)
          this.setArticle(params.id)
        console.log(params.id)
      });

  }

  setArticle(id: string): any {
    switch (id) {
      case '1': {
        this.facebook = "https://tinyurl.com/yad6qh78";
        this.twitter = "https://tinyurl.com/yckr9xor";
        this.linkedin = "https://tinyurl.com/y8lruha6";
//         <meta property="og:url"                content="https://www.medingenio.com/blog-detail/1" />
// <meta property="og:type"               content="article" />
// <meta property="og:title"              content="Visita de la Secretaria de Salud, ¿Una Lipo-Visita?" />
// <meta property="og:description"        content="EN DÍAS PASADOS recibí la llamada de un amigo, que me comento, que a uno de sus mejores clientes le anunciaron vista de la Secretaria Distrital de Salud y que el asesor que les estaba ayudando, se había perdido del mapa, no contestaba llamadas ni correos y que como buenos colombianos, el prestador había dejado las tareas del sistema de habilitación para lo último. Nos pidieron visitarlos y realizar un chequeo a los documentos y al proceso que ellos llevaban." />
// <meta property="og:image"              content="https://www.medingenio.com/assets/img/blog/lipovisita.jpg" />


        this.img = "/assets/img/blog/lipovisita.jpg";
        this.blog = `<h2>Visita de la Secretaria de Salud, ¿Una Lipo-Visita?</h2>
        <p class="about-center text-justify"> EN DÍAS PASADOS recibí la llamada de un amigo, que me comento, que a uno de sus mejores clientes le anunciaron vista
          de la Secretaria Distrital de Salud y que el asesor que les estaba ayudando, se había perdido del mapa, no contestaba
          llamadas ni correos y que como buenos colombianos, el prestador había dejado las tareas del sistema de habilitación
          para lo último. Nos pidieron visitarlos y realizar un chequeo a los documentos y al proceso que ellos llevaban.
          <br>
          <br>El día de la reunión, el prestador estaba tranquilo, ya que creía que todo estaba listo y que lo faltante, era muy
          poquito. Notamos que se sentía angustiado y preocupado, ya que le habían contado muchas cosas de los verificadores
          de la secretaria, por ejemplo: que llegaban sin previo aviso, que abrían los cajones, que hacían preguntas sin sentido
          o solicitaban documentos fuera de la norma. Nosotros lo tranquilizamos, le contamos como era el proceso de la visita,
          le dimos varios tips y truquitos.
          <br>
          <br>Pero al verificar los documentos, notamos que estaban completamente desactualizados respecto a la resolución 2003 de
          2014, y que estaba corto en gestión. Tuvimos una semana para hacer todo el proceso, el prestador y nosotros no dormíamos,
          correos iban y venían a la 1:00 de la mañana, tratando de cumplir con todos los requisitos y no dejando cabos sueltos.
          Hacíamos conferencias virtuales para capacitarlo.
          <br>
          <br>El gran día de la visita, todos estábamos asustados, el prestadorsus colaboradores y nosotros que estábamos online
          siguiendo el paso a paso. Durante la visita todo fue un caos, llegaron 6 verificadores, unos más estrictos que otros,
          que les pedían cosas al mismo tiempo. No leían los documentos, sino que se los preguntaban y corroboraban que aquello
          que estuviera escrito y fuera coherente con lo que respondían y luego de esto verificaron la gestión realizada, los
          alcances y los planes de mejora. Solicitaban documentos, que nos dejaron perplejos, como el protocolo de tecnologías
          limpias, ya que tenían equipos de última tecnología. Afortunadamente los cambios fueron mínimos y el prestador fue
          certificado.
          <br>
          <br> Èl concluyo que la visita de la secretaria es la LIPO - VISITA, porque bajó 3 kilos debido al estrés. Y nosotros concluimos,
          que la verificación se enfoca en evidenciar los soportes de las acciones realizadas para cumplir con lo descrito en
          el documento. Es decir, ya no solo basta con tener solo los documentos se hace necesario aplicarlos dejando soporte
          del trabajo realizado, de los hallazgos y de las acciones tomadas.</p>`;
        break;
      }
      case '2': {
        this.facebook = "https://tinyurl.com/ycebh6j8";
        this.twitter = "https://tinyurl.com/ydb7retz";
        this.linkedin = "https://tinyurl.com/yawhmoom";
        this.img = "/assets/img/blog/seguridadDelPaciente.jpg";
        this.blog =
          `    <h2>Seguridad del Paciente</h2>
        <blockquote class="blockquote text-right">
  <p class="mb-0">
  "Seguridad del Paciente se define como el conjunto de elementos estructurales, procesos, instrumentos y metodologías
          basadas en evidencias científicamente probadas que propenden por minimizar el riesgo de sufrir un evento adverso en
          el proceso de atención de salud o de mitigar sus consecuencias"</p>
  <footer class="blockquote-footer">Definición del <cite title="Source Title">Ministerio de Salud y Protección Social , Colombia</cite></footer>
</blockquote>
        <br>
        En palabras más sencillas, el programa de seguridad al paciente, buscan que el profesional de la salud o la institución
          prestadora<br>
        <br>
        <ol>
          <li>Tome una postura consiente ante los riesgos a los que está expuesto su paciente. </li>
          <li>Identifique los riesgos y las acciones inseguras </li>
          <li>Determine que procesos realiza para evitar esos riesgos. (Eventos adversos). </li>
          <li>Si se presenta un evento, debe contar con una herramienta metodológica que permita analizar y medir los alcáncese del
            evento. </li>
          <li>Postule acciones de mejora. </li>
          <li>Evalué la implantación de estas acciones. </li>
        </ol>
        <br>
        <p class="text-justify"> Medingenio ha diseñado una capacitación en la que te ayudamos a conocer la teoría de los lineamientos de Seguridad del
          Paciente (según Ministerio de Protección Social) y por medio de entrenamiento te enseñamos a poner en práctica lo que
          se debe aplicar en tu consultorio.
          <br>
          <br> Las actividades que se desarrollaran durante la capacitación: </p>
        <ul>
          <li>Actividades Lúdicas</li>
          <li>Prácticas Individuales</li>
          <li>Juegos de Roles</li>
          <li>Análisis de Casos propios</li>
          <li>Talleres</li>
        </ul>
        <p class="text-justify"> Solo se requieren 4 horas de tu tiempo, para vivir esta experiencia en tu lugar de trabajo, sin desplazamientos.
            <div class="contactUsLink">
              <a href="/contact">Contactanos!</a>
            </div>
        </p>`
        break;
      }
      case '3': {
        this.img = "/assets/img/blog/5secretos.jpg";
        this.facebook = "https://tinyurl.com/y79n9jnt";
        this.twitter = "https://tinyurl.com/y7urxwup";
        this.linkedin = "https://tinyurl.com/ydf2jsph";
        this.blog =
          `<h2>5 Secretos para recibir la visita de la Secretaria sin problemas</h2>
          <p class="text-justify"> Al iniciar un nuevo proyecto, siempre realizamos un diagnóstico inicial al llegar al Consultorio o IPS revisamos la documentación
  con la que cuenta el prestador y encontramos documentos de años anteriores, los registros se encuentran desactualizados,
  con información errónea o incompleta, y nos enfrentamos al problema más frecuente; el prestador
  <strong>NO IMPLEMENTA EL SUH</strong>; un gran porcentaje de ustedes pagan para que los asesoren, les documenten el Sistema y la
  información entregada no es revisada y no son capacitados.
  <br>
  <br> Esta situación se repite continuamente el nuestro trabajo diario, por eso queremos compartir con ustedes los secretos
  que les permitirán tener su SUH implementado:
  <br>
  <br>
  <strong>Primer Secreto:</strong>
  <br> No dejes de realizar el mantenimiento preventivo o correctivo de los equipos biomédicos, sin lo haces luego tendrás que
  invertir mas dinero, perderás tiempo o estás en riesgo que te multen por estar sin mantenimientos.
  <br>
  <br>
  <strong>Segundo Secreto:</strong>
  <br> Revisa con alguna periodicidad las instalaciones de tu Consultorio o IPS, si observas algunas adecuaciones por hacer,
  prográmalas no dejes que el tiempo las acentué. Construye un cronograma de acuerdo a tu presupuesto y cúmplelo.
  <br>
  <br>
  <strong>Tercer Secreto:</strong>
  <br> Siempre revisa los insumos que compras, no importa el lugar verifica, lote, registro INVIMA, fecha de vencimiento entre
  otros, controla un posible evento adverso, usa el Acta de Recepción.
  <br>
  <br>
  <strong>Cuarto Secreto:</strong>
  <br> Aprende como se debe realizar la limpieza y desinfección de tu consultorio o IPS, es la única manera de verificar si la
  persona que la realiza lo hace de la manera correcta, evita posibles infecciones y que cuando el verificador de la secretaria
  le pregunte, no quede azul por no saber.
  <br>
  <br>
  <strong>Quinto Secreto:</strong>
  <br> Pesa los residuos que se generan el tu consultorio o IPS, emplea el formato RH1, no olvides que con esos datos se hace
  reporte de los indicadores antes las Secretarias de tu ciudad.
  <br>
  <p class="text-right">
  <strong>Continuara...</strong>
  </p>
  <br>
</p>`;
        break;
      }
      default: {
        this.router.navigate(['/home']);
        break;
      }
    }
  }

}
