import React from "react";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
