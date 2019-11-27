import React from "react";

const Footer = () => (
    <footer className="bg-light p-3 text-center">
        <div className="logo" />
        <p>
            Authentication by <a href="https://auth0.com">Auth0.</a><br/>
            Frontend hosted on <a href="https://www.netlify.com/">Netlify</a>.<br/>
            Backend served via AWS <a href="https://aws.amazon.com/api-gateway/">API Gateway</a>
            &nbsp;and <a href="https://aws.amazon.com/lambda/">Lambda</a>.
        </p>
    </footer>
);

export default Footer;
