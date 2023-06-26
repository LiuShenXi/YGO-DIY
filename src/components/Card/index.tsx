import Image from "next/image";
import card from "./card.png";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
import styles from "./index.module.scss";
import classnames from 'classnames';
import CloseIcon from '@mui/icons-material/Close';

const Card = () => {
  const [show, setShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [rating, setRating] = useState('')

  const rateArr = [1,2,3,4,5,6,7,8,9,10]

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const onSubmit = () => {
    setShowLoading(true)
    console.log('rating: ', rating)
  }

  const handleRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('value: ', e.target.value)
    setRating(e.target.value)
  }

  setTimeout(() => {
    setShow(true);
  }, 2000);
  return (
    <div >
      {show ? (
        <div>
          <Image
            src={card}
            alt="Picture of the author"
            width={210}
            onClick={handleImageClick}
           
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

      {/* 蒙板 */}
      {showOverlay && (
        <div className={styles.overlay}>
          <CloseIcon className={styles.close} onClick={handleCloseOverlay} />
          <div className={styles.leftContent}>
            <Image src={card} alt="Image" className={styles.overlayImage} />
          </div>
          <div className={styles.rightContent}>
            <div>
              <p className={styles.rate}>评分：9.8</p>
            </div>
            <div style={{ color: '#000' }} className={styles.select}>
              <select className="select w-full max-w-xs" onChange={handleRating}>
                <option disabled selected>请评分</option>
                {rateArr.map(item => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
            <button className={classnames('btn', 'btn-neutral', styles.submit)} onClick={onSubmit}>
              {showLoading ? <span className="loading loading-spinner"></span> : null}
              提交
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
