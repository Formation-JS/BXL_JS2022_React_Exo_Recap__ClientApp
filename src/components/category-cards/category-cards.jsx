import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';


const CategoryCards = ({ categories, onCategorySelected }) => {

    return (

        <Stack direction='row' sx={{ maxWidth: '100%', flexWrap: 'wrap' }}>
            {categories.map(categorie => (
                <Card sx={{ maxWidth: 175, minWidth: 150, margin: 1 }} key={categorie.id}>
                    <CardMedia
                        sx={{ height: 140, backgroundSize:'contain'}}
                        image= {categorie.image}
                        title={categorie.name}

                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            {categorie.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {categorie.count} messages
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Dernier message : {categorie.lastUpdate.toLocaleString()}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => onCategorySelected(categorie)} size="small">Voir les messages</Button>
                    </CardActions>
                </Card>
            ))}
        </Stack>
    );
};

export default CategoryCards;