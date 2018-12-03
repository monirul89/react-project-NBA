import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

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

            <NewsList 
                type="card"
                loadmore={true}
                start={6}
                amount={6}
            />
        </div>
    )
}

export default Home;
