import React from "react";
import SingleBlogPost from "./singleBlog";

function Blogs(params) {
    const blogs = [1, 2, 3, 4, 5, 6 , 7]
    return (
        <React.Fragment>
            <div className="row ">
                <div className="col-lg-12">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="What do you want to search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">Search</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {blogs.map((ele) => {
                    return (
                        <div className="col-xl-2 col-lg-2 col-md-6 col-xm-1 col-sm-6 mt-3 mb-2" key={ele}>
                            <SingleBlogPost />
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Blogs;