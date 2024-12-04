import React from "react";
import Card from "../ui/Card";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/" + id);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image width={0} height={0} sizes="100vw" src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={handleClick}>자세히 보기</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
