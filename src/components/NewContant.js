import React, { Component } from 'react'

export class NewContant extends Component {
  render() {
    let { title , description, imageUrl, newsUrl ,author,time,source} = this.props;
    return <div>
        <div className="card">
           <div className='position-absolute d-flex ' style={{right:"0",zIndex: "1",justifyContent: "flex-end"}}>
           <span className="badge rounded-pill bg-danger">
            {source}
                <span className="visually-hidden">unread messages</span>
            </span>
           </div>
            <img src={!imageUrl?"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=2048x2048&w=is&k=20&c=ZyHCcX0F_DVM-r_R_vG8OX_CqYLb-G16afTyaVGtB3o=":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"undefined":author} on {time}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    </div>
  }
}
export default NewContant