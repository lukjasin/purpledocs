import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'iOS and Android ready',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Record working time, location and various types of activities no matter what devices your employees use.
      </>
    ),
  },
  {
    title: 'Web solution',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Plan, manage and monitor work and resources in a flexible web environment no matter where you are.
      </>
    ),
  },
  
  {
    title: 'Integrated with Odoo',
    Svg: require('@site/static/img/odoo-vector-logo.svg').default,
    description: (
      <>
        You can issue bills for your employees. They can relax after work, not deal with papers.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
