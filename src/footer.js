import React from "react";
import FontAwesome from "react-fontawesome"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <span className="fa-stack fa-custom">
                  <FontAwesome stack="2x" name="circle"/>
                  <FontAwesome stack="1x" name="twitter" inverse/>
                </span>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-custom">
                  <FontAwesome stack="2x" name="circle"/>
                  <FontAwesome stack="1x" name="facebook" inverse/>
                </span>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-custom">
                  <FontAwesome stack="2x" name="circle"/>
                  <FontAwesome stack="1x" name="github" inverse/>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="copyright-text">Copyright
                  <FontAwesome name="copyright"/>
                  Your Website 2017</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
