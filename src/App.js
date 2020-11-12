import './App.css';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from './index'

function App() {

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="App">
      {data.launchesPast.map(({ details, links, rocket, launch_success, launch_date_utc, id }) => (
        <div key={id}>
          <p>{rocket.rocket_name}</p>
          <p>{details}</p>
          <p>launch success : {launch_success ? 'Yes' : 'No'}</p>
          <p>launch date : {launch_date_utc}</p>
          <a href={links.video_link}>video link</a>
        </div>
      ))}
    </div>
  );
}

export default App;
