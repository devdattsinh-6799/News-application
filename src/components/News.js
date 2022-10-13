import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Devin Nunes: 'Long list' of people in FBI and DNC who wanted to 'frame' Donald Trump on dossier | Fox News Video",
            "description": "Trump Media & Technology Group CEO Devin Nunes calls out people in the FBI and DNC working on the Clinton campaign for going after Donald Trump in Steele dossier claims on 'The Story with Martha MacCallum.'",
            "url": "https://video.foxnews.com/v/6313672113112/",
            "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/ee7da41e-bc47-47f0-8537-4975606cf258/e64ffd11-abb3-4888-bc48-dc23a66947bf/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
            "publishedAt": "2022-10-13T01:52:16.4463169Z",
            "content": "©2022 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Nathan Bomey",
            "title": "Drivers have \"poor understanding\" of limits of self-driving car technology, IIHS finds",
            "description": "Drivers are putting too much faith in hands-free systems that are designed to help them navigate the road, according to the Insurance Institute for Highway Safety.",
            "url": "https://www.axios.com/2022/10/12/self-driving-cars-tesla-autopilot-gm-super-cruise",
            "urlToImage": "https://images.axios.com/Er2wcQuChCubJ3SH4OekFHButt4=/0x0:1280x720/1366x768/2022/10/12/1665603202394.png",
            "publishedAt": "2022-10-12T21:22:37Z",
            "content": "Data: Insurance Institute for Highway Safety; Chart: Erin Davis/Axios Visuals\r\nDrivers are putting too much faith in systems designed only to help them navigate the road, according to an automotive s… [+1811 chars]"
        },
        {
            "source": {
            "id": "the-verge",
            "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Google’s partnering with Coinbase to let cloud customers pay in crypto next year",
            "description": "Starting in 2023, Google will partner with Coinbase to power crypto-based transactions for “select” customers in the Web3 space.",
            "url": "https://www.theverge.com/2022/10/11/23398306/google-coinbase-partnership-crypto-2023-cloud",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/a1UuqmTXeWu_sDyVAVipeGpIQ0s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
            "publishedAt": "2022-10-11T14:29:54Z",
            "content": "Googles partnering with Coinbase to let cloud customers pay in crypto next year\r\nGoogles partnering with Coinbase to let cloud customers pay in crypto next year\r\n / The search giant will use Coinbase… [+1913 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": null,
            "title": "Brand Loyalty Revolution by Oracle Advertising and CX",
            "description": "How technology is changing the customer relationship game",
            "url": "https://www.newsweek.com/sponsored/brand-loyalty-revolution-oracle-advertising-cx",
            "urlToImage": "https://d.newsweek.com/en/full/1987118/oracle-advertising-cx-sq.jpg",
            "publishedAt": "2022-02-16T19:17:44Z",
            "content": "Brand Loyalty Revolution\r\nIn a world of more choice and increased consumer spending, brands are using creative solutions to grab customers' attention and keep them engaged. While shoppers seek out co… [+467 chars]"
        }
    ]

    constructor(){
        super();
        console.log("Hello I am a constructor from News components ");
        this.state = {
            articles: this.articles,
            loading: false
        }

    }
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c8a6e14b71364e77b1b220a00d7116a0"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles})

    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsTimes - Top</h2>
        <div className="row">
            {this.state.articles.map((element)=> {

              return  <div className="col md-4" key={element.url}>
                    <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            
            })}
        </div>
      </div>
    )
  }
}

export default News
