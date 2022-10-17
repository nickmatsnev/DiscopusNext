import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '../../components/navigation/Link';
import EmptyTextarea from '../../components/EmptyTextarea';


export default function SimpleAccordion() {
    return (
                <Card sx={{
                    alignItems: "center",
                    justifyContent: "center"
                }} >
                    <CardContent >
                        <Typography variant="h5" component="div">
                            Оставьте-с кляузу
                        </Typography>
                        
                    </CardContent>
                    <CardActions sx={{
                        alignItems: "center",
                        justifyContent: "center"
                    }} >
                        <EmptyTextarea/>
                    </CardActions>
                    
                    <CardActions sx={{
                        alignItems: "center",
                        justifyContent: "center"
                    }} >
                       <Link href="/help/answers" passHref><Button color="secondary" sx={{ minWidth: '50%' }}>отправить</Button></Link>
                    </CardActions>
                </Card>
    );
}