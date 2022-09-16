export const ContactSection: React.FC = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Как нас найти?</h2>
                <div className="contact-wrapper load-hidden">
                    <p className="contact-wrapper__text">614990, Российская Федерация, г. Пермь ул. Пихтовая, 41 оф. 302</p>
                    <p className="contact-wrapper__text">+7 (922) 244-43-30, + 7 (922) 336-48-68</p>
                    <p className="contact-wrapper__text">a222444330@yandex.ru , d.vavel@v-kec.ru</p>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--resume"
                        href="mailto:a222444330@yandex.ru;d.vavel@v-kec.ru"
                    >Написать нам</a
                    >
                </div>
            </div>
        </section>
    );
};
