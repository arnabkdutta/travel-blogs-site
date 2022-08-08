import {Link} from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function SingleBlogPost(params) {
    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );

    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    const subTitle = () => {
        return <Link to='/blog-details' style={{textDecoration: 'none', color: 'black'}}>Subtitle</Link>
    }

    const carTitle = () => {
        return <Link to='/blog-details' style={{textDecoration: 'none', color: 'black'}}>Advanced Card</Link>
    }

    return (
        <div>
            <Card title={carTitle} subTitle={subTitle} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error !</p>
            </Card>
        </div>
    )
}

export default SingleBlogPost;