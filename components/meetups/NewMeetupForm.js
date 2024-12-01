import React, { useRef } from "react";
import Card from "../ui/Card";

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
    <Card>
      <form onSubmit={handSubmit}>
        <div>
          <label htmlFor="title">모임 이름</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">모임 사진</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="address">모임 주소</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="description">설명</label>
          <textarea
            rows={5}
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div>
          <button type="submit">모임 생성하기</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
