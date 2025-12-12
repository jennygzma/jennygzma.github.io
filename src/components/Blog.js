import React from "react";
import { Stack, Typography, Box, Button, Divider } from "@mui/material";
import { getAllBlogPosts } from "../blog/blogData";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Blog() {
  const navigate = useNavigate();
  const blogPosts = getAllBlogPosts();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="blog">
      <Stack
        spacing="30px"
        sx={{
          mx: { xs: "5%", sm: "8%", md: "12%", lg: "15%" },
          maxWidth: "100%",
          paddingBottom: "50px",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <Header />
        <Stack
          spacing="30px"
          sx={{
            width: "100%",
            maxWidth: "900px",
            alignItems: "flex-start",
          }}
        >

          <Typography variant="h4" sx={{ alignSelf: "flex-start" }}>
            blog
          </Typography>

          <Typography variant="body1" sx={{ alignSelf: "flex-start", mt: -2 }}>
            here i'll share my research thoughts :)
          </Typography>

          <Stack spacing="0" sx={{ width: "100%" }}>
            {blogPosts.length === 0 ? (
              <Typography variant="body1">
                No blog posts yet. Check back soon!
              </Typography>
            ) : (
              blogPosts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <Box
                    sx={{
                      cursor: "pointer",
                      padding: "20px 0",
                    }}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    <Stack spacing="10px">
                      <Typography variant="h6" sx={{ color: "#6dad85" }}>
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#666", fontStyle: "italic" }}
                      >
                        {formatDate(post.date)} • {post.author}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        <Typography
                          className="link"
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: "600",
                          }}
                        >
                          Read more →
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  {index < blogPosts.length - 1 && <Divider />}
                </React.Fragment>
              ))
            )}
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
}
