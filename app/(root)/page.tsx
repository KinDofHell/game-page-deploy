import Banner from "@/components/shared/main/Banner";
import Breadcrumbs from "@/components/shared/main/Breadcrumbs";
import ArticleCard from "@/components/shared/main/ArticleCard";
import Ads from "@/components/shared/main/Ads";
import SocialPanel from "@/components/shared/main/SocialPanel";

export default function Home() {
  const linksArr = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Lorem Ipsum is",
      link: "/",
    },
    {
      label: " Lorem Ipsum is simply dummy",
      link: "/",
    },
  ];

  const articlesInfo = [
    {
      title: "Lorem Ipsum is simply dummy",
      author: "ALCO",
      date: "26 Janvier 2023",
    },
    {
      title: "Lorem Ipsum is simply dummy",
      author: "ALCO",
      date: "26 Janvier 2023",
    },
    {
      title: "Lorem Ipsum is simply dummy",
      author: "ALCO",
      date: "26 Janvier 2023",
    },
    {
      title: "Lorem Ipsum is simply dummy",
      author: "ALCO",
      date: "26 Janvier 2023",
    },
  ];

  return (
    <>
      <SocialPanel />
      <section>
        <Banner />
      </section>
      <section className="mt-[20px] md:mt-[46px] flex items-start px-[15px] md:px-[20px] xl:px-0">
        <div className="flex flex-col">
          <Breadcrumbs linksArr={linksArr} />
          <article>
            <h1 className="bg-gradient-blue text-gradient text-[35px] md:text-[42px] font-bold text-center md:text-left">
              Lorem Ipsum is simply dummy
            </h1>
            <p className="text-[20px] text-text-gray dark:text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>
          <div className="mt-[70px]">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-text-gray dark:text-white">
                Similar Articles
              </h2>
              <span className="inline-block bg-gradient-blue w-[43px] h-[8px] rounded-[20px]"></span>
            </div>
            <div className="flex flex-wrap gap-5 flex-col items-center md:flex-row">
              {articlesInfo?.map((article, index) => (
                <ArticleCard
                  title={article.title}
                  author={article.author}
                  date={article.date}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <Ads />
      </section>
    </>
  );
}
