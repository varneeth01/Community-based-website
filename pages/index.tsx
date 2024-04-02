 import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
//import styles from 'styles/Home.module.css';
import styles from  '/styles/Home.module.css';

const IndexPage = () => {
  const router = useRouter();

  return (
  <div className={styles.maindiv}>
  <div className={styles.navbar}>
    <div className={styles.navlogo}>
      <div className={styles.logo}></div>
    </div>
    <div className={styles.logreg}>
    <button className={styles.logbutt} onClick={() => router.push('/auth/login')}>Sign in</button>
    <button className={styles.logbutt2} onClick={() => router.push('/auth/register')}>Sign Up</button>
    </div>
   </div>
    <div>
      <div className={styles.maincontent}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Aishwi Technologies</h1>
          <h3>This company was founded on March 24, 2021, and is primarily focused on artificial intelligence. We have undertaken a project called UHID, an app for patient health records based on AI.
          This company was founded on March 24, 2021, and is primarily focused on artificial intelligence.</h3>
          <button className={styles.logbutt} onClick={() => router.push('/auth/register')}>Explore</button>
        </div>
        <div className={styles.image}>
        </div>
      </div>
      
        
      </div>
    </div>

  );
 };


export default IndexPage;
