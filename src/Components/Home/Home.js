import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/NewsList';

const Home = ()=>{
    return(
        <div>
            <NewsSlider
            type="featured"
            start={0}
            amount={6}
            settings={{
                dots:true
            }}
            />

            <NewsList />
        </div>
    )
}

export default Home;
