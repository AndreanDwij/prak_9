import Link from "next/link";
import { posts } from "../../../data/posts";

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Artikel tidak ditemukan yahaha</h2>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            Kembali ke Daftar 
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>{post.author}</span>
            <span>•</span>
            <time>{post.date}</time>
          </div>
        </header>

        <div className="prose max-w-none mb-8 text-gray-700 leading-relaxed">
          {post.content}
        </div>

        <Link 
          href="/blog" 
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Kembali ke Daftar
        </Link>
      </div>
    </div>
  );
}
