import React from "react";
import MeetupItem from "./MeetupItem";
import styles from "@/styles/MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.meetupList}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
