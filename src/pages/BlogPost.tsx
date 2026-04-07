import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts, type WixBlogPost } from "@/lib/wix-blog";

/* eslint-disable @typescript-eslint/no-explicit-any */
function _isSep(n: any) { return n.type === "TEXT" && (n.textData?.text || "").trim() === "" && (n.textData?.text || "").includes("\n"); }
function _splitP(kids: any[]): any[][] { const g: any[][] = []; let c: any[] = []; for (const k of kids) { if (_isSep(k)) { if (c.length) g.push(c); c = []; g.push([]); } else { c.push(k); } } if (c.length) g.push(c); return g; }
function _imgUrl(s: any) { return s?.url || (s?.id ? "https://static.wixstatic.com/media/" + s.id : null); }
function _deco(t: string, ds: any[]) { if (!ds?.length) return t; let n: React.ReactNode = t; for (const d of ds) { if (d.type === "BOLD" || (d.fontWeightValue && d.fontWeightValue >= 700)) n = <strong>{n}</strong>; if (d.type === "ITALIC") n = <em>{n}</em>; if (d.type === "UNDERLINE") n = <span className="underline">{n}</span>; if (d.type === "LINK" && d.linkData?.link?.url) n = <a href={d.linkData.link.url} target="_blank" rel="noopener noreferrer" className="text-[hsl(225,90%,58%)] underline">{n}</a>; } return n; }
let _ic = false;
function _r(node: any, i: number): React.ReactNode {
  const k = node.id || "n" + i;
  const ch = () => (node.nodes || []).map((c: any, j: number) => _r(c, j));
  const al = (a?: string) => a === "CENTER" ? "text-center" : a === "RIGHT" ? "text-right" : "";
  switch (node.type) {
    case "HEADING": { const lv = node.headingData?.level || 2; const c = lv <= 2 ? "text-[24px] md:text-[28px] font-bold mt-10 mb-4" : "text-[20px] md:text-[22px] font-bold mt-8 mb-3"; return React.createElement("h" + Math.min(lv, 6), { key: k, className: c + " " + al(node.headingData?.textStyle?.textAlignment) }, ch()); }
    case "PARAGRAPH": { const kids = node.nodes || []; if (!kids.length) return _ic ? <br key={k} /> : <div key={k} className="h-4" />; if (_ic) { if (kids.some(_isSep)) { const groups = _splitP(kids); return <React.Fragment key={k}>{groups.map((g: any[], gi: number) => g.length === 0 ? <br key={k + "b" + gi} /> : <div key={k + "d" + gi} className="text-left">{g.map((n: any, ni: number) => _r(n, ni))}</div>)}</React.Fragment>; } return <div key={k} className="text-left">{ch()}</div>; } if (!kids.some(_isSep)) return <p key={k} className={"text-body1 leading-relaxed mb-4 " + al(node.paragraphData?.textStyle?.textAlignment)}>{ch()}</p>; const groups = _splitP(kids); const a = al(node.paragraphData?.textStyle?.textAlignment); return <React.Fragment key={k}>{groups.map((g: any[], gi: number) => g.length === 0 ? <div key={k + "s" + gi} className="h-4" /> : <p key={k + "p" + gi} className={"text-body1 leading-relaxed mb-4 " + a}>{g.map((n: any, ni: number) => _r(n, ni))}</p>)}</React.Fragment>; }
    case "TEXT": return <React.Fragment key={k}>{_deco(node.textData?.text || "", node.textData?.decorations || [])}</React.Fragment>;
    case "IMAGE": { const u = _imgUrl(node.imageData?.image?.src); return u ? <figure key={k} className="my-6"><img src={u} alt="" className="w-full rounded-xl" loading="lazy" /></figure> : null; }
    case "TABLE": { const rows = node.nodes || []; const isCTATable = rows.length === 1 && (rows[0].nodes || []).length === 2; if (isCTATable) { const cells = rows[0].nodes || []; const textCell = cells[0]; const btnCell = cells[1]; const textContent = (textCell.nodes || []).map((n: any, j: number) => _r(n, j)); const btnNodes = btnCell.nodes || []; let btnText = "자세히 보기"; let btnUrl = "#"; const findLink = (nodes: any[]): void => { for (const n of nodes) { if (n.type === "BUTTON" && n.buttonData) { if (n.buttonData.text) btnText = n.buttonData.text; if (n.buttonData.link?.url) btnUrl = n.buttonData.link.url; return; } if (n.textData?.text) btnText = n.textData.text.trim() || btnText; const decs = n.textData?.decorations || []; for (const d of decs) { if (d.type === "LINK" && d.linkData?.link?.url) btnUrl = d.linkData.link.url; } if (n.nodes?.length) findLink(n.nodes); } }; findLink(btnNodes); return <div key={k} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[hsl(210,40%,96%)] rounded-xl sm:rounded-2xl px-5 py-4 sm:px-8 sm:py-6 my-3"><div className="text-[14px] sm:text-[16px] text-[hsl(220,16%,22%)] leading-snug flex-1">{textContent}</div><a href={btnUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2.5 bg-[hsl(225,90%,58%)] text-white rounded-xl text-[13px] sm:text-[14px] font-medium hover:bg-[hsl(225,90%,52%)] transition-colors text-center">{btnText}</a></div>; } return <div key={k} className="my-6 overflow-x-auto"><table className="w-full border-collapse text-body2"><tbody>{rows.map((row: any, ri: number) => <tr key={row.id || "r" + ri}>{(row.nodes || []).map((cell: any, ci: number) => { const hdr = ri === 0; const Tag = hdr ? "th" as const : "td" as const; const prev = _ic; _ic = true; const ct = (cell.nodes || []).map((n: any, j: number) => _r(n, j)); _ic = prev; return <Tag key={cell.id || "c" + ri + ci} className={"border border-border px-4 py-3 align-top " + (hdr ? "bg-muted font-medium text-heading text-center" : "text-left")}>{ct}</Tag>; })}</tr>)}</tbody></table></div>; }
    case "BLOCKQUOTE": return <blockquote key={k} className="border-l-4 border-primary pl-5 my-6 text-body2 bg-accent rounded-r-xl py-4 pr-4">{ch()}</blockquote>;
    case "ORDERED_LIST": return <ol key={k} className="list-decimal pl-6 mb-4 space-y-2 text-body1">{ch()}</ol>;
    case "BULLETED_LIST": return <ul key={k} className="list-disc pl-6 mb-4 space-y-2 text-body1">{ch()}</ul>;
    case "LIST_ITEM": return <li key={k} className="leading-relaxed">{ch()}</li>;
    case "DIVIDER": return <hr key={k} className="my-8 border-border" />;
    case "BUTTON": return <div key={k} className="my-2"><a href={node.buttonData?.link?.url || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl text-[14px] font-medium">{node.buttonData?.text || "자세히 보기"}</a></div>;
    default: return node.nodes?.length ? <div key={k}>{ch()}</div> : null;
  }
}
function _isCTA(ns: any[], i: number) { return i + 1 < ns.length && ns[i].type === "PARAGRAPH" && ns[i].nodes?.length > 0 && ns[i + 1].type === "BUTTON"; }
function _isEmptyP(n: any) { return n.type === "PARAGRAPH" && (!n.nodes || n.nodes.length === 0); }
function RichBody({ content }: { content: any }) {
  if (!content?.nodes) return null;
  const ns = content.nodes;
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < ns.length) {
    // Skip empty paragraphs before CTA detection
    let lookAhead = i;
    while (lookAhead < ns.length && _isEmptyP(ns[lookAhead])) lookAhead++;
    if (_isCTA(ns, lookAhead)) {
      // Skip the empty paragraphs
      i = lookAhead;
      const cards: any[] = [];
      while (i < ns.length) {
        // Skip empty paragraphs between CTA pairs
        while (i < ns.length && _isEmptyP(ns[i])) i++;
        if (_isCTA(ns, i)) {
          cards.push({ text: ns[i], btn: ns[i + 1] });
          i += 2;
        } else break;
      }
      out.push(
        <div key={"cta" + out.length} className="space-y-3 my-10">
          {cards.map((c: any, ci: number) => (
            <div key={c.btn.id || "ct" + ci} className="flex items-center justify-between gap-4 bg-[hsl(210,40%,96%)] rounded-2xl px-6 py-5 md:px-8 md:py-6">
              <p className="text-[15px] md:text-[16px] text-[hsl(220,16%,22%)] leading-snug flex-1">
                {(c.text.nodes || []).map((n: any, j: number) => _r(n, j))}
              </p>
              <a href={c.btn.buttonData?.link?.url || "#"} target="_blank" rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 bg-[hsl(225,90%,58%)] text-white rounded-xl text-[14px] font-medium hover:bg-[hsl(225,90%,52%)] transition-colors">
                {c.btn.buttonData?.text || "자세히 보기"}
              </a>
            </div>
          ))}
        </div>
      );
    } else {
      out.push(_r(ns[i], out.length));
      i++;
    }
  }
  return <div>{out}</div>;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WixBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [recentPosts, setRecentPosts] = useState<WixBlogPost[]>([]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getPostBySlug(slug)
      .then((data) => {
        if (!data) setNotFound(true);
        else setPost(data);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!post?.id || !post?.categoryIds?.length) return;
    getRelatedPosts(post.id, post.categoryIds).then(setRecentPosts).catch(() => {});
  }, [post?.id]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-screen-lg mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-body2 hover:text-heading transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            블로그 목록
          </Link>

          {loading && (
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-2/3" />
              <div className="h-4 bg-muted rounded w-1/4" />
              <div className="aspect-video bg-muted rounded-xl" />
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            </div>
          )}

          {notFound && (
            <div className="text-center py-16">
              <p className="text-heading2 mb-4">글을 찾을 수 없습니다</p>
              <Link to="/blog" className="text-body2 underline">블로그 목록으로 돌아가기</Link>
            </div>
          )}

          {post && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-heading1 mb-4">{post.title}</h1>
              <p className="text-body2 text-muted-foreground mb-8">
                {formatDate(post.firstPublishedDate)}
              </p>

              {post.richContent ? (
                <RichBody content={post.richContent} />
              ) : post.contentText ? (
                <div className="text-body1 leading-relaxed whitespace-pre-line">
                  {post.contentText}
                </div>
              ) : null}
            </motion.article>
          )}
        </div>
      </section>

      {/* More articles */}
      {recentPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="max-w-screen-lg mx-auto px-6">
            <h2 className="text-heading2 mb-8 md:mb-12">함께 읽어보면 좋은 아티클</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {recentPosts.map((rp) => (
                <Link
                  key={rp.id}
                  to={"/blog/" + rp.slug}
                  className="bg-background rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {(rp.coverMedia?.image?.url || rp.media?.wixMedia?.image?.url) && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={rp.coverMedia?.image?.url || rp.media?.wixMedia?.image?.url}
                        alt={rp.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-[15px] md:text-[16px] font-bold text-heading mb-2 line-clamp-2">{rp.title}</h3>
                    <p className="text-caption text-muted-foreground mt-auto pt-2">
                      {formatDate(rp.firstPublishedDate)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/blog"
                className="text-body2 text-muted-foreground hover:text-heading transition-colors underline underline-offset-4"
              >
                블로그 전체 보기
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
