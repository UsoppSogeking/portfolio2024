import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mleqyorq");

    if (state.succeeded) {
        return <p>Obrigado por entrar em contato!</p>;
    }

    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="contact"
            className="w-full py-16 bg-light-background dark:bg-dark-background"
        >
            <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
                <motion.h2
                    className="font-bold text-3xl md:text-4xl lg:text-5xl text-light-text-87 dark:text-dark-text-87 mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Contato
                </motion.h2>
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.div variants={formItemVariants}>
                        <label htmlFor="name" className="block text-light-text-60 dark:text-dark-text-60 mb-2">Nome:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="w-full p-4 border rounded-lg bg-light-panel dark:bg-dark-panel border-light-border dark:border-dark-border text-light-text-87 dark:text-dark-text-87 outline-none"
                            required
                            placeholder='Seu nome...'
                        />
                        <ValidationError
                            prefix="Nome"
                            field="name"
                            errors={state.errors}
                            className="text-red-500"
                        />
                    </motion.div>
                    <motion.div variants={formItemVariants}>
                        <label htmlFor="email" className="block text-light-text-60 dark:text-dark-text-60 mb-2">Endereço de Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="w-full p-4 border rounded-lg bg-light-panel dark:bg-dark-panel border-light-border dark:border-dark-border text-light-text-87 dark:text-dark-text-87 outline-none"
                            required
                            placeholder='seu e-mail...'
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-500"
                        />
                    </motion.div>
                    <motion.div variants={formItemVariants}>
                        <label htmlFor="message" className="block text-light-text-60 dark:text-dark-text-60 mb-2">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full p-4 border rounded-lg bg-light-panel dark:bg-dark-panel border-light-border dark:border-dark-border text-light-text-87 dark:text-dark-text-87 outline-none"
                            rows="5"
                            required
                            placeholder='Me envie uma mensagem(pode ser um feedback)...'
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-500"
                        />
                    </motion.div>
                    <motion.button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full p-4 bg-react-color dark:bg-dark-primary text-white font-bold rounded-lg hover:bg-light-primary-70 dark:hover:bg-dark-primary-70 focus:outline-none"
                        variants={formItemVariants}
                    >
                        Enviar
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

export default ContactForm;
