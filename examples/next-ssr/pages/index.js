import styles from '../styles/Home.module.css'

export default function Home ({ countries }) {
  const response =  fetch('https://restcountries.com/v3.1/all')
  console.log(response)
  return (
    <div className={styles.container}>
      <div>Home</div>
      {countries.map(({ name, population }) => (
        <div key={name}>
          <span>name: {name}</span>
          <span>population: {population}</span>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps () {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  return {
    props: {
      countries: countries.map((country) => ({
        name: country.name.common,
        cca2: country.cca2,
        population: country.population
      }))
    }
  }
}
