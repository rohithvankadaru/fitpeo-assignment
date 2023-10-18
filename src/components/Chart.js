import { Bar } from "./Bar";


export const Chart = () => {

    return (
        <div className="chart-container">
            <div className="flex justify-between">
                <div>
                    <h3>Overview</h3>
                    <p className="monthely-earning">Monthely Earning</p>
                </div>
                <p className="quarterly flex align-center justify-between">
                    Quarterly <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 512 512" fill='grey'><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                </p>
            </div>
            <div className="chart  flex justify-evenly">
                <Bar height='130px' month='Jan' />
                <Bar height='90px' month='Feb' />
                <Bar height='160px' month='Mar' />
                <Bar height='120px' month='Apr' />
                <Bar height='160px' month='May' />
                <Bar height='100px' month='Jun' />
                <Bar height='170px' month='Jul' />
                <Bar height='200px' month='Aug' color='#6461f5' />
                <Bar height='170px' month='Sep' />
                <Bar height='150px' month='Oct' />
                <Bar height='140px' month='Nov' />
                <Bar height='160px' month='Dec' />
            </div>
        </div>
    )
}