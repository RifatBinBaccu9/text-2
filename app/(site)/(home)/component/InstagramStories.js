"use client";
import InstSrorCard from "./InstSrorCard";

const stories = [
  {
    image: "/InstagramStories/image1.png",
    InstagramLink: "https://www.instagram.com/"
  },
  {
    image: "/InstagramStories/image2.png",
    InstagramLink: "https://www.instagram.com/"
  },
  {
    image: "/InstagramStories/image3.png",
    InstagramLink: "https://www.instagram.com/"
  },
  {
    image: "/InstagramStories/image4.png",
    InstagramLink: "https://www.instagram.com/"
  }
];

const InstagramStories = () => {
  return (
    <section className="container mt-[50px] md:mt-[100px] px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-textNormal mb-5 md:mb-10">
        Our Instagram Stories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {stories.map((story, idx) => (
          <InstSrorCard key={idx} instStories={story} />
        ))}
      </div>
    </section>
  );
};

export default InstagramStories;
