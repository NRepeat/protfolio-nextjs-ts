import HomePageStyle from "./HomePageStyle.module.scss"
export default function Home() {
  return (
    <>
      <div className={HomePageStyle.cardMenuWrapper}>
        <div className={HomePageStyle.cardContainer}>
          <div className={HomePageStyle.cardWrapper}>
            <div className={HomePageStyle.card1} >Генератор паролей</div>
            <div className={HomePageStyle.card2} >Калькулятор</div>
            <div className={HomePageStyle.card3} >Конвертер </div>
            <div className={HomePageStyle.card4} >Профиль</div>
            <div className={HomePageStyle.card5} ><section className={HomePageStyle.title}>Weather</section></div>
            <div className={HomePageStyle.card6} >Календарь</div>
            <div className={HomePageStyle.card7} >Карти</div>
            <div className={HomePageStyle.card8} >Карти</div>
            <div className={HomePageStyle.card9} >Карти</div>

          </div>
        </div>
      </div>
    </>
  )
}
