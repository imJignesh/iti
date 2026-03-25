import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ posts = [] }) => {
    return (
        <SharedBlog showInnerStyles={true}
            title="Explore Expert Insights, Study Tips, & Success Stories"
            posts={posts}
        />
    );
};

export default Blog;