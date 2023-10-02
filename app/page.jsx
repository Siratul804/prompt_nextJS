import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Create, Edit, Store And Find {""}
      <br className="max-md:hidden" />
      <span className=" text-center" style={{ color: "skyblue" }}>
        The Best Prompt by EZPrompt
      </span>
    </h1>
    <p className="desc text-center">
      EZPrompt is an open-source AI prompting tool for modern world to discover,
      create, edit, store and share creative prompts
    </p>
    <Feed />
  </section>
);

export default Home;
