import Image from 'next/image'
import card from './card.png'

const Card = () => {

  return (<div>
    <div>
    <Image
      src={card}
      alt="Picture of the author"
      width={200}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </div>
  </div>)
}

export default Card