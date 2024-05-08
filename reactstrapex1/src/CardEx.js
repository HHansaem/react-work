import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, CardImg } from 'reactstrap';

  const CardEx = () => {
    return(
        <div style={{width:'300px', height:'500px'}}>
            <Card>
                <CardHeader>검은고양이</CardHeader>
                <CardImg top width="100%" src="cat2.jpg" alt="Card image cap" />
                <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
      </div>
    )
  }

  export default CardEx;