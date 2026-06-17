'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './FAQAccordion.module.css';

const faqs = [
  {
    question: 'Is my donation eligible for 80G tax exemption?',
    answer: 'Yes! Hare Krishna Marwar is a registered charitable trust (Reg. No. AATCH7258QF20214). All online donations are eligible for a 50% tax exemption under Section 80G of the Income Tax Act. Make sure to check the "I want 80G certificate" box and enter your PAN Card details during payment.',
  },
  {
    question: 'How is my donation used?',
    answer: 'Every rupee goes directly to sourcing high-quality ingredients (whole wheat, basmati rice, pure ghee, fresh vegetables) and managing the daily logistics of cooking and distribution. Administrative costs are kept under 8% and are covered separately by local patrons, ensuring your donation reaches the needy in full.',
  },
  {
    question: 'Can I sponsor food on special occasions?',
    answer: 'Absolutely. You can sponsor Annadan to commemorate special family occasions such as Birthdays, Wedding Anniversaries, Shraadh (remembrance days), or general thanksgiving. Select the occasion from the dropdown in our donation form, and our priests will perform a special prayers (Sankalpa) in your name at the temple.',
  },
  {
    question: 'How and when do I receive my receipt?',
    answer: 'You will receive an instant payment receipt on your WhatsApp number immediately after successful checkout. Your official 80G tax receipt in PDF format will be generated and emailed to your registered email address within 24 to 48 hours of payment.',
  },
];

function AccordionItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button className={styles.questionButton} onClick={toggleOpen} aria-expanded={isOpen}>
        <span className={styles.questionText}>{question}</span>
        <span className={styles.iconCircle}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.answer}>
              <p className={styles.answerText}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first FAQ

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.section} id="faqs" aria-label="Frequently Asked Questions">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>Clarifications</span>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.desc}>
              Have questions about your donation, tax exemption, or distributions? Find quick answers here.
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={0.05 * index} y={15}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => handleToggle(index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
