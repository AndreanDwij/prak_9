import Link from 'next/link';
import { posts } from "@/data/posts";

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Daftar Artikel</h1>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 hover:text-blue-600">
              {post.title}
            </h2>
            <p className="text-gray-600 line-clamp-2 mb-3">{post.content}</p>
            <span className="text-blue-600 font-medium">Baca Selengkapnya →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
