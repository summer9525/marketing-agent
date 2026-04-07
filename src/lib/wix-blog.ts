const API_KEY = import.meta.env.VITE_WIX_API_KEY;
const SITE_ID = import.meta.env.VITE_WIX_SITE_ID;
const BASE_URL = "/wix-api/blog/v3";

const headers: Record<string, string> = {
  Authorization: API_KEY,
  "wix-site-id": SITE_ID,
};

export interface WixBlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverMedia?: {
    image?: {
      url: string;
      width: number;
      height: number;
    };
  };
  media?: {
    wixMedia?: {
      image?: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  firstPublishedDate: string;
  richContent?: unknown;
  contentText?: string;
  categoryIds?: string[];
  tagIds?: string[];
}

interface ListPostsResponse {
  posts: WixBlogPost[];
  metaData?: {
    count: number;
    offset: number;
    total: number;
    hasNext?: boolean;
  };
  pagingMetadata?: {
    count: number;
    offset: number;
    total: number;
    hasNext?: boolean;
  };
}

export async function listPosts(limit = 12, offset = 0): Promise<ListPostsResponse> {
  const res = await fetch(
    `${BASE_URL}/posts?paging.limit=${limit}&paging.offset=${offset}&sort.fieldName=firstPublishedDate&sort.order=DESC`,
    { headers }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Wix API error ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data;
}

export async function getPostBySlug(slug: string): Promise<WixBlogPost | null> {
  // Step 1: Get post basic info by slug
  const res = await fetch(`${BASE_URL}/posts/slugs/${slug}`, { headers });
  if (!res.ok) {
    console.error("getPostBySlug failed:", res.status);
    return null;
  }
  const data = await res.json();
  const post = data.post ?? null;
  if (!post?.id) return null;

  // Step 2: Fetch full post with richContent first, fallback to contentText
  const richRes = await fetch(BASE_URL + "/posts/" + post.id + "?fieldsToInclude=RICH_CONTENT", { headers });
  if (richRes.ok) {
    const richData = await richRes.json();
    if (richData.post?.richContent) return richData.post;
  }

  const textRes = await fetch(BASE_URL + "/posts/" + post.id + "?fieldsToInclude=CONTENT_TEXT", { headers });
  if (textRes.ok) {
    const textData = await textRes.json();
    return textData.post ?? post;
  }

  return post;
}

export async function getRelatedPosts(postId: string, categoryIds: string[], limit = 4): Promise<WixBlogPost[]> {
  if (!categoryIds.length) return [];
  // Fetch recent posts from the same category
  const catId = categoryIds[0];
  const res = await fetch(
    `${BASE_URL}/posts?categoryIds=${catId}&paging.limit=${limit}&sort.fieldName=firstPublishedDate&sort.order=DESC`,
    { headers }
  );
  if (!res.ok) return [];
  const data = await res.json();
  // Filter out the current post
  return (data.posts || []).filter((p: WixBlogPost) => p.id !== postId).slice(0, 3);
}
