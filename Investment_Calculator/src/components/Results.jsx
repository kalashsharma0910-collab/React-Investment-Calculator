import { formatter } from '../util/investment';

export default function Results({ result }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th className="center">Year</th>
                    <th className="center">Investment Value</th>
                    <th className="center">Interest</th>
                    <th className="center">Value at End of Year</th>
                    <th className="center">Annual Investment</th>
                </tr>
            </thead>

            <tbody>
                {result.map((item) => (
                    <tr key={item.year}>
                        <td className="center">{item.year}</td>
                        <td className="center">{formatter.format(item.investmentValue)}</td>
                        <td className="center">{formatter.format(item.interest)}</td>
                        <td className="center">{formatter.format(item.valueEndOfYear)}</td>
                        <td className="center">{formatter.format(item.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}