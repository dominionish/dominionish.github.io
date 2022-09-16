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
                    © 2022 - Общество с ограниченной ответственностью "Волго-Камская инжиниринговая
                    компания»
                </p>
            </div>
        </footer>
    );
};
