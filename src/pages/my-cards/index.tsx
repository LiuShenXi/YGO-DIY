import Menu from '@/components/Menu'
import Card from '@/components/Card'
import styles from './index.module.css'
import classnames from 'classnames'
import { useState } from 'react'

export default function MyCards() {
  const [duckName, useDeckName] = useState('E-Hero')
  return (
    <div className={classnames('root-content',styles.cardWp)}>
      <div>
        <Menu></Menu>
      </div>
      <div className={classnames(styles.Waterfall, 'container', 'mx-auto')}>
        <p className={styles.deckName}>{duckName}</p>
        <Card />
      </div>
    </div>
  );
}