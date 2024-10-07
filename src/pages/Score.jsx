import React, { useEffect, useState } from "react";
import BgVideo from "../components/BgVideo";
import bgVideo from "../assets/intro_bg.mp4";
import Cards from "./Cards";
import Modal from "../components/Modal";

const Score = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
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

  if (loading) return <div>...loading</div>;
  // if (error) return <div>Error: {error}</div>;

  const sortedCardData = [...data].sort(
    (a, b) => b.currentScore - a.currentScore
  );

  const rankedCardData = sortedCardData.map((item, index) => ({
    ...item,
    rank: index < 3 ? index + 1 : null, // Only top three get ranks
  }));

  return (
    <>
      <div>
        <BgVideo videoSrc={bgVideo} loop={true} />
      </div>
      <div className="flex justify-center mx-auto">
        <div className="max-h-[99vh] w-full max-w-6xl justify-evenly overflow-y-auto no-scrollbar mt-10 p-4 bg-transparent rounded-lg shadow-lg container flex flex-row flex-wrap">
          {rankedCardData.map((item) => (
            <Cards
              onClick={() => openModal(item)} // Pass the item instead of userData
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
              name={item.name}
              currentScore={item.currentScore}
              previousScore={item.previousScore}
              completedCourses={item.completedCourses}
              rank={item.rank}
            />
          ))}
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            userData={selectedUser} // This will now have the correct user data
          />
        </div>
      </div>
    </>
  );
};

export default Score;
