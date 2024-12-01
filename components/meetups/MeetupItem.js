import React from "react";
import Card from "../ui/Card";
import Image from "next/image";
import { useRouter } from "next/router";

const MeetupItem = ({ id, image, title, address }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/" + id);
  };

  return (
    <li>
      <Card>
        <div>
          <Image
            width={500}
            height={500}
            src={image}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div>
          <button onClick={handleClick}>자세히 보기</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
