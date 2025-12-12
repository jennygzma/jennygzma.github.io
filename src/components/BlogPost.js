import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography, Button, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug } from "../blog/blogData";
import Header from "./Header";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      setError("Blog post not found");
      setLoading(false);
      return;
    }

    // Load the markdown file
    import(`../blog/posts/${slug}.md`)
      .then((module) => {
        return fetch(module.default);
      })
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog post:", err);
        setError("Failed to load blog post");
        setLoading(false);
      });
  }, [slug, post]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          gap: 2,
        }}
      >
        <Typography variant="h5">Blog post not found</Typography>
        <Button disableRipple href="/#/blog">
          <Typography className="link">← back to blog</Typography>
        </Button>
      </Box>
    );
  }

  return (
    <section className="blog-post">
      <Stack
        spacing="30px"
        sx={{
          mx: { xs: "5%", sm: "8%", md: "12%", lg: "15%" },
          maxWidth: "100%",
          paddingBottom: "100px",
        }}
      >
        <Header />
        <Stack
          spacing="30px"
          sx={{
            width: { xs: "90%", sm: "85%", md: "70%" },
            maxWidth: "900px",
            alignSelf: "center",
          }}
        >
          {/* Title and metadata */}
          <Stack spacing="15px">
            <Typography
              variant="h4"
              sx={{
                color: "#6dad85",
                fontWeight: "600",
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontStyle: "italic",
              }}
            >
              {formatDate(post.date)} • {post.author}
            </Typography>
          </Stack>

          {/* Blog content */}
          <Box
            sx={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              "& h1": {
                color: "#6dad85",
                fontWeight: "600",
                fontSize: "2rem",
                marginTop: "40px",
                marginBottom: "20px",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              },
              "& h2": {
                color: "#6dad85",
                fontWeight: "600",
                fontSize: "1.5rem",
                marginTop: "35px",
                marginBottom: "15px",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              },
              "& h3": {
                color: "#6dad85",
                fontWeight: "600",
                fontSize: "1.2rem",
                marginTop: "30px",
                marginBottom: "10px",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              },
              "& p": {
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "20px",
                color: "#333",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              },
              "& ul, & ol": {
                marginLeft: "30px",
                marginBottom: "20px",
                "& li": {
                  marginBottom: "10px",
                  lineHeight: "1.8",
                },
              },
              "& a": {
                color: "#6dad85",
                textDecoration: "none",
                fontWeight: "550",
                "&:hover": {
                  color: "#498f63",
                },
              },
              "& img": {
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                margin: "30px 0",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              },
              "& code": {
                backgroundColor: "#f5f5f5",
                padding: "2px 6px",
                borderRadius: "3px",
                fontFamily: "monospace",
                fontSize: "0.9em",
              },
              "& pre": {
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "4px",
                overflow: "auto",
                marginBottom: "20px",
                "& code": {
                  backgroundColor: "transparent",
                  padding: "0",
                },
              },
              "& blockquote": {
                borderLeft: "4px solid #6dad85",
                paddingLeft: "20px",
                marginLeft: "0",
                color: "#666",
                fontStyle: "italic",
              },
              "& hr": {
                border: "none",
                borderTop: "2px solid #6dad85",
                margin: "40px 0",
              },
            }}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </Box>

          {/* Back to blog button at bottom */}
          <Box sx={{ paddingTop: "20px" }}>
            <Button disableRipple href="/#/blog">
              <Typography className="link">← back to blog</Typography>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
