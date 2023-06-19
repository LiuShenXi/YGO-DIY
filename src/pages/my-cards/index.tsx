import Menu from '@/components/Menu'
import Card from '@/components/Card'
import styles from './index.module.css'
import classnames from 'classnames'

export default function MyCards() {
  return (
    <div className={classnames('root-content',styles.cardWp)}>
      <div>
        <Menu></Menu>
      </div>
      <div className={classnames(styles.Waterfall, 'container', 'mx-auto', 'px-4')}>
        <Card />
      </div>
    </div>
  );
}