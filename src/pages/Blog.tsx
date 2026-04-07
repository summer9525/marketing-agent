import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { listPosts, type WixBlogPost } from "@/lib/wix-blog";

const POSTS_PER_PAGE = 12;

const Blog = () => {
  const [posts, setPosts] = useState<WixBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    listPosts(POSTS_PER_PAGE, offset)
      .then((data) => {
        setPosts(data.posts || []);
        const paging: { total?: number; hasNext?: boolean } = data.pagingMetadata || data.metaData || {};
        const totalCount = paging.total ?? data.posts?.length ?? 0;
        setTotal(totalCount);
        setHasNext(paging.hasNext ?? (offset + POSTS_PER_PAGE < totalCount));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [offset]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h1
            className="text-heading1 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-body1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            아이지에이웍스의 인사이트와 소식을 전합니다.
          </motion.p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto px-6">

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card animate-pulse">
                  <div className="aspect-video bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="text-body2 mb-4">블로그를 불러오는 중 문제가 발생했습니다.</p>
              <p className="text-caption text-muted-foreground">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {posts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      {(post.coverMedia?.image?.url || post.media?.wixMedia?.image?.url) && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.coverMedia?.image?.url || post.media?.wixMedia?.image?.url}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 md:p-7 flex-1 flex flex-col">
                        <h3 className="text-[16px] md:text-[18px] font-bold text-heading mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-body2 line-clamp-2 mb-3">{post.excerpt}</p>
                        )}
                        <p className="text-caption text-muted-foreground mt-auto pt-2">
                          {formatDate(post.firstPublishedDate)}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <button
                  onClick={() => setOffset(Math.max(0, offset - POSTS_PER_PAGE))}
                  disabled={offset === 0}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-[14px] font-medium disabled:opacity-30 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  이전
                </button>
                <span className="text-body2">
                  {Math.floor(offset / POSTS_PER_PAGE) + 1} / {Math.ceil(total / POSTS_PER_PAGE)}
                </span>
                <button
                  onClick={() => setOffset(offset + POSTS_PER_PAGE)}
                  disabled={!hasNext}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-[14px] font-medium disabled:opacity-30 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  다음
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
