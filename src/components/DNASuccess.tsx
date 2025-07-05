
// import React, { useState } from 'react';
// import styles from './DNASuccess.module.css'; // Assuming you create this CSS Module file

// interface CardData {
//   id: number;
//   title: string;
//   description: string;
// }

// const dnaCards: CardData[] = [
//   {
//     id: 1,
//     title: 'COLLABORATE',
//     description: 'Build trusting relationships with your co-workers and clients to drive maximum productivity',
//   },
//   {
//     id: 2,
//     title: 'COMMUNICATE',
//     description: 'Master the art of writing and speaking effectively to influence, persuade and convince others',
//   },
//   {
//     id: 3,
//     title: 'LEAD',
//     description: 'Demonstrate the qualities of a future-ready leader',
//   },
//   {
//     id: 4,
//     title: 'SOLVE',
//     description: 'Use logical reasoning to find creative solutions to problems',
//   },
//   {
//     id: 5,
//     title: 'THINK',
//     description: 'Cultivate a growth mindset, and make the best decisions when faced with obstacles and setbacks',
//   },
// ];

// const DNASuccess: React.FC = () => {
//   // Initialize with null so no card is active by default.
//   // This allows the initial state to just be the stacked cards.
//   const [activeCardId, setActiveCardId] = useState<number | null>(1);

//   return (
//     <div className={styles.dnaSuccessContainer}>
//       <div className={styles.headerContent}>
//         <h1 className={styles.mainHeading}>Our DNA For Success</h1>
//         <p className={styles.description}>
//           We believe everyone can evolve and grow continuously to discover and manifest their unlimited potential, with
//           Thrive Skills, an essential set of cognitive, social and behavioral skills that enable individuals and teams to
//           continuously succeed
//         </p>
//       </div>

//       <div className={styles.cardsWrapper}>
//         <div className={styles.cardsContainer}>
//           {dnaCards.map((card) => (
//             <div
//               key={card.id}
//               className={`${styles.card} ${activeCardId === card.id ? styles.cardActive : ''}`}
//               onMouseEnter={() => setActiveCardId(card.id)}
//               onMouseLeave={() => setActiveCardId(null)} // Reset to null when mouse leaves
//             >
//               <div className={styles.cardContent}>
//                 {activeCardId === card.id ? (
//                   <>
//                     <h2 className={styles.cardTitle}>{card.title}</h2>
//                     <p className={styles.cardDescription}>{card.description}</p>
//                   </>
//                 ) : (
//                   <span className={styles.cardNumber}>{card.id}</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.learnMoreContainer}>
//         <a href="#" className={styles.learnMoreButton}>
//           Learn More <span className={styles.arrow}>&#8599;</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default DNASuccess;



import React, { useState } from 'react';
import styles from './DNASuccess.module.css'; // Make sure this file exists

interface CardData {
  id: number;
  title: string;
  description: string;
}

// ✅ dnaCards array defined here
const dnaCards: CardData[] = [
  {
    id: 1,
    title: 'COLLABORATE',
    description:
      'Build trusting relationships with your co-workers and clients to drive maximum productivity',
  },
  {
    id: 2,
    title: 'COMMUNICATE',
    description:
      'Master the art of writing and speaking effectively to influence, persuade and convince others',
  },
  {
    id: 3,
    title: 'LEAD',
    description: 'Demonstrate the qualities of a future-ready leader',
  },
  {
    id: 4,
    title: 'SOLVE',
    description: 'Use logical reasoning to find creative solutions to problems',
  },
  {
    id: 5,
    title: 'THINK',
    description:
      'Cultivate a growth mindset, and make the best decisions when faced with obstacles and setbacks',
  },
];

const DNASuccess: React.FC = () => {
  // ✅ Start with first card active
  const [activeCardId, setActiveCardId] = useState<number>(1);

  return (
    <div className={styles.dnaSuccessContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.mainHeading} style={{ margin: '40px', color: '#4a4a4a', fontWeight: 600 }}>Our DNA For Success</h1>
        <p className={styles.description} style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 200 }}>
          We believe everyone can evolve and grow continuously to discover and manifest their unlimited potential,
          with Thrive Skills—an essential set of cognitive, social and behavioral skills that enable individuals and
          teams to continuously succeed.
        </p>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.cardsContainer}>
          {dnaCards.map((card) => (
            <div
              key={card.id}
              className={`${styles.card} ${activeCardId === card.id ? styles.cardActive : ''}`}
              onMouseEnter={() => setActiveCardId(card.id)}
            >
              <div className={styles.cardContent}>
                {activeCardId === card.id ? (
                  <>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </>
                ) : (
                  <span className={styles.cardNumber}>{card.id}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.learnMoreContainer}>
        <a href="#" className={styles.learnMoreButton}>
          Learn More <span className={styles.arrow}>↗</span>
        </a>
      </div> */}


  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '5px 20px',
          backgroundColor: '#fff',
          borderRadius: '25px',
          textDecoration: 'none',
          color: '#1a2b49',
          fontWeight: '500',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        Learn More{' '}
        <span
          style={{
            marginLeft: '5px',
            color: '#f5a623',
            fontSize: '1.2em',
            fontWeight: 'bold',
          }}
        >
          ↗
        </span>
      </a>
    </div>

    </div>
  );
};

export default DNASuccess;
