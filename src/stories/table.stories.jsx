import { Table } from "../layout-components/Table/Table";

const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
];

const data = [
    { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'Editor' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'Viewer' },
];

export function ShowTable() {
    return (
        <div style={{ padding: '2rem' }}>
            <Table columns={columns} data={data} striped={true} />
        </div>
    );
}