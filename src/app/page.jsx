import Link from 'next/link';
import { posts } from '@/data/posts';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-10">
        <h1 className="text-4xl font-bold mb-4">
          SELAMAT DATANG 
        </h1>

        <p className="text-lg max-w-2xl mb-6">
          ini adalah sebuah tempat blog biasa dan simple ga bagus bagus amat ga jelek jelek amat tapi lumayan lah 
        </p>

        <Link
          href="/blog"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Lihat semua artikel →
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-3">artikel lainnya </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="border rounded-lg p-5 bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {post.title}
              </h3>

              <p className="text-sm text-gray-700 mb-3">
                {post.author} • {post.date}
              </p>

              <p className="text-gray-900 mb-4 line-clamp-3">
                {post.content}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 font-medium hover:text-blue-800 transition"
              >
                baca selengkapnya →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
