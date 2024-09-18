import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yonghyun's Tech Blog
      </h1>
      <p className="mb-4">{`변화를 즐기는 개발자, 김용현입니다.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
