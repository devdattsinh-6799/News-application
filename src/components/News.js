import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c8a6e14b71364e77b1b220a00d7116a0&page=1&pageSize=20"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})

    }
     handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {

        }
        else{

                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8a6e14b71364e77b1b220a00d7116a0&page=${this.state.page + 1}&pageSize=20`;
                let data = await fetch(url);
                let parseData = await data.json()
                console.log(parseData);
                this.setState({articles: parseData.articles})
        
        
                this.setState({
                    page: this.state.page + 1,
                    articles: parseData.articles
        
                })
        }


    } 
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8a6e14b71364e77b1b220a00d7116a0&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles})


        this.setState({
            page: this.state.page - 1,

        })

    } 
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsTimes - Top</h1>
        <div className="row">
            {this.state.articles.map((element)=> {

              return  <div className="col md-3" key={element.url}>
                    <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled= {(this.state.page + 1 > Math.ceil(this.state.totalResults/20))}type="button"  className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News
