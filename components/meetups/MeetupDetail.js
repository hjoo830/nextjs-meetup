import React from "react";
import styles from "@/styles/MeetupDetail.module.css";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={styles.detail}>
      <h1 className={styles.title}>{title}</h1>
      <img src={image} alt={title} className={styles.img} />
      <h3 className={styles.label}>모임 장소</h3>
      <address className={styles.address}>{address}</address>
      <h3 className={styles.label}>모임 소개</h3>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default MeetupDetail;
