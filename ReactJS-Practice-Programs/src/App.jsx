import './App.css'

function App() {

  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

  return (
    <div>
      <h1>Seasons of the year</h1>
      {seasons.map((season) => (
        <div>{season}</div>
      ))}
    </div>
  )
}

export default App
