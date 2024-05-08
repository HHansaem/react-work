import React from 'react';
import {Badge, Button} from 'reactstrap';

const BadgeEx = () => {
    return(
        <div>
            <Button color="primary" outline>
            Notifications <Badge color="secondary">4</Badge>
            </Button>
            <Badge href="http://naver.com" color="primary" pill>Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="light">Light</Badge>
            <Badge color="dark">Dark</Badge>
        </div>
    )
}

export default BadgeEx;