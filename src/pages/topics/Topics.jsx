import React from "react";
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";
import { PageTitle } from "components/layout-components";
import TopicsNews from "components/modules/topics/TopicsNews";

const Topics = () => {
    return (
        <>
            <PageTitle
                titleHeading="Topics News"
                titleDescription="See the topics news on this page"
            ></PageTitle>

            <TopicsNews />
        </>
    );
};

export default compose(
    withLayout("leftsidebar"))(Topics)