export const FooterSection: React.FC = () => {
    return (
        <footer className="footer navbar-static-bottom">
            <div className="container">
                <a rel="noreferrer" href="#top" className="back-to-top">
                    <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                </a>
                <div className="social-links">
                    <a rel="noreferrer" href="#!" target="_blank">
                        <i className="fa fa-twitter fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="#!" target="_blank">
                        <i className="fa fa-linkedin fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="#!" target="_blank">
                        <i className="fa fa-github fa-inverse"></i>
                    </a>
                </div>

                <hr />

                {/*<!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it -->*/}
                <p className="footer__text">
                    © 2021 - Template developed by
                    <a rel="noreferrer" href="https://github.com/cobidev" target="_blank"
                    >Jacobo Martínez</a
                    >
                </p>

                {/*<!-- TO DO: remove this entire paragraph once you finish your portfolio -->*/}
                <p className="mt-3 pt-3">
                    <a
                        rel="noreferrer"
                        className="github-button"
                        href="https://github.com/cobidev/simplefolio/fork"
                        data-icon="octicon-repo-forked"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Fork ntkme/github-buttons on GitHub"
                    >Fork</a
                    >
                    <a
                        rel="noreferrer"
                        className="github-button"
                        href="https://github.com/cobidev/simplefolio"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star cobidev/simplefolio on GitHub"
                    >Star</a
                    >
                </p>
            </div>
        </footer>
    );
};
