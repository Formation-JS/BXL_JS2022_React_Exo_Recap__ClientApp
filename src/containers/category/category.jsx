import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCategories } from '../../api/subject.api';
import CategoryCards from '../../components/category-cards/category-cards';


const Category = ({ onCategorySelected }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories()
            .then((result) => setData(result))
            .catch((result) => setError(result));
    }, []);


    return (
        <>
            {(!data && !error) ? (
                <p>Loading...</p>
            ) : (data) ?  (
                
                <CategoryCards categories={data} onCategorySelected={onCategorySelected}/>
            ) : (
                <p>les erreurs</p>
            )}
        </>
    );
};

export default Category;