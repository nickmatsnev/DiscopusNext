import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from '../../components/navigation/Footer';
import { Box, Container } from '@mui/material';
import Header from '../../components/navigation/Header';
import Link from '../../components/navigation/Link';
import EmptyTextarea from '../../components/emptyTextarea';


export default function SimpleAccordion() {
    return (
        <Container>
            <Header />
            <Box mt={6}
                ml={3}
                mr={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '90vh'
                }}>
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
            </Box>
            <Footer />
        
        </Container>
    );
}