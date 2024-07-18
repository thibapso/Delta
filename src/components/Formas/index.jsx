import React, { useState, useEffect } from 'react';
import styles from "./Formas.module.css";

function Formas() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (contentId) => {
    setActiveTab(contentId);
  };

  useEffect(() => {
    // Set the initial active tab to 'home' on component mount
    setActiveTab('home');
  }, []);

  return (
    <section id="formas" className={styles.formas}>
      <div className={styles.formasTitle}>
        <h2>Conversor de Formas</h2>
      </div>
      <div id="container" className={styles.container}>
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'home' ? styles.active : ''}`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'services' ? styles.active : ''}`}
            onClick={() => handleTabClick('services')}
          >
            Services
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'contacts' ? styles.active : ''}`}
            onClick={() => handleTabClick('contacts')}
          >
            Contacts
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'location' ? styles.active : ''}`}
            onClick={() => handleTabClick('location')}
          >
            Location
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'about' ? styles.active : ''}`}
            onClick={() => handleTabClick('about')}
          >
            About
          </button>
        </div>

        <div className={styles.tabContents}>
          <div className={`${styles.content} ${activeTab === 'home' ? styles.show : ''}`} id="home">
            <div className={styles.infos}>
              <h1 className={styles.contentTitle}>Home</h1>
              <p className={styles.contentDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, repellat! Id ab similique velit, molestiae, aliquam illum officiis sit totam rem voluptas magnam, atque dicta magni perferendis recusandae reiciendis necessitatibus!
              </p>
            </div>
          </div>
          <div className={`${styles.content} ${activeTab === 'services' ? styles.show : ''}`} id="services">
            <div className={styles.infos}>
              <h1 className={styles.contentTitle}>Services</h1>
              <p className={styles.contentDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, repellat! Id ab similique velit, molestiae, aliquam illum officiis sit totam rem voluptas magnam, atque dicta magni perferendis recusandae reiciendis necessitatibus!
              </p>
            </div>
          </div>
          <div className={`${styles.content} ${activeTab === 'contacts' ? styles.show : ''}`} id="contacts">
            <div className={styles.infos}>
              <h1 className={styles.contentTitle}>Contacts</h1>
              <p className={styles.contentDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, repellat! Id ab similique velit, molestiae, aliquam illum officiis sit totam rem voluptas magnam, atque dicta magni perferendis recusandae reiciendis necessitatibus!
              </p>
            </div>
          </div>
          <div className={`${styles.content} ${activeTab === 'location' ? styles.show : ''}`} id="location">
            <div className={styles.infos}>
              <h1 className={styles.contentTitle}>Location</h1>
              <p className={styles.contentDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, repellat! Id ab similique velit, molestiae, aliquam illum officiis sit totam rem voluptas magnam, atque dicta magni perferendis recusandae reiciendis necessitatibus!
              </p>
            </div>
          </div>
          <div className={`${styles.content} ${activeTab === 'about' ? styles.show : ''}`} id="about">
            <div className={styles.infos}>
              <h1 className={styles.contentTitle}>About</h1>
              <p className={styles.contentDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, repellat! Id ab similique velit, molestiae, aliquam illum officiis sit totam rem voluptas magnam, atque dicta magni perferendis recusandae reiciendis necessitatibus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formas;
