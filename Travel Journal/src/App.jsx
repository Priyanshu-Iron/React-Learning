import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

// Data
import data from './data'

function Page() {

  const TavelJournalElement = data.map((entry)=>{
    return (<Entry
      key = {entry.id}
      {...entry}
    />)
  })

  return (
    <>
      <Header />
      <main className='container'>
        {TavelJournalElement}
      </main>
    </>
  )
}

export default Page
