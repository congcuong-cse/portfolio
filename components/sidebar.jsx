import React, { Component } from "react";
import { CopiableText } from "./CopiableText";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Sidebar::render()");

    const profile = this.props.profile;

    if (!profile.contact) {
      return <div />;
    }

    return (
      <div className="sidebar-wrapper">
        <div className="profile-container">
          <img
            className="profile"
            src={`${process.env.ASSET_PREFIX}/static/images/profile.png`}
            alt=""
          />
          <h1 className="name">{profile.name}</h1>
          <h3 className="tagline">{profile.tagline}</h3>
        </div>

        <div className="contact-container container-block">
          <ul className="list-unstyled contact-list">
            <li className="email">
              <i className="fa fa-envelope" />
              <a href={profile.contact.email.action}>
                {profile.contact.email.display}
              </a>
            </li>
            <li className="phone">
              <i className="fa fa-phone" />
              <a href={profile.contact.phone.action}>
                {profile.contact.phone.display}
              </a>
            </li>
            {/* <li className="website">
              <i className="fa fa-globe" />
              <a href={profile.contact.website.action} target="_blank">
                {profile.contact.website.display}
              </a>
            </li>
            <li className="linkedin">
              <i className="fa fa-linkedin" />
              <a href={profile.contact.linkedin.action} target="_blank">
                {profile.contact.linkedin.display}
              </a>
            </li> */}
            {/* <li className="twitter">
              <i className="fa fa-twitter" />
              <a href={profile.contact.twitter.action} target="_blank">
                @{profile.contact.twitter.display}
              </a>
            </li> */}
            {/* <li className="skype">
              <i className="fa fa-skype" />
              <a href={profile.contact.skype.action} target="_blank">
                {profile.contact.skype.display}
              </a>
            </li> */}
            <li className="microsoft-teams">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="fa"
                viewBox="0 0 16 16"
              >
                <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z" />
                <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z" />
              </svg>
              {/* <a href={profile.contact.team.action} target="_blank">
                {profile.contact.team.display}
              </a> */}
              <CopiableText text={profile.contact.team.display} />
            </li>
            <li className="github">
              <i className="fa fa-github" />
              <a href={profile.contact.github.action} target="_blank">
                {profile.contact.github.display}
              </a>
            </li>
            <li className="facebook">
              <i className="fa fa-facebook" />
              <a href={profile.contact.facebook.action} target="_blank">
                {profile.contact.facebook.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
