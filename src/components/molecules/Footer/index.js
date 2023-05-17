import React from "react";
import Logo from "../../../assets/images/logo.png";
import {
    ICFacebook,
    ICGithub,
    ICInstagram,
    ICLinkedin,
    ICTwitter,
} from "../../../assets";
import "./footer.scss";

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="Icon" />
        </div>
    );
};

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Logo} alt="Logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICGithub} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICLinkedin} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    );
};

export default Footer;
