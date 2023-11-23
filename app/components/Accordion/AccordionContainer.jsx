'use client';
import React, { useState } from 'react';
import Accordion from './Accordion';
import styles from './Accordion.module.scss';

export default function AccordionContainer() {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (id) => {
    if (openAccordions.includes(id)) {
      setOpenAccordions(
        openAccordions.filter((accordionId) => accordionId !== id)
      );
    } else {
      setOpenAccordions([id]);
    }
  };

  // data can be what ever kind of data
  const faqData = [
    { id: 1, title: 'What is HTML', desc: 'Hypertext Markup language, The markup language that is used to structure web content' },
    { id: 2, title: 'Question 2', desc: 'Answer 2' },
    { id: 3, title: 'Question 3', desc: 'Answer 3' },
    { id: 4, title: 'Question 4', desc: 'Answer 4' },
    ];
    
   /*  {
        q: 'What is HTML?',
        a: 'Hypertext Markup language, The markup language that is used to structure web content',
        id: 1,
      },
      {
        q: 'What is React?',
        a: 'A frontend libarary for building web applications, user interfaces UI, used for building components',
        id: 2,
      },
      {
        q: 'What is Javascript?',
        a: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages',
        id: 3,
      },
      {
        q: 'What is Css?',
        a: 'Cascading style sheets - i a language that is used to give styling to our HTML, web content.',
        id: 4,
      }, */

  return (
    <div className={styles.accordion_container}>
      {faqData.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          openAccordions={openAccordions}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
}
