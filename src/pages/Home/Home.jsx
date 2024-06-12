import ScrollToTopButton from '../../components/ScrollToTopButton';
import ContactForm from '../../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="bg-light-background flex flex-col items-center">
            <header className="header w-full min-h-screen bg-[url(./images/CircuitBoard.svg)] bg-center bg-no-repeat bg-cover dark:bg-[url('./images/DarkCircuitBoard.svg')] flex justify-center items-center">
                <motion.div
                    className="max-w-7xl text-light-text-60 content-container text-center space-y-6 dark:text-dark-text-60"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-light-text-87 mb-4 dark:text-dark-text-87">
                        Desenvolvedor Front-end
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                        Olá! Estou animado para compartilhar meu espaço digital com você. Vamos navegar e aprender juntos!
                    </p>
                </motion.div>
            </header>

            <section id="about" className="w-full py-16 bg-light-panel dark:bg-dark-panel">
                <motion.div
                    className="max-w-7xl mx-auto text-center px-6 md:px-12"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-light-text-87 dark:text-dark-text-87 mb-8">
                        Sobre Mim
                    </h2>
                    <div className="text-left space-y-8">
                        <p className="text-light-text-60 dark:text-dark-text-60">
                            Olá! Meu nome é Yuri e sou um entusiasta de desenvolvimento front-end, em busca da minha primeira oportunidade como estagiário ou desenvolvedor front-end júnior. Desde que comecei a programar, descobri uma paixão por criar interfaces intuitivas e funcionais que melhoram a experiência do usuário.
                        </p>
                        <p className="text-light-text-60 dark:text-dark-text-60">
                            Adoro aprender coisas novas e estou sempre explorando as últimas tecnologias e ferramentas no desenvolvimento web. Acredito que o aprendizado contínuo é fundamental na área de tecnologia, e estou animado para aplicar meus conhecimentos em um ambiente profissional e colaborar com uma equipe dedicada.
                        </p>
                        <p className="text-light-text-60 dark:text-dark-text-60">
                            Estou ansioso para contribuir com projetos inovadores e crescer como desenvolvedor, enquanto ajudo a criar soluções que façam a diferença.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section id="projects" className="w-full py-16 bg-light-background dark:bg-dark-background">
                <motion.div
                    className="max-w-7xl mx-auto text-center px-6 md:px-12"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
                        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-light-text-87 dark:text-dark-text-87 mb-8">
                            Projetos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="project-card bg-light-panel dark:bg-dark-panel p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <img src="./images/feed360img.png" alt="Projeto 1" className="w-full h-48 object-cover mb-4 rounded-lg" />
                                        <h3 className="text-xl font-bold mb-2 text-light-text-87 dark:text-dark-text-87">Feed360</h3>
                                        <p className="text-light-text-60 dark:text-dark-text-60 mb-4">Feed360 é um aplicativo/site desenvolvido para facilitar o processo de solicitação e recebimento de feedbacks. Usuários podem solicitar feedback de outros usuários, configurando perguntas específicas e critérios de avaliação. Esse projeto foi criado com o intuito de valorizar a importância do feedback no desenvolvimento profissional, especialmente para iniciantes que buscam melhorar suas habilidades e desempenho.</p>
                                    </div>
                                    <div className="flex flex-col justify-end mt-auto">
                                        <p className="text-sm mb-4 text-light-text-60 dark:text-dark-text-60">Tecnologias usadas: Html, Js, React, Tailwind CSS, Git, firebase firestore</p>
                                        <div className="flex justify-between">
                                            <a target='_blank' href="https://github.com/UsoppSogeking/feed360" className="text-react-color dark:text-dark-primary hover:underline" rel="noopener noreferrer">GitHub</a>
                                            <a target='_blank' href="https://feed360.vercel.app" className="text-react-color dark:text-dark-primary hover:underline" rel="noopener noreferrer">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="project-card bg-light-panel dark:bg-dark-panel p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <img src="./images/blogtechimg.png" alt="Projeto 2" className="w-full h-48 object-cover mb-4 rounded-lg" />
                                        <h3 className="text-xl font-bold mb-2 text-light-text-87 dark:text-dark-text-87">Blogtech</h3>
                                        <p className="text-light-text-60 dark:text-dark-text-60 mb-4">Blogtech é uma plataforma de blog onde os usuários podem criar contas, postar conteúdos, comentar em posts e dar likes. Além disso, é possível seguir outros usuários, visualizar perfis e gerenciar postagens favoritas.</p>
                                    </div>
                                    <div className="flex flex-col justify-end mt-auto">
                                        <p className="text-sm mb-4 text-light-text-60 dark:text-dark-text-60">Tecnologias usadas: Html, Js, React, React Bootstrap, Git, firebase firestore</p>
                                        <div className="flex justify-between">
                                            <a target='_blank' href="https://github.com/UsoppSogeking/BlogTech" className="text-react-color dark:text-dark-primary hover:underline" rel="noopener noreferrer">GitHub</a>
                                            <a target='_blank' href="https://blog-tech-pink.vercel.app" className="text-react-color dark:text-dark-primary hover:underline" rel="noopener noreferrer">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>

            <section id="cv" className="w-full py-16 bg-light-panel dark:bg-dark-panel">
                <motion.div
                    className="max-w-7xl mx-auto text-center px-6 md:px-12"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-light-text-87 dark:text-dark-text-87 mb-8">
                        Currículo
                    </h2>
                    <div className="text-left space-y-8">
                        <div>
                            <h3 className="font-semibold text-2xl mb-2 text-light-text-87 dark:text-dark-text-87">Objetivo</h3>
                            <p className="text-light-text-60 dark:text-dark-text-60 mb-4">Buscando minha primeira oportunidade como desenvolvedor front-end júnior ou estagiário para aplicar e expandir minhas habilidades em desenvolvimento web.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-2xl mb-2 text-light-text-87 dark:text-dark-text-87">Educação</h3>
                            <p className="text-light-text-60 dark:text-dark-text-60">Bacharel em Engenharia de software - Universidade Anhanguera - cursando...</p>
                            <p className="text-light-text-60 dark:text-dark-text-60">React do Zero a Maestria (c/ hooks, router, API, Projetos) - Matheus Battisti(Udemy)</p>
                            <p className="text-light-text-60 dark:text-dark-text-60">Curso de JavaScript Completo-Serliv Cursos(Udemy)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-2xl mb-2 text-light-text-87 dark:text-dark-text-87">Habilidades</h3>
                            <ul className="list-disc pl-5 text-light-text-60 dark:text-dark-text-60">
                                <li>HTML, CSS, JavaScript, Typescript</li>
                                <li>React, Tailwind, React Bootstrap, Sass</li>
                                <li>Git, GitHub</li>
                                <li>Design Responsivo</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-2xl mb-2 text-light-text-87 dark:text-dark-text-87">Contato</h3>
                            <p className="text-light-text-60 dark:text-dark-text-60">Endereço: Rua Serra vermelha, 82, Jardim nova vitória, SP</p>
                            <p className="text-light-text-60 dark:text-dark-text-60">Email: <a href="mailto:seuemail@exemplo.com" className="text-react-color dark:text-dark-primary">lyuri1508@gmail.com</a></p>
                            <p className="text-light-text-60 dark:text-dark-text-60">Telefone: (11) 98094-2220</p>
                            <div className="flex space-x-4 mt-4 items-center">
                                <a target="_blank" href="https://github.com/UsoppSogeking" className="text-react-color dark:text-dark-primary">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                                <a target="_blank" href="https://wa.me/5511980942220" className="text-react-color dark:text-dark-primary">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                </a>
                                <a href="#" download className="text-react-color dark:text-dark-primary">
                                    <FontAwesomeIcon icon={faDownload} size="2x" />
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
            <ContactForm />
            <ScrollToTopButton />
        </div>
    )
}

export default Home;
