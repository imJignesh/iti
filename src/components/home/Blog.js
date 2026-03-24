import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ locoScroll }) => {
    return (
        <SharedBlog showInnerStyles={true}
            title="Explore Expert Insights, Study Tips, & Success Stories"
            locoScroll={locoScroll}
        />
    );
};

export default Blog;
