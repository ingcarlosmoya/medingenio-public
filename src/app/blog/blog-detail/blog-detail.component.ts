import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BlogService } from '../../services/blog.service';
import { Article } from '../article';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})


export class BlogDetailComponent implements OnInit {

  article: Article = new Article();
  articles: Article[];

  ngOnInit() {
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService,
    private router: Router) {
    this.setArticle();
  }

  setArticleRightList(id: string): any {
    this.blogService.getArticlesRightList().subscribe(articles => {
      this.articles = articles.filter(x => x.id != id);
    });
  }

  setArticle(): any {
    this.route.params.subscribe(
      params => {
        if (params.id) {
          this.blogService.getArticleById(params.id).subscribe(article => {
            this.article = article;
            this.setArticleRightList(params.id);
          });
        }
        else {
          this.router.navigate['home'];
        }
      });

  }

}
    // var washingtonRef = this.db.collection("articles").doc("0RvoWOhBbfm1lJQek5Hg");

    // // Set the "capital" field of the city 'DC'
    // return washingtonRef.set({
    //   createDate : new Date(),
    //   enabled : true,
    //   facebook : "https://tinyurl.com/y79n9jnt",
    //   image: "https://www.medingenio.com/assets/img/blog/5secretos.jpg",
    //   linkedin:  "https://tinyurl.com/ydf2jsph",
    //   text: `<h2>5 Secretos para recibir la visita de la Secretaria sin problemas</h2><p class="text-justify"> Al iniciar un nuevo proyecto, siempre realizamos un diagnóstico inicial al llegar al Consultorio o IPS revisamos la documentacióncon la que cuenta el prestador y encontramos documentos de años anteriores, los registros se encuentran desactualizados,con información errónea o incompleta, y nos enfrentamos al problema más frecuente; el prestador<strong>NO IMPLEMENTA EL SUH</strong>; un gran porcentaje de ustedes pagan para que los asesoren, les documenten el Sistema y lainformación entregada no es revisada y no son capacitados.<br><br> Esta situación se repite continuamente el nuestro trabajo diario, por eso queremos compartir con ustedes los secretosque les permitirán tener su SUH implementado:<br><br><strong>Primer Secreto:</strong><br> No dejes de realizar el mantenimiento preventivo o correctivo de los equipos biomédicos, sin lo haces luego tendrás queinvertir mas dinero, perderás tiempo o estás en riesgo que te multen por estar sin mantenimientos.<br><br><strong>Segundo Secreto:</strong><br> Revisa con alguna periodicidad las instalaciones de tu Consultorio o IPS, si observas algunas adecuaciones por hacer,prográmalas no dejes que el tiempo las acentué. Construye un cronograma de acuerdo a tu presupuesto y cúmplelo.<br><br><strong>Tercer Secreto:</strong><br> Siempre revisa los insumos que compras, no importa el lugar verifica, lote, registro INVIMA, fecha de vencimiento entreotros, controla un posible evento adverso, usa el Acta de Recepción.<br><br><strong>Cuarto Secreto:</strong><br> Aprende como se debe realizar la limpieza y desinfección de tu consultorio o IPS, es la única manera de verificar si lapersona que la realiza lo hace de la manera correcta, evita posibles infecciones y que cuando el verificador de la secretariale pregunte, no quede azul por no saber.<br><br><strong>Quinto Secreto:</strong><br> Pesa los residuos que se generan el tu consultorio o IPS, emplea el formato RH1, no olvides que con esos datos se hacereporte de los indicadores antes las Secretarias de tu ciudad.<br><p class="text-right"><strong>Continuara...</strong></p><br></p>`,
    //   twitter: "https://tinyurl.com/y7urxwup",
    //   metaTags: [
    //     {
    //       content: "article",
    //       property: "og:type",
    //       type: "'og"
    //     },
    //     {
    //       content: "Medingenio",
    //       property: "og:site_name",
    //       type: "'og"
    //     },
    //     {
    //       content: "5 Secretos para recibir la visita de la Secretaria sin problemas",
    //       property: "og:title",
    //       type: "'og"
    //     },
    //     {
    //       content: "Al iniciar un nuevo proyecto, siempre realizamos un diagnóstico inicial...",
    //       property: "og:description",
    //       type: "'og"
    //     },
    //     {
    //       content: "https://www.medingenio.com/assets/img/blog/5secretos.jpg",
    //       property: "og:image",
    //       type: "'og"
    //     },
    //     {
    //       content: "https://www.medingenio.com/blog-detail/0RvoWOhBbfm1lJQek5Hg",
    //       property: "og:url",
    //       type: "'og"
    //     },
    //     {
    //       content: "Patricia Espinosa Matiz",
    //       property: "og:author",
    //       type: "'og"
    //     }

    //   ]
    // })
    //   .then(function () {
    //     console.log("Document successfully updated!");
    //   })
    //   .catch(function (error) {
    //     // The document probably doesn't exist.
    //     console.error("Error updating document: ", error);
    //   });



