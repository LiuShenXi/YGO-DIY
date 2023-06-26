import Menu from '@/components/Menu'
import Card from '@/components/Card'
import styles from './index.module.scss'
import classnames from 'classnames'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import card from "./card.png";

export default function MyCards() {
  const [duckName, useDeckName] = useState('E-Hero')
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

  return (
    <div className={classnames('root-content',styles.cardWp)}>
      <div>
        <Menu></Menu>
      </div>
      <div className={classnames(styles.Waterfall, 'container', 'mx-auto')}>
        <p className={styles.deckName}>{duckName}</p>
        <Card onClick={handleImageClick} />
      </div>

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
}