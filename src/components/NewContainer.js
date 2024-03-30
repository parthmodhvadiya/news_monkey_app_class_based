import React, { Component } from "react";
import NewContant from "./NewContant.js";
import Loader from "./Loader.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class extends Component {
  static defaultProps = {
    pageSize: 10,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalpage: 0,
    };
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async update() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: false});
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalpage: parsedData.totalResults,
      Loading:false
    });
    this.props.setProgress(100)
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }
  async componentDidMount() {
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1   });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    });
  };
  // handlePrev=async ()=>
  // {
  //   this.setState(
  //   {
  //     page: this.state.page-1,
  //   })
  //   this.update();
  // }
  // handleNext= async()=>
  // {
  //   this.setState(
  //   {
  //       page: this.state.page+1,
  //   })
  //   this.update();
  // }

  render() {
    return (
      <>
        <h2 className="text-center">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults-1}
          loader={<Loader />}
        >
          <div className="container">
            {
              <div className="row my-4">
                {this.state.articles.map((element) => {
                  return (
                    <div className="my-3 col-md-4">
                      <NewContant
                        key={element.title}
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        source={element.source.name}
                        time={element.publishedAt}
                        author={element.author}
                      />
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
          <button type="button" disabled={(this.state.page+1)>Math.ceil((this.state.totalpage)/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
      </>
    );
  }
}
