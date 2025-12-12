// Blog post metadata
// Add new blog posts here with their metadata

export const blogPosts = [
//   {
//     id: 1,
//     slug: "welcome-to-my-blog",
//     title: "Welcome to My Blog!",
//     date: "2025-12-08",
//     excerpt: "This is my first blog post. I'm excited to share my thoughts, research insights, and experiences here.",
//     author: "Jenny Ma",
//   },
  {
    id: 2,
    slug: "the-four-agent-behaviors",
    title: "The 4 Agent Behaviors that cause Vibe-Coding Failures",
    date: "2025-12-08",
    excerpt: "After vibe-coding with Cline, I isolated 4 recurring agent behaviors behind most vibe-coding failures...",
    author: "Jenny Ma",
  },
  // Add more blog posts here as you create them
];

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// Helper function to get all blog posts sorted by date (newest first)
export const getAllBlogPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};
