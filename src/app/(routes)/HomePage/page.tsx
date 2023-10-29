import HomePageStyle from "./HomePageStyle.module.scss"
export default function Home() {
  return (
    <>
      <div className={HomePageStyle.cardMenuWrapper}>
        <div className={HomePageStyle.cardContainer}>
          <div className={HomePageStyle.cardWrapper}>
            <div className={HomePageStyle.card} >Генератор паролей</div>
            <div className={HomePageStyle.card} >Калькулятор</div>
            <div className={HomePageStyle.card} >Конвертер </div>
            <div className={HomePageStyle.card} >Профиль</div>
            <div className={HomePageStyle.card} ><section className={HomePageStyle.title}>Weather</section></div>
            <div className={HomePageStyle.card} >Календарь</div>
            <div className={HomePageStyle.card} >Карти</div>
            <div className={HomePageStyle.card} >Карти</div>
            <div className={HomePageStyle.card} >Карти</div>

          </div>
        </div>
      </div>
    </>
  )
}
