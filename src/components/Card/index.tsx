import Image from "next/image";
import card from "./card.png";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import classnames from 'classnames';
import CloseIcon from '@mui/icons-material/Close';

const Card = ({ onClick }) => {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 2000);
  return (
    <div style={{ width: 210, margin: '1rem 2rem' }}>
      {show ? (
        <div>
          <Image
            src={card}
            alt="Picture of the author"
            width={210}
            onClick={onClick}
           
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      ) : (
        <div style={{ height: 306.14 }} className={styles.SkeletonWp}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton
            variant="rectangular"
            width={210}
            height={36.14}
            style={{ backgroundColor: "#737373" }}
          />
          <Skeleton
            variant="rectangular"
            width={210}
            height={200}
            style={{ backgroundColor: "#737373", marginTop: 5 }}
          />
          <Skeleton
            variant="rectangular"
            width={210}
            height={60}
            style={{ backgroundColor: "#737373", marginTop: 5 }}
          />
        </div>
      )}

      <p className={styles.rateText}>评分：9.8</p>
    </div>
  );
};

export default Card;
