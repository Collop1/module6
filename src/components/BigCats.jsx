import { useState } from 'react'
import SingleCat from './SingleCat.jsx';
import cheetahImg from '../assets/Cheetah.png';
import cougarImg from '../assets/Cougar.png';
import jaguarImg from '../assets/Jaguar.png';
import leopardImg from '../assets/Leopard.png';
import lionImg from '../assets/Lion.png';
import snowLeopardImg from '../assets/Snow leopard.png';
import tigerImg from '../assets/Tiger.png';

const initialCats = [ 
    { id: 1, name: 'Lion', latinName: 'Panthera leo', image: lionImg },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: cougarImg },
    { id: 3, name: 'Snow leopard', latinName: 'Panthera uncia', image: snowLeopardImg },
    { id: 4, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: cheetahImg },
    { id: 5, name: 'Tiger', latinName: 'Panthera tigris', image: tigerImg },
    { id: 6, name: 'Jaguar', latinName: 'Panthera onca', image: jaguarImg },
    { id: 7, name: 'Leopard', latinName: 'Panthera pardus', image: leopardImg }
]

function Sort({ onSortAlphabetically, onReverse }) {
    return (
        <div>
            <button onClick={onSortAlphabetically}>Sort Alphabetically</button>
            <button onClick={onReverse}>Reverse list</button>
        </div>
    );
}

function Filter({ isFiltered, onFilterToggle }) {
    return (
        <button onClick={onFilterToggle}>
            {isFiltered ? 'Show All' : 'Show Pantheras'}
        </button>
    );
}

// Combine sorting and filtering to one list
function EditedCats() {
    const [isFiltered, setIsFiltered] = useState(false);
    const [sortState, setSortState] = useState('none');
    const [displayedCats, setDisplayedCats] = useState(initialCats);
    
    const applyFilterAndSort = (cats, filterStatus, sortType) => {
        let result = [...cats];
        
        if (filterStatus) {
            result = result.filter(cat => cat.latinName.startsWith('Panthera'));
        }
        
        if (sortType === 'alphabetical') {
            result = result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortType === 'reverse') {
            result = result.sort((a, b) => a.name.localeCompare(b.name)).reverse();
        }
        
        return result;
    };
    
    const handleSortAlphabetically = () => {
        setSortState('alphabetical');
        setDisplayedCats(applyFilterAndSort(initialCats, isFiltered, 'alphabetical'));
    };
    
    const handleReverse = () => {
        setSortState('reverse');
        setDisplayedCats(applyFilterAndSort(initialCats, isFiltered, 'reverse'));
    };
    
    const handleFilterToggle = () => {
        const newFilterState = !isFiltered;
        setIsFiltered(newFilterState);
        setDisplayedCats(applyFilterAndSort(initialCats, newFilterState, sortState));
    };
    
    return (
        <div>
            <div className="controls">
                <Sort 
                    onSortAlphabetically={handleSortAlphabetically} 
                    onReverse={handleReverse} 
                />
                <Filter 
                    isFiltered={isFiltered} 
                    onFilterToggle={handleFilterToggle} 
                />
            </div>
            <div className="cats-container">
                {displayedCats.map((cat) => (
                    <SingleCat key={cat.id} cat={cat} />
                ))}
            </div>
        </div>
    );
}

export { initialCats, EditedCats };