import ParamsContext from '../contexts/ParamsContext';
import Search from '../components/searchpage/Search';

export default function SearchPage() {

    return (
        <ParamsContext>
            <Search />
        </ParamsContext>
    )
}
