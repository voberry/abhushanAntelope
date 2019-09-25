import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: "# of Trips",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 134,159,0.4)",
                "rgba(98,  182, 239,0.4)",
                "rgba(255, 218, 128,0.4)",
                "rgba(113, 205, 205,0.4)",
                "rgba(170, 128, 252,0.4)",
                "rgba(255, 177, 101,0.4)"
            ],
            borderWidth: 2,
            borderColor: [
                "rgba(255, 134, 159, 1)",
                "rgba(98,  182, 239, 1)",
                "rgba(255, 218, 128, 1)",
                "rgba(113, 205, 205, 1)",
                "rgba(170, 128, 252, 1)",
                "rgba(255, 177, 101, 1)"
            ]
        }
    ]
};


class ChartsPage extends React.Component {

    chartReference = {};

    componentDidMount() {
    }

    render() {
        return (
                <HorizontalBar ref={(reference) => this.chartReference = reference } data={data}/>
        );
    }
}

export default ChartsPage;