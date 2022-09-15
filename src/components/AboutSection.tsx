export const AboutSection: React.FC = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title load-hidden">О нас</h2>
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__image load-hidden">
                            <img
                                className="img-fluid rounded shadow-lg"
                                height="auto"
                                width="250px"
                                src="assets/logo.jpeg"
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info load-hidden">
                            <p className="about-wrapper__info-text">
                                ООО «В-КиК» специализируется на профессиональной разработке программного обеспечения и имеет богатый опыт реализации проектов “Под ключ”.
                            </p>
                            <p className="about-wrapper__info-text">
                                Команда имеет уровень Senior, свободно общается на английском языке и может участвовать в совещаниях на требуемом уровне. Имеем опыт в реализации международных проектов
                            </p>
                            <span className="d-flex mt-3">
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cta-btn cta-btn--resume"
                                    href="assets/Коммерческое предложение.pdf"
                                >
                                    Ознакомиться с коммерческим предложением
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
