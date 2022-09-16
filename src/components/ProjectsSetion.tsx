export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="project-wrapper">
                    <h2 className="section-title dark-blue-text">Реализованные проекты</h2>

                    {/*<!-- Notice: each .row is a project -->*/}
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="project-wrapper__text load-hidden">
                                <a href="https://www.7pace.com/" target="_blank" rel="noreferrer"><h3 className="project-wrapper__text-title">7pace Timetracker</h3></a>
                                <div>
                                    <p className="mb-4">
                                        Реализован большой проект для зарубежного заказчика c использованием сервисов и облачных решений MS Azure DevOps.
                                        <br />
                                        7pace Timetracker это трекер времени для разработчиков, позволяющий отслеживать общий прогресс при работе над проектами, строить и генерировать отчеты.
                                        Имеет интеграцию с Azure DevOps и GitHub. Была реализована микросервисная архитектура для кэширования данных из Azure DevOps и GitHub.
                                        C нуля написано Web-приложение <a href="https://app.7pace.com">app.7pace.com</a> используя библиотеку React, доработана серверная часть, а так же БД MSSQL.
                                        Срок реализации - 4 года.
                                    </p>
                                </div>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cta-btn cta-btn--hero"
                                    href="https://app.7pace.com"
                                >
                                    Посмотреть
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="#!" target="_blank">
                                    <div
                                        data-tilt
                                        data-tilt-max="4"
                                        data-tilt-glare="true"
                                        data-tilt-max-glare="0.5"
                                        className="thumbnail rounded js-tilt"
                                    >
                                        <img
                                            alt="Project"
                                            className="img-fluid"
                                            src="assets/7pace.svg"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- /END Project -->*/}

                    {/*<!-- Notice: each .row is a project -->*/}
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="project-wrapper__text load-hidden">
                                <h3 className="project-wrapper__text-title">nBot</h3>
                                <div>
                                    <p className="mb-4">
                                        Закрытый Агрегатор новостей в США. Может выдавать релевантные статьи по тегам, фильтрам и предпочтениям пользователя. Реализована клиент-серверная архитектура с дополнительными микросервисами на базе AWS Amazon.
                                        Реализована обертка для работы с сервисами AWS Amazon для обработки лимитов системы. Написаны сервисы для получения новостей, обработки тегов. Создана инфраструктура для поиска новостей с использованием Elastic cache и MongoDB.
                                        Работа велась совместно с командой заказчика. Срок реализации - 2 года.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="#!" target="_blank">
                                    <div
                                        data-tilt
                                        data-tilt-max="4"
                                        data-tilt-glare="true"
                                        data-tilt-max-glare="0.5"
                                        className="thumbnail rounded js-tilt"
                                    >
                                        <img
                                            alt="Project"
                                            className="img-fluid"
                                            src="assets/nbot.jpg"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- /END Project -->*/}

                    {/*<!-- Notice: each .row is a project -->*/}
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="project-wrapper__text load-hidden">
                                <h3 className="project-wrapper__text-title">Сенсор Монитор</h3>
                                <div>
                                    <p className="mb-4">
                                        Реализована система для удаленного управления тепловыми пунктами.
                                        Спроектирована микросервисная архитектура. В качестве сервера использовался RaspberryPi.
                                        Продумана система оповещения операторов в момент аварии.
                                        Есть возможность подписки на изменение любого параметра теплового пункта (температура, давление и пр.).
                                        В качестве уведомлений использовался Телеграм-бот. Весь проект проектировался и писался с нуля.  Срок реализации - 2 года.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="#!" target="_blank">
                                    <div
                                        data-tilt
                                        data-tilt-max="4"
                                        data-tilt-glare="true"
                                        data-tilt-max-glare="0.5"
                                        className="thumbnail rounded js-tilt"
                                    >
                                        <img
                                            alt="Project"
                                            className="img-fluid"
                                            src="assets/Sensor.png"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- /END Project -->*/}
                </div>
            </div>
        </section>
    );
};
