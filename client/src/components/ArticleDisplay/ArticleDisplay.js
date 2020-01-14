import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ArticleForm = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle name={title} >{title}</CardTitle>
          <CardText name="words">{words}</CardText>
          <Button name="saveMe" onClick={saveMe}>Save For Later</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ArticleForm;