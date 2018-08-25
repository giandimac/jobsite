import React, { Component } from 'react';

class FooterBar extends Component {
  constructor(props) {
      super(props);
  }

  render() {
        return (
            <div id="footerBar">
                <div className="dashboard-footer-spacer"></div>
                <div className="small-footer margin-top-15">
                    <div className="small-footer-copyrights">
                        © 2018 <strong>Hireo</strong>. All Rights Reserved.
                    </div>
                    <ul className="footer-social-links">
                        <li>
                            <a href="#" title="Facebook" data-tippy-placement="top">
                                <i className="icon-brand-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Twitter" data-tippy-placement="top">
                                <i className="icon-brand-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Google Plus" data-tippy-placement="top">
                                <i className="icon-brand-google-plus-g"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="LinkedIn" data-tippy-placement="top">
                                <i className="icon-brand-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default FooterBar;