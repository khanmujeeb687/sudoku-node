const axios = require('axios').default;
const store=require('../store');

class NewsController{

  apiKey='1b95244a4a224694b6e746d66ade82b7';
  data=[
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
  ];

 async setNews(){
  for(let i=0;i<this.data.length;i++){
   const data  = await axios.get(`http://newsapi.org/v2/top-headlines?country=in&category=${this.data[i]}&apiKey=${this.apiKey}`);
   store[this.data[i]]=data.data;
  }
  const data  = await axios.get(`http://newsapi.org/v2/top-headlines?country=in&excludeDomains=stackoverflow.com&sortBy=publishedAt&language=en&apiKey=${this.apiKey}`);
  store['normal']=data.data;
 }

}


module.exports = new NewsController();