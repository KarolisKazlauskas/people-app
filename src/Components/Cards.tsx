import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

const Cards = (props: any) => {
    const columns = [

        {
            dataField: "name",
            text: "Name",
        },
        {
            dataField: "height",
            text: "height",
        },
        {
            dataField: "mass",
            text: "mass",
        },
        {
            dataField: "hair_color",
            text: " hair color",
        },
        {
            dataField: "skin_color",
            text: "Skin color",
        },
        {
            dataField: "eye_color",
            text: "eye color",
        },
        {
            dataField: "birth_year",
            text: "birth year",
        },
        {
            dataField: "gender",
            text: "gender",
        },
        {
            dataField: "movies",
            text: "movies",
        }
    ];

   if (props.userData.results === undefined || !props.userData.results) {
    return (<></>);
   } else {
    return <BootstrapTable keyField='name' data={ props.userData.results } columns={ columns } />;
   }

};

export default Cards;
