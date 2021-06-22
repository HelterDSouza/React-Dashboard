import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import "./home.css"
import { userData } from '../../dataExample'
import WidgetSmall from '../../components/widgetsSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetsLarge/WidgetLarge'
const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
