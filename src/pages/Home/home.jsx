import React from "react";
import Banner from "../../components/Banner/banner";
import WorkSection from "../../components/WorkSection/workSection";
import OurServices from "../../components/Services/services";
import Promises from "../../components/Promises/promise";
import PriceList from "../../components/PriceList/price-list";

const HomePage = () => {
    return (
        <>
            <Banner />
            <WorkSection />
            <Promises />
            <OurServices />
            <PriceList />
        </>
    )
}

export default HomePage;