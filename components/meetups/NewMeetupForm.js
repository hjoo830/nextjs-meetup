import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "@/styles/NewMeetupForm.module.css";

const NewMeetupForm = ({ router }) => {
  const titleInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const handSubmit = (e) => {
    e.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    addMeetupHandler(meetupData);
  };

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <div className={styles.newMeetup}>
      <Card>
        <form onSubmit={handSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="title" className={styles.label}>
              모임 이름
            </label>
            <input
              type="text"
              required
              id="title"
              ref={titleInputRef}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="image" className={styles.label}>
              모임 사진
            </label>
            <input
              type="url"
              required
              id="image"
              ref={imageInputRef}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="address" className={styles.label}>
              모임 주소
            </label>
            <input
              type="text"
              required
              id="address"
              ref={addressInputRef}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="description" className={styles.label}>
              설명
            </label>
            <textarea
              rows={5}
              required
              id="description"
              ref={descriptionInputRef}
              className={styles.input}
            />
          </div>
          <div>
            <button type="submit" className={styles.button}>
              모임 생성하기
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewMeetupForm;
