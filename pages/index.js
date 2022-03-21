import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Suggest from "../components/Suggest";

export default function Home({weather}) {

    console.log(weather)
  return (
    <div className={styles.container}>
      <Head>
        <title>Погода</title>
        <meta name="description" content="Погода" />
      </Head>

      <header className={styles.header}>
          <div className={styles.logo}>
              <span>Погода</span>
          </div>
          <div className={styles.suggest}>
              <Suggest />
          </div>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
            <div className={styles.temp}>8&deg;</div>
            <div className={styles.info}>
                <div className={styles.city}>London</div>
                <div className={styles.now_dt}>06.09 - Sunday</div>
            </div>
            <div className={styles.fact}>
                <div className={styles.icon}>
                    <img src="https://yastatic.net/weather/i/icons/funky/dark/ovc.svg" alt="icon"/>
                </div>
                <div className={styles.condition}>
                    <span>Rainy</span>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    const res = await fetch('https://api.weather.yandex.ru/v2/informers', {
        params: {
            lat: 50,
            lon: 50,
            lang: 'ru_RU'
        },
        headers: {
            'X-Yandex-API-Key': '5f82e867-4eeb-4602-9d10-0d7fd848065d'
        }
    })
    const weather = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            weather,
        },
    }
}
