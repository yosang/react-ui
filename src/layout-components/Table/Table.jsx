import './Table.css';
import '../../main.css'

export function Table({ columns, data, striped = false }) {
    return (
        <div className="ui-table-container">
            <table className={`ui-table ${striped ? 'ui-table-striped' : ''}`}>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.accessor}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col) => (
                                <td key={col.accessor}>{row[col.accessor]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}