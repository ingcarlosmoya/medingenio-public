export class Article {
    createDate: Date;
    enabled: boolean;
    id:string;
    image: string;
    text: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    metaTags: MetaTag[]
  
    constructor() {
      this.image = "https://www.medingenio.com/assets/img/blog/lipovisita.jpg"
      this.enabled = true;
      this.facebook = "";
      this.twitter = "";
      this.linkedin = "";
      this.text = "";
    }
  }
  
  class MetaTag {
    content: string;
    property: string;
    type: string
  }