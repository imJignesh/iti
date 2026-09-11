import React from "react";
import SharedBlog from "@/components/SharedBlog";

const Blog = ({ posts = [] }) => {
    return (
        <SharedBlog
            title="Explore Expert Insights, Study Tips, & Success Stories"
            posts={posts}
        />
    );
};

export default Blog;