import React, { useEffect, useState } from 'react'
import BgVideo from '../components/BgVideo'
import bgVideo from '../assets/intro_bg.mp4'
import Cards from '../components/Cards';

const Score = () => {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const sortedCardData = [...data].sort((a, b) => b.score_count - a.score_count);

  const rankedCardData = sortedCardData.map((item, index) => ({
    ...item,
    rank: index < 3 ? index + 1 : null // Only top three get ranks
  }));
  return (
    <>
      <div>
        <BgVideo videoSrc={bgVideo} loop={true} />
      </div>
      <div className="card-container">
      {rankedCardData.map(item => (
        <Cards key={item.id} id={item.emp_id} prev_team={item.prev_team} body={item.body} image={item.image} name={item.name} score_count={item.score_count} rank={item.rank} pre_score={item.pre_score}/>
      ))}
    </div>
    </>
  )

}

export default Score
