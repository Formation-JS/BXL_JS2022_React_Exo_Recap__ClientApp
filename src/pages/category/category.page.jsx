import { Typography } from '@mui/material';
import Category from '../../containers/category/category';

const CategoryPage = ({onCategorySelected}) => {



    return (
        <>
            <Typography variant='h4' component='h1' >
                Categories :
            </Typography>
            <Category onCategorySelected={onCategorySelected} />
        </>
    );
};

export default CategoryPage;