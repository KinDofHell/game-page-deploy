import Banner from "@/components/shared/main/Banner";
import Breadcrumbs from "@/components/shared/main/Breadcrumbs";
import ArticleCard from "@/components/shared/main/ArticleCard";

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
      <section>
        <Banner />
      </section>
      <section className="mt-[46px] flex items-start px-[20px] xl:px-0">
        <div className="flex flex-col">
          <Breadcrumbs linksArr={linksArr} />
          <article>
            <h1 className="bg-gradient-blue text-gradient text-[42px] font-bold">
              Lorem Ipsum is simply dummy
            </h1>
            <p className="text-[20px] text-text-gray">
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
            <h2 className="text-xl font-bold text-text-gray mb-5">
              Similar Articles
            </h2>
            <div className="flex flex-wrap gap-5">
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
        <div className="relative ml-[60px] rounded-[20px] bg-gradient-red">
          <img
            src="/images/ads.png"
            alt="promoted"
            className="min-w-[300px] h-[600px]"
          />
          <div className="text-white absolute left-0 top-0 rounded-[20px] min-w-[300px] h-[600px] flex flex-col justify-center items-center">
            <span className="text-[60px] font-bold">ADS</span>
            <span className="text-[40px] font-bold">300x600</span>
          </div>
        </div>
      </section>
    </>
  );
}
