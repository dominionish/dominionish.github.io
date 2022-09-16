export const ProfileSection: React.FC = () => {
    return (
        <section id="hero" className="jumbotron">
            <div className="container">
                <h1 className="hero-title load-hidden">
                    Привет, меня зовут <span className="text-color-main">Дмитрий Вавель</span>
                    <br />
                    Директор по IT в компании В-КиК
                    <br />
                    А это наше портфолио:
                </h1>
                <p className="hero-cta load-hidden">
                    <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about"
                    >Узнать больше</a
                    >
                </p>
            </div>
        </section>
    );
};
