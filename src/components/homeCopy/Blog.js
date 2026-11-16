import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ posts = [] }) => {
    return (
        <SharedBlog
            title="Study Tips, Exam Advice & Success Stories"
            posts={posts}
        />
    );
};

export default Blog;
