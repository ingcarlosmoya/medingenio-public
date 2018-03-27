import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Article } from './../blog/article';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BlogService {
  getArticles(): Observable<Article[]> {
    return this.db.collection<Article>('articles', ref => ref.orderBy('createDate', 'desc'))
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Article;
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }
  articleRef: AngularFirestoreDocument<Article>;

  getArticlesRightList(): Observable<Article[]> {
    return this.db.collection<Article>('articles', ref => ref.orderBy('createDate', 'desc').limit(4))
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Article;
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }

  getArticleById(id: string): Observable<Article> {
    this.articleRef = this.db.collection('articles').doc(id);
    return this.articleRef.valueChanges();
  }

  constructor(private db: AngularFirestore) { }

}
