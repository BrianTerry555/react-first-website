import React from "react";


class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h2>{this.props.name}</h2>
        <h3>{this.props.desc}</h3>
        <p>Posted By End Bootstrap on {this.props.date}</p>
        <button onClick={()=>{this.props.handleDescrition(this.props.desc)}}>Description</button>
        <button onClick={()=>{this.props.handleFavorite(this.props.name)}}>Favorite</button>
      </div>
    )
  }
}

export default Article;
