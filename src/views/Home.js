import React, { Fragment } from "react";

const Home = () => {
    return (
        <div className="margin-auto-block">
            <p>This is a toy project. We only store location information as displayed on Twitter, of the people you follow.</p>
            <p>You can see <a href="/heatmap">a world map</a> displaying locations of the people you follow.</p>
            <p>There's a blog post about how the project was built on <a href="https://blog.selcukcihan.com">SITE</a>.</p>
            <p>Both <a href="https://github.com/selcukcihan/twheat-map">frontend</a>
                &nbsp;and <a href="https://github.com/selcukcihan/twheat-map-backend">backend</a>
                &nbsp;repositories are both public.
            </p>
        </div>
    );
};

export default Home;
