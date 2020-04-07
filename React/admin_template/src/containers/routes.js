import Cards from '../pages/Cards';
import Forms from '../pages/Forms';
import Charts from '../pages/Charts';
import Dashboard from '../pages/Dashboard';
import DataTables from '../pages/DataTables';


const LoadingRoutes  = () => ([
    {
        path: "/dashboard",
        name: "Dashboard",
        template: Dashboard
    },
    {
        path: "/cards",
        name: "Cards",
        template: Cards
    },
    {
        path: "/forms",
        name: "Forms",
        template: Forms
    },
    {
        path: "/charts",
        name: "Charts",
        template: Charts
    },
    {
        path: "/datatables",
        name: "DataTables",
        template: DataTables
    },
]);

export default LoadingRoutes();