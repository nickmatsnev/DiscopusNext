import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '../../components/navigation/Link';
import TextareaAutosize from '@mui/base/TextareaAutosize';



export default function SimpleAccordion() {
    return (
                <Card sx={{
                    alignItems: "center",
                    justifyContent: "center"
                }} >
                    <CardContent >
                        <Typography style={{textAlign: "center"}} variant="h5" component="div">
                            Опишите вашу проблему
                        </Typography>
                        
                    </CardContent>
                    <CardActions sx={{
                        alignItems: "center",
                        justifyContent: "center"
                    }} >
                        <TextareaAutosize
                            aria-label="problem"
                            minRows={10}
                            placeholder="Ваша проблема"
                            style={{ width: 600 }}
                        />
                    </CardActions>
                    
                    <CardActions sx={{
                        alignItems: "center",
                        justifyContent: "center"
                    }} >
                       <Link href="/help/answers" passHref><Button color="primary" sx={{ minWidth: '50%' }}>Отправить</Button></Link>
                    </CardActions>
                </Card>
    );
}